import { Segment } from 'yunzai'
import { Messages } from 'yunzai'
const message = new Messages('notice.group.increase')
message.use(async e => {
  /** 定义入群欢迎内容 */
  let msg = '欢迎新人！'
  /** 冷却cd 30s */
  let cd = 30
  if (e.user_id == e.bot.uin) return
  /** cd */
  let key = `Yz:newcomers:${e.group_id}`
  if (await redis.get(key)) return
  redis.set(key, '1', { EX: cd })
  /** 回复 */
  await e.reply([Segment.at(e.user_id), msg])
})
export const newcomer = message.ok

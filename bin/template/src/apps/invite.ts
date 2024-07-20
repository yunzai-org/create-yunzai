import { ConfigController as cfg } from 'yunzai'
import { Messages } from 'yunzai'
const message = new Messages('request.group.invite')
message.use(async e => {
  if (!e.isGroup) return
  if (!cfg.masterQQ || !cfg.masterQQ.includes(String(e.user_id))) {
    logger.mark(`[邀请加群]：${e.group_name}：${e.group_id}`)
    return
  }
  logger.mark(`[主人邀请加群]：${e.group_name}：${e.group_id}`)
  e.approve(true)
  e.bot.sendPrivateMsg(e.user_id, `已同意加群：${e.group_name}`).catch(err => {
    logger.error(err)
  })
})
export const invite = message.ok

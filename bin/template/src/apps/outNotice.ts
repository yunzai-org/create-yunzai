import { Messages } from 'yunzai'
const message = new Messages('notice.group.decrease')
const tips = '退群了'
message.use(async e => {
  if (e.user_id == e.bot.uin) return
  let name = null,
    msg = null
  if (e.member) {
    name = e.member.card || e.member.nickname
  }
  if (name) {
    msg = `${name}(${e.user_id}) ${tips}`
  } else {
    msg = `${e.user_id} ${tips}`
  }
  logger.mark(`[退出通知]${e.logText} ${msg}`)
  await e.reply(msg)
})
export const outNotice = message.ok

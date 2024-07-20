import { ConfigController as cfg, Messages } from 'yunzai'
const messsage = new Messages('notice.group.increase')
messsage.use(async e => {
  if (e.user_id != e.bot.uin) return
  let other = cfg.other
  if (other.autoQuit <= 0) return
  /**
   * 判断主人，主人邀请不退群
   */
  let gl = await e.group.getMemberMap()
  for (let qq of cfg.masterQQ) {
    if (gl.has(Number(qq))) {
      logger.mark(`[主人拉群] ${e.group_id}`)
      return
    }
  }
  /**
   * 自动退群
   */
  if (Array.from(gl).length <= other.autoQuit && !e.group.is_owner) {
    e.reply('禁止拉群，已自动退出')
    logger.mark(`[自动退群] ${e.group_id}`)
    setTimeout(() => {
      e.group.quit()
    }, 2000)
  }
})
/**
 *
 */
export const quit = messsage.ok

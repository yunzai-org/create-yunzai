import { ConfigController as cfg, Messages } from 'yunzai'
import { sleep } from 'yunzai'
const message = new Messages('request.friend')
message.use(async e => {
  if (e.sub_type == 'add' || e.sub_type == 'single') {
    if (cfg.other.autoFriend == 1) {
      logger.mark(`[自动同意][添加好友] ${e.user_id}`)
      await sleep(2000)
      e.approve(true)
    }
  }
})
export const friend = message.ok

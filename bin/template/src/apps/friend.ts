import { ConfigController as cfg } from 'yunzai'
import { sleep } from 'yunzai'
import { Plugin } from 'yunzai'
/**
 *
 */
export class friend extends Plugin {
  /**
   *
   */
  constructor() {
    /**
     * 
      name: 'autoFriend',
      dsc: '自动同意好友',
     */
    super()
    this.event = 'request.friend'
  }
  /**
   *
   */
  async accept() {
    /**
     *
     */
    if (this.e.sub_type == 'add' || this.e.sub_type == 'single') {
      /**
       *
       */
      if (cfg.other.autoFriend == 1) {
        logger.mark(`[自动同意][添加好友] ${this.e.user_id}`)
        await sleep(2000)
        this.e.approve(true)
      }
    }
  }
}

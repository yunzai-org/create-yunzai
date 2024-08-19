import { Messages, Segment } from 'yunzai'
import { Screenshot } from '../image/index.js'
// 群聊
const Group = new Messages('message.group')
Group.use(
  async e => {
    const img = await Screenshot.createHelp({})
    if (img instanceof Uint8Array) {
      e.reply(Segment.image(Buffer.from(img)))
    } else if (Buffer.isBuffer(img)) {
      e.reply(Segment.image(img))
    } else {
      e.reply('截图失败了')
    }
  },
  [/^pic/]
)
export const PicGroup = Group.ok

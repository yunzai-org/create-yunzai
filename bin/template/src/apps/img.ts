import { Messages, Segment } from 'yunzai'
import { Screenshot } from '../image/index.js'
// 群聊
const Group = new Messages('message.group')
Group.use(
  async e => {
    const img = await Screenshot.createHelp({})
    if (typeof img != 'boolean') {
      e.reply(Segment.image(img))
    } else {
      e.reply('截图失败了')
    }
  },
  [/^pic/]
)
// 私聊
const Private = new Messages('message.private')
Private.use(
  async e => {
    const img = await Screenshot.createHelp({})
    if (typeof img != 'boolean') {
      e.reply(Segment.image(img))
    } else {
      e.reply('截图失败了')
    }
  },
  [/^pic/]
)
export const PicGroup = Group.ok
export const PicPrivate = Private.ok

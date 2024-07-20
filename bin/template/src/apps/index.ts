import { Messages, Segment } from 'yunzai'
import { Screenshot } from '../image/index.js'
const message = new Messages('message.group')
message.use(
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
export const Pic = message.ok
export * from './disFriPoke'
export * from './disPri'
export * from './example2'
export * from './friend'
export * from './invite'
export * from './newcomer'
export * from './outNotice'
export * from './quit'

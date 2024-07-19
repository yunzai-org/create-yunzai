import { Messages, Segment } from 'yunzai'
import { Screenshot } from '../image'
const message = new Messages({
  event: 'message.group'
})
message.response(/^pic/, async e => {
  const img = await Screenshot.createHelp({})
  if (typeof img != 'boolean') {
    e.reply(Segment.image(img))
  } else {
    e.reply('截图失败了')
  }
})
export const Pic = message.ok

export * from './add'
export * from './disFriPoke'
export * from './disPri'
export * from './example2'
export * from './friend'
export * from './invite'
export * from './newcomer'
export * from './outNotice'
export * from './quit'

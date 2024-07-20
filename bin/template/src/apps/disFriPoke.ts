import { ConfigController as cfg, Messages } from 'yunzai'
const message = new Messages('notice.friend.poke')
message.use(e => {
  if (!cfg.other?.disablePrivate) return
  if (e.isMaster) return
  e.reply(cfg.other.disableMsg)
})
export const disFriPoke = message.ok

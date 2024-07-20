import { ConfigController as cfg, Messages } from 'yunzai'
const disablePrivate = 'Yz:disablePrivate:'
const message = new Messages('message.private')

// 绑定ck，抽卡链接
const wordReg =
  /(.*)(ltoken|_MHYUUID|authkey=)(.*)|导出记录(json)*|(记录|安卓|苹果|ck|cookie|体力)帮助|^帮助$|^#*(删除|我的)ck$|^#(我的)?(uid|UID)[0-9]{0,2}$/g

message.use(async e => {
  if (!cfg.other?.disablePrivate) return

  if (e.isMaster) return

  const sendTips = async () => {
    // 冷却cd 10s
    let cd = 10
    if (e.user_id == cfg.qq) return
    // cd
    let key = `${disablePrivate}${e.user_id}`
    if (await redis.get(key)) return
    e.reply(cfg.other.disableMsg)
    redis.setEx(key, cd, '1')
  }

  // 发送日志文件，xlsx，json
  if (e.file) {
    if (!/(.*)\.txt|xlsx|json/gi.test(e.file?.name)) {
      sendTips()
    } else {
      return false
    }
  }

  // 自定义通行字符
  let disableAdopt = cfg.other?.disableAdopt

  if (!Array.isArray(disableAdopt)) disableAdopt = []

  disableAdopt = disableAdopt.filter(str => str != null && str !== '')

  //
  let disableReg = `(.*)(${disableAdopt.join('|')})(.*)`

  //
  if (e.raw_message) {
    if (
      !new RegExp(wordReg).test(e.raw_message) &&
      (disableAdopt.length === 0 || !new RegExp(disableReg).test(e.raw_message))
    ) {
      sendTips()
    }
  }
})

export const disPri = message.ok

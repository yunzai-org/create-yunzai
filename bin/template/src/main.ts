import { Client, Loader, createLogin, Processor } from 'yunzai'
console.log('0')
setTimeout(async () => {
  console.log('1')
  await createLogin()
  console.log('2')
  await Client.run().then(async () => {
    console.log('3')
    // 读取yunzai.config.js
    await Processor.install()
    await Loader.load()
  })
}, 0)

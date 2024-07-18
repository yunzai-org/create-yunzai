import { Plugin } from 'yunzai'
export class Word extends Plugin {
  constructor() {
    super()
    this.rule = [
      {
        reg: /^你好/,
        fnc: this.post.name
      }
    ]
  }
  /**
   *
   */
  async post() {
    this.e.reply('你好')
  }
}

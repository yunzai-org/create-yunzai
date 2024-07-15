import React from 'react'
import { dirname } from 'path'
import { Picture } from 'yunzai'
import Hello, { PropsType } from './conponent/help'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// 别名路径
export const paths = {
  // 定位自身的 md文件，并获取目录地址
  '@yunzai': dirname(require('../../README.md'))
}

export class Image extends Picture {
  constructor() {
    // 继承实例
    super()
    // 启动
    this.Pup.start()
  }
  /**
   *
   * @param uid
   * @param Props
   * @returns
   */
  createHelp(Props: PropsType) {
    // 生成 html 地址 或 html字符串
    const Address = this.Com.create(<Hello {...Props} />, {
      // html/help/help.html
      join_dir: 'help',
      html_name: `help.html`,
      // 插入
      html_head: this.Com.render(
        <link href={require('../../public/css/help.css')} />
      ),
      // 设置别名
      file_paths: paths
    })
    return this.Pup.render(Address)
  }
}
// 初始化 图片生成对象
export const imgae = new Image()

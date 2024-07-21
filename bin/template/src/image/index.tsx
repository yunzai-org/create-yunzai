import React from 'react'
import { dirname } from 'path'
import { Picture } from 'react-puppeteer'
import Image from './views/image'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)

// 别名路径
export const paths = {
  // 定位自身的 md文件，并获取目录地址
  '@yunzai': dirname(require('../../README.md'))
}

export class ScreenshotPicture extends Picture {
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
  createHelp(Props: Parameters<typeof Image>[0]) {
    return this.screenshot({
      // html/help/help.html
      join_dir: 'help',
      html_name: `help.html`,
      // <head> </head>
      html_head: (
        <>
          <link href={require('../../public/output.css')} />
        </>
      ),
      // <body> </body>
      html_body: <Image {...Props} />,
      // 别名资源
      html_files: [require('../../assets/css/example.main.css')],
      // 设置别名
      file_paths: paths
    })
  }
}
// 初始化 图片生成对象
export const Screenshot = new ScreenshotPicture()

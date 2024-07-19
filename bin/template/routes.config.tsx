import React from 'react'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
import { createDynamicComponent, type RouterType } from 'react-puppeteer'
const dynamic = createDynamicComponent(import.meta.url)
// router会被重复执行，此处组件变成动态组件
const Music = (await dynamic('./src/image/views/music.tsx')).default
// 路由
const Config: RouterType = [
  {
    url: '/music',
    options: {
      html_body: <Music />,
      html_head: (
        <>
          <link rel="stylesheet" href={require('./public/output.css')} />
        </>
      )
    }
  }
]
export default Config

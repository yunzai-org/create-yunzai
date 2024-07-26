import React from 'react'
import {
  createDynamicComponent,
  defineConfig,
  createRequire
} from 'react-puppeteer'
const require = createRequire(import.meta.url)
const dynamic = createDynamicComponent(import.meta.url)
// router会被重复执行，此处组件变成动态组件
const Music = (await dynamic('./src/image/views/music.tsx')).default
export default defineConfig([
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
])

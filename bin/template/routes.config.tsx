import React from 'react'
import { defineConfig } from 'react-puppeteer'
import { DefineOptions } from './src/image/index.js'
import Music from './src/image/views/music.js'
import Image from './src/image/views/image.js'
import Hello from './src/image/views/hello.js'
export default defineConfig([
  {
    url: '/',
    options: {
      ...DefineOptions,
      html_body: <Hello data={{ name: 'pages' }} movies={[]} />
    }
  },
  {
    url: '/music',
    options: {
      ...DefineOptions,
      html_body: <Music />
    }
  },
  {
    url: '/image',
    options: {
      ...DefineOptions,
      html_body: <Image />
    }
  }
])

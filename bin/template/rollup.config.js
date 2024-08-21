import { defineConfig } from 'yunzai/rollup'
import typescript from '@rollup/plugin-typescript'
// import terser from '@rollup/plugin-terser'
export default defineConfig(
  {
    plugins: [
      typescript({
        compilerOptions: {
          declaration: true,
          declarationDir: 'lib'
        },
        include: ['src/**/*']
      })
    ]
  }
  // 开启代码压缩
  // ,
  // terser()
)

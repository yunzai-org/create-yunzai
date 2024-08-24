import { defineConfig } from 'yunzai/rollup'
import typescript from '@rollup/plugin-typescript'
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
)

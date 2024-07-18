import { applicationOptions } from 'yunzai'
import * as apps from './apps/index'
const Data = []
export default () => {
  return applicationOptions({
    create() {
      for (const key in apps) {
        Data.push(new apps[key]())
      }
    },
    mounted() {
      return Data
    }
  })
}

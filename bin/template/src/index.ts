import { applicationOptions, useAppStorage } from 'yunzai'
import * as apps from './apps/index'
const Data = useAppStorage()
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

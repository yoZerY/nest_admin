import { defineStore } from 'pinia'
import { getRouters } from '@/api/menu'

export const usePermissionStore = defineStore('permissionStore', {
  state: () => ({
    routes: [],
    addRoutes: [],
    defaultRoutes: [],
    topbarRouters: [],
    sidebarRouters: []
  }),
  actions: {
    GenerateRoutes() {
      return new Promise((resolve) => {
        getRouters().then((res) => {
          const { data } = res
          resolve(data)
        })
      })
    }
  }
})

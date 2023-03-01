import { defineStore } from 'pinia'

// defineStore中的第一个参数很重要
export const useMain = defineStore('main', {
  state: () => {
    return {
      count: 0,
      name: 'bjl',
      arr: [1, 2, 3]
    }
  },
  // 计算属性
  getters: {
    doubleCount: (state) => {
      return state.count * 2
    }
  },
  // 既可以进行同步，也可以进行异步
  actions: {
    addCount() {
      this.count++
    }
  }
})
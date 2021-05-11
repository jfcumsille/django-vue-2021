import categoryService from '../../services/categoryService'

const state = {
  categories: []
}

const getters = {
  categories: state => {
    return state.categories
  }
}

const actions = {
  getCategories({ commit }) {
    categoryService.fetchCategories()
      .then(categories => {
        commit('setCategories', categories)
      })
  },
  addCategory({ commit }, category) {
    categoryService.postCategory(category)
      .then((res) => {
        commit('addCategory', res)
      })
  },
  deleteCategory({ commit }, categoryId) {
    categoryService.deleteCategory(categoryId)
    commit('deleteCategory', categoryId)
  }
}

const mutations = {
  setCategories(state, categories) {
    state.categories = categories
  },
  addCategory(state, category) {
    state.categories.push(category)
  },
  deleteCategory(state, categoryId) {
    state.categories = state.categories.filter(obj => obj.id !== categoryId)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}

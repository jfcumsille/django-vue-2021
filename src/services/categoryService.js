import api from '@/services/api'

export default {
  fetchCategories() {
    return api.get('categories/')
      .then(response => response.data)
  },
  postCategory(payload) {
    return api.post('categories/', payload)
      .then(response => response.data)
  },
  deleteCategory(categoryId) {
    return api.delete(`categories/${categoryId}`)
      .then(response => response.data)
  }
}

import axios from 'axios'

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
      {
        params: { _limit: limit, _page: page },
      },
    )
    console.debug('getAll', response)
    if (response.status === 200) return response
  }

  static async getPost(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
    )
    console.debug('getPost', response)
    if (response.status === 200) return response
  }

  static async getPostComments(id) {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    )
    console.debug('getPostComments', response)
    if (response.status === 200) return response
  }
}

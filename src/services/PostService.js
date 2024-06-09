import axios from 'axios'

export default class PostService {
  static async getAll() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts',
    )
    console.log('response', response)
    if (response.status === 200) return response.data
  }
}

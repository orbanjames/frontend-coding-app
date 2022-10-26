import axios from 'axios'

const postsUrl = 'https://dummyapi.io/data/v1/post?limit=10'
const app_id = '6359478c5290a0a7214946e4'

export const getPosts = async (id) => {
  id = id || ''
  try {
    return await axios.get(`${postsUrl}${app_id}/${id}`)
  } catch (error) {
    console.log('Error while calling getposts api ', error)
  }
}

export const createPost = async (post) => {
  return await axios.post(`${postsUrl}${app_id}`, post)
}

export const deletePost = async (id) => {
  return await axios.delete(`${postsUrl}${app_id}/${id}`)
}

export const editPost = async (id, post) => {
  return await axios.put(`${postsUrl}${app_id}/${id}`, post)
}

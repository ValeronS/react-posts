import { useMemo } from 'react'

export const useSortedPosts = (posts, sort) => {
  const sortedPosts = useMemo(() => {
    if (sort) return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]))
    return posts
  }, [sort, posts])

  return sortedPosts
}

export const usePosts = (posts, sort, query) => {
  const sortedPosts = useSortedPosts(posts, sort)

  return useMemo(() => {
    if (query)
      return sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(query.toLowerCase()) ||
          post.body.toLowerCase().includes(query.toLowerCase()),
      )
    return sortedPosts
  }, [query, sortedPosts])
}

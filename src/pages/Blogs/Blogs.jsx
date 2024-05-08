import { useEffect, useState } from 'react'
import Blog from './Blog'

const Blogs = () => {
  // import blogs data
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('/blogs.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
  }, [])

  // pagination - create variables
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage, setPostsPerPage] = useState(4)
  // pagination - create indexes
  const indexOfLastPost = currentPage + postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost)

  return (
    <section className='blog'>
      <header>
        <h2 className='h2 article-title'>Projects</h2>
      </header>
      <div className='blog-posts'>
        <ul className='blog-posts-list'>
          {currentPosts.map((post, index) => (
            <Blog post={post} key={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Blogs

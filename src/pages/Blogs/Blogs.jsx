import { useEffect, useState } from 'react'
import Blog from './Blog'

const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  useEffect(() => {
    fetch('/blogs.json')
      .then((response) => response.json())
      .then((data) => setBlogs(data))
  }, [])

  return (
    <section className='blog'>
      <header>
        <h2 className='h2 article-title'>Projects</h2>
      </header>
      <div className='blog-posts'>
        <ul className='blog-posts-list'>
          {blogs.map((post, index) => (
            <Blog post={post} key={index} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Blogs

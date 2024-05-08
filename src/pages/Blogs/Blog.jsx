const Blog = ({ post }) => {
  const { title, category, date, image, description } = post
  return (
    <li className='blog-post-item'>
      <a href='#'>
        {/* blog image */}
        <figure className='blog-banner-box'>
          <img src={image} alt='blog image' loading='lazy' />
        </figure>

        {/* blog content */}
        <div className='blog-content'>
          <div className='blog-meta'>
            <p className='blog-category'>{category}</p>
            <span className='dot'></span>
            <time datetime={date}>{date}</time>
          </div>
        </div>
      </a>
    </li>
  )
}

export default Blog

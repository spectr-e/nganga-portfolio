const Blog = ({ post }) => {
  const { title, category, date, image, description } = post
  return (
    <li className=''>
      <a href='#' className=''>
        <figure className=''>
          <img src={image} alt='blog image' loading='lazy' />
        </figure>
      </a>
    </li>
  )
}

export default Blog

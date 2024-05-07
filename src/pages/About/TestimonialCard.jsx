const TestimonialCard = ({ data }) => {
  const { name, avatar, testimonial } = data
  return (
    <li className='testimonials-item'>
      <div className='content-card'>
        <figure className='testimonials-avatar-box'>
          <img src={avatar} alt='avatar' width={60} />
        </figure>

        <h4 className='h4 testimonials-item-title'>{name}</h4>
        <div className='about-text'>
          <p>{testimonial}</p>
        </div>
      </div>
    </li>
  )
}

export default TestimonialCard

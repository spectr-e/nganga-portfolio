const TestimonialCard = ({ data }) => {
  const { name, avatar, testimonial } = data
  return (
    <li className='testimonial-item'>
      <div className='content-card'>
        <figure className='testimonials-avatar-box'>
          <img src={avatar} alt='avatar' width={60} />
        </figure>
      </div>
    </li>
  )
}

export default TestimonialCard

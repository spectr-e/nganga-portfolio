const ServiceCard = ({ data }) => {
  const { title, icon, description } = data
  return (
    <li className='service-item'>
      <div className='service-icon-box'>
        <img src={icon} alt='service icon' width={40} />
      </div>

      <div className='service-content-box'>
        <h4 className='h4 service-item-title'>{title}</h4>
        <p className='service-item-text'>{description}</p>
      </div>
    </li>
  )
}

export default ServiceCard

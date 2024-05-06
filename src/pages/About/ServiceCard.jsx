const ServiceCard = ({ data }) => {
  const { title, icon, description } = data
  console.log(icon)
  return (
    <li className=''>
      <div>
        <img src={icon} alt='' />
      </div>
    </li>
  )
}

export default ServiceCard

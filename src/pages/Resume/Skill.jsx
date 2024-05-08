const Skill = ({ title, value }) => {
  return (
    <li className='skills-item'>
      {/* title */}
      <div className='title-wrapper'>
        <h5 className='h5'>{title}</h5>
        <data value={value}>{value}%</data>
      </div>

      {/* level */}
      <div className='skill-progress-bg'>
        <div
          className='skill-progress-fill'
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </li>
  )
}

export default Skill

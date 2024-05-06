const Timeline = ({ title, date, description }) => (
  <li className='timeline-item'>
    <h4 className='timeline-item-title h4'>{title}</h4>
    <span>{date}</span>
    <p className='timeline-text'>{description}</p>
  </li>
)

export default Timeline

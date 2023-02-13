import './index.css'

const DestinationItem = props => {
  const {destinations} = props
  const {name, imgUrl} = destinations
  console.log(destinations)
  return (
    <li className="destinationCard">
      <img src={imgUrl} className="image" alt={name} />
      <p className="name">{name}</p>
    </li>
  )
}
export default DestinationItem

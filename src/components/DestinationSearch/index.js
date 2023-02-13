import {Component} from 'react'
import DestinationItem from '../DestinationItem/index'
import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchList = destinationsList.filter(results =>
      results.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bgContainer">
        <h1 className="heading">Destination Search</h1>
        <div className="iconContainer">
          <input
            type="search"
            className="input"
            onChange={this.onSearchInput}
            value={searchInput}
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
            className="searchIcon"
            alt="search icon"
          />
        </div>

        <ul className="imgContainer">
          {searchList.map(eachItem => (
            <DestinationItem destinations={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch

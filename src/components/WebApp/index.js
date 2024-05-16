import {Component} from 'react'

import './index.css'

class WebApp extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="app-store">
          <h1 className="heading">Web App </h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              onChange={this.onChangeSearchInput}
              placeholder="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png "
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
      </div>
    )
  }
}
export default WebApp

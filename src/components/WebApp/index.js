import {Component} from 'react'

import TabItem from '../TabItem'

import './index.css'

const tabsList = [
  {tabId: 'Mountains', displayText: 'Mountains'},
  {tabId: 'Flowers', displayText: 'Flowers'},
  {tabId: 'Beaches', displayText: 'Beaches'},
  {tabId: 'Cities', displayText: 'Cities'},
  {tabId: 'Animals', displayText: 'Animals'},
]

class WebApp extends Component {
  state = {
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="app-store">
          <h1 className="heading">Web App </h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              onChange={this.onChangeSearchInput}
              value={searchInput}
              placeholder="search"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/app-store/app-store-search-img.png "
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="tabs-list">
            {tabsList.map(eachTab => (
              <TabItem
                key={eachTab.tabId}
                tabDetails={eachTab}
                setActiveTabId={this.setActiveTabId}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default WebApp

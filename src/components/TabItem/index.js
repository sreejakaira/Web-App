// Write your code here
// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, onClickTabUpdate} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    onClickTabUpdate(tabId)
  }

  const activeTabBtnClassName = 'active-tab-btn'

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeTabBtnClassName}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

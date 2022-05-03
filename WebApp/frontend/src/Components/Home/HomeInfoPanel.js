import React from 'react'

const HomeInfoPanel = ({title, content, image}) => {
  return (
    <div className = "HomeInfoPanel">
      <img className = "HomeInfoPanelImage" src = { image } />
      <div className = "HomeInfoPanelMain">
          <h1 className = "HomeInfoPanelTitle">{ title }</h1>
          <h3 className = "HomeInfoPanelContent">{ content }</h3>
      </div>
    </div>
  )
}

export default HomeInfoPanel

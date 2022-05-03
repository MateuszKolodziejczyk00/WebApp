import React from 'react'
import HomeInfoPanel from './HomeInfoPanel'

const HomePage = () => {
  return (
    <div className = "HomeVideoWrapper">
      <div className = 'NoHorizontalScroll'>
        <iframe className = "HomeVideo" overflow-x="hidden" allow="autoplay; fullscreen" type="text/html"
          src="https://www.youtube-nocookie.com/embed/MLi5DEfHZws?playlist=MLi5DEfHZws&amp;enablejsapi=1&amp;html5=1&amp;hd=1&amp;loop=1&amp;wmode=opaque&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;controls=0&amp;playsinline=1&amp;autoplay=1&amp;mute=1"
          allowfullscreen frameborder="" width="1920px" height="1080px">
        </iframe>
      </div>
      <div>
        <div className = "HomeInfoContainer">
          <HomeInfoPanel />
          <HomeInfoPanel />
        </div>
      </div>
    </div>
  )
}

export default HomePage

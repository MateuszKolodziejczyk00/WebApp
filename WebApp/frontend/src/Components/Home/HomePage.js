import React from 'react'
import ContactPanel from './ContactPanel'
import HomeInfoPanel from './HomeInfoPanel'
import OpeningHoursPanel from './OpeningHoursPanel'
import RestaurantMap from './Map'

const HomePage = () => {

  let aboutContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`

  let historyContent = `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
   beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
  Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.`

  return (
    <div className = "HomeVideoWrapper">
      <div className = 'NoHorizontalScroll'>
        <iframe className = "HomeVideo" overflow-x="hidden" allow="autoplay; fullscreen" type="text/html"
          src="https://www.youtube-nocookie.com/embed/MLi5DEfHZws?playlist=MLi5DEfHZws&amp;enablejsapi=1&amp;html5=1&amp;hd=1&amp;loop=1&amp;wmode=opaque&amp;showinfo=0&amp;modestbranding=1&amp;rel=0&amp;showinfo=0&amp;controls=0&amp;playsinline=1&amp;autoplay=1&amp;mute=1"
          allowFullScreen frameBorder="" width="1920px" height="1080px">
        </iframe>
      </div>
      <div className = "HomePageContent">
        <div className = "HomeInfoContainer">
          <HomeInfoPanel title = {"O Nas"} content = {aboutContent} image = {"https://static.polityka.pl/_resource/res/path/4d/51/4d51ac16-17e7-40d6-960e-103a56933e37_f1400x900"} />
          <HomeInfoPanel title = {"Historia"} content = {historyContent} image = {"https://cdn.vox-cdn.com/thumbor/BYxJY5FkGwbB37heWnlSDVVw8pc=/0x0:6000x4000/1200x800/filters:focal(2520x1520:3480x2480)/cdn.vox-cdn.com/uploads/chorus_image/image/68775471/Gary_He.0.jpg"} />
        </div>
        <OpeningHoursPanel />
        <ContactPanel />
        <RestaurantMap />
      </div>
    </div>
  )
}

export default HomePage

import Lottie from 'lottie-react';

import whiteDog from '../../lotties/white_dog.json';
import './home_page.scss';

export default function HomePage() {

  return (
      <div className="home-page-main-container">
        <div className="home-page-content-container">
          <div className="home-page-description-container">
            <img className="banner-image" src="/banner.png" alt="image"/>
            <div className="home-page-details-container">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged. It was popularised in
            </div>
            <div className="home-page-description-bottom-container">
              <Lottie className="home-dog-animation" animationData={whiteDog} loop={true}/>
              <a href='https://play.google.com/store/apps/details?id=com.care_for_me.care.prod'>
                <img className="play-store-button-image" src="/play_store_button.png"
                     alt="play-store-button"/></a>
            </div>

          </div>
          <div className="home-page-mobile-screen-container">
            <img className="mobile-screen-image" src="/mobile_screen_2.png" alt="image"/>
          </div>
        </div>
      </div>
  );
}
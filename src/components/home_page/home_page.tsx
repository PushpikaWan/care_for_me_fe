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
              This is an animal-caring application. "Care for me" as the name described, users can
              post animals related content like Adoption, Healing, Lost and found, etc... Users can
              ask for those actions on their behalf. Users can share posts through Facebook,
              Instagram, WhatsApp or any other social media to get more attention for animals who
              needs to be taken care.
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
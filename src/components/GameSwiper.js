import React ,{ useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import './gameSwiper.css';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import GameSlide from './GameSlide';


function GameSwiper({ games }) {
    const [active,setActive] = useState(false);

    const handleToggleVideo = () => {
        setActive(!active);
    };
    const swiperProps = {
        effect: "coverflow",
        grabCursor: true,
        navigation: true,
        
        loop: games.length > 5, // Disable loop if there are not enough slides
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 35,
            stretch: 200,
            depth: 250,
            modifier: 1,
            slideShadows: true,
        },
        // autoplay: {
        //     delay: 2500,
        //     disableOnInteraction: false,
        // },
        modules: [EffectCoverflow, Navigation, Autoplay],
        className: 'gameSwiper',
    };

  return (
    <Swiper
        {...swiperProps}
    >
      {games.map((game, index) => (
           <SwiperSlide >
             <GameSlide key={index} game={game} active={active} handleToggleVideo={handleToggleVideo}/>
           </SwiperSlide>
     
      ))}
    </Swiper>
  );
}

export default GameSwiper;

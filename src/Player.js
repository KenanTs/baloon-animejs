import anime from "animejs/lib/anime.es.js";
import { useRef, useEffect } from "react";
import "./Player.css";

const Player = () => {

  
  /* 1. animasyon FUNCTION BASED PARAMETERS */
  const animationFu = useRef(null);
  useEffect(() => {
    animationFu.current = anime({
        targets: '.el1',
        translateX: {
          value: 250,
          duration: 800
        },
        rotate: {
          value: 360,
          duration: 1800,
          easing: 'easeInOutSine'
        },
        scale: {
          value: 2,
          duration: 1600,
          delay: 800,
          easing: 'easeInOutQuart'
        },
        delay: 250 // All properties except 'scale' inherit 250ms delay
      });
  }, []);


  /* 2. animasyon CSS PROPERTIES */
  const animationPro = useRef(null);
  useEffect(() => {
    animationPro.current = anime({
      translateX: {
        value: 250,
        duration: 800
      },
        targets: '.el2',
        backgroundColor: '#FF0000',
        borderRadius: ['0%', '50%'],
        easing: 'easeInOutQuad'
    });
  }, []);

  
  

  return (
    <div className="player">

      <button onClick={()=>animationFu.current.restart()} className="el1"></button>
      
      <button onClick={() =>animationPro.current.restart()} className="el2"></button>

    </div>
  );
};

export default Player;
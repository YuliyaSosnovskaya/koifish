import { useState } from 'react';

import classes from './carusel.module.css';


const CAROUSEL_IMAGE_PATHS = [
  '/carusel-images/carusel0.jpg',
  '/carusel-images/carusel3.jpg',
  '/carusel-images/carusel2.jpg'
];

// let currentIndex = 0;

const imgClass = classes.img;

const Carusel = () => {
  const [imgClasses, setImgClasses] = useState([imgClass, classes.img0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const swipeRight = () => {
    const indexIsLast = CAROUSEL_IMAGE_PATHS.length - 1 === currentIndex;
    const nextIndex = indexIsLast ? 0 : currentIndex + 1;
    setCurrentIndex(nextIndex);

    const nextImgClass = classes['img' + nextIndex];
    setImgClasses([imgClass, nextImgClass]);
  }

  const swipeLeft = () => {
    const indexIsFirst = currentIndex === 0;
    const prevIndex = indexIsFirst ? 2 : currentIndex - 1;
    setCurrentIndex(prevIndex);

    const nextImgClass = classes['img' + prevIndex];
    setImgClasses([imgClass, nextImgClass]);
  }
  
  return (
    <>
      <div className={classes.container}>
        {CAROUSEL_IMAGE_PATHS.map((path) => {
          return (
            <img
              alt="carousel img"
              key={path}
              className={imgClasses.join(' ')}
              src={path}
            />
          );
        })}
        <button
          className={[classes.button, classes.leftButton].join(' ')}
          onClick={swipeLeft}
          disabled={currentIndex === 0}
        >
          <img alt="left arrow" src="left-arrow.svg" />
        </button>
        <button
          className={[classes.button, classes.rightButton].join(' ')}
          onClick={swipeRight}
          disabled={currentIndex === 2}
        >
          <img alt="right arrow" src="right-arrow.svg" />
        </button>

      </div>
      
    </>
    

  )
}
export default Carusel;
import { useState } from 'react';

import classes from './carusel.module.css';


const CAROUSEL_IMAGE_PATHS = [
  'carusel-images/carusel0.jpg',
  'carusel-images/carusel3.jpg',
  'carusel-images/carusel2.jpg'
];

let currentIndex = 0;

const imgClass = classes.img;

const Carusel = () => {
  const [imgClasses, setImgClasses] = useState([imgClass, classes.img0]);
  
  const swipeRight = () => {
    const indexIsLast = CAROUSEL_IMAGE_PATHS.length - 1 === currentIndex;

    currentIndex = indexIsLast ? 0 : currentIndex + 1;

    const nextImgClass = classes['img' + currentIndex];

    setImgClasses([imgClass, nextImgClass]);
  }

  const swipeLeft = () => {
    const indexIsFirst = currentIndex === 0;

    currentIndex = indexIsFirst ? 2 : currentIndex - 1;

    const nextImgClass = classes['img' + currentIndex];

    setImgClasses([imgClass, nextImgClass]);
  }
  
  return (
    <>
      <div className={classes.container}>
        {CAROUSEL_IMAGE_PATHS.map((path) => {
          return (
            <img className={imgClasses.join(' ')} src={path} />
          );
        })}
        <button className={classes.leftButton} onClick={swipeLeft} disabled={currentIndex === 0}><img src="left-arrow.svg" /></button>
        <button className={classes.rightButton} onClick={swipeRight} disabled={currentIndex === 2}><img src="right-arrow.svg" /></button>

      </div>
      
    </>
    

  )
}
export default Carusel;
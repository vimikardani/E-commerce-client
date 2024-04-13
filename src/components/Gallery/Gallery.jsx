import React from 'react';
import Carousel from 'better-react-carousel';
import './gallery.css'

const Gallery = () => {
  return (
    <>
    <div className="car-container">
    <Carousel cols={1} rows={1} gap={10} autoplay={1000} loop>
      <Carousel.Item>
        <img width="100%" height='220vh' src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/d72956b4788a28fc.jpg?q=20" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9c3843ee9ca4c2e7.jpg?q=20" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/bf4105ca2b58d3f2.jpg?q=20" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/5f515750b4e4ec8e.jpeg?q=20" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/b8e07ff39439d998.jpg?q=20" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/6bc051cc052fcc6b.jpg?q=20" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/dddee4b7392b1301.jpg?q=20" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/585a93b0ebfd39c2.jpg?q=20" />
      </Carousel.Item>
      {/* ... */}
    </Carousel>
    </div>
    </>
  )
}

export default Gallery
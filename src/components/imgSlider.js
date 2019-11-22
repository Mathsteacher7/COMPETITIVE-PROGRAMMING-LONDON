import React from 'react'
import Slider from 'react-slick'

class ImgSlider extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      images: [
        'https://i.imgur.com/dw3pCVk.jpg', 
        'https://i.imgur.com/UuzRjSY.jpg', 
        'https://i.imgur.com/tfQwpyK.jpg', 
        'https://i.imgur.com/tuBDo5r.jpg', 
        'https://i.imgur.com/MTIY4Q9.jpg',
        'https://i.imgur.com/1nYHqni.jpg',
        'https://i.imgur.com/Z3r6KJp.jpg',
        'https://i.imgur.com/pQ9N4lS.jpg',
        'https://i.imgur.com/QoJkK8a.jpg',
        'https://i.imgur.com/m44FrgU.jpg',
        'https://i.imgur.com/awUNmJK.jpg'
      ]
    }

  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 400,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: true,
      adaptiveHeight: true,
      autoplay: true,
      fade: true

    }
    return (
      <div>
        <Slider {...settings}>

          {this.state.images.map((image, i) =>
            <div className="image" key={i} >
              <img className="imgSlider" src={image} />
              <button type="button" className="slick-prev">Previous</button>

            </div>
          )}


        </Slider>
      </div>
    )
  }
}

export default ImgSlider

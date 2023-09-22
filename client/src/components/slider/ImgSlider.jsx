import './slider.scss'
import Slider from "infinite-react-carousel"

const ImgSlider = ({children, slidesToShow,arrowsScroll}) => {
  return (
    <div className="slide">
      <div className="container">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  )
}

export default ImgSlider


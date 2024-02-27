import "./carousel.css"
import Slider from "react-slick";

function Carrosel({children}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };
      
   
   
   
   
    return(
        <div className="slider-container">
        <Slider {...settings}>
        {children}
        </Slider>
      </div>

   )
}
export default Carrosel
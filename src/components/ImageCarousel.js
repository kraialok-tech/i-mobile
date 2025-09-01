import Slider from "react-slick";

function ImageCarousel() {
const settings = {
dots: true, // shows navigation dots
infinite: true, // infinite loop
speed: 500, // transition speed
slidesToShow: 1, // one image at a time
slidesToScroll: 1,
autoplay: true, // auto slide
autoplaySpeed: 3000, // 3 seconds per slide
arrows: true // show left/right arrows
};

const images = [
"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
"https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=800&q=80"
];

return (
<Slider {...settings}>
{images.map((url, index) => (
<div key={index}>
<img src={url} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
</div>
))}
</Slider>
);
}

export default ImageCarousel;
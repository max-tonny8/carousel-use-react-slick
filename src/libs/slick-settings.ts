export const slickSettings = {
  dots: false,
  autoplay: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    }
  ]
};

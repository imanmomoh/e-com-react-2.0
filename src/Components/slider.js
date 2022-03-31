import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const images = [
    {
        url: "https://thedirect.s3.amazonaws.com/media/article_full/hm3_720.jpg",
        name: "Photo 1"
    },
    {
        url: "https://www.google.com/shopping/product/11118302253530626977?q=makeup+brushes&biw=1440&bih=732&sxsrf=APq-WBvf7Ya79B7I53DRg1hUZk5aLPK6Lw:1648644070615&uact=5&oq=makeup+brushes&gs_lcp=Cgtwcm9kdWN0cy1jYxADMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoNCAAQsQMQgwEQsAMQQzoICAAQgAQQsANKBAhBGAFQmghYghNgvhRoAnAAeACAAZ8GiAGaC5IBBTUtMS4xmAEAoAEByAEKwAEB&sclient=products-cc&prds=eto:11724083576735459552_0,rsk:PC_6584569951083775830&sa=X&ved=0ahUKEwjeqabm7e32AhX7oWoFHR5PCaIQ8gIIrA8oAA",
        name: "Photo 2"
    },
    { url: "https://i.ytimg.com/vi/jziktWnfJcA/maxresdefault.jpg", name: "Photo 1" },
    {
        url: "https://asia.playstation.com/content/dam/pscom/hk/latest-news/2019/20191031-nioh2/nioh2.jpg",
        name: "Photo 3"
    },
    {
        url: "https://blog.playstation.com/tachyon/2020/09/50383822476_93da479b4d_k.jpg?resize=1088,612&crop_strategy=smart",
        name: "Photo 4"
    },
    { url: "https://news.otakukart.com/wp-content/uploads/2020/01/Yajuza-7.jpg" },
    {
        url: "https://i0.wp.com/theplaystationbrahs.com/wp-content/uploads/2020/09/returnal-ps5.jpg?fit=1337%2C762&ssl=1",
        name: "Photo 5"
    }
];

export default function SimpleSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: "slides",
        autoplay: true

    };
    return (
        <div className="App2"  >
            <Slider {...settings}>
                {images.map((image) => {
                    return (
                        <img max-width="300px" src={image.url} alt="" />
                    )
                })}
                
            </Slider>
        </ div>
    );
}
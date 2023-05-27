import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';
import SectionTitle from "../../../components/SectionTitle";

const Category = () => {
    return (
        <section className="mb-24 mt-32">
            <SectionTitle
                subHeading={"from askd"}
                heading={"Chef Recommends"}
            />

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-12"
               >
                <SwiperSlide>
                    <img src={slide1} alt="slide" />
                    <p className="uppercase text-3xl -mt-16 text-white tracking-wider text-center">salads</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="slide" />
                    <p className="uppercase text-3xl -mt-16 text-white tracking-wider text-center">Soups</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="slide" />
                    <p className="uppercase text-3xl -mt-16 text-white tracking-wider text-center">pizzas</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="slide" />
                    <p className="uppercase text-3xl -mt-16 text-white tracking-wider text-center">desserts</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="slide" />
                    <p className="uppercase text-3xl -mt-16 text-white tracking-wider text-center">salads</p>
                </SwiperSlide>

            </Swiper>
        </section>
    );
};

export default Category;
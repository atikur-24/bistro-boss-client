import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating, RoundedStar } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";

const customStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#CD9003',
    inactiveFillColor: '#A1A1A1',
  };

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect( () => {
        fetch('http://localhost:5000/reviews')
         .then(res => res.json())
         .then(data => setReviews(data))
    }, [])

    return (
        <section className="mb-32">
            <SectionTitle subHeading={'What Our Client Say'} heading={'testimonials'} />
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="px-16 text-center space-y-10">
                                <Rating
                                    className="mx-auto mt-10"
                                    style={{ maxWidth: 270 }}
                                    value={review.rating}
                                    itemStyles={customStyles}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-8xl mx-auto" />
                                <p>{review.details}</p>
                                <h3 className="text-3xl font-medium tracking-wide text-[#CD9003]">{review.name}</h3>
                            </div>
                        </SwiperSlide>)
                    }

                </Swiper>
        </section>
    );
};

export default Testimonials;
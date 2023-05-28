import SectionTitle from "../../../components/SectionTitle";
import featured from "../../../assets/home/featured.jpg";
import './featured.css';

const Featured = () => {
    return (
        <section className="featured-item mb-32 py-36 text-white">
                <SectionTitle subHeading={"Check It Out"} heading={"from our menu"} />
                <div className="md:flex justify-center items-center gap-16 mt-12 px-36">
                    <img className="w-[600px] h-[400px]" src={featured} alt="featured" />
                    <div className="space-y-2 text-white">
                        <h3 className="text-2xl">March 20, 2023</h3>
                        <h3 className="uppercase text-2xl">where can i get some?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                        <button className="btn glass">read more</button>
                    </div>
                </div>
        </section>
    );
};

export default Featured;
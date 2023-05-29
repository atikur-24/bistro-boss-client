import { Parallax } from "react-parallax";

const Cover = ({ img, title, content }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        className="hero min-h-[700px]"
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-center text-neutral-content bg-[#15151599] py-24 px-64">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-semibold uppercase">{title}</h1>
            <p className="mb-5">{content}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

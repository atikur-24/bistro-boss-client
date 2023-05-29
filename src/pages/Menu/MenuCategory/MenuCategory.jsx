import { Link } from "react-router-dom";
import OutlineButton from "../../../components/OutlineButton";
import Cover from "../../Shared/Cover/Cover";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import Progress from "../../../components/Progress";

const MenuCategory = ({ loading, items, img, title, content }) => {
  return (
    <>
      { img && <div>
        <Cover img={img} title={title} content={content} />
      </div>}
      { loading && <Progress /> }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 mb-12">
        {items.map((item) => (
          <MenuItems key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center">
        <Link to={`/order/${title}`}>
          <OutlineButton>order your favorite food </OutlineButton>
        </Link>
      </div>
    </>
  );
};

export default MenuCategory;

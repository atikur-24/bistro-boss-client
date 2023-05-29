import Progress from "../../../components/Progress";
import FoodCard from "../../Shared/FoodCard/FoodCard";

const FoodCategory = ({ loading, items }) => {
  return (
    <>
      { loading && <Progress /> }
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
        {items.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
};

export default FoodCategory;

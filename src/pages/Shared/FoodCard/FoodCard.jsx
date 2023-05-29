
const FoodCard = ({ item }) => {
    const { image, name, recipe, price } = item;

    return (
        <div className="card card-compact bg-base-200">
            <img src={image} alt="recipe" />
            <p className="bg-slate-900 text-white absolute right-0 mr-6 mt-6 py-2 px-4">${price} </p>
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline hover:text-[#BB8506] bg-gray-200 border-0 border-b-4 border-[#BB8506] text-[#BB8506]">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;
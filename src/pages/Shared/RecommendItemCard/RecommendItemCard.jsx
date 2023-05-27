
const RecommendItemCard = ({ item }) => {
    const { image, name, recipe} = item;

    return (
        <div className="card card-compact bg-base-200">
            <img src={image} alt="recipe" />
            <div className="card-body items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline btn-warning border-0 border-b-4">add to cart</button>
                </div>
            </div>
        </div>
    );
};

export default RecommendItemCard;
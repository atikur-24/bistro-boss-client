const MenuItems = ({ item }) => {
    const { name, price, recipe, image } = item;

    return (
        <div className="flex gap-5">
            <img style={{borderRadius: '0px 200px 200px 200px'}} className="w-[118px]" src={image} alt="item" />
            <div>
                <h3 className="text-xl tracking-wide uppercase">{name}----------------</h3>
                <p className="text-gray-500">{recipe}</p>
            </div>
            <p className="text-[#BB8506] text-xl">${price}</p>
        </div>
    );
};

export default MenuItems;
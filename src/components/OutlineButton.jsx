const OutlineButton = ({ children }) => {
    return (
        <button className="btn btn-outline border-0 border-b-4 text-xl">
            {children}
        </button>
    );
};

export default OutlineButton;
import { Helmet } from "react-helmet-async";

const DynamicTitle = ({children}) => {
    return (
        <Helmet>
                <title>Bistro Boss | {children}</title>
        </Helmet>
    );
};

export default DynamicTitle;
import { useLocation } from "react-router-dom";
import Breadcrumbs, { type BreadcrumbItem } from "./Breadcrumbs";

const routeNameMap: Record<string, string> = {
    "": "Home",
    movies: "Movies",
    favorites: "Favorites",
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const BreadcrumbsContainer: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    const items: BreadcrumbItem[] = [
        { name: routeNameMap[""], url: "/" },
        ...pathnames.map((segment, idx) => {
            const url = "/" + pathnames.slice(0, idx + 1).join("/");
            const label = routeNameMap[segment] || capitalize(segment);
            return { name: label, url };
        }),
    ];

    return <Breadcrumbs items={items} />;
};

export default BreadcrumbsContainer;
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Breadcrumbs.styles.module.css";

export interface BreadcrumbItem {
    name: string;
    url: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => (
    <nav className={styles.breadcrumbs}>
        <ol>
            {items.map((item, idx) => (
                <li key={item.url} className={styles.breadcrumb_item}>
                    {idx < items.length - 1 ? (
                        <Link to={item.url} className={styles.breadcrumb_link}>
                            {item.name}
                        </Link>
                    ) : (
                        <span className={styles.breadcrumb_current}>{/\d/.test(item.name) ? "Details" : item.name.toUpperCase()}</span>
                    )}
                    {idx < items.length - 1 && <span className={styles.separator}>›</span>}
                </li>
            ))}
        </ol>
    </nav>
);

export default Breadcrumbs;

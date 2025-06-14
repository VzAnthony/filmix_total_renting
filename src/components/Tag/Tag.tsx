import type { InterfaceTagProps } from "./Tag.type"
import styles from "./Tag.styles.module.css"

export const Tag = ({
    tag
}: InterfaceTagProps) => {
    return (
        <li className={styles.tag}>{tag}</li>
    )
}

import { Tag } from './Tag'
import type { InterfaceTagContainerProps } from './Tag.type'
import styles from './Tag.styles.module.css'

const TagContainer = ({
    tags
}: InterfaceTagContainerProps) => {
    return (
        <ul className={styles.tag_list}>
            {
                tags?.map(({ id, name }) => (
                    <Tag key={id} tag={name} />
                ))
            }
        </ul>
    )
}

export default TagContainer
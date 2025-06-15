import type { InterfaceSpinnerProps } from "./Spinner.type";
import styles from "./Spinner.styles.module.css";

const Spinner = ({
    size,
    color,
    ariaLabel,
}: InterfaceSpinnerProps) => (
    <div
        className={styles.spinner_container}
        role="status"
        aria-label={ariaLabel}
    >
        <div
            className={styles.spinner}
            style={{
                width: size,
                height: size,
                borderColor: `${color} ${color} ${color} transparent`,
            }}
        />
    </div>
);

export default Spinner;

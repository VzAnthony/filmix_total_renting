import Spinner from "./Spinner";
import type { InterfaceSpinnerProps } from "./Spinner.type";

const SpinnerContainer = ({
    size = 48,
    color = "#3fa7ff",
    ariaLabel = "Loading...",
}: InterfaceSpinnerProps) => {
    return (
        <Spinner size={size} color={color} ariaLabel={ariaLabel} />
    );
};

export default SpinnerContainer;
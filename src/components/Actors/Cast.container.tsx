import Cast from "./Cast"
import type { CastProps } from "./Cast.type"

const CastContainer = ({
    castData
}: CastProps) => {
    return (
        <Cast castData={castData} />
    )
}

export default CastContainer
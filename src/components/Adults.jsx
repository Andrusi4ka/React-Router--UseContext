import Ordinary from "./Ordinary"
import Vip from "./Vip"

const Adults = () => {
    return (
        <div className="border border-dark flex-grow-1 p-3">
            <p className="mb-0 text-end fst-italic">Component 3</p>
            <h4 className="text-center pb-3">Adults</h4>
            <div className="d-flex justify-content-between gap-3">
                <Ordinary />
                <Vip />
            </div>
        </div>
    )
}

export default Adults
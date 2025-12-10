import Adults from "./Adults";
import Childrens from "./Childrens";

const UserList = () => {
    return (
        <div>
            <h2 className="text-center pb-3">User list</h2>
            <div className="border border-dark">
                <p className="mb-0 mt-3 me-3 text-end fst-italic">Component 1</p>
                <div className="d-flex justify-content-between gap-3 p-3">
                    <Childrens />
                    <Adults />
                </div>
            </div>
        </div>
    )
}

export default UserList;
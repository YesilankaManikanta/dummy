import { Link } from "react-router-dom"
function Page() {

    return (
        <div className="main">
            <div className="book">
                <h1>PhoneBooK</h1>

                <div className="box">
                    <p>Name</p>
                    <p>Phone Number</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>

                <Link to="/add/contact">
                    <button className="Add-btn">Add</button>
                </Link>
            </div>
        </div>
    )
}
export default Page
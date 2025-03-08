import { useState } from "react"


function Add() {
    let [detail, setdetail] = useState()

    function handleInput(event) {
        setdetail((prev) => {
            return { ...prev, [event.target.name]: event.target.value }
        })
        console.log(detail)
    }
    function handleSubmit(event){
        event.preventDefault();
        fetch('http://localhost:3000/contact', {
            method: "POST",
            body: JSON.stringify(detail),
            headers: {
                "content-type": "application/json"
            }


        })
            .then(response => response.json())
            .then((data) => {
                console.log(data)
                
            })
            .catch((err) => {
                console.log(err)

            })
    }

    return (
        <div className="Add-main">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Add Phone Number</h1>
                <hr />
                <input onChange={handleInput} className="inp" type="text" name="name" placeholder="Name" required maxLength={30} minLength={3} />
                <input onChange={handleInput} className="inp num" type="number" name="number" placeholder="Phone Number" required maxLength={10} />
                <hr></hr>
                <button className="sav-btn">
                    Save
                </button>

            </form>

        </div>
    )
}
export default Add
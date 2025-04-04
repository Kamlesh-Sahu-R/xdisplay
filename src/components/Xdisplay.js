import {useState} from "react";
import "./Xdisplay.css"

export function Xdisplay(){
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    });
    const [fullName, setFullName] = useState("");

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        console.log(formData);
    };

    const handleSubmite = (e) => {
        e.preventDefault();
        setFullName(`${formData.firstName} ${formData.lastName}`);
        console.log(fullName);
    };

    return(
        <div className="display">
            <h1>Full Name Display</h1>
            <form onSubmit = {handleSubmite}>
                <div>
                    <lable>
                        Firt Name:{" "}
                        <input 
                            type = "text"
                            name = "firstName"
                            value = {formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </lable>
                </div>
                <div>
                    <lable>
                        Last Name:{" "}
                        <input 
                            type = "text"
                            name = "lastName"
                            value = {formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </lable>
                </div>
                <button type="submit">Submit</button>
            </form>
            {fullName && (
                <p> Full Name: {fullName}</p>
            )}
        </div>
    );

    
}
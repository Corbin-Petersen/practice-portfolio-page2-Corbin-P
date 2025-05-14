import React, { useState } from "react";

export default function UserForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`Updating ${name}:`, value);
        setFormData((data) => ({
            ...data,
            [name]: value,
        }));
    };

    const isComplete = formData.name && formData.email && formData.feedback;

    return (
    <div className="form-container">
        <h1>User Form</h1>
        <form>
            <label>
                Name: <br/>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Email: <br/>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Feedback: <br/>
                <textarea
                name="feedback"
                value={formData.feedback}
                onChange={handleChange}
                />
            </label>
            <br/>
            <button disabled={!isComplete}>SUBMIT</button>
        </form>
        <div className="preview-area">
            <h2>Preview</h2>
            <p><b>Name:</b> &nbsp;{formData.name}</p>
            <p><b>Email:</b> &nbsp;{formData.email}</p>
            <p><b>Feedback:</b> &nbsp;{formData.feedback}</p>
        </div>
    </div>
    );
}
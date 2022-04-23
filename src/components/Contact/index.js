import React, { useState } from "react";
// bring in helper function for validations
import { validateEmail, validateMessage } from "../../utils/helpers";

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [formState, setFormState] = useState({
        // Declare a state variable `formState` using `useState`
        // Give the method to update it a name, `setFormState`
        // useState accepts argument for the default or initial value of the state variable. In our case, we set it to an empty string for each.

        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = formState;
    let form = document.getElementById("contact-form");
    let text = document.getElementById("comment");
    // use handleChange method and validate helpers 
    function handleChange(e) {
        // email validation
        if (e.target.name === "email") {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage("Your email is invalid.");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
        } if (e.target.name === "message") {
            // message validation
            const isMessage = validateMessage(e.target.value);
            console.log(isMessage);
            if (!isMessage) {
                setErrorMessage("Message is required");
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage("");
                }
            }
        }
        if (!errorMessage) {
            // if no errors in form, use formState for each field
            setFormState({ ...formState, [e.target.name]: e.target.value });
            // console.log("errorMessage", errorMessage);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            // submit changes formState
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
            form.reset();
            text.value = ('');

        }
    };

    //   console.log(formState);
    return (
        <section className="container">
            {/* initiate handleSubmit function on form submit */}
            <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
                <h1>Contact me</h1>
                <div>
                    <label htmlFor="name">Name:</label>
                    <br></br>
                    <input
                        type="text"
                        defaultValue={name}
                        onBlur={handleChange}

                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <br></br>
                    <input
                        type="email"
                        defaultValue={email}
                        onBlur={handleChange}
                        // onBlur will only run handleChange once new field is selected

                        name="email"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <br></br>
                    <textarea id="comment"
                        name="message"
                        defaultValue={message}
                        onBlur={handleChange}
                        // onBlur will only run handleChange once new field is selected

                        rows="5"
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button className="button" type="submit">Submit</button>
            </form>
        </section >
    );
}

export default ContactForm;
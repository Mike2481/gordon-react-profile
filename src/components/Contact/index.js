import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = formState;
    function handleChange(e) {
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
        }
        if (!errorMessage) {
          setFormState({ ...formState, [e.target.name]: e.target.value });
          console.log("errorMessage", errorMessage);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value });
            console.log('Form', formState);
        }
    };

    //   console.log(formState);
    return (
        <section>
            <h1 data-testid="h1tag">Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        defaultValue={name}
                        onBlur={handleChange}
                        name="name"
                    />
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        defaultValue={email}
                        onBlur={handleChange}
                        name="email"
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea
                        name="message"
                        defaultValue={message}
                        onBlur={handleChange}
                        rows="5"
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="button" type="submit">Submit</button>
            </form>
        </section >
    );
}

export default ContactForm;
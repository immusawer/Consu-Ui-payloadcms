
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);

    const handleForm = async (event) => {
        event.preventDefault();
        setLoading(true);

        const formData = {
            name: event.target.name.value,
            email: event.target.email.value,
            phone: event.target.phone.value,
            comments: event.target.comments.value,
        };

        try {
            const response = await fetch('http://localhost:3000/api/contact-submissions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Thanks For Your Message");
                event.target.reset();
            } else {
                const error = await response.json();
                toast.error(error.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            toast.error("Failed to submit form. Please try again later.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <form className="contact-form contact-form" onSubmit={handleForm}>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group">
                            <input className="form-control" id="name" name="name" placeholder="Name" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="email" name="email" placeholder="Email*" type="email" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="form-group">
                            <input className="form-control" id="phone" name="phone" placeholder="Phone" type="text" autoComplete='off' required />
                            <span className="alert-error"></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="form-group comments">
                            <textarea className="form-control" id="comments" name="comments" placeholder="Tell Us About Project *" autoComplete='off' required></textarea>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit" disabled={loading}>
                            {loading ? (
                                <span>Sending...</span>
                            ) : (
                                <>
                                    <i className="fa fa-paper-plane"></i> Get in Touch
                                </>
                            )}
                        </button>
                    </div>
                </div>
                <div className="col-lg-12 alert-notification">
                    <div id="message" className="alert-msg"></div>
                </div>
            </form>
        </>
    );
};

export default ContactForm;
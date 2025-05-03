
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

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
            const response = await axios.post('api/api/contact-submissions', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.status === 201) {
                toast.success("Thanks For Your Message", {
                  autoClose: 3000, // in milliseconds (3 seconds)
                });
                event.target.reset();
              }
        } catch (error) {
            console.error('Error submitting form:', error);
            const errorMessage = error.response?.data?.message || "Failed to submit form. Please try again later.";
            toast.error(errorMessage);
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
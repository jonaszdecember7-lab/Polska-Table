import { useState } from "react";
export default function Contact() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    function submitForm(event) {
        event.preventDefault()
        setFormSubmitted(true);
        event.target.reset();
        setTimeout(() => {
            setFormSubmitted(false)
        }, 10000);
    }



    return (
        <div className="contact-page">
            <div className="hero-small">
                <h1>Get in Touch 🍽️</h1>
                <p>We'd love to hear from you! Reservations, questions, or just to say hi.</p>
            </div>
            <div className="contact-grid">
                <div className="contact-info">
                    <h2>Visit Us</h2>
                    <p>123 Polish Street<br />Birmingham, B5 XXX<br />United Kingdom</p>

                    <h2>Call or Email</h2>
                    <p>Phone: +44 123 456 7890</p>
                    <p>Email: hello@polskatable.co.uk</p>

                    <h2>Opening Hours</h2>
                    <ul>
                        <li>Monday–Thursday: 12:00–22:00</li>
                        <li>Friday–Saturday: 12:00–23:00</li>
                        <li>Sunday: 12:00–20:00</li>
                    </ul>
                </div>
                <div className="contact-form">
                    <form onSubmit={submitForm}>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Email Address" required />
                        <input type="tel" placeholder="Phone Number" />
                        <textarea placeholder="Your Message (e.g., reservation request)" rows="5" required></textarea>
                        <select required>
                            <option value="">Reason for Contact</option>
                            <option value="reservation">Table Reservation</option>
                            <option value="general">General Enquiry</option>
                            <option value="event">Private Event</option>
                        </select>
                        <button type="submit" >Send Message</button>
                    </form>
                    {formSubmitted && <p style={{ color: 'green', fontWeight: 'bold' }}>Thanks! We'll get back to you soon.</p>}
                </div>
            </div>
            <div className="map">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.9999999999995!2d-1.902221!3d52.486243!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc9b5d0d4e1b%3A0x4b0b0b0b0b0b0b0b!2sBirmingham%2C%20UK!5e0!3m2!1sen!2suk!4v1736680000000!5m2!1sen!2suk"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}
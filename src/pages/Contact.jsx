import { useState } from 'react';
import './Contact.css';

const faqs = [
    {
        q: 'How long does delivery take?',
        a: 'Domestic orders within Nigeria are typically delivered within 2–4 business days. International orders take 7–14 business days depending on your location.',
    },
    {
        q: 'Can I return or exchange an item?',
        a: 'Yes! We accept returns within 14 days of delivery for unused items in original condition. Contact our support team to initiate a return.',
    },
    {
        q: 'Do you ship internationally?',
        a: 'Absolutely. We currently ship to over 30 countries. Shipping fees and timelines vary by destination.',
    },
    {
        q: 'How do I track my order?',
        a: 'Once your order ships, you will receive an email with a tracking number and a link to our tracking portal.',
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [openFaq, setOpenFaq] = useState(null);

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (form.name && form.email && form.message) {
            setSubmitted(true);
        }
    };

    return (
        <main>
            {/* Page Header */}
            <section className="contact-header">
                <h2>Get in Touch</h2>
                <p>We would love to hear from you. Reach out anytime!</p>
            </section>

            {/* Contact Info Cards */}
            <section className="contact-info section-p1">
                <div className="info-card">
                    <div className="info-icon-wrap">
                        <i className="fa fa-map-marker-alt" />
                    </div>
                    <h4>Our Location</h4>
                    <p>Babcock University, Ilishan-Remo,<br />Ogun State, Nigeria</p>
                </div>
                <div className="info-card">
                    <div className="info-icon-wrap">
                        <i className="fa fa-phone-alt" />
                    </div>
                    <h4>Phone</h4>
                    <p>+1 (661) 901-3194</p>
                    <p>+234 816 605 9298</p>
                </div>
                <div className="info-card">
                    <div className="info-icon-wrap">
                        <i className="fa fa-envelope" />
                    </div>
                    <h4>Email Us</h4>
                    <p>support@carastore.com</p>
                    <p>orders@carastore.com</p>
                </div>
                <div className="info-card">
                    <div className="info-icon-wrap">
                        <i className="fa fa-clock" />
                    </div>
                    <h4>Working Hours</h4>
                    <p>Monday – Saturday</p>
                    <p>10:00 AM – 10:00 PM</p>
                </div>
            </section>

            {/* Form + Map */}
            <section className="contact-body section-p1">
                <div className="contact-form-wrap">
                    <span className="contact-eyebrow">Send a Message</span>
                    <h3>We'll Get Back to You Within 24 Hours</h3>

                    {submitted ? (
                        <div className="form-success">
                            <i className="fa fa-check-circle" />
                            <h4>Message Sent!</h4>
                            <p>Thanks for reaching out, {form.name}. Our team will reply to <strong>{form.email}</strong> shortly.</p>
                            <button
                                className="normal"
                                onClick={() => { setSubmitted(false); setForm({ name: '', email: '', subject: '', message: '' }); }}
                            >
                                Send Another
                            </button>
                        </div>
                    ) : (
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Michael Davis"
                                        value={form.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="carastore@gmail.com"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Order enquiry, returns, etc."
                                    value={form.subject}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    rows={5}
                                    placeholder="Type in your message here..."
                                    value={form.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="contact-submit">
                                Send Message <i className="fa fa-paper-plane" />
                            </button>
                        </form>
                    )}
                </div>

                <div className="contact-map-wrap">
                    <span className="contact-eyebrow">Find Us</span>
                    <h3>Our Headquarters</h3>
                    <div className="contact-map">
                        <iframe
                            title="Cara Store Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.1!2d3.7171!3d6.8965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sBabcock+University+Ilishan-Remo!5e0!3m2!1sen!2sng!4v1617000000000"
                            width="100%"
                            height="320"
                            style={{ border: 0, borderRadius: '10px' }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    <div className="contact-social">
                        <p>Follow us on social media</p>
                        <div className="contact-social-icons">
                            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook" /></a>
                            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
                            <a href="#" aria-label="X / Twitter"><i className="fa-brands fa-x-twitter" /></a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="contact-faq section-p1">
                <div className="faq-header">
                    <span className="contact-eyebrow">Common Questions</span>
                    <h3>Frequently Asked Questions</h3>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            className={`faq-item ${openFaq === i ? 'open' : ''}`}
                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                        >
                            <div className="faq-question">
                                <span>{faq.q}</span>
                                <i className={`fa ${openFaq === i ? 'fa-minus' : 'fa-plus'}`} />
                            </div>
                            {openFaq === i && (
                                <div className="faq-answer">
                                    <p>{faq.a}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

import { Link } from 'react-router-dom';
import './About.css';

const values = [
    {
        icon: 'fa fa-leaf',
        title: 'Sustainability',
        desc: 'We design with the planet in mind — using eco-friendly materials and ethical manufacturing processes to reduce our footprint.',
    },
    {
        icon: 'fa fa-star',
        title: 'Quality First',
        desc: 'Every stitch matters. Our pieces are crafted to last, ensuring you always look and feel your best wash after wash.',
    },
    {
        icon: 'fa fa-users',
        title: 'Community',
        desc: 'Cara is more than a brand — it is a community of fashion lovers who believe self-expression through style is a universal right.',
    },
    {
        icon: 'fa fa-bolt',
        title: 'Bold by Design',
        desc: 'We champion bold, fearless designs that reflect the energy and diversity of our global customers.',
    },
];

const team = [
    {
        name: 'Adedokun Modesireoluwa',
        role: 'Founder & Creative Director',
        image: '/images/jpg/Modesireoluwa.jpg',
        bio: 'Modesireoluwa founded Cara in 2019 with a vision to bring world-class fashion to Africa and beyond. His eye for design drives every collection.',
    },
    {
        name: 'Akanji',
        role: 'Head of Operations',
        image: '/images/jpg/Akanji.jpg',
        bio: 'Akanji ensures every order is fulfilled with precision and every customer interaction is world-class.',
    },
];

const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '200+', label: 'Products' },
    { value: '30+', label: 'Countries Shipped' },
    { value: '6', label: 'Years in Business' },
];

export default function About() {
    return (
        <main>
            {/* Page Header */}
            <section className="about-header">
                <h2>Our Story</h2>
                <p>Built with passion. Worn with pride.</p>
            </section>

            {/* Mission Statement */}
            <section className="about-mission section-p1">
                <div className="about-mission-text">
                    <span className="about-eyebrow">Who We Are</span>
                    <h2>Dressing the World,<br />One Outfit at a Time</h2>
                    <p>
                        Cara was born from a simple belief — that great fashion should be accessible to everyone, everywhere.
                        Founded in 2019 in Nigeria, we set out to create a clothing brand that blends global trends with
                        authentic African sensibility, delivering styles that are bold, comfortable and made to last.
                    </p>
                    <p>
                        Today, we serve customers across 30 countries, shipping everything from laid-back streetwear to
                        elegant occasion wear — all crafted with care and designed to make you feel incredible.
                    </p>
                    <Link to="/shop"><button className="normal about-cta-btn">Shop the Collection</button></Link>
                </div>
                <div className="about-mission-img">
                    <img src="/images/jpg/Mymission.jpg" alt="Our Mission" />
                </div>
            </section>

            {/* Stats */}
            <section className="about-stats">
                {stats.map((s, i) => (
                    <div key={i} className="stat-box">
                        <h3>{s.value}</h3>
                        <p>{s.label}</p>
                    </div>
                ))}
            </section>

            {/* Our History */}
            <section className="about-history section-p1">
                <div className="about-history-img">
                    <img src="/images/jpg/Garage.jpg" alt="Our History" />
                </div>
                <div className="about-history-text">
                    <span className="about-eyebrow">Our History</span>
                    <h2>From a Garage to a Global Brand</h2>
                    <p>
                        What started as a small operation out of a garage in Ogun State quickly grew into one of Nigeria's
                        most recognised fashion labels. In our first year, we sold over 1,000 units through word of mouth alone.
                        By 2021, Cara had a full online store and a team of 15 passionate creatives.
                    </p>
                    <p>
                        We have never forgotten our roots. Every collection is a love letter to the streets, the markets and
                        the energy of everyday African life — reimagined through a modern, global lens.
                    </p>
                </div>
            </section>

            {/* Vision & Goal */}
            <section className="about-vision-goal section-p1">
                <div className="vg-card">
                    <img src="/images/jpg/Thevision.jpg" alt="Our Vision" />
                    <div className="vg-card-body">
                        <i className="fa fa-eye vg-icon" />
                        <h3>Our Vision</h3>
                        <p>To become Africa's most loved fashion brand — creating clothing that empowers individuals to express who they truly are, regardless of where they come from.</p>
                    </div>
                </div>
                <div className="vg-card">
                    <img src="/images/jpg/Mygoal.jpg" alt="Our Goal" />
                    <div className="vg-card-body">
                        <i className="fa fa-bullseye vg-icon" />
                        <h3>Our Goal</h3>
                        <p>To ship 1 million units by 2026 while maintaining a zero-compromise standard on quality, ethical sourcing and customer satisfaction across every market we serve.</p>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-values section-p1">
                <div className="about-values-header">
                    <span className="about-eyebrow">What Drives Us</span>
                    <h2>Our Core Values</h2>
                </div>
                <div className="values-grid">
                    {values.map((v, i) => (
                        <div key={i} className="value-card">
                            <div className="value-icon-wrap">
                                <i className={v.icon} />
                            </div>
                            <h4>{v.title}</h4>
                            <p>{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="about-team section-p1">
                <div className="about-values-header">
                    <span className="about-eyebrow">The Faces Behind Cara</span>
                    <h2>Meet Our Team</h2>
                </div>
                <div className="team-grid">
                    {team.map((member, i) => (
                        <div key={i} className="team-card">
                            <div className="team-img-wrap">
                                <img src={member.image} alt={member.name} />
                            </div>
                            <div className="team-body">
                                <h4>{member.name}</h4>
                                <span className="team-role">{member.role}</span>
                                <p>{member.bio}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="about-bottom-cta">
                <div className="about-bottom-cta-inner">
                    <h3>Ready to Join the Cara Family?</h3>
                    <p>Explore our latest collection and find your next favourite outfit.</p>
                    <div className="about-bottom-actions">
                        <Link to="/shop"><button className="normal">Shop Now</button></Link>
                        <Link to="/contact"><button className="white">Contact Us</button></Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

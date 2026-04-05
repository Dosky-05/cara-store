import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Blog.css';

const categories = ['All', 'Fashion', 'Lifestyle', 'Style Tips', 'New Arrivals', 'Sustainability'];

const posts = [
    {
        id: 1,
        title: 'Summer 2025 Trends You Need to Know',
        excerpt: 'Discover the hottest fashion trends taking over runways and streets this summer — from vibrant florals to structured minimalism.',
        category: 'Fashion',
        date: 'March 28, 2025',
        readTime: '5 min read',
        image: '/images/gallery/011.jpg',
        featured: true,
    },
    {
        id: 2,
        title: 'How to Build a Capsule Wardrobe on a Budget',
        excerpt: 'A capsule wardrobe is all about quality over quantity. Learn how to choose timeless pieces that work all year round without breaking the bank.',
        category: 'Style Tips',
        date: 'March 22, 2025',
        readTime: '7 min read',
        image: '/images/gallery/012.jpg',
        featured: true,
    },
    {
        id: 3,
        title: 'Introducing Our Spring/Summer New Arrivals',
        excerpt: 'Fresh styles have dropped in the Cara store. Be the first to explore our newest collection of prints, cuts and palettes.',
        category: 'New Arrivals',
        date: 'March 15, 2025',
        readTime: '3 min read',
        image: '/images/gallery/013.jpg',
        featured: true,
    },
    {
        id: 4,
        title: 'Street Style Inspiration from Lagos to London',
        excerpt: 'Global street fashion is evolving fast. We spotlight how our customers are rocking Cara fits from Lagos to London.',
        category: 'Lifestyle',
        date: 'March 10, 2025',
        readTime: '6 min read',
        image: '/images/gallery/014.jpg',
    },
    {
        id: 5,
        title: 'Sustainable Fashion: Our Commitment to the Planet',
        excerpt: "At Cara, we believe looking good should not cost the earth. Here's how we are making fashion more sustainable, one stitch at a time.",
        category: 'Sustainability',
        date: 'March 5, 2025',
        readTime: '8 min read',
        image: '/images/gallery/015.jpg',
    },
    {
        id: 6,
        title: '5 Ways to Style an Oversized Tee',
        excerpt: 'The oversized tee is a wardrobe staple. From tucked-in to layered, here are five versatile looks you can create with just one piece.',
        category: 'Style Tips',
        date: 'February 28, 2025',
        readTime: '4 min read',
        image: '/images/gallery/016.jpg',
    },
    {
        id: 7,
        title: 'Men\'s Fashion Decoded: Key Looks for 2025',
        excerpt: "Men's fashion is having a major moment. We break down the essential looks, silhouettes and colour palettes every guy needs this year.",
        category: 'Fashion',
        date: 'February 20, 2025',
        readTime: '5 min read',
        image: '/images/gallery/017.jpg',
    },
    {
        id: 8,
        title: 'The Art of Accessorising: Less is More',
        excerpt: 'Great accessories elevate any outfit. Learn how to choose the right pieces to complement your look without going overboard.',
        category: 'Style Tips',
        date: 'February 14, 2025',
        readTime: '4 min read',
        image: '/images/gallery/018.jpg',
    },
    {
        id: 9,
        title: 'Behind the Seams: How Cara Clothes Are Made',
        excerpt: "Ever wondered what happens before your favourite Cara piece reaches your door? Take a tour behind the scenes of our production process.",
        category: 'Lifestyle',
        date: 'February 5, 2025',
        readTime: '6 min read',
        image: '/images/gallery/019.jpg',
    },
];

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState('All');

    const filtered = activeCategory === 'All'
        ? posts
        : posts.filter(p => p.category === activeCategory);

    const featured = posts.filter(p => p.featured);

    return (
        <main>
            {/* Page Header */}
            <section className="blog-header">
                <h2>Cara Journal</h2>
                <p>Style guides, trend reports &amp; stories from the Cara community</p>
            </section>

            {/* Featured Posts */}
            <section className="blog-featured section-p1">
                <h3 className="section-title">Featured Stories</h3>
                <div className="featured-grid">
                    {featured.map((post, i) => (
                        <article key={post.id} className={`featured-card ${i === 0 ? 'featured-main' : 'featured-side'}`}>
                            <div className="blog-card-img-wrap">
                                <img src={post.image} alt={post.title} />
                                <span className="blog-tag">{post.category}</span>
                            </div>
                            <div className="blog-card-body">
                                <div className="blog-meta">
                                    <span><i className="fa fa-calendar" /> {post.date}</span>
                                    <span><i className="fa fa-clock" /> {post.readTime}</span>
                                </div>
                                <h4>{post.title}</h4>
                                <p>{post.excerpt}</p>
                                <Link to="#" className="read-more">Read More <i className="fa fa-arrow-right" /></Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* All Posts */}
            <section className="blog-all section-p1">
                <div className="blog-top-bar">
                    <h3 className="section-title">All Articles</h3>
                    <div className="blog-cats">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`cat-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="blog-grid">
                    {filtered.map(post => (
                        <article key={post.id} className="blog-card">
                            <div className="blog-card-img-wrap">
                                <img src={post.image} alt={post.title} />
                                <span className="blog-tag">{post.category}</span>
                            </div>
                            <div className="blog-card-body">
                                <div className="blog-meta">
                                    <span><i className="fa fa-calendar" /> {post.date}</span>
                                    <span><i className="fa fa-clock" /> {post.readTime}</span>
                                </div>
                                <h4>{post.title}</h4>
                                <p>{post.excerpt}</p>
                                <Link to="#" className="read-more">Read More <i className="fa fa-arrow-right" /></Link>
                            </div>
                        </article>
                    ))}
                </div>

                {filtered.length === 0 && (
                    <div className="blog-empty">
                        <p>No articles in this category yet. Check back soon!</p>
                    </div>
                )}
            </section>

            {/* Newsletter CTA */}
            <section className="blog-cta">
                <div className="blog-cta-content">
                    <h3>Never Miss a Style Drop</h3>
                    <p>Subscribe to the Cara Journal for weekly fashion inspiration, style guides and exclusive early access.</p>
                    <div className="blog-cta-form">
                        <input type="email" placeholder="Enter your email address" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </section>
        </main>
    );
}

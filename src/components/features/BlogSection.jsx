import React from 'react';
import { motion } from 'framer-motion';
import { blogPosts, getFeaturedBlogs } from '../../data/blogData';
import './BlogSection.css';

// Show top 6 or all if less
const displayPosts = blogPosts.slice(0, Math.min(blogPosts.length, 6));

export default function BlogSection() {
    return (
        <section id="blogs" className="blog-section">
            <div className="blog-container">
                <div className="blog-header">
                    <h2>Latest Insights</h2>
                    <p>Stay updated with the latest business trends and regulations in the UAE.</p>
                </div>

                <div className="blog-grid">
                    {displayPosts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            className="blog-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{post.category}</span>
                                    <span className="blog-date">{post.date}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <div className="blog-footer">
                                    <span className="read-time">{post.readTime}</span>
                                    <button
                                        className="read-more"
                                        onClick={() => window.location.href = `/resources/${post.id}`}
                                    >
                                        Read Article →
                                    </button>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogData';
import ReactMarkdown from 'react-markdown';
import '../styles/pages/BlogPost.css';

export default function BlogPost() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundPost = blogPosts.find(p => p.id === id);
        if (foundPost) {
            setPost(foundPost);
        } else {
            navigate('/resources');
        }
    }, [id, navigate]);

    if (!post) return <div className="loading">Loading...</div>;

    return (
        <div className="blog-post-page">
            <article className="blog-article">
                <div className="container">
                    <motion.div
                        className="article-header"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="article-meta">
                            <span className="category">{post.category}</span>
                            <span className="date">{post.date}</span>
                            <span className="read-time">{post.readTime}</span>
                        </div>
                        <h1>{post.title}</h1>
                        <div className="tags">
                            {post.tags.map(tag => (
                                <span key={tag} className="tag">#{tag}</span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        className="article-content"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <ReactMarkdown>{post.content}</ReactMarkdown>
                    </motion.div>

                    <div className="related-pictures">
                        <h3>Related Pictures</h3>
                        <div className="pictures-grid">
                            {/* Placeholder images as requested */}
                            <div className="related-img-placeholder">
                                <span>Related Image 1</span>
                            </div>
                            <div className="related-img-placeholder">
                                <span>Related Image 2</span>
                            </div>
                            <div className="related-img-placeholder">
                                <span>Related Image 3</span>
                            </div>
                        </div>
                    </div>

                    <div className="article-footer">
                        <button className="back-btn" onClick={() => navigate('/resources')}>
                            ← Back to Resources
                        </button>
                    </div>
                </div>
            </article>
        </div>
    );
}

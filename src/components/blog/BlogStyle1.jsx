import React, { useEffect, useState } from 'react';
import SingleBlog1 from './SingleBlog1';

const BlogStyle1 = ({ sectionClass }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('api/api/blog-posts?limit=3&sort=-date&status=published');
        
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }

        const data = await response.json();
        
        if (data?.docs) {
          // Add animation delays to the first 3 posts
          const postsWithAnimation = data.docs.map((post, index) => ({
            ...post,
            animationDelay: `${300 + (index * 200)}ms`,
            thumb: `${index + 4}.jpg` // Fallback thumbnails
          }));
          setBlogPosts(postsWithAnimation);
        }
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) return <div className="loading-spinner">Loading blog posts...</div>;
  if (error) return <div className="error-notice">Error loading blog posts</div>;

  return (
    <div className={`home-blog-area default-padding bottom-less ${sectionClass || ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <div className="site-heading text-center">
              <h4 className="sub-heading">Latest Blog</h4>
              <h2 className="title">News & Updates</h2>
              <div className="devider"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {blogPosts.map(blog => (
            <SingleBlog1 blog={blog} key={blog.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogStyle1;
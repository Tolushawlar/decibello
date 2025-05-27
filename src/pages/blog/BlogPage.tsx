import React from 'react';
import { Link } from 'react-router-dom';
import ContactFooterSection from '../../components/ContactFooterSection';

const BlogPage = () => {
  // Sample blog posts data
  const featuredPost = {
    id: 'post-1',
    title: 'The Future of Data-Driven Marketing in 2025',
    excerpt: 'Explore how AI, machine learning, and predictive analytics are transforming the marketing landscape and how businesses can stay ahead.',
    image: 'https://picsum.photos/1200/600?random=40',
    category: 'Trends',
    author: 'Sarah Johnson',
    date: 'May 15, 2025',
    readTime: '8 min read'
  };

  const blogPosts = [
    {
      id: 'post-2',
      title: 'How to Build an Effective Customer Segmentation Strategy',
      excerpt: 'Learn the key principles of customer segmentation and how to implement them for more targeted marketing campaigns.',
      image: 'https://picsum.photos/600/400?random=41',
      category: 'Strategy',
      author: 'Michael Chen',
      date: 'May 10, 2025',
      readTime: '6 min read'
    },
    {
      id: 'post-3',
      title: 'The ROI of Content Marketing: Measuring What Matters',
      excerpt: 'Discover the metrics that truly matter when evaluating the success of your content marketing efforts.',
      image: 'https://picsum.photos/600/400?random=42',
      category: 'Analytics',
      author: 'Emma Rodriguez',
      date: 'May 5, 2025',
      readTime: '5 min read'
    },
    {
      id: 'post-4',
      title: 'Building Brand Loyalty in a Digital-First World',
      excerpt: 'Strategies for creating meaningful connections with customers in an increasingly digital marketplace.',
      image: 'https://picsum.photos/600/400?random=43',
      category: 'Branding',
      author: 'David Park',
      date: 'April 28, 2025',
      readTime: '7 min read'
    },
    {
      id: 'post-5',
      title: 'Privacy-First Marketing: Navigating the Cookieless Future',
      excerpt: 'How marketers can adapt their strategies in response to increasing privacy regulations and the phasing out of third-party cookies.',
      image: 'https://picsum.photos/600/400?random=44',
      category: 'Compliance',
      author: 'Olivia Martinez',
      date: 'April 22, 2025',
      readTime: '9 min read'
    },
    {
      id: 'post-6',
      title: 'Voice Search Optimization: The Next Frontier in SEO',
      excerpt: 'Prepare your digital marketing strategy for the growing prevalence of voice search and virtual assistants.',
      image: 'https://picsum.photos/600/400?random=45',
      category: 'SEO',
      author: 'James Wilson',
      date: 'April 15, 2025',
      readTime: '6 min read'
    }
  ];

  const categories = [
    'All',
    'Trends',
    'Strategy',
    'Analytics',
    'Branding',
    'SEO',
    'Compliance'
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">Decibello Blog</h1>
            <p className="text-xl text-dark/70 max-w-3xl mx-auto">
              Insights, trends, and strategies from our experts to help you navigate the evolving digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-dark">Featured Article</h2>
          </div>
          
          <div className="bg-light rounded-xl overflow-hidden shadow-sm">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10 flex flex-col">
                <div className="mb-4">
                  <span className="inline-block bg-primary/10 text-primary text-sm px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-dark mb-4">{featuredPost.title}</h3>
                <p className="text-dark/70 mb-6">{featuredPost.excerpt}</p>
                <div className="flex items-center text-sm text-dark/50 mb-6 mt-auto">
                  <span>{featuredPost.author}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.date}</span>
                  <span className="mx-2">•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                >
                  <span className="mr-2">Read Article</span>
                  <svg 
                    className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="mb-12">
            <div className="flex flex-wrap gap-2">
              {categories.map((category, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 
                      ? 'bg-primary text-white' 
                      : 'bg-light text-dark/70 hover:bg-light/70'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-block bg-white/80 backdrop-blur-sm text-primary text-xs px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-dark mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-dark/70 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center text-xs text-dark/50 mb-4">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center text-primary hover:text-secondary transition-colors group"
                  >
                    <span className="mr-2">Read More</span>
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center">
            <div className="flex space-x-2">
              <button className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark/70 hover:bg-light/70 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">1</button>
              <button className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark/70 hover:bg-light/70 transition-colors">2</button>
              <button className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark/70 hover:bg-light/70 transition-colors">3</button>
              <button className="w-10 h-10 rounded-full bg-light flex items-center justify-center text-dark/70 hover:bg-light/70 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-dark/70 mb-8">
            Stay updated with the latest insights, trends, and strategies in digital marketing.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
            <button 
              type="submit"
              className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-xs text-dark/50 mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </section>

      <ContactFooterSection />
    </>
  );
};

export default BlogPage;
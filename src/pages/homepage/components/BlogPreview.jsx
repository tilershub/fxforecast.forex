import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const BlogPreview = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Mastering Trading Psychology: The Mental Game of FTMO Challenges",
      excerpt: "Discover the psychological frameworks that separate successful funded traders from those who struggle with emotional decision-making.",
      category: "Psychology",
      readTime: "8 min read",
      publishDate: "Dec 15, 2024",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=400&fit=crop",
      author: "FXFORECAST Team",
      featured: true
    },
    {
      id: 2,
      title: "Advanced Risk Management: Beyond Basic Position Sizing",
      excerpt: "Learn sophisticated risk management techniques that professional traders use to protect capital while maximizing growth potential.",
      category: "Risk Management",
      readTime: "12 min read",
      publishDate: "Dec 12, 2024",
      image: "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=800&h=400&fit=crop",
      author: "FXFORECAST Team",
      featured: false
    },
    {
      id: 3,
      title: "FTMO Challenge Preparation: A Systematic Approach",
      excerpt: "Step-by-step guide to preparing for FTMO evaluations using our proven OUR methodology framework.",
      category: "FTMO Strategy",
      readTime: "15 min read",
      publishDate: "Dec 10, 2024",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=800&h=400&fit=crop",
      author: "FXFORECAST Team",
      featured: false
    }
  ];

  const categories = [
    { name: "Trading Psychology", count: 12, color: "bg-blue-100 text-blue-800" },
    { name: "Risk Management", count: 8, color: "bg-green-100 text-green-800" },
    { name: "FTMO Strategy", count: 15, color: "bg-purple-100 text-purple-800" },
    { name: "Market Analysis", count: 6, color: "bg-orange-100 text-orange-800" }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Latest Trading Insights
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Educational content that builds authority while providing genuine value. Learn from real trading experiences and systematic approaches.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured Post */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-brand-elevated transition-all duration-300">
              <div className="relative">
                <Image
                  src={featuredPosts?.[0]?.image}
                  alt={featuredPosts?.[0]?.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                    <Icon name="Star" size={14} className="mr-1" />
                    Featured
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {featuredPosts?.[0]?.category}
                  </span>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Icon name="Clock" size={14} />
                    <span>{featuredPosts?.[0]?.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 hover:text-primary transition-colors duration-200">
                  <Link to="/blog-hub">{featuredPosts?.[0]?.title}</Link>
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPosts?.[0]?.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <Icon name="User" size={16} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{featuredPosts?.[0]?.author}</div>
                      <div className="text-xs text-muted-foreground">{featuredPosts?.[0]?.publishDate}</div>
                    </div>
                  </div>
                  
                  <Link to="/blog-hub">
                    <Button variant="ghost" size="sm" iconName="ArrowRight" iconPosition="right">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            {/* Recent Posts */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="text-lg font-bold text-foreground mb-6">Recent Posts</h4>
              
              <div className="space-y-6">
                {featuredPosts?.slice(1)?.map((post) => (
                  <div key={post?.id} className="group">
                    <div className="flex space-x-4">
                      <div className="flex-shrink-0">
                        <Image
                          src={post?.image}
                          alt={post?.title}
                          className="w-16 h-16 object-cover rounded-lg"
                        />
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <h5 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200 line-clamp-2 mb-2">
                          <Link to="/blog-hub">{post?.title}</Link>
                        </h5>
                        
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{post?.category}</span>
                          <span>•</span>
                          <span>{post?.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-border">
                <Link to="/blog-hub">
                  <Button variant="outline" size="sm" fullWidth iconName="BookOpen" iconPosition="right">
                    View All Posts
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Categories */}
            <div className="bg-card rounded-xl p-6 border border-border">
              <h4 className="text-lg font-bold text-foreground mb-6">Categories</h4>
              
              <div className="space-y-3">
                {categories?.map((category, index) => (
                  <Link
                    key={index}
                    to="/blog-hub"
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-surface transition-colors duration-200 group"
                  >
                    <span className="text-sm font-medium text-foreground group-hover:text-primary">
                      {category?.name}
                    </span>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${category?.color}`}>
                      {category?.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <div className="text-center">
                <Icon name="Mail" size={32} className="mx-auto mb-4 opacity-90" />
                <h4 className="text-lg font-bold mb-2">Trading Insights Newsletter</h4>
                <p className="text-sm opacity-90 mb-4">
                  Get weekly market analysis and framework updates delivered to your inbox.
                </p>
                
                <Button 
                  variant="secondary" 
                  size="sm" 
                  fullWidth
                  iconName="ArrowRight" 
                  iconPosition="right"
                  className="bg-white text-primary hover:bg-white/90"
                >
                  Subscribe Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
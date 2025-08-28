import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RelatedArticles = ({ currentPostId, category }) => {
  const relatedPosts = [
    {
      id: 'related-1',
      title: 'Position Sizing: The Foundation of Risk Management',
      excerpt: 'Learn how proper position sizing can make or break your trading career, with practical examples from successful FTMO challenges.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop',
      category: 'Risk Management',
      readTime: 8,
      slug: 'position-sizing-foundation-risk-management'
    },
    {
      id: 'related-2',
      title: 'Psychology of Systematic Trading',
      excerpt: 'Discover how to overcome emotional trading decisions and stick to your systematic approach during challenging market conditions.',
      image: 'https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg?w=400&h=250&fit=crop',
      category: 'Trading Psychology',
      readTime: 12,
      slug: 'psychology-systematic-trading'
    },
    {
      id: 'related-3',
      title: 'FTMO Challenge: Week 1 Strategy',
      excerpt: 'A detailed breakdown of the optimal approach for your first week in the FTMO challenge, including risk parameters and trade selection.',
      image: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=400&h=250&fit=crop',
      category: 'FTMO Challenge Prep',
      readTime: 15,
      slug: 'ftmo-challenge-week-1-strategy'
    }
  ];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Risk Management':
        return 'Shield';
      case 'Trading Psychology':
        return 'Brain';
      case 'FTMO Challenge Prep':
        return 'Trophy';
      default:
        return 'FileText';
    }
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground flex items-center">
          <Icon name="BookOpen" size={20} className="mr-2 text-primary" />
          Related Articles
        </h3>
        <Link 
          to="/blog-hub"
          className="text-sm text-primary hover:text-primary/80 transition-colors duration-200 flex items-center"
        >
          View All
          <Icon name="ArrowRight" size={14} className="ml-1" />
        </Link>
      </div>
      <div className="space-y-4">
        {relatedPosts?.map((post) => (
          <article key={post?.id} className="group flex space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors duration-200">
            <div className="flex-shrink-0 w-20 h-20 overflow-hidden rounded-lg">
              <Image
                src={post?.image}
                alt={post?.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center space-x-2 mb-2">
                <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                  <Icon name={getCategoryIcon(post?.category)} size={10} className="mr-1" />
                  {post?.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center">
                  <Icon name="Clock" size={12} className="mr-1" />
                  {post?.readTime} min
                </span>
              </div>
              
              <Link 
                to={`/blog-hub/${post?.slug}`}
                className="group-hover:text-primary transition-colors duration-200"
              >
                <h4 className="font-semibold text-sm mb-1 line-clamp-2">{post?.title}</h4>
              </Link>
              
              <p className="text-xs text-muted-foreground line-clamp-2">{post?.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-6 pt-6 border-t border-border">
        <div className="bg-gradient-to-r from-primary/10 to-brand-royal/10 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
              <Icon name="Lightbulb" size={16} className="text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm text-foreground mb-1">
                Ready to Apply These Concepts?
              </h4>
              <p className="text-xs text-muted-foreground mb-3">
                Test your understanding with our position size calculator and start your FTMO challenge journey.
              </p>
              <div className="flex space-x-2">
                <Link
                  to="/position-size-calculator"
                  className="inline-flex items-center px-3 py-1 rounded-md bg-primary text-primary-foreground text-xs font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  <Icon name="Calculator" size={12} className="mr-1" />
                  Try Calculator
                </Link>
                <Link
                  to="/ftmo-affiliate-gateway"
                  className="inline-flex items-center px-3 py-1 rounded-md bg-accent text-accent-foreground text-xs font-medium hover:bg-accent/90 transition-colors duration-200"
                >
                  <Icon name="ExternalLink" size={12} className="mr-1" />
                  Start Challenge
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedArticles;
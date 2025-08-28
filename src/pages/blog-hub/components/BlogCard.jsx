import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const BlogCard = ({ post, featured = false }) => {
  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Beginner':
        return 'bg-success/10 text-success border-success/20';
      case 'Intermediate':
        return 'bg-warning/10 text-warning border-warning/20';
      case 'Advanced':
        return 'bg-error/10 text-error border-error/20';
      default:
        return 'bg-muted text-muted-foreground border-border';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Framework Implementation':
        return 'Target';
      case 'Risk Management':
        return 'Shield';
      case 'Trading Psychology':
        return 'Brain';
      case 'FTMO Challenge Prep':
        return 'Trophy';
      case 'Market Analysis':
        return 'TrendingUp';
      default:
        return 'FileText';
    }
  };

  if (featured) {
    return (
      <article className="group relative bg-card border border-border rounded-xl overflow-hidden shadow-md hover:shadow-brand-elevated transition-all duration-300 interactive-lift">
        <div className="aspect-[16/9] overflow-hidden">
          <Image
            src={post?.image}
            alt={post?.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center space-x-4 mb-3">
            <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/20 backdrop-blur-sm text-xs font-medium text-white border border-white/20">
              <Icon name={getCategoryIcon(post?.category)} size={12} className="mr-1" />
              {post?.category}
            </span>
            <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getDifficultyColor(post?.difficulty)} backdrop-blur-sm`}>
              {post?.difficulty}
            </span>
          </div>
          
          <Link to={`/blog-hub/${post?.slug}`} className="group-hover:text-accent transition-colors duration-200">
            <h2 className="text-xl font-bold mb-2 line-clamp-2">{post?.title}</h2>
          </Link>
          
          <p className="text-sm text-gray-200 mb-4 line-clamp-2">{post?.excerpt}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4 text-xs text-gray-300">
              <span className="flex items-center">
                <Icon name="Clock" size={14} className="mr-1" />
                {post?.readTime} min read
              </span>
              <span className="flex items-center">
                <Icon name="Calendar" size={14} className="mr-1" />
                {post?.publishDate}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="p-1 rounded-full hover:bg-white/20 transition-colors duration-200">
                <Icon name="Bookmark" size={16} />
              </button>
              <button className="p-1 rounded-full hover:bg-white/20 transition-colors duration-200">
                <Icon name="Share2" size={16} />
              </button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-card border border-border rounded-lg overflow-hidden shadow-sm hover:shadow-brand transition-all duration-300 interactive-lift">
      <div className="aspect-[16/10] overflow-hidden">
        <Image
          src={post?.image}
          alt={post?.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
            <Icon name={getCategoryIcon(post?.category)} size={12} className="mr-1" />
            {post?.category}
          </span>
          <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium border ${getDifficultyColor(post?.difficulty)}`}>
            {post?.difficulty}
          </span>
        </div>
        
        <Link to={`/blog-hub/${post?.slug}`} className="group-hover:text-primary transition-colors duration-200">
          <h3 className="text-lg font-semibold mb-2 line-clamp-2">{post?.title}</h3>
        </Link>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post?.excerpt}</p>
        
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Icon name="Clock" size={14} className="mr-1" />
              {post?.readTime} min
            </span>
            <span className="flex items-center">
              <Icon name="Calendar" size={14} className="mr-1" />
              {post?.publishDate}
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <button className="p-1 rounded-full hover:bg-muted transition-colors duration-200">
              <Icon name="Bookmark" size={14} />
            </button>
            <button className="p-1 rounded-full hover:bg-muted transition-colors duration-200">
              <Icon name="Share2" size={14} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
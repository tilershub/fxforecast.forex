import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const AuthorBio = ({ author }) => {
  const defaultAuthor = {
    name: 'Alex Chen',
    title: 'Systematic Trading Specialist & FTMO Challenge Expert',
    bio: `With over 8 years of systematic trading experience and 15+ successful FTMO challenges, Alex developed the OUR Framework that has helped hundreds of traders transition from emotional gambling to disciplined business practice. Former quantitative analyst turned trading educator, specializing in risk management and psychological discipline.`,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    credentials: [
      'CFA Charterholder',
      '15+ FTMO Challenges Passed',
      '500+ Students Mentored',
      'Featured in Trading Publications'
    ],
    socialLinks: {
      twitter: 'https://twitter.com/fxforecast',
      linkedin: 'https://linkedin.com/in/fxforecast',
      youtube: 'https://youtube.com/@fxforecast'
    },
    stats: {
      articles: 47,
      students: 500,
      successRate: 78
    }
  };

  const authorData = author || defaultAuthor;

  return (
    <div className="bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-start space-x-4 mb-6">
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src={authorData?.avatar}
              alt={authorData?.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full border-2 border-card flex items-center justify-center">
              <Icon name="CheckCircle" size={12} className="text-white" />
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-bold text-foreground mb-1">{authorData?.name}</h3>
          <p className="text-sm text-primary font-medium mb-2">{authorData?.title}</p>
          
          <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center">
              <Icon name="FileText" size={12} className="mr-1" />
              {authorData?.stats?.articles} Articles
            </span>
            <span className="flex items-center">
              <Icon name="Users" size={12} className="mr-1" />
              {authorData?.stats?.students}+ Students
            </span>
            <span className="flex items-center">
              <Icon name="TrendingUp" size={12} className="mr-1" />
              {authorData?.stats?.successRate}% Success Rate
            </span>
          </div>
          
          <div className="flex items-center space-x-2">
            <a
              href={authorData?.socialLinks?.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              <Icon name="Twitter" size={16} className="text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href={authorData?.socialLinks?.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              <Icon name="Linkedin" size={16} className="text-muted-foreground hover:text-foreground" />
            </a>
            <a
              href={authorData?.socialLinks?.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors duration-200"
            >
              <Icon name="Youtube" size={16} className="text-muted-foreground hover:text-foreground" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
        {authorData?.bio}
      </p>
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-3">Credentials & Achievements</h4>
        <div className="grid grid-cols-2 gap-2">
          {authorData?.credentials?.map((credential, index) => (
            <div key={index} className="flex items-center text-xs text-muted-foreground">
              <Icon name="Award" size={12} className="mr-2 text-accent" />
              <span>{credential}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between pt-4 border-t border-border">
        <Link
          to="/about"
          className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-colors duration-200"
        >
          <Icon name="User" size={14} className="mr-1" />
          Full Bio & Story
        </Link>
        
        <div className="flex items-center space-x-2">
          <span className="text-xs text-muted-foreground">Follow for updates:</span>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse"></div>
            <span className="text-xs text-success font-medium">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorBio;
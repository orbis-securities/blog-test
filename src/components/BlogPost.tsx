"use client";

import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { toast } from "sonner";
import {
  BookMarked,
  MessageSquareDot,
  MessagesSquare,
  ZoomIn,
  TableOfContents,
  TrendingUp,
  BarChart3,
  AlertTriangle,
  Target,
  Calendar
} from "lucide-react";

// FX Trading focused blog post interface
interface FXBlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  author: {
    name: string;
    avatar: string;
    bio: string;
    expertise: string[];
    social: {
      twitter?: string;
      linkedin?: string;
    };
  };
  publishedAt: string;
  readTime: string;
  categories: string[];
  tags: string[];
  currencyPairs: string[];
  analysisType: 'technical' | 'fundamental' | 'market-news' | 'strategy';
  keyLevels?: {
    support: number[];
    resistance: number[];
    target?: number;
    stopLoss?: number;
  };
  riskLevel: 'low' | 'medium' | 'high';
}

interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  approved: boolean;
}

interface RelatedPost {
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: string;
  publishedAt: string;
  currencyPairs: string[];
  analysisType: string;
}

// Demo FX trading post
const demoFXPost: FXBlogPost = {
  slug: "usd-krw-weekly-technical-analysis",
  title: "USD/KRW Weekly Technical Analysis: Key Support at 1,320 Under Pressure",
  excerpt: "Comprehensive technical analysis of USD/KRW pair with critical support level testing. Fed policy impact and Bank of Korea intervention possibilities discussed.",
  content: `
# USD/KRW Technical Overview

The USD/KRW pair continues to trade within a defined range as market participants await clearer signals from both the Federal Reserve and Bank of Korea regarding monetary policy direction.

## Current Market Structure

### Key Technical Levels

**Support Levels:**
- Primary Support: 1,320.50
- Secondary Support: 1,315.00  
- Major Support: 1,308.00

**Resistance Levels:**
- Immediate Resistance: 1,335.00
- Key Resistance: 1,350.00
- Major Resistance: 1,365.00

The pair is currently testing the critical 1,320 support level, which has held firm over the past three weeks. A break below this level could signal further weakness toward the 1,315 area.

## Federal Reserve Impact

The Federal Reserve's dovish stance continues to weigh on USD strength across major pairs. Key factors influencing USD/KRW:

1. **Interest Rate Differential**: The narrowing gap between US and Korean rates
2. **Quantitative Tightening**: Fed's balance sheet reduction pace
3. **Economic Data**: US employment and inflation metrics

> "The Fed's cautious approach to rate adjustments is creating opportunities for Won strength, particularly if Korean economic data continues to outperform expectations." - Senior FX Analyst

## Bank of Korea Policy Outlook

The Bank of Korea has maintained a neutral stance, but recent economic indicators suggest potential for policy adjustment:

- **GDP Growth**: Q4 2023 exceeded expectations at 3.2%
- **Inflation Rate**: Trending toward BoK's 2% target
- **Export Performance**: Strong semiconductor and automotive sectors

### Intervention Risk

Historical analysis shows BoK intervention typically occurs:
- Above 1,380 level (preventing excessive Won weakness)
- Below 1,280 level (preventing excessive Won strength)
- During periods of high volatility (>2% daily moves)

## Technical Analysis Deep Dive

### Daily Chart Analysis

The daily chart reveals a descending triangle pattern forming over the past month:

\`\`\`
Descending Triangle Pattern:
- Upper boundary: Declining resistance line from 1,365 high
- Lower boundary: Horizontal support at 1,320
- Target: 1,295 (measured move from triangle height)
- Stop loss: Above 1,340 for short positions
\`\`\`

### RSI and Momentum Indicators

- **RSI (14)**: Currently at 45, approaching oversold territory
- **MACD**: Bearish crossover completed, histogram declining
- **Stochastic**: Oversold reading, potential for bounce

## Trading Strategy

### Short-term Setup (1-2 weeks)

**Bearish Scenario:**
- Entry: Break below 1,320 with volume confirmation
- Target 1: 1,315
- Target 2: 1,308  
- Stop Loss: 1,328

**Bullish Scenario:**
- Entry: Break above 1,335 resistance
- Target 1: 1,350
- Target 2: 1,365
- Stop Loss: 1,325

### Risk Management

Given the current volatility environment, position sizing should be conservative:
- Maximum 2% risk per trade
- Use trailing stops once in profit
- Monitor economic calendar for high-impact events

## Economic Calendar This Week

Key events to monitor:

| Date | Time (KST) | Event | Expected Impact |
|------|------------|-------|-----------------|
| Monday | 09:00 | Korean Trade Balance | Medium |
| Wednesday | 03:00 | US CPI Data | High |
| Thursday | 14:00 | BoK Minutes Release | High |
| Friday | 22:30 | US Non-Farm Payrolls | High |

## Conclusion

The USD/KRW pair remains at a critical juncture with the 1,320 support level under pressure. Traders should monitor:

1. **Fed policy signals** from upcoming speeches
2. **Korean economic data** releases
3. **Technical break** of key levels
4. **Risk sentiment** changes in global markets

The bias remains neutral to slightly bearish in the near term, with potential for increased volatility around key economic releases.

**Risk Warning**: Foreign exchange trading carries substantial risk and may not be suitable for all investors. Past performance is not indicative of future results.
`,
  featuredImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1200&h=600&fit=crop",
  author: {
    name: "김준호 (Kim Jun-ho)",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Senior FX Analyst with 12+ years of experience in Asian currency markets. Specializes in USD/KRW technical and fundamental analysis.",
    expertise: ["Technical Analysis", "Korean Won", "Central Bank Policy", "Risk Management"],
    social: {
      twitter: "kimjunho_fx",
      linkedin: "kim-junho-fx"
    }
  },
  publishedAt: "2024-01-15",
  readTime: "8 min read",
  categories: ["Technical Analysis", "USD/KRW"],
  tags: ["USDKRW", "technical-analysis", "federal-reserve", "bank-of-korea", "support-resistance"],
  currencyPairs: ["USD/KRW"],
  analysisType: "technical",
  keyLevels: {
    support: [1320.50, 1315.00, 1308.00],
    resistance: [1335.00, 1350.00, 1365.00],
    target: 1295,
    stopLoss: 1340
  },
  riskLevel: "medium"
};

const demoRelatedPosts: RelatedPost[] = [
  {
    slug: "korean-won-fundamental-outlook",
    title: "Korean Won Fundamental Outlook: Economic Indicators to Watch",
    excerpt: "Analysis of key economic indicators affecting KRW including GDP growth, inflation trends, and export performance.",
    featuredImage: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=400&h=200&fit=crop",
    publishedAt: "2024-01-12",
    currencyPairs: ["USD/KRW", "EUR/KRW"],
    analysisType: "Fundamental"
  },
  {
    slug: "eur-krw-cross-rate-analysis",
    title: "EUR/KRW Cross Rate: ECB Policy Impact on Korean Won",
    excerpt: "European Central Bank monetary policy effects on EUR/KRW cross rate with technical levels and trading opportunities.",
    featuredImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop",
    publishedAt: "2024-01-10",
    currencyPairs: ["EUR/KRW"],
    analysisType: "Technical"
  },
  {
    slug: "asian-session-trading-strategies",
    title: "Optimizing FX Trading During Asian Market Hours",
    excerpt: "Strategic approaches to trading Korean Won and other Asian currencies during Seoul and Tokyo market sessions.",
    featuredImage: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=200&fit=crop",
    publishedAt: "2024-01-08",
    currencyPairs: ["USD/KRW", "JPY/KRW", "EUR/KRW"],
    analysisType: "Strategy"
  }
];

export default function BlogPost({ slug }: { slug?: string }) {
  const [post] = useState<FXBlogPost>(demoFXPost);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState({
    author: "",
    email: "",
    content: ""
  });
  const [tocItems, setTocItems] = useState<Array<{ id: string; text: string; level: number }>>([]);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Load comments from localStorage
  useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${post.slug}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, [post.slug]);

  // Generate table of contents from markdown headings
  useEffect(() => {
    if (contentRef.current) {
      const headings = contentRef.current.querySelectorAll('h2, h3');
      const items = Array.from(headings).map((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;
        return {
          id,
          text: heading.textContent || '',
          level: parseInt(heading.tagName.charAt(1))
        };
      });
      setTocItems(items);
    }
  }, [post.content]);

  const handleCommentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newComment.author.trim() || !newComment.email.trim() || !newComment.content.trim()) {
      toast.error("Please fill in all comment fields");
      return;
    }

    setIsSubmittingComment(true);

    try {
      const comment: Comment = {
        id: Date.now().toString(),
        author: newComment.author.trim(),
        email: newComment.email.trim(),
        content: newComment.content.trim(),
        createdAt: new Date().toISOString(),
        approved: true
      };

      const updatedComments = [...comments, comment];
      setComments(updatedComments);
      localStorage.setItem(`comments_${post.slug}`, JSON.stringify(updatedComments));

      setNewComment({ author: "", email: "", content: "" });
      toast.success("Comment submitted successfully!");
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Failed to submit comment. Please try again.");
    } finally {
      setIsSubmittingComment(false);
    }
  };

  const handleShare = async (platform: string) => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    const text = `${post.title} - ${post.excerpt}`;

    try {
      switch (platform) {
        case "copy":
          await navigator.clipboard.writeText(url);
          toast.success("Link copied to clipboard!");
          break;
        case "twitter":
          window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
          break;
        case "linkedin":
          window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
          break;
      }
    } catch (error) {
      toast.error("Failed to share. Please try again.");
    }
  };

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const renderMarkdown = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headings
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mt-8 mb-4 text-foreground">{line.replace('### ', '')}</h3>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-bold mt-10 mb-6 text-foreground">{line.replace('## ', '')}</h2>;
        }
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-6 text-foreground">{line.replace('# ', '')}</h1>;
        }
        
        // Code blocks
        if (line.startsWith('```')) {
          const language = line.replace('```', '');
          return <div key={index} className="bg-muted p-4 rounded-lg font-mono text-sm mt-4 mb-4 border">{language && <div className="text-muted-foreground mb-2 text-xs uppercase">{language}</div>}</div>;
        }
        
        // Blockquotes
        if (line.startsWith('> ')) {
          return (
            <blockquote key={index} className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4 bg-muted/30 py-2">
              {line.replace('> ', '')}
            </blockquote>
          );
        }
        
        // Images
        if (line.includes('![') && line.includes('](')) {
          const match = line.match(/!\[(.*?)\]\((.*?)\)/);
          if (match) {
            const [, alt, src] = match;
            return (
              <div key={index} className="my-6">
                <img
                  src={src}
                  alt={alt}
                  className="w-full rounded-lg cursor-pointer hover:opacity-90 transition-opacity border"
                  onClick={() => setLightboxImage(src)}
                />
              </div>
            );
          }
        }
        
        // Tables
        if (line.includes('|')) {
          const cells = line.split('|').filter(cell => cell.trim());
          if (cells.length > 1) {
            return (
              <div key={index} className="overflow-x-auto my-4">
                <table className="w-full border-collapse border border-border rounded-lg">
                  <tr>
                    {cells.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border border-border px-4 py-2 text-sm">{cell.trim()}</td>
                    ))}
                  </tr>
                </table>
              </div>
            );
          }
        }
        
        // Lists
        if (line.match(/^\d+\./)) {
          return <li key={index} className="ml-4 mb-2 text-foreground">{line.replace(/^\d+\.\s/, '')}</li>;
        }
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-2 list-disc text-foreground">{line.replace('- ', '')}</li>;
        }
        
        // Bold text
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={index} className="mb-4 leading-relaxed text-foreground">
              {parts.map((part, i) => i % 2 === 1 ? <strong key={i}>{part}</strong> : part)}
            </p>
          );
        }
        
        // Paragraphs
        if (line.trim() && !line.startsWith('#') && !line.startsWith('```') && !line.startsWith('|')) {
          return <p key={index} className="mb-4 leading-relaxed text-foreground">{line}</p>;
        }
        
        return null;
      })
      .filter(Boolean);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRiskBadgeColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';  
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <article className="bg-card">
      {/* Skip link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg z-50"
      >
        Skip to main content
      </a>

      {/* Header Section */}
      <header className="mb-8">
        <div className="mb-6">
          <div className="flex flex-wrap gap-2 mb-4">
            {post.currencyPairs.map((pair) => (
              <Badge key={pair} className="bg-primary/10 text-primary">
                {pair}
              </Badge>
            ))}
            <Badge className={getRiskBadgeColor(post.riskLevel)}>
              {post.riskLevel} risk
            </Badge>
            <Badge variant="outline">
              {post.analysisType}
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Key Levels Alert */}
        {post.keyLevels && (
          <Card className="mb-6 border-primary/20 bg-primary/5">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-lg">
                <Target className="w-5 h-5 text-primary" />
                Key Trading Levels
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <div className="font-medium text-muted-foreground mb-1">Support</div>
                  {post.keyLevels.support.map((level, i) => (
                    <div key={i} className="font-mono">{level.toFixed(2)}</div>
                  ))}
                </div>
                <div>
                  <div className="font-medium text-muted-foreground mb-1">Resistance</div>
                  {post.keyLevels.resistance.map((level, i) => (
                    <div key={i} className="font-mono">{level.toFixed(2)}</div>
                  ))}
                </div>
                {post.keyLevels.target && (
                  <div>
                    <div className="font-medium text-muted-foreground mb-1">Target</div>
                    <div className="font-mono text-green-600">{post.keyLevels.target.toFixed(2)}</div>
                  </div>
                )}
                {post.keyLevels.stopLoss && (
                  <div>
                    <div className="font-medium text-muted-foreground mb-1">Stop Loss</div>
                    <div className="font-mono text-red-600">{post.keyLevels.stopLoss.toFixed(2)}</div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Metadata Row */}
        <div className="flex flex-wrap items-center gap-4 mb-6 pb-6 border-b border-border">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={post.author.avatar} alt={post.author.name} />
              <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">{post.author.name}</p>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-3 h-3" />
                <time>{formatDate(post.publishedAt)}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 ml-auto">
            {post.categories.map((category) => (
              <Badge key={category} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full h-64 md:h-96 object-cover rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => setLightboxImage(post.featuredImage)}
          />
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Table of Contents - Desktop Sidebar */}
        <aside className="lg:col-span-3 order-2 lg:order-1">
          <div className="lg:sticky lg:top-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <TableOfContents className="w-5 h-5" />
                  Contents
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {tocItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToHeading(item.id)}
                      className={`block w-full text-left text-sm hover:text-primary transition-colors ${
                        item.level === 3 ? 'pl-4' : ''
                      }`}
                    >
                      {item.text}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Risk Warning */}
            <Card className="mt-4 border-orange-200 bg-orange-50">
              <CardContent className="pt-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-orange-800 mb-2">Risk Warning</h4>
                    <p className="text-sm text-orange-700">
                      FX trading carries substantial risk. Only trade with capital you can afford to lose.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </aside>

        {/* Main Content */}
        <main id="main-content" className="lg:col-span-9 order-1 lg:order-2">
          <div ref={contentRef} className="prose prose-lg max-w-none">
            {renderMarkdown(post.content)}
          </div>

          {/* Author Block */}
          <Card className="mt-12">
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={post.author.avatar} alt={post.author.name} />
                  <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-2">{post.author.name}</h3>
                  <p className="text-muted-foreground mb-3">{post.author.bio}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.author.expertise.map((skill) => (
                      <Badge key={skill} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {post.author.social.twitter && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://twitter.com/${post.author.social.twitter}`} target="_blank" rel="noopener noreferrer">
                          Twitter
                        </a>
                      </Button>
                    )}
                    {post.author.social.linkedin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`https://linkedin.com/in/${post.author.social.linkedin}`} target="_blank" rel="noopener noreferrer">
                          LinkedIn
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Post Footer */}
          <div className="mt-8 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    #{tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleShare('copy')}>
                  Copy Link
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('twitter')}>
                  Share on Twitter
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleShare('linkedin')}>
                  Share on LinkedIn
                </Button>
              </div>
            </div>

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="pt-6 text-center">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                <h3 className="text-xl font-semibold mb-2">Get More FX Analysis</h3>
                <p className="text-muted-foreground mb-4">
                  Subscribe for daily market insights, technical analysis, and Korean Won trading strategies.
                </p>
                <Button>Subscribe to FX Insights</Button>
              </CardContent>
            </Card>
          </div>

          {/* Related Posts */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Related Analysis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {demoRelatedPosts.map((relatedPost) => (
                <Card key={relatedPost.slug} className="group cursor-pointer hover:shadow-lg transition-shadow">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex flex-wrap gap-1 mb-2">
                      {relatedPost.currencyPairs.slice(0, 2).map((pair) => (
                        <Badge key={pair} className="bg-primary/10 text-primary text-xs">
                          {pair}
                        </Badge>
                      ))}
                      <Badge variant="outline" className="text-xs">
                        {relatedPost.analysisType}
                      </Badge>
                    </div>
                    <h3 className="font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                      {relatedPost.excerpt}
                    </p>
                    <time className="text-xs text-muted-foreground">
                      {formatDate(relatedPost.publishedAt)}
                    </time>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Comments Section */}
          <section className="mt-12">
            <div className="flex items-center gap-2 mb-6">
              <MessagesSquare className="w-6 h-6" />
              <h2 className="text-2xl font-bold">Discussion ({comments.length})</h2>
            </div>

            {/* Comment Form */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageSquareDot className="w-5 h-5" />
                  Share Your Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCommentSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="author" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="author"
                        value={newComment.author}
                        onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        value={newComment.email}
                        onChange={(e) => setNewComment({ ...newComment, email: e.target.value })}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="content" className="block text-sm font-medium mb-2">
                      Your Analysis *
                    </label>
                    <Textarea
                      id="content"
                      value={newComment.content}
                      onChange={(e) => setNewComment({ ...newComment, content: e.target.value })}
                      placeholder="Share your market insights..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isSubmittingComment}>
                    {isSubmittingComment ? "Submitting..." : "Post Comment"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.length === 0 ? (
                <Card>
                  <CardContent className="pt-6 text-center text-muted-foreground">
                    <MessagesSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>No comments yet. Share your market analysis and insights!</p>
                  </CardContent>
                </Card>
              ) : (
                comments.map((comment) => (
                  <Card key={comment.id}>
                    <CardContent className="pt-6">
                      <div className="flex gap-4">
                        <Avatar>
                          <AvatarFallback>
                            {comment.author.charAt(0).toUpperCase()}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h4 className="font-medium">{comment.author}</h4>
                            <time className="text-sm text-muted-foreground">
                              {formatDate(comment.createdAt)}
                            </time>
                          </div>
                          <p className="text-sm leading-relaxed">{comment.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </section>
        </main>
      </div>

      {/* Image Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-7xl max-h-full">
            <img
              src={lightboxImage}
              alt=""
              className="max-w-full max-h-full object-contain"
            />
            <Button
              variant="secondary"
              size="icon"
              className="absolute top-4 right-4"
              onClick={() => setLightboxImage(null)}
            >
              <ZoomIn className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </article>
  );
}
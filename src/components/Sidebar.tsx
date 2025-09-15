"use client";

import { useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { TrendingUp, BarChart3, AlertTriangle, Calendar, Globe, DollarSign, Activity } from 'lucide-react';
import { toast } from 'sonner';
import Image from 'next/image';

// Types for FX trading data structures
interface FXPost {
  slug: string;
  title: string;
  date: string;
  featuredImage?: string;
  excerpt?: string;
  currencyPairs: string[];
  analysisType: string;
}

interface CurrencyPair {
  name: string;
  slug: string;
  count: number;
  currentRate?: number;
  change?: number;
  changePercent?: number;
}

interface FXTag {
  name: string;
  slug: string;
  count: number;
}

interface EconomicEvent {
  time: string;
  currency: string;
  event: string;
  impact: 'low' | 'medium' | 'high';
  previous?: string;
  forecast?: string;
}

export default function Sidebar() {
  const router = useRouter();
  
  // Newsletter state
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Data loading states
  const [isLoadingPosts, setIsLoadingPosts] = useState(false);

  // Mock FX trading data
  const recentFXPosts: FXPost[] = [
    {
      slug: 'usd-krw-weekly-outlook',
      title: 'USD/KRW Weekly Outlook: Fed Impact Analysis',
      date: '2024-01-15',
      featuredImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=120&fit=crop',
      currencyPairs: ['USD/KRW'],
      analysisType: 'Technical'
    },
    {
      slug: 'korean-won-inflation-data',
      title: 'Korean Won Strengthens on Inflation Beat',
      date: '2024-01-12',
      featuredImage: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=200&h=120&fit=crop',
      currencyPairs: ['USD/KRW', 'EUR/KRW'],
      analysisType: 'Fundamental'
    },
    {
      slug: 'eur-krw-technical-breakdown',
      title: 'EUR/KRW Tests Critical Support at 1,445',
      date: '2024-01-10',
      featuredImage: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=120&fit=crop',
      currencyPairs: ['EUR/KRW'],
      analysisType: 'Technical'
    },
    {
      slug: 'asian-session-strategies',
      title: 'Trading KRW During Seoul Market Hours',
      date: '2024-01-08',
      featuredImage: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=200&h=120&fit=crop',
      currencyPairs: ['USD/KRW', 'JPY/KRW'],
      analysisType: 'Strategy'
    }
  ];

  const currencyPairs: CurrencyPair[] = [
    { 
      name: 'USD/KRW', 
      slug: 'usd-krw', 
      count: 15,
      currentRate: 1325.50,
      change: -2.30,
      changePercent: -0.17
    },
    { 
      name: 'EUR/KRW', 
      slug: 'eur-krw', 
      count: 8,
      currentRate: 1447.25,
      change: +1.75,
      changePercent: +0.12
    },
    { 
      name: 'JPY/KRW', 
      slug: 'jpy-krw', 
      count: 6,
      currentRate: 892.15,
      change: -0.85,
      changePercent: -0.10
    },
    { 
      name: 'GBP/KRW', 
      slug: 'gbp-krw', 
      count: 4,
      currentRate: 1678.90,
      change: +3.20,
      changePercent: +0.19
    },
    { 
      name: 'CNY/KRW', 
      slug: 'cny-krw', 
      count: 3,
      currentRate: 184.75,
      change: -0.15,
      changePercent: -0.08
    }
  ];

  const fxTags: FXTag[] = [
    { name: 'Technical Analysis', slug: 'technical-analysis', count: 18 },
    { name: 'Bank of Korea', slug: 'bank-of-korea', count: 12 },
    { name: 'Federal Reserve', slug: 'federal-reserve', count: 15 },
    { name: 'Support Resistance', slug: 'support-resistance', count: 10 },
    { name: 'Economic Data', slug: 'economic-data', count: 14 },
    { name: 'Trading Strategy', slug: 'trading-strategy', count: 8 },
    { name: 'Market News', slug: 'market-news', count: 11 },
    { name: 'Risk Management', slug: 'risk-management', count: 7 }
  ];

  const todayEvents: EconomicEvent[] = [
    {
      time: '09:00',
      currency: 'KRW',
      event: 'Korean Trade Balance',
      impact: 'medium',
      previous: '$2.1B',
      forecast: '$2.3B'
    },
    {
      time: '15:30',
      currency: 'USD',
      event: 'US Retail Sales',
      impact: 'high',
      previous: '0.3%',
      forecast: '0.2%'
    },
    {
      time: '22:30',
      currency: 'USD',
      event: 'Initial Jobless Claims',
      impact: 'medium',
      previous: '220K',
      forecast: '225K'
    }
  ];

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // FX Newsletter signup handler
  const handleNewsletterSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }
    
    if (!isValidEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast.success('Successfully subscribed to FX trading insights!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [email]);

  // Handle currency pair click
  const handleCurrencyPairClick = useCallback((pairSlug: string) => {
    toast.info(`Filtering by currency pair: ${pairSlug}`);
  }, []);

  // Handle tag click
  const handleTagClick = useCallback((tagSlug: string) => {
    toast.info(`Filtering by tag: ${tagSlug}`);
  }, []);

  // Format date helper
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { 
      month: 'short', 
      day: 'numeric'
    });
  };

  // Format currency rate
  const formatRate = (rate: number): string => {
    return rate.toLocaleString('ko-KR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  };

  // Get impact badge color
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <aside className="w-full space-y-6" role="complementary" aria-label="FX Trading Sidebar">
      {/* FX Newsletter Signup */}
      <Card className="bg-card border-primary/20">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            FX Trading Insights
          </CardTitle>
          <CardDescription>
            Get daily Korean Won analysis, Fed policy updates, and trading signals delivered to your inbox.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isSubmitting}
              aria-label="Email address for FX newsletter subscription"
              className="w-full"
            />
            <Button 
              type="submit" 
              disabled={isSubmitting || !email.trim()}
              className="w-full"
            >
              {isSubmitting ? 'Subscribing...' : 'Get FX Updates'}
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Live Currency Rates */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Live Rates
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {currencyPairs.slice(0, 4).map((pair) => (
            <div
              key={pair.slug}
              className="flex items-center justify-between p-2 hover:bg-accent rounded-md cursor-pointer transition-colors"
              onClick={() => handleCurrencyPairClick(pair.slug)}
            >
              <div>
                <div className="font-medium text-sm">{pair.name}</div>
                <div className="text-xs text-muted-foreground">{pair.count} analyses</div>
              </div>
              <div className="text-right">
                <div className="font-mono text-sm">{formatRate(pair.currentRate!)}</div>
                <div className={`text-xs flex items-center gap-1 ${
                  pair.change! >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {pair.change! >= 0 ? '+' : ''}{pair.change}
                  <span>({pair.changePercent! >= 0 ? '+' : ''}{pair.changePercent}%)</span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Recent FX Analysis */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <BarChart3 className="h-4 w-4" />
            Recent Analysis
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {isLoadingPosts ? (
            Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="flex gap-3">
                <Skeleton className="w-16 h-12 rounded-md flex-shrink-0" />
                <div className="flex-1 space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-20" />
                </div>
              </div>
            ))
          ) : (
            recentFXPosts.map((post) => (
              <article key={post.slug} className="flex gap-3 group">
                {post.featuredImage && (
                  <div className="relative w-16 h-12 flex-shrink-0 overflow-hidden rounded-md bg-muted">
                    <Image
                      src={post.featuredImage}
                      alt=""
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                      sizes="64px"
                    />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap gap-1 mb-1">
                    {post.currencyPairs.slice(0, 2).map(pair => (
                      <Badge key={pair} className="bg-primary/10 text-primary text-xs">
                        {pair}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="text-sm font-medium leading-tight text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    <a href={`/posts/${post.slug}`} className="hover:underline">
                      {post.title}
                    </a>
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <time className="text-xs text-muted-foreground" dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <Badge variant="outline" className="text-xs">
                      {post.analysisType}
                    </Badge>
                  </div>
                </div>
              </article>
            ))
          )}
        </CardContent>
      </Card>

      {/* Economic Calendar */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <Calendar className="h-4 w-4" />
            Today's Events
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {todayEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-3 p-2 hover:bg-accent rounded-md transition-colors">
                <div className="text-xs font-mono text-muted-foreground mt-0.5 w-12">
                  {event.time}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Badge className="text-xs">{event.currency}</Badge>
                    <Badge className={`text-xs ${getImpactColor(event.impact)}`}>
                      {event.impact}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium line-clamp-2">{event.event}</div>
                  {event.previous && event.forecast && (
                    <div className="text-xs text-muted-foreground mt-1">
                      Prev: {event.previous} | Est: {event.forecast}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Currency Pairs */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <Globe className="h-4 w-4" />
            Currency Pairs
          </CardTitle>
        </CardHeader>
        <CardContent>
          <nav aria-label="Currency pairs">
            <ul className="space-y-2">
              {currencyPairs.map((pair) => (
                <li key={pair.slug}>
                  <button
                    onClick={() => handleCurrencyPairClick(pair.slug)}
                    className="w-full flex items-center justify-between text-sm text-foreground hover:text-primary transition-colors py-1 text-left"
                    aria-label={`View analysis for ${pair.name}`}
                  >
                    <span className="font-medium">{pair.name}</span>
                    <Badge variant="secondary" className="text-xs">
                      {pair.count}
                    </Badge>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </CardContent>
      </Card>

      {/* FX Tags */}
      <Card className="bg-card">
        <CardHeader>
          <CardTitle className="text-lg font-heading flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Popular Topics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {fxTags.map((tag) => (
              <button
                key={tag.slug}
                onClick={() => handleTagClick(tag.slug)}
                className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md transition-colors"
                aria-label={`Filter posts by ${tag.name} tag`}
              >
                {tag.name}
                <span className="text-muted-foreground">({tag.count})</span>
              </button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Risk Warning */}
      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-medium text-orange-800 mb-2">Trading Risk Warning</h4>
              <p className="text-sm text-orange-700 leading-relaxed">
                Foreign exchange trading carries substantial risk of loss and may not be suitable for all investors. 
                Past performance is not indicative of future results.
              </p>
              <Button 
                variant="outline" 
                size="sm"
                className="mt-3 border-orange-300 text-orange-800 hover:bg-orange-100"
                onClick={() => {
                  toast.info('Navigating to Risk Disclosure...');
                }}
              >
                Read Full Disclosure
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
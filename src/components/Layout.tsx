"use client";

import { useState, useEffect, useRef } from 'react';
import { Search, Menu, X, Mail, TrendingUp, BarChart3, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { toast } from 'sonner';
import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}

interface SearchResult {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  category: string;
}

// Mock FX trading posts for search
const mockPosts: SearchResult[] = [
  {
    id: '1',
    title: 'USD/KRW Technical Analysis: Key Support and Resistance Levels',
    excerpt: 'Comprehensive technical analysis of USD/KRW pair with support at 1,320 and resistance at 1,350.',
    slug: 'usd-krw-technical-analysis',
    category: 'Technical Analysis'
  },
  {
    id: '2',
    title: 'Korean Won Outlook: Economic Indicators to Watch',
    excerpt: 'Analysis of key economic indicators affecting the Korean Won including GDP, inflation, and BoK policy.',
    slug: 'korean-won-economic-outlook',
    category: 'Market Analysis'
  },
  {
    id: '3',
    title: 'Forex Trading Strategies for Asian Market Hours',
    excerpt: 'Effective trading strategies tailored for Asian market sessions and currency volatility patterns.',
    slug: 'asian-market-trading-strategies',
    category: 'Trading Strategies'
  },
];

export default function Layout({ children, className }: LayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [selectedResultIndex, setSelectedResultIndex] = useState(-1);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Handle scroll for header elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle search functionality
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = mockPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.categories.some(cat => cat.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6);
      setSearchResults(filtered);
      setSelectedResultIndex(-1);
    } else {
      setSearchResults([]);
      setSelectedResultIndex(-1);
    }
  }, [searchQuery]);

  // Handle keyboard navigation in search
  const handleSearchKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedResultIndex(prev => 
        prev < searchResults.length - 1 ? prev + 1 : prev
      );
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedResultIndex(prev => prev > 0 ? prev - 1 : -1);
    } else if (e.key === 'Enter' && selectedResultIndex >= 0) {
      e.preventDefault();
      const selectedResult = searchResults[selectedResultIndex];
      if (selectedResult) {
        window.location.href = `/posts/${selectedResult.slug}`;
      }
    } else if (e.key === 'Escape') {
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  // Handle global keyboard shortcut for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchOpen) {
        e.preventDefault();
        setIsSearchOpen(true);
        setTimeout(() => {
          searchInputRef.current?.focus();
        }, 100);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Newsletter signup handler
  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubscribing(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Successfully subscribed to FX trading insights!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubscribing(false);
    }
  };

  const navigationLinks = [
    { href: '/', label: 'Home' },
    { href: '/market-analysis', label: 'Market Analysis' },
    { href: '/trading-strategies', label: 'Trading Strategies' },
    { href: '/economic-calendar', label: 'Economic Calendar' },
    { href: '/about', label: 'About' },
  ];

  const socialLinks = [
    { href: '#', label: 'Twitter' },
    { href: '#', label: 'LinkedIn' },
    { href: '#', label: 'TradingView' },
  ];

  const footerLinks = [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/disclaimer', label: 'Trading Disclaimer' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header 
        className={`sticky top-0 z-50 w-full bg-card transition-shadow duration-200 ${
          isScrolled ? 'shadow-sm border-b border-border' : ''
        }`}
      >
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-md">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <div className="font-heading font-bold text-xl text-foreground hover:text-primary transition-colors">
                  KO FX Trading
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2">
              {/* Search Trigger */}
              <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
                <PopoverTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="h-9 w-9 p-0"
                    aria-label="Search"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent 
                  className="w-80 p-0" 
                  align="end"
                  onOpenAutoFocus={(e) => {
                    e.preventDefault();
                    searchInputRef.current?.focus();
                  }}
                >
                  <div className="border-b border-border p-4">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        ref={searchInputRef}
                        placeholder="Search FX analysis..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleSearchKeyDown}
                        className="pl-9 pr-12"
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2">
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                          /
                        </kbd>
                      </div>
                    </div>
                  </div>
                  
                  {/* Search Results */}
                  {searchResults.length > 0 && (
                    <div className="max-h-80 overflow-y-auto">
                      {searchResults.map((result, index) => (
                        <Link
                          key={result.id}
                          href={`/posts/${result.slug}`}
                          className={`block p-4 hover:bg-accent transition-colors ${
                            index === selectedResultIndex ? 'bg-accent' : ''
                          }`}
                          onClick={() => setIsSearchOpen(false)}
                        >
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <div className="font-medium text-sm text-foreground line-clamp-1">
                              {result.title}
                            </div>
                            <div className="text-xs text-primary bg-primary/10 px-2 py-1 rounded flex-shrink-0">
                              {result.category}
                            </div>
                          </div>
                          <div className="text-xs text-muted-foreground line-clamp-2">
                            {result.excerpt}
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {searchQuery && searchResults.length === 0 && (
                    <div className="p-8 text-center text-muted-foreground text-sm">
                      No trading analysis found for "{searchQuery}"
                    </div>
                  )}
                </PopoverContent>
              </Popover>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="h-9 w-9 p-0 md:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="h-4 w-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <SheetHeader>
                    <SheetTitle className="text-left flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      KO FX Trading
                    </SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col space-y-6 mt-6">
                    {/* Primary Navigation */}
                    <nav className="flex flex-col space-y-4">
                      {navigationLinks.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </nav>

                    <div className="border-t border-border pt-6">
                      {/* Social Links */}
                      <div className="mb-6">
                        <h4 className="text-sm font-medium text-muted-foreground mb-3">
                          Follow Our Analysis
                        </h4>
                        <div className="flex flex-col space-y-2">
                          {socialLinks.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="text-sm text-foreground hover:text-primary transition-colors"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Copyright */}
                      <div className="text-xs text-muted-foreground">
                        © 2024 KO FX Trading. All rights reserved.
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className={className}>
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container max-w-6xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Newsletter Signup */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <BarChart3 className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-semibold text-lg">
                  FX Trading Insights
                </h3>
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Get daily market analysis, trading signals, and Korean Won updates delivered to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2 max-w-sm">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  disabled={isSubscribing}
                />
                <Button 
                  type="submit" 
                  disabled={isSubscribing}
                  className="flex-shrink-0"
                >
                  {isSubscribing ? (
                    <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <Mail className="w-4 h-4" />
                  )}
                </Button>
              </form>
            </div>

            {/* Links & Copyright */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                {footerLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">
                  © 2024 KO FX Trading. All rights reserved.
                </div>
                <div className="text-xs text-muted-foreground">
                  <strong>Risk Warning:</strong> Trading foreign exchange carries a high level of risk and may not be suitable for all investors.
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
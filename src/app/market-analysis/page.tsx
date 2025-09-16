"use client";

import { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown, Activity, Globe, DollarSign, BarChart3, Clock, Filter, Search, Bell, Users, Building2, Calendar, FileText } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Layout from '@/components/Layout';

// Mock data for FX rates and market data
const mockFxRates = {
  "USD/KRW": { rate: 1342.50, change: -8.25, changePercent: -0.61 },
  "EUR/KRW": { rate: 1456.80, change: 12.40, changePercent: 0.86 },
  "JPY/KRW": { rate: 8.97, change: -0.15, changePercent: -1.64 },
  "GBP/KRW": { rate: 1698.25, change: 24.75, changePercent: 1.48 }
};

const mockMarketSentiment = {
  fearGreedIndex: 42,
  sentiment: "Fear",
  volatilityIndex: 18.5,
  momentum: "Bearish"
};

const mockEconomicData = [
  { indicator: "한국 기준금리", value: "3.50%", change: "0.00%", impact: "neutral" },
  { indicator: "미국 CPI", value: "3.2%", change: "+0.1%", impact: "bearish" },
  { indicator: "유로존 GDP", value: "0.4%", change: "+0.2%", impact: "bullish" },
  { indicator: "일본 무역수지", value: "¥-1.5조", change: "-¥0.3조", impact: "bearish" }
];

const mockTechnicalLevels = [
  { pair: "USD/KRW", support: "1335.00", resistance: "1355.00", trend: "bearish" },
  { pair: "EUR/KRW", support: "1440.00", resistance: "1470.00", trend: "bullish" },
  { pair: "JPY/KRW", support: "8.85", resistance: "9.10", trend: "bearish" },
  { pair: "GBP/KRW", support: "1680.00", resistance: "1720.00", trend: "bullish" }
];

const mockCentralBankUpdates = [
  {
    bank: "한국은행 (BoK)",
    update: "기준금리 3.50% 동결 결정",
    impact: "KRW 중립적",
    time: "2시간 전"
  },
  {
    bank: "미국 연준 (Fed)",
    update: "파월 의장 매파적 발언",
    impact: "USD 강세 요인",
    time: "4시간 전"
  },
  {
    bank: "유럽중앙은행 (ECB)",
    update: "인플레이션 목표 달성 진전",
    impact: "EUR 긍정적",
    time: "6시간 전"
  }
];

const mockAnalysisPosts = [
  {
    id: 1,
    title: "USD/KRW 1340선 돌파 후 향방은?",
    excerpt: "달러-원 환율이 주요 저항선을 돌파하며 추가 상승 여력을 보이고 있습니다.",
    author: "김현우",
    category: "Technical Analysis",
    readTime: "5분",
    publishedAt: "2024-01-15",
    image: "/api/placeholder/400/250",
    tags: ["USD/KRW", "기술적분석", "저항선"]
  },
  {
    id: 2,
    title: "한국은행 금리 결정이 원화에 미치는 영향",
    excerpt: "3.50% 기준금리 동결 결정의 배경과 향후 통화정책 방향을 분석합니다.",
    author: "이서연",
    category: "Central Bank Policy",
    readTime: "7분",
    publishedAt: "2024-01-15",
    image: "/api/placeholder/400/250",
    tags: ["한국은행", "금리정책", "KRW"]
  },
  {
    id: 3,
    title: "유로존 경제지표 개선, EUR/KRW 전망",
    excerpt: "유로존 GDP 성장률 상향 조정으로 유로-원 환율 상승 압력이 커지고 있습니다.",
    author: "박지훈",
    category: "Fundamental Analysis",
    readTime: "6분",
    publishedAt: "2024-01-14",
    image: "/api/placeholder/400/250",
    tags: ["EUR/KRW", "GDP", "펀더멘털"]
  },
  {
    id: 4,
    title: "일본 엔화 약세 지속, JPY/KRW 하락 전망",
    excerpt: "일본의 초완화 통화정책 지속으로 엔-원 환율의 하락 추세가 계속될 것으로 예상됩니다.",
    author: "최민석",
    category: "Market News",
    readTime: "4분",
    publishedAt: "2024-01-14",
    image: "/api/placeholder/400/250",
    tags: ["JPY/KRW", "일본은행", "통화정책"]
  },
  {
    id: 5,
    title: "영국 인플레이션 둔화, GBP/KRW 영향 분석",
    excerpt: "영국의 인플레이션 둔화가 파운드-원 환율에 미치는 단기 및 중기적 영향을 살펴봅니다.",
    author: "정하영",
    category: "Fundamental Analysis",
    readTime: "8분",
    publishedAt: "2024-01-13",
    image: "/api/placeholder/400/250",
    tags: ["GBP/KRW", "인플레이션", "영국경제"]
  },
  {
    id: 6,
    title: "미국 고용지표 강세, 달러 강화 지속될까?",
    excerpt: "예상을 상회한 미국 고용지표 발표로 달러 강세 흐름이 이어질 가능성을 분석합니다.",
    author: "김현우",
    category: "Market News",
    readTime: "5분",
    publishedAt: "2024-01-13",
    image: "/api/placeholder/400/250",
    tags: ["USD", "고용지표", "경제지표"]
  }
];

const mockLiveUpdates = [
  {
    id: 1,
    title: "USD/KRW 1342.50 거래, 하락 압력 지속",
    time: "방금 전",
    type: "price"
  },
  {
    id: 2,
    title: "미국 12월 CPI 발표 앞두고 관망세",
    time: "5분 전",
    type: "news"
  },
  {
    id: 3,
    title: "EUR/KRW 1456.80, 유럽 세션 강세",
    time: "12분 전",
    type: "price"
  },
  {
    id: 4,
    title: "한국은행 총재 발언 예정 (오후 2시)",
    time: "25분 전",
    type: "event"
  }
];

export default function MarketAnalysisPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPosts, setFilteredPosts] = useState(mockAnalysisPosts);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      let filtered = mockAnalysisPosts;
      
      if (selectedCategory !== "all") {
        filtered = filtered.filter(post => post.categories[0] === selectedCategory);
      }
      
      if (searchQuery) {
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        );
      }
      
      setFilteredPosts(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [selectedCategory, searchQuery]);

  const formatRate = (rate: number) => {
    return rate.toFixed(2);
  };

  const formatChange = (change: number, changePercent: number) => {
    const isPositive = change > 0;
    const icon = isPositive ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />;
    const colorClass = isPositive ? "text-green-600" : "text-red-600";
    
    return (
      <div className={`flex items-center gap-1 ${colorClass}`}>
        {icon}
        <span className="text-sm font-medium">
          {Math.abs(change).toFixed(2)} ({Math.abs(changePercent).toFixed(2)}%)
        </span>
      </div>
    );
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              FX 마켓 분석
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              실시간 환율 정보와 전문가 분석으로 한국 원화 거래의 인사이트를 제공합니다
            </p>
          </div>

          {/* Current Rates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {Object.entries(mockFxRates).map(([pair, data]) => (
              <Card key={pair} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{pair}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">
                    {formatRate(data.rate)}
                  </div>
                  {formatChange(data.change, data.changePercent)}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Market Sentiment */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                시장 심리 지수
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">공포/탐욕 지수</div>
                  <div className="text-2xl font-bold">{mockMarketSentiment.fearGreedIndex}</div>
                  <Badge variant={mockMarketSentiment.sentiment === "Fear" ? "destructive" : "default"}>
                    {mockMarketSentiment.sentiment}
                  </Badge>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">변동성 지수</div>
                  <div className="text-2xl font-bold">{mockMarketSentiment.volatilityIndex}%</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">모멘텀</div>
                  <div className="text-lg font-semibold flex items-center gap-2">
                    {mockMarketSentiment.momentum === "Bearish" ? 
                      <TrendingDown className="h-4 w-4 text-red-500" /> : 
                      <TrendingUp className="h-4 w-4 text-green-500" />
                    }
                    {mockMarketSentiment.momentum}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">업데이트</div>
                  <div className="text-sm">실시간</div>
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse inline-block ml-2"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Analysis Categories Filter */}
            <div className="mb-8">
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="분석 글 검색..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full sm:w-[200px]">
                    <Filter className="h-4 w-4 mr-2" />
                    <SelectValue placeholder="카테고리 선택" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">전체</SelectItem>
                    <SelectItem value="Technical Analysis">기술적 분석</SelectItem>
                    <SelectItem value="Fundamental Analysis">펀더멘털 분석</SelectItem>
                    <SelectItem value="Market News">마켓 뉴스</SelectItem>
                    <SelectItem value="Central Bank Policy">중앙은행 정책</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Tabs defaultValue="grid" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="grid">그리드 보기</TabsTrigger>
                  <TabsTrigger value="list">리스트 보기</TabsTrigger>
                </TabsList>
                
                <TabsContent value="grid" className="mt-6">
                  {isLoading ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[...Array(4)].map((_, i) => (
                        <Card key={i} className="animate-pulse">
                          <div className="h-48 bg-muted rounded-t-lg"></div>
                          <CardContent className="p-6">
                            <div className="h-4 bg-muted rounded mb-2"></div>
                            <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                            <div className="h-3 bg-muted rounded w-1/2"></div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {filteredPosts.map((post) => (
                        <Card key={post.id} className="group hover:shadow-lg transition-all duration-200 cursor-pointer">
                          <div className="aspect-video bg-muted rounded-t-lg overflow-hidden">
                            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                              <BarChart3 className="h-12 w-12 text-primary/40" />
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center gap-2 mb-3">
                              <Badge variant="secondary">{post.categories[0]}</Badge>
                              <span className="text-sm text-muted-foreground">{post.readTime}</span>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                              {post.excerpt}
                            </p>
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                  <Users className="h-4 w-4 text-primary" />
                                </div>
                                <span className="text-sm font-medium">{post.author}</span>
                              </div>
                              <span className="text-sm text-muted-foreground">{post.publishedAt}</span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-3">
                              {post.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="list" className="mt-6">
                  {isLoading ? (
                    <div className="space-y-4">
                      {[...Array(6)].map((_, i) => (
                        <Card key={i} className="animate-pulse">
                          <CardContent className="p-6">
                            <div className="h-4 bg-muted rounded mb-2"></div>
                            <div className="h-4 bg-muted rounded w-3/4 mb-4"></div>
                            <div className="h-3 bg-muted rounded w-1/2"></div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {filteredPosts.map((post) => (
                        <Card key={post.id} className="group hover:shadow-md transition-all duration-200 cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="w-20 h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                <FileText className="h-8 w-8 text-primary/40" />
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <Badge variant="secondary">{post.categories[0]}</Badge>
                                  <span className="text-sm text-muted-foreground">{post.readTime}</span>
                                </div>
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                                  {post.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-3">
                                  {post.excerpt}
                                </p>
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center">
                                      <Users className="h-3 w-3 text-primary" />
                                    </div>
                                    <span className="text-sm font-medium">{post.author}</span>
                                  </div>
                                  <span className="text-sm text-muted-foreground">{post.publishedAt}</span>
                                </div>
                                <div className="flex flex-wrap gap-1 mt-2">
                                  {post.tags.slice(0, 3).map((tag) => (
                                    <Badge key={tag} variant="outline" className="text-xs">
                                      {tag}
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Economic Data Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  주요 경제지표
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockEconomicData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                      <div>
                        <div className="font-medium text-sm">{item.indicator}</div>
                        <div className="text-lg font-bold">{item.value}</div>
                      </div>
                      <div className="text-right">
                        <div className={`text-sm font-medium ${
                          item.impact === 'bullish' ? 'text-green-600' :
                          item.impact === 'bearish' ? 'text-red-600' : 'text-muted-foreground'
                        }`}>
                          {item.change}
                        </div>
                        <div className={`text-xs ${
                          item.impact === 'bullish' ? 'text-green-600' :
                          item.impact === 'bearish' ? 'text-red-600' : 'text-muted-foreground'
                        }`}>
                          {item.impact === 'bullish' ? '강세' : 
                           item.impact === 'bearish' ? '약세' : '중립'}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Technical Levels */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  기술적 지지/저항선
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockTechnicalLevels.map((level, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium">{level.pair}</span>
                        <Badge variant={level.trend === 'bullish' ? 'default' : 'destructive'}>
                          {level.trend === 'bullish' ? '상승' : '하락'}
                        </Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="text-muted-foreground">지지선</div>
                          <div className="font-medium text-green-600">{level.support}</div>
                        </div>
                        <div>
                          <div className="text-muted-foreground">저항선</div>
                          <div className="font-medium text-red-600">{level.resistance}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Central Bank Watch */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5" />
                  중앙은행 동향
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockCentralBankUpdates.map((update, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <div className="flex items-start justify-between mb-2">
                        <span className="font-medium text-sm">{update.bank}</span>
                        <span className="text-xs text-muted-foreground">{update.time}</span>
                      </div>
                      <p className="text-sm mb-2">{update.update}</p>
                      <Badge variant="outline" className="text-xs">
                        {update.impact}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Live Updates */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5" />
                  실시간 업데이트
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse ml-2"></div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockLiveUpdates.map((update) => (
                    <div key={update.id} className="flex items-start gap-3 p-2 hover:bg-muted/50 rounded-lg transition-colors">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        update.type === 'price' ? 'bg-blue-500' :
                        update.type === 'news' ? 'bg-green-500' : 'bg-orange-500'
                      }`}></div>
                      <div className="flex-1">
                        <p className="text-sm font-medium">{update.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Clock className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{update.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" size="sm">
                  더 많은 업데이트 보기
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
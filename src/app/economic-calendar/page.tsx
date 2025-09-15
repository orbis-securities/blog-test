"use client";

import { useState, useEffect, useMemo } from "react";
import { Calendar, Filter, Clock, TrendingUp, Globe, AlertCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Layout from "@/components/Layout";

interface EconomicEvent {
  id: string;
  time: string;
  country: string;
  currency: string;
  event: string;
  eventKo: string;
  impact: "high" | "medium" | "low";
  previous: string;
  forecast: string;
  actual: string;
  status: "released" | "upcoming";
  description: string;
  wonImpact: string;
  flag: string;
}

const mockEvents: EconomicEvent[] = [
  {
    id: "1",
    time: "09:00",
    country: "KR",
    currency: "KRW",
    event: "BoK Interest Rate Decision",
    eventKo: "한국은행 기준금리 결정",
    impact: "high",
    previous: "3.50%",
    forecast: "3.50%",
    actual: "",
    status: "upcoming",
    description: "한국은행의 통화정책 결정으로 원화에 직접적인 영향을 미칩니다.",
    wonImpact: "기준금리 동결시 원화 안정, 인상시 원화 강세 예상",
    flag: "🇰🇷"
  },
  {
    id: "2",
    time: "08:30",
    country: "US",
    currency: "USD",
    event: "Non-Farm Payrolls",
    eventKo: "미국 비농업 고용지표",
    impact: "high",
    previous: "150K",
    forecast: "180K",
    actual: "199K",
    status: "released",
    description: "미국 고용시장의 건강성을 보여주는 핵심 지표입니다.",
    wonImpact: "강한 고용지표는 달러 강세로 이어져 원달러 환율 상승 압력",
    flag: "🇺🇸"
  },
  {
    id: "3",
    time: "14:00",
    country: "EU",
    currency: "EUR",
    event: "ECB Interest Rate Decision",
    eventKo: "유럽중앙은행 기준금리",
    impact: "high",
    previous: "4.50%",
    forecast: "4.25%",
    actual: "",
    status: "upcoming",
    description: "유럽중앙은행의 통화정책 결정입니다.",
    wonImpact: "ECB 금리 인하시 유로 약세로 원화 상대적 강세 가능",
    flag: "🇪🇺"
  },
  {
    id: "4",
    time: "10:30",
    country: "JP",
    currency: "JPY",
    event: "BoJ Policy Decision",
    eventKo: "일본은행 정책금리",
    impact: "medium",
    previous: "-0.10%",
    forecast: "-0.10%",
    actual: "",
    status: "upcoming",
    description: "일본은행의 통화정책 결정입니다.",
    wonImpact: "엔화 정책 변화는 아시아 통화에 연쇄 영향",
    flag: "🇯🇵"
  },
  {
    id: "5",
    time: "11:00",
    country: "CN",
    currency: "CNY",
    event: "GDP Growth Rate",
    eventKo: "중국 GDP 성장률",
    impact: "high",
    previous: "4.9%",
    forecast: "5.0%",
    actual: "5.2%",
    status: "released",
    description: "중국의 경제성장률 발표입니다.",
    wonImpact: "중국 성장률 개선은 한국 수출에 긍정적 영향",
    flag: "🇨🇳"
  }
];

const getImpactColor = (impact: string) => {
  switch (impact) {
    case "high":
      return "bg-red-100 text-red-800 border-red-200";
    case "medium":
      return "bg-orange-100 text-orange-800 border-orange-200";
    case "low":
      return "bg-green-100 text-green-800 border-green-200";
    default:
      return "bg-gray-100 text-gray-800 border-gray-200";
  }
};

const getImpactText = (impact: string) => {
  switch (impact) {
    case "high":
      return "높음";
    case "medium":
      return "보통";
    case "low":
      return "낮음";
    default:
      return "미정";
  }
};

const getStatusColor = (status: string) => {
  return status === "released" 
    ? "bg-blue-100 text-blue-800 border-blue-200"
    : "bg-gray-100 text-gray-800 border-gray-200";
};

const getStatusText = (status: string) => {
  return status === "released" ? "발표됨" : "예정";
};

export default function EconomicCalendarPage() {
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [selectedImpact, setSelectedImpact] = useState<string>("all");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("all");
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const filteredEvents = useMemo(() => {
    return mockEvents.filter((event) => {
      if (selectedCountry !== "all" && event.country !== selectedCountry) return false;
      if (selectedImpact !== "all" && event.impact !== selectedImpact) return false;
      if (selectedCurrency !== "all" && event.currency !== selectedCurrency) return false;
      return true;
    });
  }, [selectedCountry, selectedImpact, selectedCurrency]);

  const upcomingEvents = mockEvents.filter(event => event.status === "upcoming");
  const todayEvents = mockEvents.filter(event => event.status === "released");

  const formatKST = (time: string) => {
    const today = new Date();
    const [hours, minutes] = time.split(":");
    const eventTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), parseInt(hours), parseInt(minutes));
    return eventTime.toLocaleString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Seoul"
    });
  };

  return (
    <Layout>
      <div className="container max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">경제 지표 캘린더</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            원화에 영향을 미치는 주요 경제 이벤트를 실시간으로 추적하고 분석하세요. 
            전 세계 중앙은행 정책 결정부터 주요 경제 지표까지 한눈에 확인할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Filter Controls */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Filter className="h-5 w-5" />
                  필터 설정
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">국가</label>
                    <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                      <SelectTrigger>
                        <SelectValue placeholder="국가 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체</SelectItem>
                        <SelectItem value="KR">🇰🇷 한국</SelectItem>
                        <SelectItem value="US">🇺🇸 미국</SelectItem>
                        <SelectItem value="EU">🇪🇺 유럽</SelectItem>
                        <SelectItem value="JP">🇯🇵 일본</SelectItem>
                        <SelectItem value="CN">🇨🇳 중국</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">중요도</label>
                    <Select value={selectedImpact} onValueChange={setSelectedImpact}>
                      <SelectTrigger>
                        <SelectValue placeholder="중요도 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체</SelectItem>
                        <SelectItem value="high">높음</SelectItem>
                        <SelectItem value="medium">보통</SelectItem>
                        <SelectItem value="low">낮음</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">통화</label>
                    <Select value={selectedCurrency} onValueChange={setSelectedCurrency}>
                      <SelectTrigger>
                        <SelectValue placeholder="통화 선택" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">전체</SelectItem>
                        <SelectItem value="KRW">KRW (원)</SelectItem>
                        <SelectItem value="USD">USD (달러)</SelectItem>
                        <SelectItem value="EUR">EUR (유로)</SelectItem>
                        <SelectItem value="JPY">JPY (엔)</SelectItem>
                        <SelectItem value="CNY">CNY (위안)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">현재 시간 (KST)</label>
                    <div className="flex items-center gap-2 p-2 bg-muted rounded-md">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm font-mono">
                        {currentTime.toLocaleString("ko-KR", {
                          hour: "2-digit",
                          minute: "2-digit",
                          second: "2-digit",
                          hour12: false,
                          timeZone: "Asia/Seoul"
                        })}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Calendar View */}
            <Card>
              <CardHeader>
                <CardTitle>경제 지표 일정</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="today" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="today">오늘</TabsTrigger>
                    <TabsTrigger value="week">이번 주</TabsTrigger>
                    <TabsTrigger value="month">이번 달</TabsTrigger>
                  </TabsList>
                  <TabsContent value="today" className="mt-6">
                    <div className="space-y-4">
                      {filteredEvents.map((event) => (
                        <div
                          key={event.id}
                          className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4 flex-1">
                              <div className="text-center min-w-[60px]">
                                <div className="text-lg font-bold">{formatKST(event.time)}</div>
                                <div className="text-xs text-muted-foreground">KST</div>
                              </div>
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="text-2xl">{event.flag}</span>
                                  <h3 className="font-semibold">{event.eventKo}</h3>
                                  <Badge className={getImpactColor(event.impact)}>
                                    {getImpactText(event.impact)}
                                  </Badge>
                                  <Badge className={getStatusColor(event.status)}>
                                    {getStatusText(event.status)}
                                  </Badge>
                                </div>
                                <p className="text-sm text-muted-foreground mb-2">
                                  {event.description}
                                </p>
                                <div className="text-sm text-primary font-medium">
                                  원화 영향: {event.wonImpact}
                                </div>
                              </div>
                            </div>
                            <div className="text-right min-w-[120px]">
                              <div className="grid grid-cols-3 gap-2 text-xs">
                                <div>
                                  <div className="text-muted-foreground">이전</div>
                                  <div className="font-mono">{event.previous}</div>
                                </div>
                                <div>
                                  <div className="text-muted-foreground">예상</div>
                                  <div className="font-mono">{event.forecast}</div>
                                </div>
                                <div>
                                  <div className="text-muted-foreground">실제</div>
                                  <div className="font-mono font-semibold">
                                    {event.actual || "-"}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="week">
                    <div className="text-center py-8 text-muted-foreground">
                      이번 주 일정이 곧 추가될 예정입니다.
                    </div>
                  </TabsContent>
                  <TabsContent value="month">
                    <div className="text-center py-8 text-muted-foreground">
                      월간 일정이 곧 추가될 예정입니다.
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Today's Key Events */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  오늘의 주요 이벤트
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {todayEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="p-3 bg-muted rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        <span>{event.flag}</span>
                        <span className="text-sm font-medium">{event.eventKo}</span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {formatKST(event.time)} KST
                      </div>
                      <div className="text-xs mt-1">
                        실제: <span className="font-mono font-semibold">{event.actual}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Market Impact Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  시장 영향 분석
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="text-sm font-medium text-red-800 mb-1">
                      고위험 이벤트
                    </div>
                    <div className="text-xs text-red-600">
                      한국은행 기준금리 결정이 오늘 발표됩니다. 
                      원화 변동성이 클 것으로 예상됩니다.
                    </div>
                  </div>
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="text-sm font-medium text-blue-800 mb-1">
                      USD/KRW 전망
                    </div>
                    <div className="text-xs text-blue-600">
                      미국 고용지표 호조로 달러 강세 지속. 
                      1,320원대 저항선 주목 필요.
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Events Countdown */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  다음 주요 이벤트
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {upcomingEvents.slice(0, 3).map((event) => (
                    <div key={event.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{event.eventKo}</span>
                        <Badge className={getImpactColor(event.impact)} variant="secondary">
                          {getImpactText(event.impact)}
                        </Badge>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {event.flag} {formatKST(event.time)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Time Zone Selector */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  시간대 설정
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select defaultValue="seoul">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="seoul">서울 (KST)</SelectItem>
                    <SelectItem value="tokyo">도쿄 (JST)</SelectItem>
                    <SelectItem value="shanghai">상하이 (CST)</SelectItem>
                    <SelectItem value="london">런던 (GMT)</SelectItem>
                    <SelectItem value="newyork">뉴욕 (EST)</SelectItem>
                  </SelectContent>
                </Select>
                <div className="mt-3 text-xs text-muted-foreground">
                  모든 시간은 선택된 시간대로 표시됩니다.
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}
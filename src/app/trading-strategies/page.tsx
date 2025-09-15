"use client";

import React from 'react';
import { TrendingUp, Target, BarChart3 } from 'lucide-react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const tradingStrategies = [
  {
    id: 1,
    title: "원화 페어 이동평균 전략",
    description: "USD/KRW, EUR/KRW 등 원화 페어에서 이동평균선을 활용한 트레이딩 전략",
    difficulty: "초급",
    riskLevel: "중간",
    successRate: "68%"
  },
  {
    id: 2,
    title: "한국은행 금리발표 트레이딩",
    description: "통화정책회의 결과를 활용한 뉴스 기반 트레이딩 전략",
    difficulty: "고급", 
    riskLevel: "높음",
    successRate: "74%"
  },
  {
    id: 3,
    title: "아시아 세션 스캘핑",
    description: "한국 시간 오전 9시-12시 구간의 변동성을 활용한 단기 전략",
    difficulty: "중급",
    riskLevel: "높음", 
    successRate: "62%"
  }
];

export default function TradingStrategiesPage() {
  return (
    <Layout>
      <div className="container max-w-6xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 flex items-center gap-3">
            <TrendingUp className="text-blue-600" />
            트레이딩 전략
          </h1>
          <p className="text-gray-600 text-lg">
            검증된 FX 트레이딩 전략들을 소개합니다. 각 전략의 특징과 적용 방법을 확인해보세요.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tradingStrategies.map((strategy) => (
            <Card key={strategy.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{strategy.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {strategy.description}
                    </CardDescription>
                  </div>
                  <BarChart3 className="w-8 h-8 text-blue-600 flex-shrink-0 ml-4" />
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">난이도</span>
                    <Badge variant="secondary">{strategy.difficulty}</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">위험도</span>
                    <Badge 
                      variant={strategy.riskLevel === "높음" ? "destructive" : strategy.riskLevel === "중간" ? "default" : "secondary"}
                    >
                      {strategy.riskLevel}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">성공률</span>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-green-600" />
                      <span className="font-semibold text-green-600">{strategy.successRate}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">전략 사용 시 주의사항</h2>
          <div className="space-y-3 text-blue-800">
            <p>• 모든 트레이딩 전략은 과거 데이터를 기반으로 하며, 미래 수익을 보장하지 않습니다.</p>
            <p>• 실제 투자 전 충분한 백테스팅과 데모 트레이딩을 권장합니다.</p>
            <p>• 리스크 관리를 통해 손실을 최소화하고 수익을 극대화하세요.</p>
            <p>• 시장 상황에 따라 전략의 효과가 달라질 수 있습니다.</p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
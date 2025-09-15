import React from 'react';
import { AlertTriangle, Shield, FileText, Globe, MessageCircle } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TradingDisclaimerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 border-b">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary mr-3" />
              <h1 className="text-4xl font-bold font-heading text-foreground">
                Trading Disclaimer & Risk Warning
              </h1>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Important information about forex trading risks and our educational content
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* Critical Risk Warning */}
          <Alert className="border-destructive bg-destructive/5">
            <AlertTriangle className="h-5 w-5 text-destructive" />
            <AlertDescription className="text-destructive font-medium">
              <strong>HIGH RISK WARNING:</strong> Forex trading carries a high level of risk and may not be suitable for all investors. 
              You could lose more than your initial investment. Only trade with money you can afford to lose.
            </AlertDescription>
          </Alert>

          {/* Main Content - English */}
          <div className="space-y-8">
            
            {/* General Risk Warning */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="w-5 h-5 text-primary mr-2" />
                  General Risk Warning
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Foreign exchange (forex) trading involves substantial risk of loss and is not suitable for all investors. 
                  The high degree of leverage can work against you as well as for you. Before deciding to trade foreign 
                  exchange, you should carefully consider your investment objectives, level of experience, and risk appetite.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Key Risks Include:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Potential loss of entire investment capital</li>
                    <li>High leverage amplifying both gains and losses</li>
                    <li>Market volatility and unpredictable price movements</li>
                    <li>Currency pair specific risks and correlations</li>
                    <li>Economic and political factors affecting currency values</li>
                    <li>Liquidity risks during market hours</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Educational Content Disclaimer */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="w-5 h-5 text-primary mr-2" />
                  Educational Content Disclaimer
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  All content provided on this website is for <strong>educational and informational purposes only</strong>. 
                  Our articles, analyses, and trading insights are intended to help you understand forex markets and 
                  develop your trading knowledge.
                </p>
                <Alert>
                  <AlertDescription>
                    <strong>Important:</strong> Nothing on this website constitutes financial advice, investment recommendations, 
                    or trading signals. We do not provide personalized investment advice or recommendations tailored to 
                    your specific financial situation.
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <h4 className="font-semibold">Our Content Includes:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Market analysis and commentary</li>
                    <li>Trading strategies and methodologies</li>
                    <li>Technical and fundamental analysis tutorials</li>
                    <li>Risk management education</li>
                    <li>Economic news and events coverage</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Specific Currency Pair Risks */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Globe className="w-5 h-5 text-primary mr-2" />
                  Currency Pair Specific Risks
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Trading Korean Won (KRW) pairs involves additional risks specific to emerging market currencies:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">USD/KRW Risks</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>High volatility during Asian trading hours</li>
                      <li>Sensitivity to US-Korea trade relations</li>
                      <li>Bank of Korea intervention risks</li>
                      <li>Geopolitical tensions with North Korea</li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">EUR/KRW & Other KRW Pairs</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Lower liquidity than major pairs</li>
                      <li>Wider spreads and higher transaction costs</li>
                      <li>Limited trading hours for optimal liquidity</li>
                      <li>Cross-currency correlation risks</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Leverage and Margin Risks */}
            <Card>
              <CardHeader>
                <CardTitle>High Leverage Risks</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Forex trading typically involves high leverage, which can significantly amplify both profits and losses:
                </p>
                <Alert className="border-orange-200 bg-orange-50">
                  <AlertDescription>
                    <strong>Example:</strong> With 100:1 leverage, a 1% adverse price movement can result in a 100% loss 
                    of your margin deposit. Higher leverage ratios increase this risk proportionally.
                  </AlertDescription>
                </Alert>
                <div className="space-y-2">
                  <h4 className="font-semibold">Leverage Considerations:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    <li>Margin calls can force position closure at unfavorable prices</li>
                    <li>Overnight financing costs (swap rates) affect leveraged positions</li>
                    <li>Emotional stress from amplified gains and losses</li>
                    <li>Reduced time to react to adverse market movements</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Past Performance Warning */}
            <Card>
              <CardHeader>
                <CardTitle>Past Performance Warning</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-yellow-200 bg-yellow-50">
                  <AlertDescription>
                    <strong>Past performance is not indicative of future results.</strong> Any trading strategies, 
                    analyses, or performance data presented on this website are historical in nature and do not 
                    guarantee future profitability.
                  </AlertDescription>
                </Alert>
                <p className="text-foreground">
                  Market conditions change constantly, and strategies that were profitable in the past may not 
                  work in current or future market environments. Always conduct your own analysis and consider 
                  current market conditions before making trading decisions.
                </p>
              </CardContent>
            </Card>

            {/* Personal Responsibility */}
            <Card>
              <CardHeader>
                <CardTitle>Your Trading Responsibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  By using this website and its content, you acknowledge and agree that:
                </p>
                <div className="bg-muted/30 p-4 rounded-lg space-y-2">
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>You are solely responsible for your trading decisions and their outcomes</li>
                    <li>You will conduct your own research and due diligence before trading</li>
                    <li>You understand the risks involved in forex trading</li>
                    <li>You will only trade with capital you can afford to lose</li>
                    <li>You will seek professional financial advice when needed</li>
                    <li>You will comply with all applicable laws and regulations in your jurisdiction</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Regulatory Compliance */}
            <Card>
              <CardHeader>
                <CardTitle>Regulatory Compliance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  This website and its content are provided for informational purposes only. We are not a licensed 
                  financial advisor, broker, or investment company. Our content should not be considered as:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-red-600">NOT Financial Services:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Investment advisory services</li>
                      <li>Personalized financial planning</li>
                      <li>Trading signals or recommendations</li>
                      <li>Portfolio management services</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">We Provide:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>Educational content and tutorials</li>
                      <li>Market analysis and commentary</li>
                      <li>General trading information</li>
                      <li>Risk awareness education</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Advice Recommendation */}
            <Card>
              <CardHeader>
                <CardTitle>Seek Professional Advice</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  Before engaging in forex trading, we strongly recommend that you:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Consult with a qualified financial advisor who understands your financial situation</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Seek advice from licensed investment professionals in your jurisdiction</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Understand the tax implications of forex trading in your country</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm">Review your broker's regulatory status and client protections</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Korean Language Section */}
          <div className="border-t pt-8 space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold font-heading mb-2">위험 고지 및 면책 조항 (한국어)</h2>
              <p className="text-muted-foreground">Risk Warning and Disclaimer in Korean</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>외환거래 위험 경고</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert className="border-destructive bg-destructive/5">
                  <AlertTriangle className="h-5 w-5 text-destructive" />
                  <AlertDescription className="text-destructive font-medium">
                    <strong>고위험 경고:</strong> 외환거래는 높은 위험을 수반하며 모든 투자자에게 적합하지 않을 수 있습니다. 
                    초기 투자금보다 더 많은 손실을 입을 수 있습니다. 손실을 감당할 수 있는 자금으로만 거래하세요.
                  </AlertDescription>
                </Alert>
                <p className="text-foreground">
                  외환거래는 상당한 손실 위험을 수반하며 모든 투자자에게 적합하지 않습니다. 높은 레버리지는 
                  이익뿐만 아니라 손실도 증폭시킬 수 있습니다. 외환거래를 결정하기 전에 투자 목표, 
                  경험 수준, 위험 감수 능력을 신중히 고려해야 합니다.
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">주요 위험 요소:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>전체 투자 자본의 손실 가능성</li>
                    <li>높은 레버리지로 인한 이익과 손실의 증폭</li>
                    <li>시장 변동성과 예측 불가능한 가격 움직임</li>
                    <li>통화쌍별 특정 위험과 상관관계</li>
                    <li>통화 가치에 영향을 미치는 경제적, 정치적 요인</li>
                    <li>거래 시간 중 유동성 위험</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>교육 콘텐츠 면책조항</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  본 웹사이트에서 제공하는 모든 콘텐츠는 <strong>교육 및 정보 제공 목적</strong>으로만 제공됩니다. 
                  당사의 기사, 분석, 거래 통찰은 외환 시장을 이해하고 거래 지식을 개발하는 데 도움을 주기 위한 것입니다.
                </p>
                <Alert>
                  <AlertDescription>
                    <strong>중요:</strong> 본 웹사이트의 어떤 내용도 금융 조언, 투자 추천 또는 거래 신호를 
                    구성하지 않습니다. 당사는 귀하의 특정 재정 상황에 맞춤화된 개인 투자 조언이나 추천을 제공하지 않습니다.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>원화(KRW) 거래 특별 위험</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground">
                  원화(KRW) 관련 통화쌍 거래는 신흥시장 통화 특유의 추가 위험을 수반합니다:
                </p>
                <div className="space-y-3">
                  <div className="bg-muted/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">USD/KRW 위험 요소</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      <li>아시아 거래 시간 중 높은 변동성</li>
                      <li>미-한 무역 관계에 대한 민감성</li>
                      <li>한국은행의 시장 개입 위험</li>
                      <li>북한과의 지정학적 긴장</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="w-5 h-5 text-primary mr-2" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground mb-4">
                If you have questions about this disclaimer or our content, please contact us:
              </p>
              <div className="bg-muted/30 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>Email:</strong> legal@fxtrading-blog.com</p>
                    <p><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM KST</p>
                  </div>
                  <div>
                    <p><strong>Response Time:</strong> Within 48 hours</p>
                    <p><strong>Languages:</strong> English, Korean</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Last Updated */}
          <div className="text-center text-sm text-muted-foreground pt-8 border-t">
            <p>This disclaimer was last updated on {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p>본 면책조항은 {new Date().toLocaleDateString('ko-KR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}에 마지막으로 업데이트되었습니다</p>
          </div>

        </div>
      </div>
    </div>
  );
}
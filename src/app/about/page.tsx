import Layout from '@/components/Layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  TrendingUp, 
  BarChart3, 
  Globe, 
  Users, 
  Target, 
  BookOpen, 
  Shield, 
  AlertTriangle,
  Mail,
  Twitter,
  Linkedin,
  User,
  Award,
  Calendar,
  CheckCircle
} from 'lucide-react'

const teamMembers = [
  {
    name: "김민준",
    nameEn: "Kim Min Jun",
    role: "수석 FX 애널리스트",
    roleEn: "Senior FX Analyst",
    avatar: "/api/placeholder/120/120",
    bio: "10년 이상의 FX 거래 경험을 보유한 수석 애널리스트입니다. 한국은행 출신으로 중앙은행 정책과 거시경제 분석에 특화되어 있습니다.",
    bioEn: "Senior analyst with over 10 years of FX trading experience. Former Bank of Korea economist specializing in central bank policy and macroeconomic analysis.",
    specializations: ["USD/KRW 분석", "중앙은행 정책", "거시경제 분석"],
    experience: "10+ 년"
  },
  {
    name: "박서연",
    nameEn: "Park Seo Yeon",
    role: "기술적 분석 전문가",
    roleEn: "Technical Analysis Specialist",
    avatar: "/api/placeholder/120/120",
    bio: "차트 패턴 인식과 기술적 지표 분석에 전문성을 가진 애널리스트입니다. 아시아 세션 거래 타이밍과 변동성 분석을 담당합니다.",
    bioEn: "Chart pattern recognition and technical indicator specialist. Focuses on Asian session trading timing and volatility analysis.",
    specializations: ["차트 패턴", "기술적 지표", "변동성 분석"],
    experience: "8+ 년"
  },
  {
    name: "이준호",
    nameEn: "Lee Jun Ho",
    role: "펀더멘털 분석가",
    roleEn: "Fundamental Analyst",
    avatar: "/api/placeholder/120/120",
    bio: "경제 지표와 정치적 이벤트가 환율에 미치는 영향을 분석합니다. 한국 경제 캘린더와 글로벌 이벤트 모니터링을 전담합니다.",
    bioEn: "Analyzes the impact of economic indicators and political events on exchange rates. Specializes in Korean economic calendar and global event monitoring.",
    specializations: ["경제 지표", "정치적 리스크", "이벤트 분석"],
    experience: "7+ 년"
  }
]

const coverageAreas = [
  {
    icon: TrendingUp,
    title: "일일 시장 분석",
    description: "매일 아침 주요 통화쌍의 시장 동향과 거래 전망을 제공합니다."
  },
  {
    icon: BarChart3,
    title: "기술적 & 펀더멘털 분석",
    description: "차트 분석과 경제 지표를 종합한 균형잡힌 시각을 제공합니다."
  },
  {
    icon: Globe,
    title: "중앙은행 정책 영향",
    description: "한국은행, 연준, ECB 등 주요 중앙은행 정책 변화의 영향을 분석합니다."
  },
  {
    icon: Calendar,
    title: "경제 캘린더 이벤트",
    description: "주요 경제 지표 발표와 정치적 이벤트의 환율 영향을 예측합니다."
  },
  {
    icon: BookOpen,
    title: "거래 전략 & 교육",
    description: "초보자부터 전문가까지, 실용적인 거래 전략과 교육 콘텐츠를 제공합니다."
  },
  {
    icon: Shield,
    title: "리스크 관리",
    description: "안전한 거래를 위한 리스크 관리 방법과 포지션 사이징을 안내합니다."
  }
]

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-4 py-12 space-y-16">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
              KO FX Trading 소개
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              한국원(KRW) 거래에 특화된 전문적인 FX 분석과 통찰력을 제공하는 신뢰할 수 있는 파트너입니다.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Badge variant="secondary" className="text-sm">USD/KRW 전문</Badge>
            <Badge variant="secondary" className="text-sm">기술적 분석</Badge>
            <Badge variant="secondary" className="text-sm">펀더멘털 분석</Badge>
            <Badge variant="secondary" className="text-sm">교육 중심</Badge>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">미션 & 비전</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-heading font-semibold">미션</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  정확하고 시의적절한 FX 분석을 통해 한국원 거래자들이 
                  더 나은 투자 결정을 내릴 수 있도록 돕습니다. 
                  투명하고 교육적인 콘텐츠로 FX 시장의 복잡성을 
                  이해하기 쉽게 전달합니다.
                </p>
              </CardContent>
            </Card>
            <Card className="p-6">
              <CardContent className="p-0 space-y-4">
                <div className="flex items-center gap-3">
                  <Globe className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-heading font-semibold">비전</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  한국 FX 시장의 대표적인 분석 플랫폼이 되어, 
                  거래자들의 성공적인 투자를 위한 필수 정보원으로 
                  자리잡는 것입니다. 지속적인 교육과 리스크 인식을 
                  통해 건전한 거래 문화를 조성합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Expertise */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">전문 분야</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              10년 이상의 FX 시장 경험을 바탕으로 한국원 중심의 통화쌍 분석에 특화되어 있습니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center">
              <CardContent className="p-0 space-y-4">
                <BarChart3 className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-lg font-heading font-semibold">기술적 분석</h3>
                <p className="text-sm text-muted-foreground">
                  차트 패턴, 기술적 지표, 지지/저항선 분석을 통한 진입/청산 타이밍 제공
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0 space-y-4">
                <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-lg font-heading font-semibold">펀더멘털 분석</h3>
                <p className="text-sm text-muted-foreground">
                  경제 지표, 중앙은행 정책, 정치적 이벤트가 환율에 미치는 영향 분석
                </p>
              </CardContent>
            </Card>
            <Card className="p-6 text-center">
              <CardContent className="p-0 space-y-4">
                <Globe className="h-12 w-12 text-primary mx-auto" />
                <h3 className="text-lg font-heading font-semibold">아시아 세션 전문</h3>
                <p className="text-sm text-muted-foreground">
                  한국 거래 시간대에 최적화된 분석과 아시아 경제 지표 모니터링
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Team Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">전문가 팀</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              다양한 배경과 전문성을 가진 애널리스트들이 협력하여 포괄적인 시장 분석을 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0 space-y-4 text-center">
                  <div className="relative mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <User className="h-12 w-12 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>
                  <p className="text-sm text-foreground leading-relaxed">{member.bio}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{member.experience} 경험</span>
                    </div>
                    <div className="flex flex-wrap justify-center gap-1">
                      {member.specializations.map((spec, specIndex) => (
                        <Badge key={specIndex} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Our Approach */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">분석 접근법</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-heading font-semibold">다차원적 분석</h3>
                  </div>
                  <p className="text-muted-foreground">
                    기술적 분석과 펀더멘털 분석을 결합하여 균형잡힌 시각을 제공합니다.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-heading font-semibold">리스크 우선</h3>
                  </div>
                  <p className="text-muted-foreground">
                    모든 분석에 리스크 관리와 안전한 거래 원칙을 우선적으로 고려합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-heading font-semibold">교육적 접근</h3>
                  </div>
                  <p className="text-muted-foreground">
                    단순한 추천을 넘어서 분석 과정과 논리를 상세히 설명합니다.
                  </p>
                </CardContent>
              </Card>
              <Card className="p-6">
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center gap-3">
                    <Target className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-heading font-semibold">투명성</h3>
                  </div>
                  <p className="text-muted-foreground">
                    분석 결과와 예측의 정확도를 투명하게 공개하고 지속적으로 개선합니다.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What We Cover */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">다루는 분야</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              FX 거래에 필요한 모든 정보를 체계적으로 제공합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coverageAreas.map((area, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0 space-y-3">
                  <area.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-lg font-heading font-semibold">{area.title}</h3>
                  <p className="text-sm text-muted-foreground">{area.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Risk Disclaimer */}
        <section className="space-y-6">
          <Card className="p-6 border-destructive/20 bg-destructive/5">
            <CardContent className="p-0 space-y-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h3 className="text-lg font-heading font-semibold text-destructive">
                  투자 위험 고지
                </h3>
              </div>
              <div className="space-y-3 text-sm text-foreground">
                <p>
                  <strong>외환거래(FX) 위험:</strong> 외환거래는 높은 위험을 수반하며 모든 투자자에게 적합하지 않을 수 있습니다. 
                  레버리지는 손실뿐만 아니라 이익도 확대시킬 수 있습니다.
                </p>
                <p>
                  <strong>교육 목적:</strong> 본 블로그의 모든 콘텐츠는 교육 및 정보 제공 목적으로만 제작되었으며, 
                  개인적인 투자 조언이나 거래 권유로 해석되어서는 안 됩니다.
                </p>
                <p>
                  <strong>과거 성과 주의:</strong> 과거의 거래 성과나 분석 결과가 미래의 결과를 보장하지 않습니다. 
                  투자 전에 반드시 전문가의 조언을 구하시기 바랍니다.
                </p>
                <p>
                  <strong>독립적 판단:</strong> 모든 투자 결정은 투자자 본인의 독립적인 판단과 책임 하에 이루어져야 합니다.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Contact/Connect Section */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">소통하기</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              질문이나 피드백이 있으시면 언제든 연락해 주세요. 여러분의 의견이 더 나은 콘텐츠를 만드는 원동력입니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="default" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              뉴스레터 구독
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Twitter className="h-4 w-4" />
              트위터 팔로우
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Linkedin className="h-4 w-4" />
              링크드인 연결
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  )
}
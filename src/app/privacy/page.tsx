import { Metadata } from 'next'
import Layout from '@/components/Layout'
import { Mail, Phone, MapPin } from 'lucide-react'

export const metadata: Metadata = {
  title: '개인정보처리방침 | Privacy Policy - FX Trading Blog',
  description: 'FX Trading Blog의 개인정보처리방침 및 데이터 보호 정책을 확인하세요.',
}

export default function PrivacyPolicyPage() {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl py-12 px-4">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              개인정보처리방침
            </h1>
            <h2 className="text-3xl font-semibold text-muted-foreground">
              Privacy Policy
            </h2>
            <p className="text-muted-foreground">
              최종 업데이트: 2024년 1월 15일 | Last Updated: January 15, 2024
            </p>
          </div>

          <div className="border-t border-border"></div>

          {/* Table of Contents */}
          <div className="bg-card rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-4 text-foreground">목차 | Table of Contents</h3>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="space-y-2">
                <a href="#section-1" className="block text-primary hover:underline">1. 개인정보 수집 및 이용 | Information Collection</a>
                <a href="#section-2" className="block text-primary hover:underline">2. 쿠키 사용 정책 | Cookie Usage</a>
                <a href="#section-3" className="block text-primary hover:underline">3. 이메일 뉴스레터 | Email Newsletter</a>
                <a href="#section-4" className="block text-primary hover:underline">4. 제3자 서비스 | Third-Party Services</a>
                <a href="#section-5" className="block text-primary hover:underline">5. 데이터 보안 | Data Security</a>
              </div>
              <div className="space-y-2">
                <a href="#section-6" className="block text-primary hover:underline">6. 사용자 권리 | User Rights</a>
                <a href="#section-7" className="block text-primary hover:underline">7. GDPR 준수 | GDPR Compliance</a>
                <a href="#section-8" className="block text-primary hover:underline">8. 정책 업데이트 | Policy Updates</a>
                <a href="#section-9" className="block text-primary hover:underline">9. 연락처 정보 | Contact Information</a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-12">
            
            {/* Section 1 */}
            <section id="section-1" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                1. 개인정보 수집 및 이용 | Information Collection and Use
              </h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">수집하는 정보 | Information We Collect</h3>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>이메일 주소</strong> - 뉴스레터 구독 시 | Email address for newsletter subscription</li>
                      <li>• <strong>웹사이트 방문 기록</strong> - Google Analytics를 통한 익명화된 데이터 | Website usage data via Google Analytics (anonymized)</li>
                      <li>• <strong>쿠키 정보</strong> - 사용자 경험 개선을 위한 기술적 정보 | Cookie data for improved user experience</li>
                      <li>• <strong>IP 주소</strong> - 보안 및 사이트 분석 목적 | IP address for security and analytics</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-foreground mb-2">정보 이용 목적 | How We Use Information</h3>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <ul className="space-y-2 text-sm">
                      <li>• FX 거래 관련 뉴스레터 및 교육 콘텐츠 발송 | Sending FX trading newsletters and educational content</li>
                      <li>• 웹사이트 성능 분석 및 사용자 경험 개선 | Website performance analysis and user experience improvement</li>
                      <li>• 보안 위협 탐지 및 방지 | Security threat detection and prevention</li>
                      <li>• 법적 요구사항 준수 | Compliance with legal requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 2 */}
            <section id="section-2" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                2. 쿠키 사용 정책 | Cookie Usage Policy
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-3">쿠키 유형 | Types of Cookies</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">필수 쿠키 | Essential Cookies</h4>
                      <p className="text-muted-foreground">웹사이트의 기본 기능을 위해 반드시 필요한 쿠키입니다. | Essential for basic website functionality.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">분석 쿠키 | Analytics Cookies</h4>
                      <p className="text-muted-foreground">Google Analytics를 통한 사이트 사용 분석을 위한 쿠키입니다. | Used for website usage analytics via Google Analytics.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">기능성 쿠키 | Functional Cookies</h4>
                      <p className="text-muted-foreground">사용자 설정 및 선호도 저장을 위한 쿠키입니다. | Store user preferences and settings.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">마케팅 쿠키 | Marketing Cookies</h4>
                      <p className="text-muted-foreground">맞춤형 광고 제공을 위한 쿠키입니다 (사용자 동의 시만). | For personalized advertising (with user consent only).</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <p className="text-sm text-amber-800">
                    <strong>쿠키 관리 | Cookie Management:</strong> 브라우저 설정에서 쿠키를 비활성화할 수 있지만, 일부 기능이 제한될 수 있습니다. | 
                    You can disable cookies in your browser settings, but some features may be limited.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="section-3" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                3. 이메일 뉴스레터 데이터 처리 | Email Newsletter Data Handling
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-3">구독 정보 | Subscription Information</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• <strong>수집 정보:</strong> 이메일 주소, 구독 날짜, IP 주소 (보안 목적)</li>
                    <li>• <strong>Information Collected:</strong> Email address, subscription date, IP address (for security)</li>
                    <li>• <strong>보관 기간:</strong> 구독 해지 시까지 또는 2년간 비활성 시 자동 삭제</li>
                    <li>• <strong>Retention Period:</strong> Until unsubscribed or automatically deleted after 2 years of inactivity</li>
                    <li>• <strong>발송 빈도:</strong> 주 1-2회, 중요한 FX 시장 업데이트 시 추가 발송</li>
                    <li>• <strong>Frequency:</strong> 1-2 times per week, additional sends for important FX market updates</li>
                  </ul>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-sm text-blue-800">
                    <strong>구독 해지:</strong> 모든 이메일 하단의 구독 해지 링크를 통해 언제든지 해지 가능합니다. | 
                    <strong>Unsubscribe:</strong> You can unsubscribe anytime using the link at the bottom of every email.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="section-4" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                4. 제3자 서비스 | Third-Party Services
              </h2>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-foreground mb-3">Google Analytics</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 익명화된 사용자 행동 분석</li>
                      <li>• Anonymized user behavior analysis</li>
                      <li>• IP 주소 익명화 활성화</li>
                      <li>• IP address anonymization enabled</li>
                      <li>• 데이터 보존 기간: 26개월</li>
                      <li>• Data retention: 26 months</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-foreground mb-3">Trading Widgets</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• TradingView 차트 및 위젯</li>
                      <li>• TradingView charts and widgets</li>
                      <li>• 실시간 FX 데이터 제공</li>
                      <li>• Real-time FX data provision</li>
                      <li>• 제3자 쿠키 사용 가능</li>
                      <li>• May use third-party cookies</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-medium text-foreground mb-2">기타 서비스 | Other Services</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• <strong>CDN 서비스:</strong> 웹사이트 성능 최적화를 위한 콘텐츠 배포 네트워크</li>
                    <li>• <strong>CDN Services:</strong> Content delivery network for website performance optimization</li>
                    <li>• <strong>이메일 서비스:</strong> 뉴스레터 발송을 위한 전문 이메일 서비스 제공업체</li>
                    <li>• <strong>Email Services:</strong> Professional email service providers for newsletter delivery</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="section-5" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                5. 데이터 보안 조치 | Data Security Measures
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">보안 기술 | Security Technologies</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-2">암호화 | Encryption</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• SSL/TLS 암호화 (HTTPS)</li>
                        <li>• 데이터베이스 암호화</li>
                        <li>• 이메일 전송 암호화</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-2">접근 제어 | Access Control</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 관리자 계정 2단계 인증</li>
                        <li>• IP 기반 접근 제한</li>
                        <li>• 정기적인 보안 감사</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <p className="text-sm text-red-800">
                    <strong>보안 사고 대응 | Security Incident Response:</strong> In case of data breach, we will notify authorities within 72 hours and inform affected users.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="section-6" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                6. 사용자 권리 및 데이터 접근 | User Rights and Data Access
              </h2>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-foreground mb-3">귀하의 권리 | Your Rights</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>열람권:</strong> 보유 중인 개인정보 확인</li>
                      <li>• <strong>Access:</strong> View personal data we hold</li>
                      <li>• <strong>정정·삭제권:</strong> 잘못된 정보 수정 및 삭제 요구</li>
                      <li>• <strong>Rectification:</strong> Correct or delete inaccurate data</li>
                      <li>• <strong>처리정지권:</strong> 개인정보 처리 중단 요구</li>
                      <li>• <strong>Restriction:</strong> Limit processing of your data</li>
                    </ul>
                  </div>
                  
                  <div className="bg-card border rounded-lg p-4">
                    <h3 className="text-lg font-medium text-foreground mb-3">권리 행사 방법 | How to Exercise Rights</h3>
                    <ul className="space-y-2 text-sm">
                      <li>• 이메일: privacy@fxtradingblog.co.kr</li>
                      <li>• 전화: +82-2-1234-5678</li>
                      <li>• 우편: 서울시 강남구 테헤란로 123</li>
                      <li>• 처리 기간: 요청 후 30일 이내</li>
                      <li>• Processing time: Within 30 days</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 border-l-4 border-green-400 p-4">
                  <p className="text-sm text-green-800">
                    <strong>무료 서비스 | Free Service:</strong> Exercising your privacy rights is free and processed after identity verification.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="section-7" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                7. GDPR 준수 | GDPR Compliance
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-4">EU 거주자를 위한 추가 권리 | Additional Rights for EU Residents</h3>
                  <div className="space-y-3">
                    <div className="bg-muted/30 p-3 rounded">
                      <h4 className="font-medium text-foreground">데이터 이동권 | Data Portability</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        기계가 읽을 수 있는 형태로 개인정보를 제공받을 권리 | 
                        Right to receive personal data in a machine-readable format
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <h4 className="font-medium text-foreground">자동화된 의사결정에 대한 거부권 | Right to Object to Automated Decision-Making</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        프로파일링을 포함한 자동화된 처리에 대한 거부 | 
                        Object to automated processing including profiling
                      </p>
                    </div>
                    <div className="bg-muted/30 p-3 rounded">
                      <h4 className="font-medium text-foreground">감독기관 신고권 | Right to Lodge a Complaint</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        해당 국가의 데이터 보호 당국에 신고할 권리 | 
                        Lodge a complaint with your national data protection authority
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <p className="text-sm text-blue-800">
                    <strong>법적 근거 | Legal Basis:</strong> We process personal data based on legitimate interests, contract performance, and legal compliance.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section id="section-8" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                8. 개인정보처리방침 업데이트 | Privacy Policy Updates
              </h2>
              
              <div className="space-y-4">
                <div className="bg-card border rounded-lg p-6">
                  <h3 className="text-lg font-medium text-foreground mb-3">정책 변경 시 | When Policy Changes</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <div>
                        <strong>사전 통지 | Prior Notice:</strong> Important changes notified 30 days in advance via email and website
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <div>
                        <strong>버전 관리 | Version Control:</strong> All policy versions archived with dates
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <div>
                        <strong>지속적인 이용 | Continued Use:</strong> Using services after changes implies acceptance of new policy
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-amber-50 border-l-4 border-amber-400 p-4">
                  <p className="text-sm text-amber-800">
                    <strong>정기 검토 | Regular Review:</strong> This policy is reviewed annually and updated as necessary.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section id="section-9" className="space-y-6">
              <h2 className="text-2xl font-semibold text-foreground border-b pb-2">
                9. 개인정보보호 관련 연락처 | Privacy Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-lg font-medium text-foreground mb-4">개인정보보호책임자 | Data Protection Officer</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">이메일 | Email</p>
                          <p className="text-sm text-muted-foreground">privacy@fxtradingblog.co.kr</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-primary" />
                        <div>
                          <p className="font-medium">전화 | Phone</p>
                          <p className="text-sm text-muted-foreground">+82-2-1234-5678</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-4 w-4 text-primary mt-1" />
                        <div>
                          <p className="font-medium">주소 | Address</p>
                          <p className="text-sm text-muted-foreground">
                            서울특별시 강남구 테헤란로 123<br />
                            FX Trading Blog 개인정보보호팀<br />
                            123 Teheran-ro, Gangnam-gu, Seoul<br />
                            Privacy Team, FX Trading Blog
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-card border rounded-lg p-6">
                    <h3 className="text-lg font-medium text-foreground mb-4">응답 시간 | Response Times</h3>
                    <div className="space-y-3 text-sm">
                      <div className="bg-muted/30 p-3 rounded">
                        <p className="font-medium">일반 문의 | General Inquiries</p>
                        <p className="text-muted-foreground">영업일 기준 3일 이내 | Within 3 business days</p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded">
                        <p className="font-medium">권리 행사 요청 | Rights Requests</p>
                        <p className="text-muted-foreground">30일 이내 | Within 30 days</p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded">
                        <p className="font-medium">보안 관련 | Security Issues</p>
                        <p className="text-muted-foreground">24시간 이내 | Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          <div className="border-t border-border"></div>

          {/* Footer */}
          <div className="text-center text-sm text-muted-foreground bg-muted/30 p-6 rounded-lg">
            <p className="mb-2">
              이 개인정보처리방침은 FX Trading Blog의 개인정보 보호에 대한 약속을 나타냅니다.<br />
              This Privacy Policy represents FX Trading Blog's commitment to protecting your personal information.
            </p>
            <p className="text-xs">
              © 2024 FX Trading Blog. 모든 권리 보유 | All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
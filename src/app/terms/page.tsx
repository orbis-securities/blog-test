import type { Metadata } from 'next'
import Layout from '@/components/Layout'
import { AlertTriangle, FileText, Shield, Scale, Globe, Mail, ChevronRight } from 'lucide-react'
import { Alert, AlertDescription } from '@/components/ui/alert'

export const metadata: Metadata = {
  title: 'Terms of Service | FX Trading Blog',
  description: 'Terms of Service for FX Trading Blog - Educational content, user responsibilities, and legal disclaimers for forex trading education.',
  keywords: 'terms of service, legal, forex trading, educational content, disclaimer, liability',
}

export default function TermsOfServicePage() {
  return (
    <Layout>
      <div className="container mx-auto max-w-4xl px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 font-heading">Terms of Service</h1>
          <p className="text-muted-foreground text-lg">
            Please read these terms carefully before using our services
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Last updated: January 2024
          </p>
        </div>

        {/* Language Toggle */}
        <div className="mb-8 flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md">
            <Globe className="w-4 h-4" />
            English
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-accent">
            <Globe className="w-4 h-4" />
            한국어
          </button>
        </div>

        {/* Critical Warning */}
        <Alert className="mb-8 border-destructive">
          <AlertTriangle className="h-4 w-4 text-destructive" />
          <AlertDescription className="text-destructive font-medium">
            <strong>Important Risk Warning:</strong> Foreign exchange trading carries a high level of risk and may not be suitable for all investors. You could lose substantially more than your initial investment. Never trade with money you cannot afford to lose.
          </AlertDescription>
        </Alert>

        {/* Table of Contents */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Table of Contents
          </h2>
          <nav className="space-y-2">
            <a href="#acceptance" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              1. Acceptance of Terms
            </a>
            <a href="#service-description" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              2. Service Description
            </a>
            <a href="#user-responsibilities" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              3. User Responsibilities
            </a>
            <a href="#prohibited-uses" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              4. Prohibited Uses
            </a>
            <a href="#intellectual-property" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              5. Intellectual Property
            </a>
            <a href="#educational-disclaimer" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              6. Educational Disclaimer
            </a>
            <a href="#trading-risks" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              7. Trading Risk Warnings
            </a>
            <a href="#limitation-liability" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              8. Limitation of Liability
            </a>
            <a href="#account-termination" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              9. Account Termination
            </a>
            <a href="#governing-law" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              10. Governing Law
            </a>
            <a href="#contact" className="flex items-center gap-2 text-primary hover:underline">
              <ChevronRight className="w-4 h-4" />
              11. Contact Information
            </a>
          </nav>
        </div>

        {/* Content Sections */}
        <div className="prose prose-lg max-w-none">
          
          {/* Section 1: Acceptance of Terms */}
          <section id="acceptance" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">1. Acceptance of Terms</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="mb-4">
                By accessing and using the FX Trading Blog website ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p>
                These Terms of Service constitute a legally binding agreement between you and FX Trading Blog. Your continued use of the Service indicates your acceptance of any modifications to these terms.
              </p>
            </div>
          </section>

          {/* Section 2: Service Description */}
          <section id="service-description" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">2. Service Description</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="mb-4">
                FX Trading Blog provides educational content, analysis, and commentary related to foreign exchange markets. Our services include:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Educational articles about forex trading concepts and strategies</li>
                <li>Market analysis and commentary</li>
                <li>Trading psychology and risk management guidance</li>
                <li>Technical and fundamental analysis tutorials</li>
                <li>Community discussions and user-generated content</li>
              </ul>
              <Alert className="border-primary/20 bg-primary/5">
                <Shield className="h-4 w-4 text-primary" />
                <AlertDescription>
                  <strong>Important:</strong> All content is for educational purposes only and does not constitute financial advice, investment recommendations, or trading signals.
                </AlertDescription>
              </Alert>
            </div>
          </section>

          {/* Section 3: User Responsibilities */}
          <section id="user-responsibilities" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">3. User Responsibilities</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="mb-4">As a user of our Service, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate and truthful information when creating an account</li>
                <li>Maintain the security and confidentiality of your account credentials</li>
                <li>Use the Service in compliance with all applicable laws and regulations</li>
                <li>Respect the intellectual property rights of others</li>
                <li>Engage respectfully with other users in community discussions</li>
                <li>Report any suspicious activity or violations of these terms</li>
                <li>Understand that all trading decisions are your own responsibility</li>
              </ul>
              <p>
                You are solely responsible for all activities that occur under your account and for any consequences thereof.
              </p>
            </div>
          </section>

          {/* Section 4: Prohibited Uses */}
          <section id="prohibited-uses" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">4. Prohibited Uses</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="mb-4">You may not use our Service:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>For any unlawful purpose or to solicit others to act unlawfully</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
                <li>To upload or transmit viruses or any other type of malicious code</li>
                <li>To spam, phish, pharm, pretext, spider, crawl, or scrape</li>
                <li>For any obscene or immoral purpose</li>
                <li>To provide investment advice or act as a financial advisor without proper licensing</li>
                <li>To guarantee trading profits or promise unrealistic returns</li>
              </ul>
            </div>
          </section>

          {/* Section 5: Intellectual Property */}
          <section id="intellectual-property" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">5. Intellectual Property</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Our Content</h3>
              <p className="mb-4">
                The Service and its original content, features, and functionality are and will remain the exclusive property of FX Trading Blog and its licensors. The Service is protected by copyright, trademark, and other laws.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">User-Generated Content</h3>
              <p className="mb-4">
                By posting content on our Service, you grant us a non-exclusive, royalty-free, perpetual, irrevocable, and fully sublicensable right to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content throughout the world in any media.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">License to Use</h3>
              <p>
                We grant you a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes, subject to these Terms of Service.
              </p>
            </div>
          </section>

          {/* Section 6: Educational Disclaimer */}
          <section id="educational-disclaimer" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">6. Educational Disclaimer</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <Alert className="mb-4 border-destructive">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <AlertDescription className="text-destructive font-medium">
                  <strong>NOT FINANCIAL ADVICE:</strong> All content on this website is for educational and informational purposes only.
                </AlertDescription>
              </Alert>
              
              <p className="mb-4">
                The information provided on FX Trading Blog is intended solely for educational purposes and should not be considered as:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Financial, investment, or trading advice</li>
                <li>A recommendation to buy, sell, or hold any financial instrument</li>
                <li>A solicitation or offer to buy or sell securities</li>
                <li>Professional financial consultation</li>
                <li>Tax, legal, or accounting advice</li>
              </ul>
              
              <p className="mb-4">
                You should always consult with qualified financial professionals before making any investment or trading decisions. Past performance is not indicative of future results.
              </p>
              
              <p>
                Any trading strategies, techniques, or systems discussed are for educational purposes only and should be thoroughly tested and understood before implementation with real money.
              </p>
            </div>
          </section>

          {/* Section 7: Trading Risk Warnings */}
          <section id="trading-risks" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">7. Trading Risk Warnings</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <Alert className="mb-4 border-destructive">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                <AlertDescription className="text-destructive font-medium">
                  <strong>HIGH RISK WARNING:</strong> Foreign exchange trading involves substantial risk of loss and is not suitable for all investors.
                </AlertDescription>
              </Alert>
              
              <h3 className="text-lg font-semibold mb-3">Key Risks Include:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Market Risk:</strong> Currency values can fluctuate rapidly and unpredictably</li>
                <li><strong>Leverage Risk:</strong> High leverage can amplify both profits and losses</li>
                <li><strong>Liquidity Risk:</strong> Markets may become illiquid, affecting your ability to trade</li>
                <li><strong>Counterparty Risk:</strong> Risk of broker or counterparty default</li>
                <li><strong>Interest Rate Risk:</strong> Changes in interest rates can affect currency values</li>
                <li><strong>Political Risk:</strong> Government policies and political events can impact markets</li>
                <li><strong>Technology Risk:</strong> System failures may prevent trade execution</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3">Important Considerations:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You could lose substantially more than your initial investment</li>
                <li>Never trade with money you cannot afford to lose</li>
                <li>Past performance does not guarantee future results</li>
                <li>Market conditions can change rapidly</li>
                <li>Trading strategies may not work in all market conditions</li>
              </ul>
              
              <p>
                Before engaging in forex trading, carefully consider your investment objectives, level of experience, and risk tolerance.
              </p>
            </div>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section id="limitation-liability" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">8. Limitation of Liability</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL FX TRADING BLOG, ITS AFFILIATES, AGENTS, DIRECTORS, EMPLOYEES, SUPPLIERS, OR LICENSORS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING WITHOUT LIMITATION DAMAGES FOR:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Loss of profits, goodwill, use, or data</li>
                <li>Trading losses or missed opportunities</li>
                <li>Service interruption or system failures</li>
                <li>Cost of substitute goods or services</li>
                <li>Any other tangible or intangible losses</li>
              </ul>
              
              <p className="mb-4">
                This limitation applies regardless of the legal theory on which the claim is based, whether in contract, tort (including negligence), strict liability, or otherwise, even if we have been advised of the possibility of such damages.
              </p>
              
              <p>
                Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages, so the above limitation may not apply to you.
              </p>
            </div>
          </section>

          {/* Section 9: Account Termination */}
          <section id="account-termination" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">9. Account Termination</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">Your Right to Terminate</h3>
              <p className="mb-4">
                You may terminate your account at any time by discontinuing use of the Service and deleting your account through your profile settings.
              </p>
              
              <h3 className="text-lg font-semibold mb-3">Our Right to Terminate</h3>
              <p className="mb-4">
                We may terminate or suspend your account immediately, without prior notice or liability, for any reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Breach of these Terms of Service</li>
                <li>Violation of applicable laws or regulations</li>
                <li>Fraudulent, abusive, or illegal activity</li>
                <li>Harm to other users or our reputation</li>
                <li>Any other conduct we deem inappropriate</li>
              </ul>
              
              <h3 className="text-lg font-semibold mb-3">Effect of Termination</h3>
              <p>
                Upon termination, your right to use the Service will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
              </p>
            </div>
          </section>

          {/* Section 10: Governing Law */}
          <section id="governing-law" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">10. Governing Law and Jurisdiction</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="mb-4">
                These Terms shall be interpreted and governed by the laws of [Jurisdiction], without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              
              <p className="mb-4">
                Any disputes arising from these Terms or your use of the Service shall be resolved through binding arbitration in accordance with the rules of [Arbitration Organization], or in the courts of [Jurisdiction] if arbitration is not applicable.
              </p>
              
              <p>
                If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions will remain in effect.
              </p>
            </div>
          </section>

          {/* Section 11: Contact Information */}
          <section id="contact" className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 font-heading">11. Contact Information</h2>
            <div className="bg-card border border-border rounded-lg p-6">
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>Email: legal@fxtradingblog.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-primary" />
                  <span>Website: www.fxtradingblog.com</span>
                </div>
              </div>
              
              <p className="mt-4 text-sm text-muted-foreground">
                We will respond to all inquiries within 5 business days.
              </p>
            </div>
          </section>

        </div>

        {/* Korean Version */}
        <div className="hidden" id="korean-content">
          <div className="border-t border-border pt-12 mt-12">
            <h1 className="text-4xl font-bold mb-4 font-heading">서비스 이용약관</h1>
            <p className="text-muted-foreground text-lg mb-8">
              서비스 이용 전 반드시 본 약관을 주의 깊게 읽어주시기 바랍니다
            </p>
            
            {/* Korean content would continue here with full translation */}
            <Alert className="border-destructive">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-destructive font-medium">
                <strong>중요한 위험 경고:</strong> 외환거래는 높은 위험을 수반하며 모든 투자자에게 적합하지 않을 수 있습니다. 초기 투자금보다 훨씬 많은 손실을 볼 수 있으므로, 잃을 수 있는 돈으로만 거래하시기 바랍니다.
              </AlertDescription>
            </Alert>
            
            <p className="mt-6 text-muted-foreground">
              전체 한국어 번역은 준비 중입니다. 법적 효력은 영문 원본을 따릅니다.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground text-center">
            These Terms of Service are effective as of January 2024 and may be updated from time to time. 
            Continued use of the Service after any changes indicates acceptance of the new terms.
          </p>
        </div>
      </div>
    </Layout>
  )
}
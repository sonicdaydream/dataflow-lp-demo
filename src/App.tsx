import { useState, useEffect, type FormEvent } from 'react'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Simulate API call
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      setFormState({ name: '', email: '', company: '', message: '' })
    }, 1200)
  }

  const features = [
    {
      icon: '📊',
      title: 'リアルタイムダッシュボード',
      desc: 'あらゆるマーケティングチャネルのデータをリアルタイムで可視化。直感的なダッシュボードで、チームの誰もがデータドリブンな意思決定を行えます。',
    },
    {
      icon: '🤖',
      title: 'AI搭載の予測分析',
      desc: '機械学習アルゴリズムがトレンドを自動検出し、将来のパフォーマンスを予測。最適な施策タイミングとチャネル配分をAIが提案します。',
    },
    {
      icon: '🔗',
      title: 'ワンクリック連携',
      desc: 'Google Analytics、HubSpot、Salesforceなど50以上のツールとワンクリックで接続。データの統合にかかる時間を90%削減します。',
    },
  ]

  const plans = [
    {
      name: 'Starter',
      price: '¥9,800',
      period: '/月',
      desc: '小規模チーム向け',
      features: ['ユーザー3名まで', '基本ダッシュボード', '5チャネル連携', 'メールサポート', 'データ保持30日'],
      popular: false,
    },
    {
      name: 'Professional',
      price: '¥29,800',
      period: '/月',
      desc: '成長中のチームに最適',
      features: ['ユーザー15名まで', 'AI予測分析', '無制限チャネル連携', '優先サポート', 'データ保持1年', 'カスタムレポート'],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'お問い合わせ',
      period: '',
      desc: '大規模組織向け',
      features: ['無制限ユーザー', '全機能アクセス', '専任CSM', 'SLA保証99.9%', '無制限データ保持', 'オンボーディング支援'],
      popular: false,
    },
  ]

  const faqs = [
    {
      q: '無料トライアルはありますか？',
      a: 'はい、全プランで14日間の無料トライアルをご用意しています。クレジットカードの登録なしでお試しいただけます。トライアル期間中はProfessionalプランの全機能をご利用いただけます。',
    },
    {
      q: '導入にどのくらいの時間がかかりますか？',
      a: '基本的なセットアップは最短15分で完了します。既存ツールとの連携もワンクリックで可能です。Enterpriseプランでは専任のオンボーディングチームが導入をサポートいたします。',
    },
    {
      q: 'データのセキュリティは大丈夫ですか？',
      a: 'SOC2 Type II認証を取得しており、全データはAES-256で暗号化されています。GDPRおよび日本の個人情報保護法にも完全対応しています。',
    },
    {
      q: 'プランの変更やキャンセルはいつでもできますか？',
      a: 'はい、プランのアップグレード・ダウングレードはいつでも可能です。ダウングレードは次の請求サイクルから適用されます。キャンセルも管理画面からワンクリックで行えます。',
    },
    {
      q: '既存のツールとの連携は簡単ですか？',
      a: 'Google Analytics、HubSpot、Salesforce、Slack、Facebook Ads、Google Adsなど50以上のツールとワンクリックで連携可能です。APIも公開しており、カスタム連携も構築できます。',
    },
  ]

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      {/* Header */}
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav">
          <div className="logo">DataFlow</div>
          <div className="nav-links">
            <a href="#features">機能</a>
            <a href="#pricing">料金</a>
            <a href="#faq">FAQ</a>
            <a href="#contact" className="nav-cta">無料で始める</a>
          </div>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="メニュー"
          >
            {mobileOpen ? '✕' : '☰'}
          </button>
        </nav>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav${mobileOpen ? ' open' : ''}`}>
        <a href="#features" onClick={closeMobile}>機能</a>
        <a href="#pricing" onClick={closeMobile}>料金</a>
        <a href="#faq" onClick={closeMobile}>FAQ</a>
        <a href="#contact" onClick={closeMobile}>無料で始める</a>
      </div>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-badge">🚀 新機能: AI自動レポート生成をリリース</span>
          <h1>
            マーケティングデータを
            <br />
            <span className="gradient-text">ビジネス成果に変える</span>
          </h1>
          <p>
            DataFlowは、散在するマーケティングデータを統合し、
            AIの力で実用的なインサイトへと変換するSaaS分析プラットフォームです。
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn-primary">14日間無料トライアル</a>
            <a href="#features" className="btn-secondary">詳しく見る →</a>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <h3>500+</h3>
              <p>導入企業数</p>
            </div>
            <div className="hero-stat">
              <h3>3.2億</h3>
              <p>月間処理データポイント</p>
            </div>
            <div className="hero-stat">
              <h3>42%</h3>
              <p>平均ROI向上率</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="section features">
        <div className="section-header">
          <span className="section-label">Features</span>
          <h2>成果を加速する3つの機能</h2>
          <p>データ収集から分析、施策提案まで、マーケティングの全プロセスをカバーします。</p>
        </div>
        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="section pricing">
        <div className="section-header">
          <span className="section-label">Pricing</span>
          <h2>シンプルで透明な料金体系</h2>
          <p>ビジネスの規模に合わせて最適なプランをお選びください。</p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <div className={`pricing-card${plan.popular ? ' popular' : ''}`} key={i}>
              {plan.popular && <span className="popular-badge">一番人気</span>}
              <h3>{plan.name}</h3>
              <div className="price">
                {plan.price}
                <span>{plan.period}</span>
              </div>
              <p className="price-desc">{plan.desc}</p>
              <ul className="pricing-features">
                {plan.features.map((feat, j) => (
                  <li key={j}>{feat}</li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`pricing-btn ${plan.popular ? 'pricing-btn-fill' : 'pricing-btn-outline'}`}
              >
                {plan.name === 'Enterprise' ? 'お問い合わせ' : '無料で始める'}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section faq">
        <div className="section-header">
          <span className="section-label">FAQ</span>
          <h2>よくあるご質問</h2>
          <p>ご不明な点がございましたらお気軽にお問い合わせください。</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                {faq.q}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA + Contact Form */}
      <section id="contact" className="cta-section">
        <div className="cta-content">
          <h2>今すぐ始めましょう</h2>
          <p>14日間の無料トライアルで、DataFlowの力を体験してください。</p>

          {submitted ? (
            <div className="form-success">
              <h3>お問い合わせありがとうございます！</h3>
              <p>担当者より1営業日以内にご連絡いたします。</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">お名前</label>
                <input
                  id="name"
                  type="text"
                  placeholder="山田 太郎"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">メールアドレス</label>
                <input
                  id="email"
                  type="email"
                  placeholder="taro@example.com"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">会社名</label>
                <input
                  id="company"
                  type="text"
                  placeholder="株式会社サンプル"
                  value={formState.company}
                  onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">お問い合わせ内容</label>
                <textarea
                  id="message"
                  placeholder="ご質問やご要望をお書きください"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                />
              </div>
              <button type="submit" className="form-submit" disabled={submitting}>
                {submitting ? '送信中...' : '無料トライアルを申し込む'}
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-links">
          <a href="#features">機能</a>
          <a href="#pricing">料金</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">お問い合わせ</a>
        </div>
        <p>&copy; 2026 DataFlow Inc. All rights reserved.</p>
      </footer>
    </>
  )
}

export default App

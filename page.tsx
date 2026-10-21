'use client'
import { useState } from 'react'

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:Inter,sans-serif;background:#FFFEF8;color:#1a2e1a}
        .navbar{position:fixed;top:0;left:0;right:0;z-index:999;background:rgba(255,254,248,0.95);backdrop-filter:blur(12px);border-bottom:1px solid #e8e8d5;display:flex;align-items:center;justify-content:space-between;padding:10px 20px}
        .nav-logo{width:46px;height:46px;border-radius:50%;border:2px solid #d4af37;overflow:hidden}
        .desktop-links{display:flex;gap:28px;align-items:center}
        .burger{display:none;background:none;border:none;font-size:26px;color:#14532d;cursor:pointer}
        .mobile-menu{position:fixed;top:66px;left:0;right:0;background:#FFFEF8;border-bottom:1px solid #e8e8d5;box-shadow:0 10px 30px rgba(0,0,0,0.1);padding:20px;display:flex;flex-direction:column;gap:18px;z-index:998;transform:translateY(-150%);transition:transform 0.3s ease}
        .mobile-menu.open{transform:translateY(0)}
        .mobile-menu a{text-decoration:none;color:#14532d;font-weight:600;font-size:18px;padding:8px 0}
        .mobile-menu .cta{background:#14532d;color:#fff!important;padding:12px 18px;border-radius:999px;text-align:center;margin-top:8px}
        @media(max-width:768px){
          .desktop-links{display:none!important}
          .burger{display:block!important}
        }
        .hero{min-height:90vh;background:linear-gradient(180deg,#f7f3e8 0%,#e8f5d8 100%);display:flex;align-items:center;justify-content:center;padding:120px 20px 60px;text-align:center}
        .logo-badge{width:170px;height:170px;background:#fff;border-radius:50%;margin:0 auto 20px;box-shadow:0 8px 30px rgba(0,0,0,0.15);border:4px solid #d4af37;overflow:hidden}
      `}</style>

      <nav className="navbar">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="nav-logo"><img src="/logo.png" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="logo" /></div>
          <div style={{fontWeight:900,color:'#14532d',fontSize:18}}>REEF & SEED</div>
        </div>

        {/* Desktop Links */}
        <div className="desktop-links">
          <a href="#products" style={{textDecoration:'none',color:'#14532d',fontWeight:600,fontSize:14}}>Collection</a>
          <a href="#story" style={{textDecoration:'none',color:'#14532d',fontWeight:600,fontSize:14}}>Our Story</a>
          <a href="#contact" style={{textDecoration:'none',color:'#14532d',fontWeight:600,fontSize:14}}>Contact</a>
          <a href="#products" style={{background:'#14532d',color:'#fff',padding:'9px 18px',borderRadius:999,textDecoration:'none',fontWeight:700}}>Shop Now</a>
        </div>

        {/* Burger Button - Mobile Only */}
        <button className="burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          {menuOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile Slide-Down Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <a href="#products" onClick={() => setMenuOpen(false)}>Collection</a>
        <a href="#story" onClick={() => setMenuOpen(false)}>Our Story</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <a href="#products" className="cta" onClick={() => setMenuOpen(false)}>Shop Now</a>
      </div>

      {/* HERO */}
      <section className="hero">
        <div>
          <div className="logo-badge"><img src="/logo.png" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Reef & Seed" /></div>
          <div style={{display:'inline-block',background:'#14532d',color:'#fff',padding:'6px 18px',borderRadius:999,fontSize:12,letterSpacing:'0.15em',fontWeight:700,marginBottom:18}}>WILD HARVESTED FROM ST. LUCIA</div>
          <h1 style={{fontSize:'clamp(40px,7vw,72px)',lineHeight:0.9,color:'#14532d'}}>REEF & SEED<span style={{color:'#d4af37',display:'block',fontSize:20,letterSpacing:'0.3em',marginTop:8}}>100% NATURAL</span></h1>
          <p style={{maxWidth:560,margin:'18px auto 28px',color:'#4a6741',fontSize:18,lineHeight:1.6}}>Premium Sea Moss gels and cold-pressed juices. No added sugar, non-GMO, plant-based.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center'}}><a href="#products" style={{padding:'14px 32px',borderRadius:999,fontWeight:700,textDecoration:'none',background:'#14532d',color:'#fff'}}>Shop Collection</a></div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{padding:'80px 20px',maxWidth:1200,margin:'0 auto'}}>
        <div style={{textAlign:'center',color:'#d4af37',fontWeight:700,letterSpacing:'0.2em',fontSize:12,marginBottom:12}}>OUR COLLECTION</div>
        <h2 style={{textAlign:'center',fontSize:'clamp(32px,5vw,48px)',color:'#14532d',marginBottom:12}}>Sea Moss & Cold-Pressed Juices</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:28,marginTop:30}}>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',border:'1px solid #e8e8d5'}}><img src="/images/mango.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Mango & Dates</h3><p style={{fontSize:13,color:'#6b8a63'}}>BEST SELLER</p></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',border:'1px solid #e8e8d5'}}><img src="/images/strawberry.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Strawberry & Dates</h3></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',border:'1px solid #e8e8d5'}}><img src="/images/original.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Original Sea Moss</h3></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',border:'1px solid #e8e8d5'}}><img src="/images/pineapple.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Pineapple & Dates</h3></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',border:'1px solid #e8e8d5'}}><img src="/images/juices.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Emerald & Ruby Juices</h3></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',border:'1px solid #e8e8d5'}}><img src="/logo.png" style={{width:'100%',height:320,objectFit:'contain',background:'#f7f3e8'}} alt="" /><div style={{padding:20}}><h3>Master Blend - All Fruits</h3><p style={{fontSize:13,color:'#6b8a63'}}>Mango, Strawberry, Pineapple, Dates + Sea Moss</p></div></div>
        </div>
      </section>

      <section id="story" style={{padding:'60px 20px',background:'#f7f3e8',textAlign:'center'}}>
        <h2 style={{fontSize:'clamp(32px,5vw,48px)',color:'#14532d'}}>Why Reef & Seed?</h2>
        <p style={{color:'#6b8a63',maxWidth:600,margin:'12px auto'}}>Wild sea moss from St. Lucia infused with organic fruits and dates.</p>
      </section>

      <section id="contact" style={{padding:'80px 20px',maxWidth:800,margin:'0 auto',textAlign:'center',background:'#f7f3e8'}}>
        <h2 style={{fontSize:'clamp(32px,5vw,48px)',color:'#14532d',marginBottom:12}}>Get In Touch</h2>
        <p style={{color:'#6b8a63',marginBottom:24}}>Wholesale, questions, or custom orders — we reply within 48h.</p>
        <div style={{display:'grid',gap:12}}>
          <input placeholder="Your Name" style={{padding:'14px 18px',borderRadius:999,border:'1px solid #e0e8d8'}} />
          <input placeholder="Email" style={{padding:'14px 18px',borderRadius:999,border:'1px solid #e0e8d8'}} />
          <textarea placeholder="Message" style={{padding:'14px 18px',borderRadius:24,border:'1px solid #e0e8d8',minHeight:120}} />
          <button style={{padding:'14px 32px',borderRadius:999,background:'#14532d',color:'#fff',fontWeight:700,border:'none'}}>Send Message</button>
        </div>
        <p style={{marginTop:20,fontSize:14,color:'#6b8a63'}}>Email: hello@reefandseed.com | Instagram: @reefandseed</p>
      </section>
    </>
  )
}

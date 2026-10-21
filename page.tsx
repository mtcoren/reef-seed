
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <style>{`
        *{margin:0;padding:0;box-sizing:border-box}
        body{font-family:Inter,sans-serif;background:#FFFEF8;color:#1a2e1a}
        .navbar{position:fixed;top:0;left:0;right:0;z-index:999;background:rgba(255,254,248,0.95);backdrop-filter:blur(12px);border-bottom:1px solid #e8e8d5;display:flex;align-items:center;justify-content:space-between;padding:10px 24px}
        .nav-logo{width:46px;height:46px;border-radius:50%;border:2px solid #d4af37;overflow:hidden}
        .hero{min-height:90vh;background:linear-gradient(180deg,#f7f3e8 0%,#e8f5d8 100%);display:flex;align-items:center;justify-content:center;padding:120px 20px 60px;text-align:center}
        .logo-badge{width:170px;height:170px;background:#fff;border-radius:50%;margin:0 auto 20px;box-shadow:0 8px 30px rgba(0,0,0,0.15);border:4px solid #d4af37;overflow:hidden}
      `}</style>
      <nav className="navbar">
        <div style={{display:'flex',alignItems:'center',gap:12}}>
          <div className="nav-logo"><img src="/logo.png" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="logo" /></div>
          <div style={{fontWeight:900,color:'#14532d',fontSize:18}}>REEF & SEED</div>
        </div>
        <div style={{display:'flex',gap:28,alignItems:'center'}}>
          <a href="#products" style={{textDecoration:'none',color:'#14532d',fontWeight:600,fontSize:14}}>Collection</a>
          <a href="#products" style={{background:'#14532d',color:'#fff',padding:'9px 18px',borderRadius:999,textDecoration:'none',fontWeight:700}}>Shop Now</a>
        </div>
      </nav>
      <section className="hero">
        <div>
          <div className="logo-badge"><img src="/logo.png" style={{width:'100%',height:'100%',objectFit:'cover'}} alt="Reef & Seed" /></div>
          <div style={{display:'inline-block',background:'#14532d',color:'#fff',padding:'6px 18px',borderRadius:999,fontSize:12,letterSpacing:'0.15em',fontWeight:700,marginBottom:18}}>WILD HARVESTED FROM ST. LUCIA</div>
          <h1 style={{fontSize:'clamp(40px,7vw,72px)',lineHeight:0.9,color:'#14532d'}}>REEF & SEED<span style={{color:'#d4af37',display:'block',fontSize:20,letterSpacing:'0.3em',marginTop:8}}>100% NATURAL</span></h1>
          <p style={{maxWidth:560,margin:'18px auto 28px',color:'#4a6741',fontSize:18,lineHeight:1.6}}>Premium Sea Moss gels and cold-pressed juices. No added sugar, non-GMO, plant-based.</p>
          <div style={{display:'flex',gap:14,justifyContent:'center'}}><a href="#products" style={{padding:'14px 32px',borderRadius:999,fontWeight:700,textDecoration:'none',background:'#14532d',color:'#fff'}}>Shop Collection</a></div>
        </div>
      </section>
      <section id="products" style={{padding:'80px 20px',maxWidth:1200,margin:'0 auto'}}>
        <div style={{textAlign:'center',color:'#d4af37',fontWeight:700,letterSpacing:'0.2em',fontSize:12,marginBottom:12}}>OUR COLLECTION</div>
        <h2 style={{textAlign:'center',fontSize:'clamp(32px,5vw,48px)',color:'#14532d',marginBottom:12}}>Sea Moss & Cold-Pressed Juices</h2>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:28,marginTop:30}}>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',boxShadow:'0 10px 40px rgba(20,83,45,0.08)',border:'1px solid #e8e8d5'}}><img src="/images/mango.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Mango & Dates</h3><p style={{fontSize:13,color:'#6b8a63'}}>BEST SELLER</p></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',boxShadow:'0 10px 40px rgba(20,83,45,0.08)',border:'1px solid #e8e8d5'}}><img src="/images/strawberry.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Strawberry & Dates</h3></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',boxShadow:'0 10px 40px rgba(20,83,45,0.08)',border:'1px solid #e8e8d5'}}><img src="/images/original.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Original Sea Moss</h3></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',boxShadow:'0 10px 40px rgba(20,83,45,0.08)',border:'1px solid #e8e8d5'}}><img src="/images/pineapple.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Pineapple & Dates</h3></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',boxShadow:'0 10px 40px rgba(20,83,45,0.08)',border:'1px solid #e8e8d5'}}><img src="/images/juices.jpg" style={{width:'100%',height:320,objectFit:'cover'}} alt="" /><div style={{padding:20}}><h3>Emerald & Ruby Juices</h3></div></div>
          <div style={{background:'#fff',borderRadius:24,overflow:'hidden',boxShadow:'0 10px 40px rgba(20,83,45,0.08)',border:'1px solid #e8e8d5'}}><img src="/logo.png" style={{width:'100%',height:320,objectFit:'contain',background:'#f7f3e8'}} alt="" /><div style={{padding:20}}><h3>Master Blend - All Fruits</h3><p style={{fontSize:13,color:'#6b8a63'}}>Mango, Strawberry, Pineapple, Dates + Sea Moss</p></div></div>
        </div>
      </section>
    </>
  )
}

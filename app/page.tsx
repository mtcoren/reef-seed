
import "./globals.css";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFFBF0] text-zinc-900">
      <header className="flex justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-600 to-amber-500 flex items-center justify-center text-white font-black">R</div>
          <div className="leading-none"><div className="font-black tracking-tight text-[18px]">REEF & SEED</div><div className="text-[10px] tracking-[0.3em] opacity-60">ST. LUCIA • BOSTON</div></div>
        </div>
        <a href="#shop" className="hidden md:inline-flex bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-semibold">Shop Now</a>
      </header>
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex bg-white border border-amber-200 rounded-full px-3 py-1 text-[11px] tracking-widest font-semibold mb-6">100% NATURAL • WILD HARVESTED • NON-GMO</div>
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">100% Natural<br /><span className="bg-gradient-to-r from-emerald-700 to-amber-600 bg-clip-text text-transparent">Sea Moss &</span><br />Cold Pressed Juices</h1>
          <p className="mt-6 text-lg text-zinc-600 max-w-[48ch]">Hand-harvested from St. Lucia. No added sugar. Plant-based. Naturally nourishing. Small-batch crafted in Boston.</p>
        </div>
        <div className="aspect-[4/3] rounded-[2.5rem] bg-gradient-to-br from-emerald-100 via-amber-50 to-teal-100 p-6"><div className="w-full h-full rounded-[1.8rem] bg-white grid place-items-center p-8 text-center"><div className="text-6xl mb-4">🌊🌿</div><div className="font-black text-2xl">REEF & SEED</div></div></div>
      </section>
      <section id="benefits" className="border-y border-amber-100 bg-white"><div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex flex-wrap justify-between gap-4 text-[11px] tracking-[0.2em] font-bold"><span>✓ NO ADDED SUGAR</span><span>✓ NON-GMO</span><span>✓ PLANT BASED</span><span>✓ NATURALLY NOURISHING</span><span>✓ WILD HARVESTED ST. LUCIA</span></div></section>
      <section id="shop" className="max-w-7xl mx-auto px-6 md:px-12 py-20"><h2 className="text-4xl font-black tracking-tighter mb-10">The Collection - 7 Flavors</h2><div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><div className="rounded-[2rem] bg-white border p-5"><div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-amber-200 to-yellow-400 grid place-items-center font-black">Original Sea Moss</div><div className="pt-4 font-bold">Original - $14.99</div></div><div className="rounded-[2rem] bg-white border p-5"><div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-yellow-200 to-amber-400 grid place-items-center font-black">Pineapple Infusion</div><div className="pt-4 font-bold">Pineapple Infusion - $14.99</div></div><div className="rounded-[2rem] bg-white border p-5"><div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-orange-200 to-amber-300 grid place-items-center font-black">Mango and Dates</div><div className="pt-4 font-bold">Mango and Dates - $14.99</div></div><div className="rounded-[2rem] bg-white border p-5"><div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-rose-200 to-pink-400 grid place-items-center font-black">Strawberry and Dates</div><div className="pt-4 font-bold">Strawberry and Dates - $14.99</div></div><div className="rounded-[2rem] bg-white border p-5"><div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-lime-200 to-yellow-300 grid place-items-center font-black">Pineapple and Dates</div><div className="pt-4 font-bold">Pineapple and Dates - $14.99</div></div><div className="rounded-[2rem] bg-white border p-5"><div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-emerald-200 to-green-500 grid place-items-center font-black">Emerald Greens</div><div className="pt-4 font-bold">Emerald Greens Juice - $9.99</div></div><div className="rounded-[2rem] bg-white border p-5"><div className="h-56 rounded-[1.5rem] bg-gradient-to-br from-red-200 to-rose-500 grid place-items-center font-black">Ruby Roots</div><div className="pt-4 font-bold">Ruby Roots Juice - $9.99</div></div></div></section>
      <footer className="text-center py-10 text-[11px] tracking-widest opacity-50">© 2026 REEF & SEED • BOSTON, MA</footer>
    </main>
  );
}

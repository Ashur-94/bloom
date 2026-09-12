/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import {
  Sparkles,
  Download,
  Wand2,
  BookOpen,
  ArrowRight,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  Compass,
  Boxes,
  Image as ImageIcon,
  CheckCircle2,
  Layers,
  ChevronRight,
  Heart
} from 'lucide-react';
import logoImg from './assets/logo.png';
import heroFlowersImg from './assets/hero-flowers.png';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [emailJoined, setEmailJoined] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [generationPrompt, setGenerationPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResult, setGeneratedResult] = useState<string | null>(null);

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (!generationPrompt.trim()) return;
    setIsGenerating(true);
    setGeneratedResult(null);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedResult(`AI Neural Botany Spec: "${generationPrompt}" synthesized successfully with quantum fractal growth matrix.`);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen w-full bg-black text-white font-['Poppins',sans-serif] selection:bg-white/20">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-75 scale-105"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/40 backdrop-brightness-90" />
      </div>

      {/* Main Container: Two-Panel Split */}
      <div className="relative z-10 flex min-h-screen w-full">
        {/* Left Panel */}
        <div className="w-full lg:w-[52%] flex flex-col p-4 lg:p-6 min-h-screen">
          <div className="liquid-glass-strong rounded-3xl flex-1 flex flex-col p-6 lg:p-10 justify-between">
            {/* Top Navigation */}
            <header className="flex items-center justify-between">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveModal(null)}>
                <img
                  src={logoImg}
                  alt="Bloom Logo"
                  className="w-8 h-8 rounded-full object-cover shadow-sm"
                  onError={(e)=>{
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <span className="font-semibold text-2xl tracking-tighter text-white">
                  bloom
                </span>
              </div>

              <button
                onClick={() => setMenuOpen(true)}
                className="liquid-glass rounded-full px-4 py-2 flex items-center gap-2 text-xs font-medium text-white/90 hover:scale-105 active:scale-95 transition-transform cursor-pointer"
              >
                <span>Menu</span>
                <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                  <Menu className="w-4 h-4" />
                </div>
              </button>
            </header>

            {/* Hero Center Section */}
            <div className="my-auto py-12 flex flex-col items-center text-center">
              <div className="mb-6 p-2 liquid-glass rounded-full shadow-2xl">
                <img
                  src={logoImg}
                  alt="Bloom Emblem"
                  className="w-20 h-20 rounded-full object-cover"
                />
              </div>

              <h1 className="text-5xl lg:text-7xl font-medium tracking-[-0.05em] text-white leading-[1.1] max-w-2xl mb-8">
                Innovating the <br />
                <span className="font-serif italic text-white/80 font-normal">spirit of bloom AI</span>
              </h1>

              {/* CTA Button */}
              <button
                onClick={() => setActiveModal('explore')}
                className="uiverse-btn text-sm font-medium mb-10 group"
              >
                <span>Explore Now</span>
                <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <Download className="w-3.5 h-3.5" />
                </div>
              </button>

              {/* Radio Container Switch */}
              <div className="liquid-glass rounded-2xl p-2">
                <div className="radio-container">
                  <input
                    type="radio"
                    id="radio-gallery"
                    name="hero-switch"
                    defaultChecked
                    onChange={() => setActiveModal('gallery')}
                  />
                  <label htmlFor="radio-gallery" onClick={() => setActiveModal('gallery')}>
                    Artistic Gallery
                  </label>

                  <input
                    type="radio"
                    id="radio-generation"
                    name="hero-switch"
                    onChange={() => setActiveModal('generation')}
                  />
                  <label htmlFor="radio-generation" onClick={() => setActiveModal('generation')}>
                    AI Generation
                  </label>

                  <input
                    type="radio"
                    id="radio-structures"
                    name="hero-switch"
                    onChange={() => setActiveModal('structures')}
                  />
                  <label htmlFor="radio-structures" onClick={() => setActiveModal('structures')}>
                    3D Structures
                  </label>

                  <div className="glider-container">
                    <div className="glider"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Quote */}
            <div className="pt-8 border-t border-white/10 flex flex-col items-center text-center">
              <span className="text-[10px] tracking-widest uppercase text-white/50 mb-2 font-medium">
                VISIONARY DESIGN
              </span>
              <p className="text-sm lg:text-base text-white/90 font-light mb-3">
                We imagined a realm with <span className="font-serif italic text-white/80">no ending</span>.
              </p>
              <div className="flex items-center gap-4 w-full max-w-xs justify-center">
                <div className="h-[1px] bg-white/20 flex-1" />
                <span className="text-[11px] tracking-widest text-white/60 font-semibold">
                  MARCUS AURELIO
                </span>
                <div className="h-[1px] bg-white/20 flex-1" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel (Desktop Only) */}
        <div className="hidden lg:flex w-[48%] flex-col p-6 pl-0 justify-between">
          {/* Top Bar */}
          <div className="flex items-center justify-between gap-4">
            {/* Social Icons Pill */}
            <div className="liquid-glass rounded-full px-4 py-2 flex items-center gap-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-white/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-white/80" />
              </div>
            </div>

            {/* Account Button */}
            <button
              onClick={() => setAccountOpen(true)}
              className="liquid-glass rounded-full px-5 py-2.5 flex items-center gap-2.5 text-xs text-white hover:scale-105 active:scale-95 transition-transform cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium tracking-tight">Account</span>
            </button>
          </div>

          {/* Middle Community Card */}
          <div className="my-auto py-8">
            <div className="liquid-glass rounded-3xl p-6 w-56 shadow-2xl hover:scale-105 transition-transform cursor-pointer" onClick={() => setActiveModal('community')}>
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mb-4">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-sm font-medium text-white mb-1">Enter our ecosystem</h3>
              <p className="text-xs text-white/60 leading-relaxed">
                Join 14,000+ botanical architects & AI designers worldwide.
              </p>
            </div>
          </div>

          {/* Bottom Feature Section */}
          <div className="liquid-glass-strong rounded-[2.5rem] p-6 flex flex-col gap-4 shadow-2xl">
            {/* Two Side-by-Side Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Processing Card */}
              <div
                onClick={() => setActiveModal('processing')}
                className="uiverse-card h-36"
              >
                <div className="uiverse-card-info">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-white/70">Processing</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <Wand2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold tracking-tight text-white">Quantum AI</div>
                    <div className="text-[11px] text-white/50">Neural synthesis active</div>
                  </div>
                </div>
              </div>

              {/* Growth Archive Card */}
              <div
                onClick={() => setActiveModal('archive')}
                className="uiverse-card h-36"
              >
                <div className="uiverse-card-info">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-white/70">Growth Archive</span>
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                      <BookOpen className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <div>
                    <div className="text-lg font-bold tracking-tight text-white">v4.8 Spec</div>
                    <div className="text-[11px] text-white/50">1,240 Flora models</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Card: Flower Thumbnail & Advanced Plant Sculpting */}
            <div
              onClick={() => setActiveModal('sculpting')}
              className="liquid-glass rounded-3xl p-4 flex items-center justify-between hover:scale-[1.01] transition-transform cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <img
                  src={heroFlowersImg}
                  alt="Advanced Plant Sculpting"
                  className="w-24 h-16 rounded-2xl object-cover shadow-lg"
                  onError={(e)=>{
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <div>
                  <h4 className="text-sm font-medium text-white tracking-tight mb-0.5">
                    Advanced Plant Sculpting
                  </h4>
                  <p className="text-xs text-white/60">
                    Algorithmic petal & stem morphogenesis
                  </p>
                </div>
              </div>

              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors mr-2">
                <span className="text-lg font-light">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Menu Drawer Modal */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md h-full liquid-glass-strong p-8 flex flex-col justify-between border-l border-white/10">
            <div>
              <div className="flex items-center justify-between mb-10">
                <div className="flex items-center gap-3">
                  <img src={logoImg} alt="Logo" className="w-8 h-8 rounded-full object-cover" />
                  <span className="font-semibold text-xl tracking-tighter">bloom menu</span>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                {[
                  { name: 'Artistic Gallery', icon: ImageIcon, id: 'gallery' },
                  { name: 'AI Generation Lab', icon: Wand2, id: 'generation' },
                  { name: '3D Botanical Structures', icon: Boxes, id: 'structures' },
                  { name: 'Ecosystem Community', icon: Compass, id: 'community' },
                  { name: 'Plant Sculpting Studio', icon: Layers, id: 'sculpting' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setMenuOpen(false);
                        setActiveModal(item.id);
                      }}
                      className="liquid-glass rounded-2xl p-4 flex items-center justify-between text-left hover:scale-[1.02] transition-transform group cursor-pointer"
                    >
                      <div className="flex items-center gap-3.5">
                        <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/80 group-hover:text-white">
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="font-medium text-sm text-white/90 group-hover:text-white">
                          {item.name}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-white/40 group-hover:text-white transition-colors" />
                    </button>
                  );
                })}
              </nav>
            </div>

            <div className="pt-6 border-t border-white/10 text-center">
              <p className="text-xs text-white/50">Bloom AI OS v4.8 • Powered by Quantum Neural Networks</p>
            </div>
          </div>
        </div>
      )}

      {/* Account Modal */}
      {accountOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-md liquid-glass-strong rounded-3xl p-8 relative">
            <button
              onClick={() => setAccountOpen(false)}
              className="absolute top-6 right-6 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-white/15 flex items-center justify-center text-xl font-bold">
                MA
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Marcus Aurelio</h3>
                <p className="text-xs text-white/60">Visionary Architect • Pro Tier</p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <div className="liquid-glass rounded-2xl p-4 flex items-center justify-between text-xs">
                <span className="text-white/70">API Credits Remaining</span>
                <span className="font-semibold text-white">94,200 / 100,000</span>
              </div>
              <div className="liquid-glass rounded-2xl p-4 flex items-center justify-between text-xs">
                <span className="text-white/70">Active 3D Scans</span>
                <span className="font-semibold text-white">18 Projects</span>
              </div>
            </div>

            <button
              onClick={() => setAccountOpen(false)}
              className="w-full liquid-glass rounded-full py-3 text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer"
            >
              Close Profile
            </button>
          </div>
        </div>
      )}

      {/* Interactive Feature Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fadeIn">
          <div className="w-full max-w-2xl liquid-glass-strong rounded-3xl p-8 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content Switcher */}
            {activeModal === 'gallery' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <ImageIcon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium tracking-tight">Artistic Gallery</h2>
                    <p className="text-xs text-white/60">Curated AI botanical masterpieces</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  {[
                    { title: 'Neon Orchid v2', tag: 'Bioluminescent', image: heroFlowersImg },
                    { title: 'Fractal Lotus', tag: 'Quantum Geometry', image: logoImg },
                    { title: 'Obsidian Fern', tag: 'Minimalist Monolith', image: heroFlowersImg },
                    { title: 'Ethereal Rose', tag: 'Fluid Glass Spec', image: logoImg },
                  ].map((item, idx) => (
                    <div key={idx} className="liquid-glass rounded-2xl p-4 flex flex-col gap-3">
                      <div className="h-32 rounded-xl overflow-hidden bg-white/5 relative">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover opacity-80" />
                        <span className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-[10px] liquid-glass font-medium">
                          {item.tag}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{item.title}</span>
                        <Heart className="w-4 h-4 text-white/60 hover:text-white cursor-pointer" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeModal === 'generation' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Wand2 className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium tracking-tight">AI Neural Generation</h2>
                    <p className="text-xs text-white/60">Synthesize custom flora models with natural language</p>
                  </div>
                </div>

                <form onSubmit={handleGenerate} className="space-y-4 mb-6">
                  <div>
                    <label className="block text-xs font-medium text-white/70 mb-2">
                      Prompt Description
                    </label>
                    <textarea
                      value={generationPrompt}
                      onChange={(e) => setGenerationPrompt(e.target.value)}
                      placeholder="e.g., A weeping willow made of pure liquid glass and silver vines..."
                      className="w-full liquid-glass rounded-2xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/40 h-28 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isGenerating}
                    className="w-full liquid-glass-strong rounded-2xl py-3.5 text-sm font-medium hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    {isGenerating ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Synthesizing Neural Flora...</span>
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4" />
                        <span>Generate Botanical Spec</span>
                      </>
                    )}
                  </button>
                </form>

                {generatedResult && (
                  <div className="liquid-glass rounded-2xl p-4 text-xs text-white/90 animate-fadeIn border-l-2 border-white">
                    <div className="flex items-center gap-2 mb-1 font-semibold text-white">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      <span>Synthesis Complete</span>
                    </div>
                    {generatedResult}
                  </div>
                )}
              </div>
            )}

            {activeModal === 'structures' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Boxes className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium tracking-tight">3D Botanical Structures</h2>
                    <p className="text-xs text-white/60">Interactive topological plant geometry engine</p>
                  </div>
                </div>

                <div className="liquid-glass rounded-2xl p-6 mb-6 flex flex-col items-center justify-center text-center min-h-[220px]">
                  <div className="w-16 h-16 rounded-full liquid-glass flex items-center justify-center mb-4 animate-pulse">
                    <Boxes className="w-8 h-8 text-white/80" />
                  </div>
                  <h3 className="text-base font-medium mb-1">WebGL 3D Matrix Loaded</h3>
                  <p className="text-xs text-white/60 max-w-md">
                    Rotate, scale, and inspect quantum cellular structures with 0.01mm precision.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'community' && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium tracking-tight">Enter Our Ecosystem</h2>
                    <p className="text-xs text-white/60">Join 14,000+ visionary designers</p>
                  </div>
                </div>

                {!emailJoined ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (emailInput.trim()) setEmailJoined(true);
                    }}
                    className="space-y-4 mb-6"
                  >
                    <div>
                      <label className="block text-xs font-medium text-white/70 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                        placeholder="marcus@aurelio.design"
                        className="w-full liquid-glass rounded-2xl p-4 text-sm text-white placeholder-white/30 focus:outline-none focus:ring-1 focus:ring-white/40"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full liquid-glass-strong rounded-2xl py-3.5 text-sm font-medium hover:scale-[1.01] transition-all cursor-pointer"
                    >
                      Request Ecosystem Access
                    </button>
                  </form>
                ) : (
                  <div className="liquid-glass rounded-2xl p-6 text-center">
                    <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto mb-3" />
                    <h3 className="text-base font-semibold mb-1">Welcome to Bloom Ecosystem</h3>
                    <p className="text-xs text-white/60">
                      Your VIP dispatch invitation has been sent to {emailInput}.
                    </p>
                  </div>
                )}
              </div>
            )}

            {(activeModal === 'processing' || activeModal === 'archive' || activeModal === 'sculpting' || activeModal === 'explore') && (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-xl font-medium tracking-tight">
                      {activeModal === 'processing' && 'Quantum AI Processing Matrix'}
                      {activeModal === 'archive' && 'Growth Archive v4.8'}
                      {activeModal === 'sculpting' && 'Advanced Plant Sculpting Studio'}
                      {activeModal === 'explore' && 'Bloom AI Platform Overview'}
                    </h2>
                    <p className="text-xs text-white/60">High-performance generative botanical system</p>
                  </div>
                </div>

                <div className="liquid-glass rounded-2xl p-6 space-y-4 mb-6 text-sm text-white/80">
                  <p>
                    Bloom integrates state-of-the-art neural networks with liquid glass rendering algorithms to simulate living floral ecosystems in real time.
                  </p>
                  <div className="grid grid-cols-3 gap-3 pt-2">
                    <div className="liquid-glass rounded-xl p-3 text-center">
                      <div className="text-lg font-semibold text-white">99.9%</div>
                      <div className="text-[10px] text-white/50">Morph Fidelity</div>
                    </div>
                    <div className="liquid-glass rounded-xl p-3 text-center">
                      <div className="text-lg font-semibold text-white">0.4ms</div>
                      <div className="text-[10px] text-white/50">Latency</div>
                    </div>
                    <div className="liquid-glass rounded-xl p-3 text-center">
                      <div className="text-lg font-semibold text-white">14k+</div>
                      <div className="text-[10px] text-white/50">Architects</div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <button
              onClick={() => setActiveModal(null)}
              className="w-full liquid-glass rounded-full py-3 text-xs font-semibold hover:bg-white/10 transition-colors cursor-pointer"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

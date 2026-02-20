"use client";

import { Music, Play, Instagram, Mail, Calendar, MapPin, X, Menu, Phone } from "lucide-react";
import { albums, videos, reels } from "@/data/music";
import { events } from "@/data/events";
import { useState } from "react";

export default function Home() {
  const latestAlbum = albums[0];
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTrackIndex, setActiveTrackIndex] = useState(0);

  const handlePlayAlbum = () => {
    setActiveTrackIndex(0);
    setIsPlaying(true);
    // Scroll to music section
    const musicSection = document.getElementById('music');
    if (musicSection) {
      musicSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePlayTrack = (index: number) => {
    const track = latestAlbum.tracks[index];

    if (typeof window !== "undefined" && /Mobi|Android/i.test(navigator.userAgent) && track.youtubeId) {
      const url = `https://www.youtube.com/watch?v=${track.youtubeId}&autoplay=1&playsinline=1`;
      window.open(url, "_blank");
      return;
    }

    setActiveTrackIndex(index);
    setIsPlaying(true);
  };

  const handleClosePlayer = () => {
    setIsPlaying(false);
  };

  return (
    <main 
      className="min-h-screen bg-black text-white" 
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center relative overflow-hidden">
        {/* Split Background */}
        <div className="absolute inset-0 z-0 bg-black">
          {/* Right Image (Background layer) */}
          <div className="absolute inset-0">
             <img 
               src="/images/hero-right.jpg" 
               alt="Background Right" 
               className="w-full h-full object-cover opacity-70"
             />
             <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Left Image with Clip Path */}
          <div 
            className="absolute inset-0 z-10 hero-clip-path"
          >
             <div className="absolute inset-0 bg-neutral-900 overflow-hidden">
                <img 
                  src="/images/hero-left.jpg" 
                  alt="Background Left" 
                  className="w-full h-full object-cover scale-125 -translate-x-24 opacity-70"
                />
             </div>
             <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Divider Line */}
          <div className="absolute w-0.5 bg-white/30 z-20 blur-[1px] hero-divider"></div>
          
          <style jsx>{`
            /* Global: Left/Right Split (Desktop style everywhere) */
            .hero-clip-path {
              clip-path: polygon(0 0, 55% 0, 45% 100%, 0% 100%);
            }
            .hero-divider {
              height: 120%;
              width: 2px;
              top: -10%;
              left: 50%;
              transform: translateX(-50%) rotate(5.7deg);
            }
          `}</style>
        </div>
        
        <div className="relative z-30 text-center px-4">
          <h1 className="text-7xl md:text-9xl font-bold tracking-tighter mb-4 animate-fade-in drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
            MATTEO ORTUSO
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-widest uppercase mb-8 text-neutral-200 drop-shadow-md">
            Musician & Artist
          </p>
          <button 
            onClick={handlePlayAlbum}
            className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2 mx-auto shadow-lg shadow-white/10"
          >
            <Play size={20} fill="currentColor" />
            LISTEN TO {latestAlbum.title}
          </button>
        </div>
      </section>

      {/* Navbar (Sticky) */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <span className="font-bold text-xl tracking-tighter z-50 relative">ORTUSO</span>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest items-center">
            <a href="#project" className="hover:text-neutral-400 transition-colors">The Project</a>
            <a href="#music" className="hover:text-neutral-400 transition-colors">Music</a>
            <a href="#videos" className="hover:text-neutral-400 transition-colors">Videos</a>
            <a href="#reels" className="hover:text-neutral-400 transition-colors">Reels</a>
            <a href="#tour" className="hover:text-neutral-400 transition-colors">Tour</a>
            <a href="#contact" className="hover:text-neutral-400 transition-colors">Contact</a>
          </div>

          {/* Icons & Mobile Toggle */}
          <div className="flex gap-4 items-center z-50 relative">
            <a href="https://www.instagram.com/ortusangolo_music?igsh=OWczMWxkcXFjZHVw" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="hover:text-neutral-400 cursor-pointer" />
            </a>
            <a href="https://open.spotify.com/album/7zp7RmWsEiGTznxxK7ayxd?si=pbqME_XSQDuukAtyofvWvg" target="_blank" rel="noopener noreferrer">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="hover:text-neutral-400 cursor-pointer"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 11.973c2.59-1.52 6.28-1.782 8.568-1.058"></path>
                <path d="M8 15.027c2.164-1.27 5.25-1.488 7.158-.884"></path>
                <path d="M8 18.08c1.74-1.018 4.218-1.193 5.748-.71"></path>
              </svg>
            </a>
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div className="fixed inset-0 bg-neutral-900 z-[60] flex flex-col items-center justify-start pt-32 pb-12 overflow-y-auto space-y-6 md:hidden animate-in fade-in slide-in-from-top-10 duration-200">
               {/* Internal Header for Close Button */}
               <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center border-b border-white/10 bg-neutral-900 z-50">
                  <span className="font-bold text-xl tracking-tighter">ORTUSO</span>
                  <button 
                    onClick={() => setIsMenuOpen(false)}
                    className="text-white focus:outline-none"
                  >
                    <X size={24} />
                  </button>
               </div>
               
               <a href="#project" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter hover:text-neutral-400">The Project</a>
               <a href="#music" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter hover:text-neutral-400">Music</a>
               <a href="#videos" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter hover:text-neutral-400">Videos</a>
               <a href="#reels" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter hover:text-neutral-400">Reels</a>
               <a href="#tour" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter hover:text-neutral-400">Tour</a>
               <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter hover:text-neutral-400">Contact</a>
            </div>
          )}
        </div>
      </nav>

      {/* Content Placeholders */}
      <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 space-y-20 md:space-y-32">
        
        <section id="project" className="scroll-mt-24">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="w-full md:w-1/2 space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">THE PROJECT <span className="text-blue-500">BLU</span></h2>
              <div className="space-y-6 text-neutral-300 font-light leading-relaxed text-lg">
                <p>
                  <strong className="text-white font-medium">"Blu"</strong> è un progetto nato dall'incontro tra due musicisti, <span className="text-white">Matteo Ortuso</span> (voce, chitarra, autore dei brani) e <span className="text-white">Marco Indino</span> (tromba, flicorno, produzione artistica).
                </p>
                <p>
                  Nel live set "acustico", testi profondi si intrecciano e dialogano costantemente con le melodie delicate dei fiati, assumendo così sonorità del tutto particolari.
                </p>
                <p>
                  L'aspetto cantautorale, anche se centrale, non prende mai il sopravvento: voci, chitarra ed ottoni viaggiano in perfetta armonia, sviluppando così un sound caldo pieno di spazi dove ogni singola nota acquista un valore speciale.
                </p>
                <p>
                  "Blu" è anche il nome del primo EP uscito a novembre 2025, con cui si presenta il progetto in formazione completa (voce, sezione fiati, tastiere, basso e batteria), proponendo un sound pieno, coinvolgente e ricco di sfumature.
                </p>
              </div>
              
              {/* Noise Studio Badge */}
              <div className="mt-8 pt-8 border-t border-white/10 flex items-center gap-4">
                 <div className="text-right text-xs uppercase tracking-widest text-neutral-500">
                    Produced by<br/>Francesco Chiari
                 </div>
                 <div className="h-12 w-px bg-white/20"></div>
                 <div className="flex items-center gap-2 border border-white/30 px-4 py-2 rounded bg-neutral-900/50">
                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                    <div className="flex flex-col leading-none">
                       <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-400">RECORDING</span>
                       <span className="font-bold tracking-tighter text-lg">NOISE STUDIO</span>
                    </div>
                 </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 grid grid-cols-1 gap-6">
               {/* Matteo Card */}
               <div className="bg-neutral-900 border border-white/10 rounded-lg p-6 hover:bg-neutral-800 transition-colors group">
                  <div className="flex items-center gap-6 mb-4">
                     <div className="w-24 h-24 rounded-full bg-neutral-800 overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-colors shrink-0">
                        <img src="/images/hero-right.jpg" alt="Matteo Ortuso" className="w-full h-full object-cover object-top" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold tracking-tight">MATTEO ORTUSO</h3>
                        <p className="text-xs uppercase tracking-widest text-neutral-400">Vocals • Guitar • Songwriter</p>
                     </div>
                  </div>
               </div>

               {/* Marco Card */}
               <div className="bg-neutral-900 border border-white/10 rounded-lg p-6 hover:bg-neutral-800 transition-colors group">
                  <div className="flex items-center gap-6 mb-4">
                     <div className="w-24 h-24 rounded-full bg-neutral-800 overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-colors shrink-0">
                        <img src="/images/marco-indino.jpg" alt="Marco Indino" className="w-full h-full object-cover object-top" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold tracking-tight">MARCO INDINO</h3>
                        <p className="text-xs uppercase tracking-widest text-neutral-400">Trumpet • Flugelhorn • Art. Prod.</p>
                     </div>
                  </div>
               </div>
               
               {/* EP Cover Placeholder */}
               <div className="w-64 aspect-square rounded-lg overflow-hidden relative group mt-4 border border-white/10 mx-auto">
                  <img 
                     src="/images/blu-cover.png" 
                     alt="BLU - The New EP" 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                     <h4 className="text-3xl font-bold tracking-tighter text-white">BLU</h4>
                     <p className="text-xs uppercase tracking-widest text-neutral-300">The New EP • Nov 2025</p>
                  </div>
               </div>
            </div>
          </div>
        </section>

        <section id="music" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-12 tracking-tighter">LATEST MUSIC</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-square bg-neutral-900 rounded-lg flex items-center justify-center border border-white/10 relative overflow-hidden group">
               {/* Album Cover or Player */}
               {isPlaying && latestAlbum.youtubeId ? (
                 <div className="absolute inset-0 w-full h-full bg-black">
                   <iframe 
                     width="100%" 
                     height="100%" 
                     src={
                        latestAlbum.tracks[activeTrackIndex].youtubeId 
                          ? `https://www.youtube.com/embed/${latestAlbum.tracks[activeTrackIndex].youtubeId}?autoplay=1&playsinline=1&rel=0&modestbranding=1`
                          : `https://www.youtube.com/embed/videoseries?list=${latestAlbum.youtubeId}&index=${activeTrackIndex}&autoplay=1&playsinline=1&rel=0&modestbranding=1`
                     }
                     title="YouTube video player" 
                     frameBorder="0" 
                     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                     allowFullScreen
                   ></iframe>
                   <button 
                     onClick={handleClosePlayer}
                     className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition-colors z-50"
                   >
                     <X size={20} />
                   </button>
                 </div>
               ) : (
                 <>
                   <img 
                     src={latestAlbum.cover} 
                     alt={latestAlbum.title} 
                     className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                   />
                   <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer" onClick={() => handlePlayTrack(0)}>
                     <div className="bg-white text-black p-4 rounded-full transform scale-90 group-hover:scale-100 transition-transform">
                       <Play size={32} fill="currentColor" />
                     </div>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8 pointer-events-none">
                   </div>
                 </>
               )}
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-2">{latestAlbum.title}</h3>
                <p className="text-neutral-400 text-sm uppercase tracking-widest">{latestAlbum.year} • ALBUM</p>
              </div>
              
              <div className="space-y-2">
                {latestAlbum.tracks.map((track, i) => (
                  <div 
                    key={i} 
                    onClick={() => handlePlayTrack(i)}
                    className={`flex items-center justify-between p-4 border rounded hover:bg-neutral-900 transition-colors cursor-pointer group ${
                      isPlaying && activeTrackIndex === i 
                        ? "bg-neutral-800 border-white/20" 
                        : "bg-neutral-900/30 border-white/5"
                    }`}
                  >
                    <div className="flex flex-col">
                        <div className="flex items-center gap-4">
                            <span className={`font-mono w-6 ${isPlaying && activeTrackIndex === i ? "text-green-400" : "text-neutral-500"}`}>
                              {isPlaying && activeTrackIndex === i ? <Play size={12} fill="currentColor" /> : `0${i + 1}`}
                            </span>
                            <span className={`font-medium ${isPlaying && activeTrackIndex === i ? "text-white" : "text-neutral-200"}`}>{track.title}</span>
                        </div>
                        {track.collaborations && (
                            <span className="text-xs text-neutral-500 ml-10 mt-1">feat. {track.collaborations.join(", ")}</span>
                        )}
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="text-xs text-neutral-600 font-mono">{track.duration}</span>
                        <Play size={16} className={`transition-opacity ${isPlaying && activeTrackIndex === i ? "opacity-100 text-green-400" : "opacity-0 group-hover:opacity-100"}`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="videos" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-12 tracking-tighter">VIDEOS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="aspect-video bg-neutral-900 rounded-lg border border-white/10 flex items-center justify-center relative group cursor-pointer overflow-hidden">
                <a href={`https://www.youtube.com/watch?v=${video.id}`} target="_blank" rel="noopener noreferrer" className="absolute inset-0">
                  <img 
                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`} 
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play size={64} className="text-white opacity-80 group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                    <span className="font-bold text-lg line-clamp-1">{video.title}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="reels" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-12 tracking-tighter">REELS</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reels.map((reel, index) => (
              <div key={index} className="aspect-[3/4] bg-neutral-900 rounded-lg border border-white/10 flex items-center justify-center relative group overflow-hidden">
                 <div className="w-full h-full bg-black">
                   <iframe 
                     src={`https://www.instagram.com/reel/${reel.id}/embed/?hidecaption=1&autoplay=1`}
                     className="w-full h-full"
                     frameBorder="0" 
                     scrolling="no" 
                     allowFullScreen
                  ></iframe>
                 </div>
              </div>
            ))}
          </div>
        </section>

        <section id="tour" className="scroll-mt-24">
          <h2 className="text-4xl font-bold mb-12 tracking-tighter">LIVE EVENTS</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-neutral-900/30 border border-white/10 rounded-lg overflow-hidden group hover:bg-neutral-900 transition-colors">
                <div className="aspect-[3/4] relative overflow-hidden bg-neutral-800">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4 leading-tight">{event.title}</h3>
                  <div className="space-y-2 text-neutral-400 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  {event.description && (
                    <p className="mt-4 text-sm text-neutral-500 line-clamp-2">
                      {event.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 text-center">
          <h2 className="text-4xl font-bold mb-8 tracking-tighter">CONTACT</h2>
          <p className="text-neutral-400 mb-8">For booking and inquiries.</p>
          <div className="flex flex-col items-center gap-4">
            <a href="mailto:ortusomatteo11@gmail.com" className="inline-flex items-center gap-2 text-xl hover:text-neutral-400 transition-colors">
              <Mail /> ortusomatteo11@gmail.com
            </a>
            <a href="tel:+393400939406" className="inline-flex items-center gap-2 text-xl hover:text-neutral-400 transition-colors">
              <Phone /> +39 340 093 9406
            </a>
          </div>
        </section>

      </div>
      
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-12"></div>
      
      <footer className="pb-12 text-center text-neutral-600 text-sm">
        <div className="flex justify-center gap-6 mb-8">
            <a href="https://www.instagram.com/ortusangolo_music?igsh=OWczMWxkcXFjZHVw" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <Instagram size={24} />
            </a>
            <a href="https://open.spotify.com/album/7zp7RmWsEiGTznxxK7ayxd?si=pbqME_XSQDuukAtyofvWvg" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8 11.973c2.59-1.52 6.28-1.782 8.568-1.058"></path>
                <path d="M8 15.027c2.164-1.27 5.25-1.488 7.158-.884"></path>
                <path d="M8 18.08c1.74-1.018 4.218-1.193 5.748-.71"></path>
              </svg>
            </a>
            <a href="mailto:ortusomatteo11@gmail.com" className="hover:text-white transition-colors">
               <Mail size={24} />
            </a>
            <a href="tel:+393400939406" className="hover:text-white transition-colors">
               <Phone size={24} />
            </a>
        </div>
        <p className="tracking-widest uppercase text-xs">&copy; {new Date().getFullYear()} Matteo Ortuso. All rights reserved.</p>
        <p className="mt-4 text-[11px] text-neutral-500 space-x-4">
          <a href="/privacy-policy" className="underline hover:text-neutral-300">Privacy Policy</a>
          <span>|</span>
          <a href="/cookie-policy" className="underline hover:text-neutral-300">Cookie Policy</a>
        </p>
      </footer>
    </main>
  );
}

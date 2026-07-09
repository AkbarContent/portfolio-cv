import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Wrench, 
  Mail, 
  Phone, 
  MapPin, 
  Shield, 
  Terminal, 
  ArrowRight, 
  Cpu, 
  Award,
  ChevronRight
} from 'lucide-react';
import BlurText from './components/BlurText';
import GlowCard from './components/GlowCard';
import Threads from './Threads';
import LogoLoop from './components/LogoLoop';
import {
  SiFigma,
  SiLinux,
  SiReact,
  SiHtml5,
  SiJavascript
} from 'react-icons/si';

export default function App() {
  const [activeNav, setActiveNav] = useState('home');

  const cvData = {
    name: "Muhammad Akbar Alghifari",
    role: "Mahasiswa S1 Teknik Komputer",
    tagline: "Web Security & UI Design Enthusiast",
    address: "Kos Pondok Mutiara, Jalan Haji Umar RT 6/RW 3, Kampung Sukabirus, Citereup, Bojongsoang, Bandung",
    phone: "+62 823-1092-5374",
    email: "akbaralghifari2005@gmail.com",
    aboutMe: "Saya mahasiswa Teknik Komputer angkatan 2023 di Universitas Telkom yang berdedikasi tinggi dengan minat besar dalam pengembangan perangkat lunak dan infrastruktur sistem. Saya memiliki ketertarikan mendalam dalam Keamanan Sistem Komputer (Web Security) dan Pembuatan Web, serta terbiasa mempelajari administrasi server berbasis Linux. Sebagai seorang pemecah masalah yang disiplin, teliti, dan selalu antusias, saya siap mempelajari teknologi terbaru di industri IT.",
    
    education: [
      {
        school: "Universitas Telkom",
        degree: "S1 Teknik Komputer",
        period: "2023 - Sekarang",
        description: "Mempelajari arsitektur komputer, sistem operasi, jaringan komputer, pemrograman sistem, dan keamanan siber."
      },
      {
        school: "SMAIT IQRA Bengkulu",
        degree: "Sekolah Menengah Atas (Jurusan IPA)",
        period: "Lulus",
        description: "Fokus pada ilmu pengetahuan alam, matematika tingkat lanjut, dan dasar-dasar logika."
      }
    ],
    
    experience: [
      {
        title: "Ketua Umum",
        organization: "HIMAMIRA",
        period: "Februari 2026 - Saat ini",
        details: [
          "Memimpin dan mengkoordinasikan seluruh program kerja, kegiatan, serta anggota himpunan.",
          "Bertanggung jawab atas pengambilan keputusan strategis dan pengembangan organisasi.",
        ]
      },
      {
        title: "Kepala Divisi Publikasi Dan Dokumentasi",
        organization: "CONNECTION 2026",
        period: "April 2026 - Saat ini",
        details: [
          "Mengkoordinasikan semua hal yang berkaitan dengan media publikasi.",
          "Mengatur jalannya desain dan media acara.",
          "Menyusun konsep visual: menentukan tema warna, font, dan gaya desain agar seluruh konten acara terlihat konsisten."
        ]
      },
      {
        title: "Kepala Divisi Kreatif",
        organization: "Glotroopers 2026",
        period: "April 2026 - Saat ini",
        details: [
          "Mengkoordinasikan seluruh proses kreatif pembuatan media.",
          "Mengatur jalannya produksi konten desain dan publikasi media sosial.",
          "Menyusun konsep visual untuk menciptakan identitas visual event yang kuat dan harmonis."
        ]
      },
      {
        title: "Staff Kominfo",
        organization: "Kabinet Seraya",
        period: "Maret 2026 - Saat ini",
        details: [
          "Membuat desain grafis untuk memperingati hari-hari besar nasional dan program mingguan 'Happy Tuesday'.",
          "Membuat konten menarik tentang Jurusan Teknik Komputer guna meningkatkan engagement mahasiswa.",
          "Berpartisipasi dalam seluruh kebutuhan dokumentasi kegiatan jurusan."
        ]
      },
      {
        title: "Staff PMD (Publikasi, Media & Dokumentasi)",
        organization: "Overclock 2025",
        period: "November 2025 - Januari 2026",
        details: [
          "Membuat desain lanyard khusus untuk seluruh anggota panitia.",
          "Membuat poster desain untuk kebutuhan feed media sosial Instagram.",
          "Mendokumentasikan jalannya kegiatan event dari awal hingga akhir."
        ]
      },
      {
        title: "Peserta Study Group",
        organization: "Seculab",
        period: "November 2026",
        details: [
          "Mempelajari materi fundamental mengenai Keamanan Sistem (System Security).",
          "Mendalami teknik-teknik mitigasi celah keamanan web dan analisis kerentanan sistem."
        ]
      }
    ],
    
    skills: {
      technical: [
        { name: "Bahasa C (Dasar)", level: "Dasar" },
        { name: "Web Security", level: "Menengah" },
        { name: "Linux Server", level: "Menengah" },
        { name: "Adobe Photoshop", level: "Menengah" },
        { name: "Figma", level: "Mahir" },
        { name: "Canva", level: "Mahir" },
        { name: "Capcut", level: "Menengah" },
      ],
      nonTechnical: [
        "Komunikasi yang Baik",
        "Kerja Sama Tim (Teamwork)",
        "Problem Solving yang Kuat"
      ],
      languages: [
        { name: "Bahasa Indonesia", level: "Fasih (Native)" },
        { name: "Bahasa Inggris", level: "Sedang (Intermediate)" }
      ]
    }
  };

  const techLogos = [
    { node: <SiFigma size={32} color="#fff" />, title: "Figma", href: "https://www.figma.com" },
    { node: <SiLinux size={32} color="#fff" />, title: "Linux", href: "https://www.linux.org" },
    { node: <SiReact size={32} color="#fff" />, title: "React", href: "https://react.dev" },
    { node: <SiJavascript size={32} color="#fff" />, title: "JavaScript", href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { node: <SiHtml5 size={32} color="#fff" />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  ];

  return (
    <div style={{ minHeight: '100vh', position: 'relative', zIndex: 1, backgroundColor: '#03010A' }}>
      
      {/* BACKGROUND THREADS BARU */}
   <div style={{
     position: 'absolute',
     top: 0,
     left: 0,
     width: '100%',
     height: '100vh',
     zIndex: 0,
     overflow: 'hidden',
     background: '#03010A' // Memastikan warna dasarnya gelap agar Threads terlihat
   }}>
     <Threads
       color={[0.0, 0.94, 1.0]} // Warna Cyan, diubah dari [1,1,1] (putih) agar cocok dengan tema
       amplitude={1.2}
       distance={0}
       enableMouseInteraction={true}
     />
     {/* Gradien pemudar bawah */}
     <div style={{
       position: 'absolute',
       bottom: 0,
       left: 0,
       width: '100%',
       height: '250px',
       background: 'linear-gradient(to bottom, transparent, #03010A)',
       pointerEvents: 'none'
     }} />
   </div>

      {/* Floating Navbar */}
      <nav style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: '90%',
        maxWidth: '700px',
        padding: '10px 24px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'rgba(10, 15, 30, 0.7)',
        backdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '30px',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.3)'
      }}>
        <div style={{
          fontFamily: 'var(--font-heading)',
          fontWeight: 800,
          background: 'var(--accent-gradient)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: '1.2rem',
          cursor: 'pointer'
        }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        SHEA.
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['tentang', 'pengalaman', 'keahlian', 'pendidikan', 'kontak'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setActiveNav(item)}
              style={{
                textDecoration: 'none',
                color: activeNav === item ? 'var(--accent-cyan)' : 'var(--text-secondary)',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
                textTransform: 'capitalize'
              }}
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '160px',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10 // Pastikan teks di depan background
      }}>
        <div className="container">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(0, 242, 254, 0.08)',
            padding: '6px 16px',
            borderRadius: '20px',
            border: '1px solid rgba(0, 242, 254, 0.2)',
            color: 'var(--accent-cyan)',
            fontSize: '0.85rem',
            fontWeight: 600,
            marginBottom: '24px',
            textTransform: 'uppercase',
            letterSpacing: '0.05em'
          }}>
            <Cpu size={14} /> S1 Teknik Komputer Universitas Telkom
          </div>
          
          <h1 style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
            lineHeight: 1.1,
            marginBottom: '20px',
            fontFamily: 'var(--font-heading)'
          }}>
            Halo, Saya <br />
            <BlurText 
              text={cvData.name} 
              delay={80} 
              animateBy="words" 
              direction="bottom" 
              className="text-gradient" 
            />
          </h1>

          <p style={{
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-secondary)',
            maxWidth: '650px',
            margin: '0 auto 40px auto',
            fontWeight: 400
          }}>
            {cvData.tagline}
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a href="#pengenalan" className="glass-panel" style={{
              padding: '12px 28px',
              borderRadius: '30px',
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.95rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid var(--accent-cyan)',
              background: 'rgba(0, 242, 254, 0.08)',
              transition: 'all 0.3s'
            }}>
              Kenal Lebih Dekat <ArrowRight size={16} />
            </a>
            <a href="#kontak" className="glass-panel" style={{
              padding: '12px 28px',
              borderRadius: '30px',
              color: 'var(--text-secondary)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              transition: 'all 0.3s'
            }}>
              Hubungi Saya
            </a>
          </div>
        </div>
      </section>

      
      {/* Tech Stack LogoLoop Section */}
      <section style={{
        padding: '30px 0',
        background: 'rgba(255, 255, 255, 0.03)', /* Transparan dengan sedikit rona putih */
        backdropFilter: 'blur(12px)', /* Efek kaca buram (frosted glass) yang mewah */
        WebkitBackdropFilter: 'blur(12px)', /* Dukungan untuk browser Safari */
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{
            fontSize: '1.25rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#085369', /* Teks "Teknologi & Tools" diubah jadi Cyan terang agar senada */
            marginBottom: '16px',
            fontWeight: 600
          }}>
            Teknologi & Tools
          </span>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={32}
            gap={60}
            fadeOut={false} 
            scaleOnHover={true}
            ariaLabel="Teknologi dan Tools"
          />
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="section" style={{ position: 'relative' }}>
        <div className="container">
          <h2 className="section-title">Tentang Saya</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            <GlowCard className="glass-panel">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(139, 92, 246, 0.1)',
                  padding: '10px',
                  borderRadius: '12px',
                  color: 'var(--accent-purple)'
                }}>
                  <User size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem' }}>Profil Singkat</h3>
              </div>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.8 }}>
                {cvData.aboutMe}
              </p>
            </GlowCard>

            <GlowCard className="glass-panel" glowColor="rgba(139, 92, 246, 0.15)">
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{
                  background: 'rgba(0, 242, 254, 0.1)',
                  padding: '10px',
                  borderRadius: '12px',
                  color: 'var(--accent-cyan)'
                }}>
                  <Shield size={24} />
                </div>
                <h3 style={{ fontSize: '1.4rem' }}>Minat & Fokus</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--accent-cyan)', marginTop: '3px' }}><Terminal size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Keamanan Sistem (Web Security)</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Mempelajari cara melindungi aplikasi web dari celah kerentanan.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--accent-cyan)', marginTop: '3px' }}><Cpu size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Linux Server Administration</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Terbiasa setup, kelola, dan eksperimen server berbasis sistem operasi Linux.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--accent-cyan)', marginTop: '3px' }}><Wrench size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>Desain Media & Kreatif</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Merumuskan konsep visual, desain media sosial, dan identitas visual acara.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <div style={{ color: 'var(--accent-cyan)', marginTop: '3px' }}><Award size={18} /></div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '4px' }}>UI Design</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Mendesain antarmuka pengguna yang intuitif dan estetis menggunakan Figma.</p>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="pengalaman" className="section">
        <div className="container">
          <h2 className="section-title">Pengalaman & Kegiatan</h2>
          
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            marginTop: '30px'
          }}>
            {cvData.experience.map((exp, index) => (
              <GlowCard 
                key={index} 
                className="glass-panel" 
                glowColor={index % 2 === 0 ? 'rgba(0, 242, 254, 0.15)' : 'rgba(139, 92, 246, 0.15)'}
              >
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '12px',
                  marginBottom: '16px'
                }}>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', color: 'var(--text-primary)', marginBottom: '4px' }}>
                      {exp.title}
                    </h3>
                    <h4 style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--accent-cyan)' }}>
                      {exp.organization}
                    </h4>
                  </div>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.04)',
                    padding: '4px 12px',
                    borderRadius: '20px',
                    border: '1px solid var(--border-color)'
                  }}>
                    {exp.period}
                  </span>
                </div>
                <ul style={{
                  listStyle: 'none',
                  paddingLeft: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  marginTop: '20px'
                }}>
                  {exp.details.map((detail, idx) => (
                    <li key={idx} style={{
                      display: 'flex',
                      gap: '10px',
                      color: 'var(--text-secondary)',
                      fontSize: '0.9rem',
                      lineHeight: 1.6
                    }}>
                      <span style={{ color: 'var(--accent-blue)', marginTop: '2px' }}><ChevronRight size={16} /></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="keahlian" className="section">
        <div className="container">
          <h2 className="section-title">Keahlian & Kemampuan</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            {/* Technical Skills */}
            <GlowCard className="glass-panel">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Terminal size={20} style={{ color: 'var(--accent-cyan)' }} /> Kemampuan Teknis
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {cvData.skills.technical.map((skill, index) => (
                  <div key={index}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '0.9rem' }}>
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--text-muted)' }}>{skill.level}</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ 
                        width: skill.level === 'Mahir' ? '85%' : skill.level === 'Menengah' ? '65%' : '35%', 
                        height: '100%', 
                        background: 'var(--accent-gradient)' 
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>

            {/* Non-Technical Skills */}
            <GlowCard className="glass-panel" glowColor="rgba(139, 92, 246, 0.15)">
              <h3 style={{ fontSize: '1.25rem', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <User size={20} style={{ color: 'var(--accent-purple)' }} /> Non-Teknis & Bahasa
              </h3>
              
              <div style={{ marginBottom: '30px' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>Karakter Utama:</h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {cvData.skills.nonTechnical.map((item, index) => (
                    <span key={index} style={{
                      fontSize: '0.85rem',
                      color: '#fff',
                      background: 'rgba(139, 92, 246, 0.1)',
                      border: '1px solid rgba(139, 92, 246, 0.2)',
                      padding: '6px 14px',
                      borderRadius: '20px'
                    }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '12px' }}>Bahasa:</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cvData.skills.languages.map((lang, index) => (
                    <div key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.9rem' }}>{lang.name}</span>
                      <span style={{ 
                        fontSize: '0.8rem', 
                        color: 'var(--accent-cyan)',
                        background: 'rgba(0, 242, 254, 0.05)',
                        border: '1px solid rgba(0, 242, 254, 0.15)',
                        padding: '2px 10px',
                        borderRadius: '10px'
                      }}>{lang.level}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="pendidikan" className="section">
        <div className="container">
          <h2 className="section-title">Pendidikan</h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '30px',
            marginTop: '30px'
          }}>
            {cvData.education.map((edu, index) => (
              <GlowCard 
                key={index} 
                className="glass-panel" 
                glowColor="rgba(0, 242, 254, 0.15)"
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{
                    background: 'rgba(0, 242, 254, 0.1)',
                    padding: '8px',
                    borderRadius: '10px',
                    color: 'var(--accent-cyan)'
                  }}>
                    <GraduationCap size={20} />
                  </div>
                  <span style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)'
                  }}>
                    {edu.period}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '6px' }}>{edu.school}</h3>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--accent-cyan)', marginBottom: '12px', fontWeight: 600 }}>{edu.degree}</h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                  {edu.description}
                </p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="section" style={{ paddingBottom: '100px' }}>
        <div className="container">
          <h2 className="section-title">Kontak Saya</h2>
          
          <div style={{
            maxWidth: '650px',
            margin: '30px auto 0 auto'
          }}>
            <GlowCard className="glass-panel" glowColor="rgba(139, 92, 246, 0.15)">
              <p style={{ 
                textAlign: 'center', 
                color: 'var(--text-secondary)', 
                marginBottom: '32px',
                fontSize: '0.95rem'
              }}>
                Saya selalu terbuka untuk berkolaborasi dalam proyek pengembangan web, proyek media/kreatif, keamanan jaringan, maupun sekadar berdiskusi seputar dunia IT. Hubungi saya melalui media di bawah ini!
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    background: 'rgba(0, 242, 254, 0.1)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Kirim Email</span>
                    <a href={`mailto:${cvData.email}`} style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
                      {cvData.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    background: 'rgba(139, 92, 246, 0.1)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-purple)'
                  }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>WhatsApp / Hubungi</span>
                    <a href={`https://wa.me/${cvData.phone.replace(/[^0-9]/g, '')}`} target="_blank" rel="noreferrer" style={{ color: '#fff', textDecoration: 'none', fontSize: '0.95rem', fontWeight: 500 }}>
                      {cvData.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{
                    background: 'rgba(255, 255, 255, 0.04)',
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-secondary)'
                  }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block' }}>Lokasi Saat Ini</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.4 }}>
                      {cvData.address}
                    </span>
                  </div>
                </div>
              </div>
            </GlowCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        textAlign: 'center',
        padding: '30px 20px',
        borderTop: '1px solid var(--border-color)',
        fontSize: '0.85rem',
        color: 'var(--text-muted)',
        background: 'rgba(6, 8, 18, 0.5)'
      }}>
        <div className="container">
          <p>© {new Date().getFullYear()} Muhammad Akbar Alghifari. Dibuat dengan React & React Bits.</p>
        </div>
      </footer>
    </div>
  );
}
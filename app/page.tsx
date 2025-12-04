"use client";

import React, { useState } from "react";
import {
  Puzzle, Users, Clock, MessageSquare, Brain, Zap,
  Github, Linkedin, Instagram, Mail, Phone, Menu, X
} from "lucide-react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [selectedProject, setSelectedProject] = useState<any>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const projects = [
    {
      id: 1,
      title: "Website Viera Group",
      desc: "Website profil perusahaan Viera untuk promosi resort dan cafe.",
      img: "/Screenshot 2025-12-03 002056.png",
      tags: ["Laravel", "Tailwind", "JS"],
      demo: "https://vieragroup.my.id",
      code: "https://github.com/pramacoder/VieraResortLaravel.git",
      showCode: false, 
      isGallery: false, 
      gallery: []
    },
    {
      id: 2,
      title: "Aplikasi Klasifikasi Jamur",
      desc: "Aplikasi ML untuk klasifikasi jamur beracun/tidak melalui gambar.",
      img: "/jamur.png",
      tags: ["Streamlit", "Python", "SVM"],
      demo: "#",
      code: "https://github.com/AndikaAP31/KlasifikasiJamur.git",
      showCode: true,
      isGallery: true, 
      gallery: [
        "/project2/jamur1.png",
        "/project2/jamur2.png",
        "/project2/jamur3.png"
      ]
    },
    {
      id: 3,
      title: "Rekomendasi Kursus",
      desc: "Sistem rekomendasi kursus online menggunakan NLP.",
      img: "/kursus.png",
      tags: ["Streamlit", "NLP", "Python"],
      demo: "#",
      code: "https://github.com/AndikaAP31/SistemRekomendasiKursus.git",
      showCode: true,
      isGallery: true, 
      gallery: [
        "/kursus.png",
        "https://via.placeholder.com/500x500/1e293b/FFFFFF?text=NLP+Model",
        "https://via.placeholder.com/400x700/1e293b/FFFFFF?text=Mobile+View"
      ]
    },
    {
      id: 4,
      title: "Scraper Jurnal",
      desc: "Web pencarian jurnal akademik menggunakan API publik.",
      img: "/scraper.png",
      tags: ["Streamlit", "API", "Python"],
      demo: "#",
      code: "https://github.com/AndikaAP31/ScraperJurnal.git",
      showCode: true,
      isGallery: true, 
      gallery: [
        "/scraper.png",
        "https://via.placeholder.com/600x300/1e293b/FFFFFF?text=API+Integration"
      ]
    },
    {
      id: 5,
      title: "Resto Track",
      desc: "CCTV cerdas dengan computer vision untuk pantau pengunjung restoran.",
      img: "/restotrack.png",
      tags: ["Python", "YOLO", "CV"],
      demo: "#",
      code: "https://github.com/AndikaAP31/RestoTrack.git",
      showCode: false, 
      isGallery: true, 
      gallery: [
        "/restotrack.png",
        "https://via.placeholder.com/400x300/1e293b/FFFFFF?text=YOLO+Detection",
        "https://via.placeholder.com/300x500/1e293b/FFFFFF?text=Realtime+Monitoring"
      ]
    },
    {
      id: 6,
      title: "Prototipe Let's GO",
      desc: "Desain UI/UX aplikasi travelling untuk wisatawan asing.",
      img: "/letsgo.png",
      tags: ["Figma", "UI/UX"],
      demo: "https://www.figma.com/proto/xH6Zg71RTK0rKKFCEim7hO/IMK-KELOMPOK-2---C?node-id=899-588&t=IXOlvwXtWrDxn7xq-1",
      code: "#",
      showCode: false, 
      isGallery: false, 
      gallery: []
    }
  ];

  return (
    <main className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-x-hidden">

      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-[#0f172a]/90 backdrop-blur-sm border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">

          <div className="text-xl md:text-2xl font-bold text-cyan-400 truncate">
            Website Portfolio Andika
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#" onClick={(e) => handleScroll(e, 'home')} className="hover:text-cyan-400 transition">Beranda</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="hover:text-cyan-400 transition">Tentang Saya</a>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="hover:text-cyan-400 transition">Keahlian</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="hover:text-cyan-400 transition">Portofolio</a>
          </div>

          {/* Tombol Kontak Desktop */}
          <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="hidden md:inline-block px-5 py-2 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md text-sm font-semibold transition">
            Hubungi Saya
          </a>

          {/* Tombol Mobile*/}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#0f172a] border-b border-slate-800 absolute w-full px-6 py-4 flex flex-col space-y-4 shadow-xl">
            <a href="#" onClick={(e) => handleScroll(e, 'home')} className="block hover:text-cyan-400 transition py-2">Beranda</a>
            <a href="#about" onClick={(e) => handleScroll(e, 'about')} className="block hover:text-cyan-400 transition py-2">Tentang Saya</a>
            <a href="#skills" onClick={(e) => handleScroll(e, 'skills')} className="block hover:text-cyan-400 transition py-2">Keahlian</a>
            <a href="#projects" onClick={(e) => handleScroll(e, 'projects')} className="block hover:text-cyan-400 transition py-2">Portofolio</a>
            <a href="#contact" onClick={(e) => handleScroll(e, 'contact')} className="block px-5 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md text-sm font-semibold transition text-center mt-2">
              Hubungi Saya
            </a>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section id="home" className="pt-32 pb-20 px-4 md:px-6 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white leading-tight">
            Halo, perkenalkan saya <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              I Putu Andika Arsana Putra
            </span>
          </h1>
          <h2 className="text-lg md:text-2xl font-medium text-slate-300 pt-2">
            Seorang <span className="text-cyan-400 font-semibold">Web Developer</span> &{" "}
            <span className="text-cyan-400 font-semibold block md:inline">Machine Learning Engineer</span>
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
            <a href="#about" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-md font-semibold transition w-full sm:w-auto text-center">
              Tentang Saya
            </a>
            <a href="#projects" className="px-6 py-3 border border-cyan-600 text-cyan-400 hover:bg-cyan-600/10 rounded-md font-semibold transition w-full sm:w-auto text-center">
              Lihat Karya
            </a>
          </div>
        </div>

        {/* Foto Profil Utama */}
        <div className="flex-1 relative w-full max-w-[300px] md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-2xl shadow-cyan-900/20 border border-slate-700 mx-auto">
          <img
            src="/foto andika.jpg"
            alt="I Putu Andika Arsana Putra"
            className="object-cover w-full h-full hover:scale-105 transition duration-700"
          />
        </div>
      </section>

      {/* --- TENTANG SAYA (ABOUT ME) --- */}
      <section id="about" className="py-16 md:py-20 bg-[#1e293b]/30 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-start md:items-center">
            {/* Bagian Teks */}
            <div className="flex-1 w-full">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 border-l-4 border-cyan-500 pl-4">Tentang Saya</h2>
              <div className="space-y-4 text-slate-400 leading-relaxed text-sm md:text-base">
                <p className="text-justify">
                  Saya adalah seorang mahasiswa yang berfokus pada pengembangan web, analisis data, dan machine learning. Dengan latar belakang dalam teknologi, saya bersemangat untuk menggabungkan kreativitas dan keahlian teknis untuk menciptakan solusi inovatif yang memecahkan masalah dunia nyata.
                </p>
                <p className="text-justify hidden md:block">
                  Di sini, Anda dapat menemukan berbagai proyek yang telah saya kerjakan, mulai dari pengembangan aplikasi web interaktif hingga penerapan model machine learning. Saya selalu berusaha untuk terus belajar dan memberikan hasil terbaik di setiap pekerjaan yang saya lakukan.
                </p>
              </div>
            </div>

            {/* Stats / Info Singkat */}
            <div className="w-full lg:w-1/3 grid grid-cols-2 gap-4">
              <div className="p-4 md:p-6 bg-[#0f172a] rounded-xl border border-slate-800 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-cyan-400 mb-1">7+</span>
                <span className="text-xs md:text-sm text-slate-500">Proyek Latihan</span>
              </div>
              <div className="p-4 md:p-6 bg-[#0f172a] rounded-xl border border-slate-800 text-center">
                <span className="block text-2xl md:text-3xl font-bold text-cyan-400 mb-1">24/7</span>
                <span className="text-xs md:text-sm text-slate-500">Komitmen Belajar</span>
              </div>
              <div className="col-span-2 p-4 md:p-6 bg-[#0f172a] rounded-xl border border-slate-800 text-center">
                <span className="block text-lg md:text-xl font-bold text-white mb-1">Available</span>
                <span className="text-xs md:text-sm text-slate-500">Siap untuk Freelance / Kerja</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- KEAHLIAN (SKILLS) --- */}
      <section id="skills" className="py-16 md:py-20 bg-[#0f172a] px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* 1. HARD SKILLS */}
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-xs md:text-2xl font-bold text-cyan-400 tracking-widest uppercase mb-2">KEAHLIAN SAYA</h2>
            <h3 className="text-2xl md:text-4xl font-bold text-white">Tech Stack</h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6 mb-16 md:mb-20">
            {[
              { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
              { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
              { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
              { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
              { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
              { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
              { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
              { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
              { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
              { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-plain.svg" },
              { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg" },
              { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
            ].map((skill, index) => (
              <div key={index} className="bg-[#1e293b] border border-slate-700 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center gap-3 md:gap-4 hover:border-cyan-500 hover:-translate-y-1 transition duration-300 group">
                <div className="w-10 h-10 md:w-12 md:h-12 relative grayscale group-hover:grayscale-0 transition duration-300">
                  <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-slate-300 font-medium text-xs md:text-sm group-hover:text-white transition">{skill.name}</span>
              </div>
            ))}
          </div>

          {/* 2. TOOLS */}
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white">Tools</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 mb-16 md:mb-20">
            {[
              { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
              { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
              { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invert: true },
              { name: "Jupyter", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
              { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
              { name: "Google Colab", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecolab/googlecolab-original.svg" },
            ].map((tool, index) => (
              <div key={index} className="bg-[#1e293b] border border-slate-700 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center gap-4 hover:border-cyan-500 hover:-translate-y-1 transition duration-300 group">
                <div className={`w-10 h-10 md:w-12 md:h-12 relative grayscale group-hover:grayscale-0 transition duration-300 ${tool.invert ? "invert group-hover:invert-0" : ""}`}>
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-slate-300 font-medium text-xs md:text-sm group-hover:text-white transition">{tool.name}</span>
              </div>
            ))}
          </div>

          {/* 3. SOFT SKILLS */}
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-4xl font-bold text-white">Soft Skills</h3>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "Problem Solving", icon: Puzzle },
              { name: "Kerjasama Tim", icon: Users },
              { name: "Manajemen Waktu", icon: Clock },
              { name: "Komunikasi", icon: MessageSquare },
              { name: "Berpikir Kritis", icon: Brain },
              { name: "Adaptabilitas", icon: Zap },
            ].map((soft, index) => (
              <div key={index} className="bg-[#1e293b] border border-slate-700 rounded-xl p-4 md:p-6 flex flex-col items-center justify-center gap-4 hover:border-cyan-500 hover:-translate-y-1 transition duration-300 group cursor-default">
                <div className="text-slate-500 group-hover:text-cyan-400 transition duration-300">
                  <soft.icon size={40} strokeWidth={1.5} className="md:w-12 md:h-12" />
                </div>
                <span className="text-slate-300 font-medium text-xs md:text-sm group-hover:text-white transition text-center">{soft.name}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- PORTOFOLIO (PROJECTS) --- */}
      <section id="projects" className="py-16 md:py-20 bg-[#1e293b]/30 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Portofolio Saya</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base">
              Berikut adalah beberapa proyek yang telah saya kerjakan untuk mengasah kemampuan saya dalam pengembangan web dan AI.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-[#0f172a] border border-slate-800 rounded-xl overflow-hidden hover:shadow-cyan-500/20 hover:shadow-xl transition group flex flex-col">
                {/* Thumbnail */}
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-cyan-900/20 group-hover:bg-transparent transition z-10"></div>
                  <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4 flex-grow">{project.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-slate-800 text-xs text-cyan-400 rounded-full border border-slate-700">{tag}</span>
                    ))}
                  </div>

                  {/* Buttons Action */}
                  <div className="flex gap-3 mt-auto">
                    
                    {/* Logika Tombol Demo (Link vs Popup) */}
                    {project.isGallery ? (
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex-1 text-center py-2 bg-slate-800 hover:bg-cyan-600 text-white text-sm rounded transition"
                      >
                        Demo
                      </button>
                    ) : (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="flex-1 text-center py-2 bg-slate-800 hover:bg-cyan-600 text-white text-sm rounded transition"
                      >
                        Demo
                      </a>
                    )}

                    {/* Logika Tombol Code (Show/Hide) */}
                    {project.showCode && (
                      <a href={project.code} className="flex-1 text-center py-2 border border-slate-600 hover:border-cyan-400 text-white text-sm rounded transition">
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- MODAL / POPUP GALLERY --- */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedProject(null)} 
        >
          <div
            className="bg-[#0f172a] w-full max-w-7xl max-h-[90vh] rounded-2xl border border-slate-700 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Header Modal */}
            <div className="p-4 md:p-6 border-b border-slate-800 flex justify-between items-center bg-[#1e293b]">
              <h3 className="text-xl md:text-2xl font-bold text-white">{selectedProject.title} - Gallery</h3>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 bg-slate-800 hover:bg-red-500 text-white rounded-full transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content Gallery (Scrollable) */}
            <div className="p-4 md:p-6 overflow-y-auto">
              {/* Layout Masonry agar ukuran foto yang berbeda-beda tetap rapi */}
              <div className="columns-1 md:columns-2 lg:columns-2 gap-4 space-y-4">
                {selectedProject.gallery.length > 0 ? (
                  selectedProject.gallery.map((imgUrl: string, idx: number) => (
                    <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden border border-slate-700 group">
                      <img
                        src={imgUrl}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-auto hover:scale-105 transition duration-500"
                      />
                    </div>
                  ))
                ) : (
                  <p className="text-slate-400 col-span-full text-center py-10">Belum ada foto galeri.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER --- */}
      <footer id="contact" className="py-12 bg-[#0f172a] border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-xl md:text-2xl font-bold text-white mb-6">Mari Bekerja Sama!</h2>
          <p className="text-slate-400 mb-8 max-w-lg mx-auto text-sm md:text-base">
            Apakah Anda memiliki proyek menarik atau tawaran pekerjaan? Saya selalu terbuka untuk diskusi baru.
          </p>

          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=andikaarsana31@gmail.com" className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-full transition shadow-lg shadow-cyan-900/50 mb-10 text-sm md:text-base">
            Kirim Email
          </a>

          <div className="flex flex-col items-center gap-6">
            <div className="flex justify-center gap-8">
              {[
                { href: "https://github.com/AndikaAP31", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/i-putu-andika-arsana-putra-1b182b285/", icon: Linkedin, label: "LinkedIn" },
                { href: "https://instagram.com/andika_arsana", icon: Instagram, label: "Instagram" }
              ].map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition">
                  <div className="p-3 bg-slate-800 rounded-full group-hover:bg-cyan-600 transition duration-300">
                    <social.icon size={20} />
                  </div>
                  <span className="text-xs font-medium">{social.label}</span>
                </a>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-sm text-slate-400 mt-4">
              <div className="flex items-center gap-2 justify-center hover:text-cyan-400 transition cursor-pointer">
                <Phone size={16} />
                <a href="tel:+6287774498699">+62 877-7449-8699</a>
              </div>
              <div className="flex items-center gap-2 justify-center hover:text-cyan-400 transition cursor-pointer">
                <Mail size={16} />
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=andikaarsana31@gmail.com">andikaarsana31@gmail.com</a>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-800 text-slate-600 text-xs md:text-sm">
            <p>&copy; {new Date().getFullYear()} I Putu Andika Arsana Putra. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
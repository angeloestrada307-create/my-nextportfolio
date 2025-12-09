'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDockOpen, setIsDockOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.site-header');
      if (window.scrollY > 50) {
        header?.classList.add('scrolled');
      } else {
        header?.classList.remove('scrolled');
      }

      const sections = document.querySelectorAll("section[id]");
      const navLinks = document.querySelectorAll(".nav a");
      let current = "";

      sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
          current = section.getAttribute("id");
        }
      });

      navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
          link.classList.add("active");
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="logo-container">
          <img src="/images/Logo.png" alt="Logo" className="logo-img" />
          <span className="logo">AE</span>
        </div>

        <div className="header-center">
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`} id="navbar">
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="/games">Games</a>
            <a href="#blogs">Blogs</a>
          </nav>
        </div>

        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          id="hamburger"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="header-right">
          <ul className="social-links">
            <li><a href="#"><img src="/images/facebook.png" alt="Facebook" /></a></li>
            <li><a href="#"><img src="/images/x twitter.png" alt="Twitter" /></a></li>
            <li><a href="#"><img src="/images/Property 1=github.png" alt="GitHub" /></a></li>
            <li><a href="#"><img src="/images/dribble.png" alt="Dribble" /></a></li>
            <li><a href="#"><img src="/images/discord.png" alt="Discord" /></a></li>
            <li><a href="#"><img src="/images/figma.png" alt="Figma" /></a></li>
          </ul>
        </div>
      </header>

      {/* Floating Social Dock */}
      <div className="social-dock">
        <button 
          className="dock-toggle"
          id="dockToggle"
          onClick={() => setIsDockOpen(!isDockOpen)}
          aria-label="Social links"
        >
          🔗
        </button>
        <div className={`dock-links ${isDockOpen ? 'active' : ''}`} id="dockLinks">
          <a href="#" className="dock-item" data-label="Facebook">
            <img src="/images/facebook.png" alt="Facebook" />
          </a>
          <a href="#" className="dock-item" data-label="Twitter">
            <img src="/images/x twitter.png" alt="Twitter" />
          </a>
          <a href="#" className="dock-item" data-label="GitHub">
            <img src="/images/Property 1=github.png" alt="GitHub" />
          </a>
          <a href="#" className="dock-item" data-label="Dribbble">
            <img src="/images/dribble.png" alt="Dribbble" />
          </a>
          <a href="#" className="dock-item" data-label="Discord">
            <img src="/images/discord.png" alt="Discord" />
          </a>
          <a href="#" className="dock-item" data-label="Figma">
            <img src="/images/figma.png" alt="Figma" />
          </a>
        </div>
      </div>

      {/* HERO */}
      <section id="home" className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <h1>Hey, I'm <span className="highlight">Angelo</span>, a Computer Science student</h1>
            <p>I enjoy exploring web and UI design using Figma. Creating clean and creative designs while learning to become a skilled web designer and developer.</p>
            <div className="btn-row">
              <a href="#contact" className="btn primary">Get in Touch</a>
              <a href="#projects" className="btn ghost">View Projects</a>
            </div>
          </div>

          <div className="hero-photo">
            <img src="/images/Angelo.png" alt="Angelo Estrada" className="profile-photo" />
          </div>
        </div>

        <div className="quote-box">
          <p className="quote">"Trust me, it works on my computer."</p>
          <p className="quote-author">— Mr. Nobody</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section">
        <div className="container about-box">
          <h2 className="section-title">About Me</h2>
          <div className="two-col about-content">
            <p>Hi! I'm Angelo, a Computer Science student currently exploring front-end web design using Figma, HTML, and CSS. I enjoy turning ideas into visual interfaces that are clean, consistent, and engaging.</p>
            <p>I believe every project is an opportunity to improve and express creativity through design and code.</p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section alt">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <article className="project-card">
              <img src="/images/Get Rich.jpg" alt="Project Get Rich" />
              <div className="project-body">
                <h3>Project Get Rich</h3>
                <p>This ambitious kitty started selling meow-coins online. Still no fortune, but plenty of belly rubs!</p>
              </div>
            </article>

            <article className="project-card">
              <img src="/images/Beluga.jpg" alt="Project Beluga" />
              <div className="project-body">
                <h3>Project Beluga</h3>
                <p>The cat who buys the one and only YouTube.</p>
              </div>
            </article>

            <article className="project-card">
              <img src="/images/Fire.jpg" alt="Project Fire" />
              <div className="project-body">
                <h3>Project Fire</h3>
                <p>One spark, nine lives in danger. This brave (and slightly chaotic) kitty just wanted to see fireworks... now he's the show.</p>
              </div>
            </article>

            <article className="project-card">
              <img src="/images/Sigma.jpg" alt="Project Sigma" />
              <div className="project-body">
                <h3>Project Sigma</h3>
                <p>He walks alone. He doesn't chase laser dots — laser dots chase him. Stares into the void, and the void purrs back.</p>
              </div>
            </article>
          </div>
          <div className="view-all">
            <a href="#all-projects" className="btn ghost">View All Projects</a>
          </div>
        </div>
      </section>

      {/* BLOGS */}
      <section id="blogs" className="section">
        <div className="container">
          <h2 className="section-title">Blogs</h2>

          <div className="blogs-grid">
            <article className="blog-card">
              <img src="/images/blog1.jpg" alt="Blog 1" />
              <div className="blog-body">
                <h3>How I Got Into Web Design</h3>
                <p>A short story about how I went from "What is HTML?" to "Let me redesign your whole website."</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="blog-card">
              <img src="/images/blog2.jpg" alt="Blog 2" />
              <div className="blog-body">
                <h3>My Favorite UI Trends of 2025</h3>
                <p>A collection of designs that made me go "Wow, I want to copy that… for educational purposes."</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>

            <article className="blog-card">
              <img src="/images/blog3.webp" alt="Blog 3" />
              <div className="blog-body">
                <h3>What I Learned From Coding All Night</h3>
                <p>From caffeine overload to existential crisis — here's what 3AM debugging taught me.</p>
                <a href="#" className="read-more">Read More →</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT */}
<section id="contact" className="section">
  <div className="container">
    <h2 className="section-title">Get in Touch</h2>
    <p>Interested in working together or want to share feedback? Let's connect!</p>

    <div className="contact-grid">
      <ul className="contact-list">
        <li>
          Email: 
          <a href="mailto:abestrada792.pbox@parsu.edu.ph" target="_blank" rel="noopener noreferrer">
            abestrada792.pbox@parsu.edu.ph
          </a>
        </li>

        <li>
          GitHub: 
          <a 
            href="https://github.com/angeloestrada307-create" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            github.com/angeloestrada307-create
          </a>
        </li>

        <li>
          Facebook: 
          <a 
            href="https://www.facebook.com/share/1Y8RMwCSLJ/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            facebook.com/Angelo&nbsp;Estrada
          </a>
        </li>
      </ul>


            <div className="contact-form">
              <label>
                <span>Name</span>
                <input type="text" placeholder="Your name" />
              </label>
              <label>
                <span>Email</span>
                <input type="email" placeholder="your.email@example.com" />
              </label>
              <label>
                <span>Message</span>
                <textarea placeholder="Write your message here..."></textarea>
              </label>
              <button className="btn primary" onClick={(e) => e.preventDefault()}>Send Message</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <p>© <span id="year">{new Date().getFullYear()}</span> Angelo Estrada | Designed in Figma | Built with HTML & CSS</p>
      </footer>
    </>
  );
}
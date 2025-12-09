'use client';

import { useState, useEffect } from 'react';

export default function GamesPage() {
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
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const games = [
    {
      image: '/images/ML.png',
      title: 'Mobile Legends: Bang Bang',
      description: "I swear I'm not toxic 😇 — I just main support and still get blamed somehow."
    },
    {
      image: '/images/COC.png',
      title: 'Clash of Clans',
      description: "I've been upgrading this Town Hall for ages. The builders need a raise."
    },
    {
      image: '/images/Roblox.jpg',
      title: 'Roblox',
      description: 'From obbies to tycoons — Roblox is where chaos and creativity meet. 🧱'
    },
    {
      image: '/images/Minecraft.jpg',
      title: 'Minecraft',
      description: "I build cute houses... until a creeper decides it's renovation time 💥."
    },
    {
      image: '/images/Terraria.jpg',
      title: 'Terraria',
      description: '2D Minecraft with more boss fights and fewer jump scares. I still dig straight down.'
    },
    {
      image: '/images/Azeroth.png',
      title: 'Azeroth: Mount Garr Sacred',
      description: 'Exploring vast lands, battling beasts, and hoarding loot. Classic RPG energy ⚔️.'
    },
    {
      image: '/images/Skyrim.png',
      title: 'Skyrim',
      description: 'Took an arrow to the knee... still stole all the cheese wheels in Whiterun 🧀.'
    },
    {
      image: '/images/Witcher2.jpg',
      title: 'The Witcher II: Assassins of Kings',
      description: '"Toss a coin to your Witcher," but make it double — I spent too long on Gwent.'
    }
  ];

  return (
    <>
      {/* HEADER */}
      <header className="site-header">
        <div className="logo-container">
          <img src="/images/Logo.png" alt="Logo" className="logo-img" />
          <span className="logo">AE</span>
        </div>

        <nav className={`nav ${isMenuOpen ? 'open' : ''}`} id="navbar">
          <a href="/">Home</a>
          <a href="/#about">About</a>
          <a href="/#projects">Projects</a>
          <a href="/games" className="active">Games</a>
          <a href="/#blogs">Blogs</a>
        </nav>

        {/* Hamburger Button */}
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

      {/* MAIN CONTENT */}
      <main className="main-content">
        <section id="games" className="games-section">
          <h1 className="section-title">🎮 Games I Play</h1>
          <p className="section-subtitle">
            Here are some of the games that keep me entertained (and slightly sleep-deprived 😹).
          </p>

          <div className="games-grid">
            {games.map((game, index) => (
              <div key={index} className="game-card">
                <img src={game.image} alt={game.title} />
                <h3>{game.title}</h3>
                <p>{game.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CONTACT */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p>Interested in working together or want to share feedback? Let's connect!</p>

          <div className="contact-grid">
            <ul className="contact-list">
              <li>Email: <a href="mailto:abestrada792.pbox@parsu.edu.ph">abestrada792.pbox@parsu.edu.ph</a></li>
              <li>GitHub: <a href="https://github.com/angeloestrada307-create">github.com/angeloestrada307-create</a></li>
              <li>Facebook: <a href="https://www.facebook.com/share/1Y8RMwCSLJ/">facebook.com/Angelo Estrada</a></li>
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
        <p>© {new Date().getFullYear()} Angelo Estrada | Designed in Figma | Built with HTML & CSS</p>
      </footer>
    </>
  );
}
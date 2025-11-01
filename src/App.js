import React, { useRef, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import abcd from './ezgif.com-rotate.gif'
import pennywise from './images/penny.png'
import jobify from './images/jobify.png'
import chattr from './images/chattr.png'

function useOnScreen(ref, threshold = 0.2) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);
  return visible;
}

function AnimatedProject({ children, animation }) {
  const ref = useRef();
  const visible = useOnScreen(ref);
  return (
    <div ref={ref} className={`project-card animated-section ${visible ? animation : ""}`}>
      {children}
    </div>
  );
}

function Header() {
  return (
    <header className="navbar">
      <div className="brand">
        <span className="logo">RA</span>
      </div>
      <nav>
        <ul className="navlinks">
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
          <li><a href="https://github.com/ria30102004" target="_blank" rel="noopener noreferrer" className="social-icon"><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
          <li><a href="https://www.linkedin.com/in/ria-ambadan-a722a0238" target="_blank" rel="noopener noreferrer" className="social-icon"><FontAwesomeIcon icon={faLinkedin} size="lg" /></a></li>
          <li><a href="https://drive.google.com/file/d/1_ZoCQmMmOuHz8j0FG6IAeyNLKzKxUFnL/view?usp=sharing" className="nav-btn">Resume</a></li>
        </ul>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            I create <span className="gradient-text">interactive</span> experiences
          </h1>
          <p className="hero-subtitle">Ria Ambadan — Full Stack Developer</p>
          <div className="hero-cta">
            <a href="#projects" className="cta-button">View My Work</a>
            <a href="#contact" className="cta-button-outline">Get In Touch</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <div className="glow-effect"></div>
            <img src={abcd} alt="Developer" />
          </div>
        </div>
      </div>
      
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <h2 className="section-title">Featured Projects</h2>
      </div>

      <div className="projects-grid">
        <AnimatedProject animation="fade-in-up">
          <div className="project-image-container">
            <img
              src={chattr}
              alt="Chattr"
              className="project-image"
            />
            <div className="project-overlay"></div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Chattr</h3>
            <p className="project-subtitle">Language Exchange Platform</p>
            <p className="project-desc">
              Connect people worldwide through real-time chat and video calls with screen sharing and recording capabilities.
            </p>
            <div className="project-tools">
              <span className="tool-tag">React</span>
              <span className="tool-tag">Express</span>
              <span className="tool-tag">MongoDB</span>
              <span className="tool-tag">TailwindCSS</span>
            </div>
            <a href="https://github.com/ria30102004/chattrr" target="_blank" rel="noopener noreferrer">
              <button className="project-button">View Project</button>
            </a>
          </div>
        </AnimatedProject>

        <AnimatedProject animation="fade-in-up">
          <div className="project-image-container">
            <img
              src={jobify}
              alt="Jobify"
              className="project-image"
            />
            <div className="project-overlay"></div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Jobify</h3>
            <p className="project-subtitle">Career Coach Platform</p>
            <p className="project-desc">
              Empowering users to build smarter resumes, gain insights, and ace interviews with AI-powered tools.
            </p>
            <div className="project-tools">
              <span className="tool-tag">Next.js</span>
              <span className="tool-tag">PostgreSQL</span>
              <span className="tool-tag">TailwindCSS</span>
              <span className="tool-tag">Inngest</span>
            </div>
            <a href="https://github.com/ria30102004/jobify" target="_blank" rel="noopener noreferrer">
              <button className="project-button">View Project</button>
            </a>
          </div>
        </AnimatedProject>

        <AnimatedProject animation="fade-in-up">
          <div className="project-image-container">
            <img
              src={pennywise}
              alt="Pennywise"
              className="project-image"
            />
            <div className="project-overlay"></div>
          </div>
          <div className="project-content">
            <h3 className="project-title">Pennywise</h3>
            <p className="project-subtitle">AI Finance Tracker</p>
            <p className="project-desc">
              Smarter finance management with AI-driven insights, automation, and secure data visualization.
            </p>
            <div className="project-tools">
              <span className="tool-tag">Next.js</span>
              <span className="tool-tag">PostgreSQL</span>
              <span className="tool-tag">Shadcn UI</span>
              <span className="tool-tag">Arcjet</span>
            </div>
            <a href="https://github.com/ria30102004/expense-tracker-next-app" target="_blank" rel="noopener noreferrer">
              <button className="project-button">View Project</button>
            </a>
          </div>
        </AnimatedProject>
      </div>

      <div className="tech-stack">
        <h3 className="stack-title">Tech Stack</h3>
        <div className="stack-grid">
          {[
            { name: "Java", icon: "https://skillicons.dev/icons?i=java" },
            { name: "Python", icon: "https://skillicons.dev/icons?i=python" },
            { name: "JavaScript", icon: "https://skillicons.dev/icons?i=javascript" },
            { name: "React", icon: "https://skillicons.dev/icons?i=react" },
            { name: "Next.js", icon: "https://skillicons.dev/icons?i=nextjs" },
            { name: "Node.js", icon: "https://skillicons.dev/icons?i=nodejs" },
            { name: "Express", icon: "https://skillicons.dev/icons?i=express" },
            { name: "PostgreSQL", icon: "https://skillicons.dev/icons?i=postgres" },
            { name: "MongoDB", icon: "https://skillicons.dev/icons?i=mongodb" },
            { name: "MySQL", icon: "https://skillicons.dev/icons?i=mysql" },
            { name: "Tailwind", icon: "https://skillicons.dev/icons?i=tailwind" },
            { name: "Linux", icon: "https://skillicons.dev/icons?i=linux" },
          ].map((tech, i) => (
            <div className="stack-item" key={i}>
              <img src={tech.icon} alt={tech.name} />
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Let's Connect</h3>
        <p className="footer-text">Feel free to reach out for collaborations or just a friendly chat</p>
        <ul className="footer-socials">
          <li><a href="https://drive.google.com/file/d/1_ZoCQmMmOuHz8j0FG6IAeyNLKzKxUFnL/view?usp=sharing" className="footer-link">Resume</a></li>
          <li><a href="https://github.com/ria30102004" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.linkedin.com/in/ria-ambadan-a722a0238" target="_blank" rel="noopener noreferrer" className="footer-icon"><FontAwesomeIcon icon={faLinkedin} /></a></li>
        </ul>
        <p className="footer-copyright">© 2025 Ria Ambadan. Crafted with passion.</p>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="app">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #0a0a0a;
          color: #ffffff;
          overflow-x: hidden;
        }

        html {
          scroll-behavior: smooth;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        .app {
          min-height: 100vh;
        }

        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 6%;
          background: rgba(10, 10, 10, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 1000;
        }

        .brand .logo {
          font-size: 1.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          cursor: pointer;
        }

        .navlinks {
          display: flex;
          list-style: none;
          gap: 2rem;
          align-items: center;
        }

        .nav-link {
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-btn {
          padding: 0.6rem 1.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 2rem;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
        }

        .nav-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .social-icon {
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #667eea;
          transform: translateY(-3px);
        }

        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 8rem 6% 4rem;
          position: relative;
          background: radial-gradient(ellipse at top, rgba(102, 126, 234, 0.15) 0%, rgba(10, 10, 10, 1) 70%);
        }

        .hero-content {
          display: flex;
          justify-content: space-around;
          align-items: center;
          gap: 8rem;
          width: 100%;
          max-width: 1400px;
        }

        .hero-text {
          flex: 1;
          max-width: 600px;
        }

        .hero-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
    animation: color-change 30s infinite;
  
        }
      @keyframes color-change {
    0% { color: red; }
    10% { color: orange; }
    20% { color: yellow; }
    30% { color: lightgreen; }
    40% { color: green; }
    50% { color: blue; }
    60% { color: purple; }
    70% { color: lightblue; }
    
   
    80% { color: pink; }
    90% { color: peru; }
    100% { color: red; }
   
  }

        .hero-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.4rem);
          color: #a0aec0;
          margin-bottom: 2.5rem;
          font-weight: 500;
        }

        .hero-cta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .cta-button {
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border-radius: 3rem;
          font-weight: 600;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(102, 126, 234, 0.4);
        }

        .cta-button-outline {
          padding: 1rem 2.5rem;
          border: 2px solid rgba(102, 126, 234, 0.5);
          border-radius: 3rem;
          font-weight: 600;
          font-size: 1.05rem;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .cta-button-outline:hover {
          border-color: #667eea;
          background: rgba(102, 126, 234, 0.1);
          transform: translateY(-3px);
        }

        .hero-image {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          width: 100%;
          max-width: 450px;
        }

        .image-wrapper img {
          width: 100%;
          
          position: relative;
          z-index: 2;
        }

        .glow-effect {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 120%;
          height: 120%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.3) 0%, transparent 70%);
          filter: blur(40px);
          z-index: 1;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }

        .projects-section {
          padding: 6rem 6% 8rem;
          background: #0a0a0a;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          font-size: 1.2rem;
          color: #a0aec0;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          gap: 3rem;
          max-width: 1400px;
          margin: 0 auto 6rem;
        }

        .project-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 1.5rem;
          overflow: hidden;
          transition: all 0.4s ease;
          opacity: 0;
          transform: translateY(40px);
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: rgba(102, 126, 234, 0.3);
          box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);
        }

        .animated-section.fade-in-up {
          animation: fadeInUp 0.8s ease forwards;
        }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .project-image-container {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 1rem;
          transition: transform 0.4s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(180deg, transparent 0%, rgba(10, 10, 10, 0.8) 100%);
        }

        .project-content {
          padding: 2rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .project-title {
          font-size: 1.6rem;
          font-weight: 700;
          color: #ffffff;
        }

        .project-subtitle {
          font-size: 1rem;
          color: #667eea;
          font-weight: 600;
          margin-top: -0.5rem;
        }

        .project-desc {
          font-size: 1rem;
          color: #a0aec0;
          line-height: 1.7;
        }

        .project-tools {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: 0.5rem;
        }

        .tool-tag {
          background: rgba(102, 126, 234, 0.1);
          color: #667eea;
          border: 1px solid rgba(102, 126, 234, 0.2);
          border-radius: 0.5rem;
          padding: 0.4rem 1rem;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .tool-tag:hover {
          background: rgba(102, 126, 234, 0.2);
          border-color: rgba(102, 126, 234, 0.4);
        }

        .project-button {
          margin-top: 1rem;
          padding: 0.8rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 2rem;
          color: white;
          font-weight: 600;
          font-size: 0.95rem;
          cursor: pointer;
          transition: all 0.3s ease;
          align-self: flex-start;
        }

        .project-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);
        }

        .tech-stack {
          text-align: center;
          margin-top: 6rem;
          padding: 4rem 2rem;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 2rem;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .stack-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 3rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .stack-grid {
          display: grid;
          justify-content: center;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .stack-item {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 0.8rem;
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .stack-item:hover {
          transform: translateY(-8px);
        }

        .stack-item img {
          width: 56px;
          height: 56px;
          filter: drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3));
        }

        .stack-item span {
          font-size: 0.9rem;
          color: #a0aec0;
          font-weight: 500;
        }

        .footer {
          background: rgba(255, 255, 255, 0.02);
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 6% 2rem;
        }

        .footer-content {
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .footer-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .footer-text {
          font-size: 1.1rem;
          color: #a0aec0;
          margin-bottom: 2rem;
        }

        .footer-socials {
          display: flex;
          justify-content: center;
          gap: 2rem;
          list-style: none;
          margin-bottom: 2rem;
          align-items: center;
        }

        .footer-link {
          font-size: 1.05rem;
          font-weight: 500;
          transition: all 0.3s ease;
          color: #a0aec0;

        }

        .footer-link:hover {
          color: #667eea;
        }

        .footer-icon {
          font-size: 1.5rem;
          color: #a0aec0;
          transition: all 0.3s ease;
        }

        .footer-icon:hover {
          color: #667eea;
          transform: translateY(-3px);
        }

        .footer-copyright {
          font-size: 0.9rem;
          color: #718096;
          margin-top: 2rem;
          padding-top: 2rem;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
        }

        @media (max-width: 968px) {
          .navbar {
            padding: 1.2rem 4%;
          }

          .navlinks {
            gap: 1.2rem;
          }

          .nav-link {
            font-size: 0.85rem;
          }

          .hero-content {
            flex-direction: column-reverse;
            gap: 3rem;
            text-align: center;
          }

          .hero-text {
            align-items: center;
          }

          .hero-cta {
            justify-content: center;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .stack-grid {
            grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
            gap: 1.5rem;
          }

          .footer-socials {
            gap: 1.5rem;
          }
        }

        @media (max-width: 640px) {
          .navbar {
            padding: 1rem 4%;
          }

          .navlinks {
            gap: 0.8rem;
          }

          .nav-link, .nav-btn {
            font-size: 0.8rem;
            padding: 0.5rem 1rem;
          }

          .social-icon {
            font-size: 1rem;
          }

          .hero {
            padding: 6rem 4% 3rem;
          }

          .projects-section {
            padding: 4rem 4% 5rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
          }

          .tech-stack {
            padding: 2rem 1rem;
          }

          .footer {
            padding: 3rem 4% 1.5rem;
          }
        }
      `}</style>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
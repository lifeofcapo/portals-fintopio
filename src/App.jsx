import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  hero_image,
  second_image,
  last_image,
  firefly,
  cloud,
  cloud2,
  birds,
  portals,
  fintopio,
  solobird,
} from "./assets";
import "./App.css";

const fontFace = `
@font-face {
  font-family: 'Korinth';
  src: url('../assets/fonts/Korinth_Serial_Regular_DB.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}
`;

const styles =
  fontFace +
  `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Korinth', 'PT Serif', 'Georgia';
}

body {
  background: #000;
}

.container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  background: transparent;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

.nav-logo {
  width: 32px;
  height: 32px;
  filter: brightness(1.2);
}

.nav-link {
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.nav-link:hover {
  color: #64B5F6;
  text-shadow: 0 0 20px rgba(100, 181, 246, 0.6);
  transform: translateY(-2px);
}

.section {
  height: 150vh;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 0;
}

.start-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 1.1rem;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.start-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.section-content {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 100%;
  padding: 0 50px;
  text-align: center;
}

.hero-content {
  position: absolute;
  top: 120px;
  left: 50px;
  z-index: 10;
  max-width: 600px;
  width: 100%;
  text-align: left;
}

.hero-title {
  font-size: 5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
}

.hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 40px;
  line-height: 1.6;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
}

.section-content-left {
  position: absolute;
  top: 120px;
  left: 50px;
  z-index: 10;
  max-width: 600px;
  width: 100%;
  text-align: left;
}

.section-content-right {
  position: absolute;
  top: 120px;
  right: 50px;
  z-index: 10;
  max-width: 600px;
  width: 100%;
  text-align: right;
}

.section-badge {
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 20px;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
}

.section-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
}

.section-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 30px;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
  max-width: 800px;
}

.contest-content {
  text-align: center;
  max-width: 800px;
  position: relative;
  z-index: 10;
}

.contest-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
}

.contest-text {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.8;
  margin-bottom: 40px;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
}

.contest-links {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.contest-link {
  padding: 15px 30px;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  border-radius: 25px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  transition: all 0.3s;
  backdrop-filter: blur(10px);
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

.contest-link:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.telegram-link {
  color: #64B5F6;
  text-decoration: none;
  transition: all 0.3s;
}

.telegram-link:hover {
  color: #42A5F5;
  text-shadow: 0 0 10px rgba(100, 181, 246, 0.5);
}

.media-controls {
  position: fixed;
  bottom: 20px;
  left: 49%;
  transform: translateX(-50%);
  z-index: 1000;
}

.progress-bar {
  width: 100px;
  height: 6px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff6b6b, #ffa726);
  border-radius: 3px;
  transition: width 0.1s ease-out;
}

.floating-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 3;
}

.particle {
  position: absolute;
  width: 4px;
  height: 4px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
}

.firefly {
  position: absolute;
  width: 30px;
  height: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 5;
  filter: brightness(1.5) drop-shadow(0 0 10px rgba(255, 215, 0, 0.8));
}

.cloud {
  position: absolute;
  width: 200px;
  height: 100px;
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 2;
}

.birds {
  position: absolute;
  width: 120px;
  height: 80px;
  background-size: contain;
  background-repeat: no-repeat;
  pointer-events: none;
  z-index: 2;
}

@media (max-width: 768px) {
  .header {
    padding: 15px 25px;
    gap: 30px;
  }

  .nav-logo {
    width: 24px;
    height: 24px;
  }

  .nav-link {
    font-size: 16px;
  }

  .hero-content, .section-content-left, .section-content-right {
    position: relative;
    top: auto;
    left: auto;
    right: auto;
    padding: 0 25px;
    text-align: center;
    max-width: 100%;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .contest-title {
    font-size: 2rem;
  }

  .progress-bar {
    width: 300px;
  }

  .contest-links {
    flex-direction: column;
    align-items: center;
  }

  .hero-subtitle, .section-text, .contest-text {
    font-size: 1rem;
  }
}
`;
const SoloBirds = () => {
  return (
    <>
      <motion.div
        className="birds"
        style={{
          backgroundImage: `url(${solobird})`,
          position: "absolute",
          bottom: "-100px",
          left: "40%",
          width: "150px",
          height: "100px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          zIndex: 2,
        }}
        animate={{
          y: ["0px", "-120vh"],
          x: ["0px", "-50vw"], // More horizontal movement
          rotate: [-15, 5, -10], // More pronounced wing flaps
          opacity: [0, 1, 0.8, 0], // Fade in/out
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatDelay: 5,
          ease: [0.17, 0.67, 0.83, 0.67], // Bouncy ease for more natural motion
        }}
      />

      {/* Second solo bird - different diagonal path */}
      <motion.div
        className="birds"
        style={{
          backgroundImage: `url(${solobird})`,
          position: "absolute",
          bottom: "-100px",
          left: "60%",
          width: "130px",
          height: "150px",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          zIndex: 2,
          filter: "brightness(0.9)",
        }}
        animate={{
          y: ["0px", "-110vh"],
          x: ["0px", "-40vw"], // Less horizontal than first bird
          rotate: [10, -5, 8], // Different wing pattern
          opacity: [0, 0.8, 0.9, 0], // Different fade pattern
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatDelay: 8,
          ease: [0.2, 0.8, 0.4, 0.9], // Different motion curve
        }}
      />
    </>
  );
};

const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div className="floating-particles">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

const Fireflies = () => {
  const fireflies = Array.from({ length: 8 }, (_, i) => i);

  return (
    <>
      {fireflies.map((fly) => (
        <motion.div
          key={fly}
          className="firefly"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundImage: `url(${firefly})`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.3, 1, 0.3],
            scale: [0.7, 1.3, 0.7],
          }}
          transition={{
            duration: 8 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: "easeInOut",
          }}
        />
      ))}
    </>
  );
};

const Clouds = () => {
  return (
    <>
      <motion.div
        className="cloud"
        style={{
          backgroundImage: `url(${cloud})`,
          top: "15%",
          left: "-200px",
        }}
        animate={{
          x: ["-200px", "calc(100vw + 200px)"],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="cloud"
        style={{
          backgroundImage: `url(${cloud2})`,
          top: "25%",
          left: "-200px",
          right: "auto",
        }}
        animate={{
          x: ["-200px", "calc(100vw + 200px)"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
          delay: 10,
        }}
      />
      <motion.div
        className="cloud"
        style={{
          backgroundImage: `url(${cloud})`,
          top: "35%",
          left: "-200px",
        }}
        animate={{
          x: ["-200px", "calc(100vw + 200px)"],
        }}
        transition={{
          duration: 70,
          repeat: Infinity,
          ease: "linear",
          delay: 20,
        }}
      />
    </>
  );
};

const Birds = () => {
  return (
    <motion.div
      className="birds"
      style={{
        backgroundImage: `url(${birds})`,
        top: "30%",
        left: "-200px",
        transform: "translateX(-50%)",
      }}
      animate={{
        x: ["-200px", "calc(100vw + 200px)"],
      }}
      transition={{
        duration: 70,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

const formatTextWithLinks = (text) => {
  return text.split(/(@portals|@fintopio)/g).map((part, index) => {
    if (part === "@portals") {
      return (
        <a
          key={index}
          href="https://t.me/portals"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-link"
        >
          @portals
        </a>
      );
    } else if (part === "@fintopio") {
      return (
        <a
          key={index}
          href="https://t.me/fintopio"
          target="_blank"
          rel="noopener noreferrer"
          className="telegram-link"
        >
          @fintopio
        </a>
      );
    }
    return part;
  });
};

function App() {
  const [currentSection, setCurrentSection] = useState(0);
  const { scrollYProgress } = useScroll();
  const [totalSections] = useState(4);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const section = Math.floor(scrollY / windowHeight);
      setCurrentSection(section);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <style>{styles}</style>
      <div className="container">
        <motion.header
          className="header"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="nav-item">
            <img src={portals} alt="Portals" className="nav-logo" />
            <a href="https://t.me/portals" className="nav-link">
              @portals
            </a>
          </div>
          <div className="nav-item">
            <img src={fintopio} alt="Fintopio" className="nav-logo" />
            <a href="https://t.me/fintopio" className="nav-link">
              @fintopio
            </a>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="section-background"
            style={{ backgroundImage: `url(${hero_image})` }}
          />
          <div className="section-overlay" />
          <FloatingParticles />
          <Clouds />
          <Birds />

          <div className="hero-content">
            <motion.h1
              className="hero-title"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Притча о Портале и Финтопии
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {formatTextWithLinks(
                "В далёком мире были два великих творения: @portals — врата в безграничное, и @fintopio — поток токенов знаний и силы."
              )}
            </motion.p>
            <motion.button
              className="start-btn"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Начать путешествие →
            </motion.button>
          </div>
        </motion.section>

        {/* Tranquility Section */}
        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="section-background"
            style={{ backgroundImage: `url(${second_image})` }}
          />
          <div className="section-overlay" />
          <FloatingParticles />
          <Fireflies />
          <SoloBirds />

          <div className="section-content-right">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="section-badge">Врата двух миров</p>
            </motion.div>

            <motion.h2
              className="section-title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Молодой Скиталец
            </motion.h2>

            <motion.p
              className="section-text"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {formatTextWithLinks(
                "искал истину и услышал о волшебных вратах — Портале, что открывает двери в любые миры. Но топливо для путешествий — не золото, а токены из Финтопии. Однажды он подошёл к вратам: слева мерцал портал, справа струился невидимый поток токенов @fintopio."
              )}
            </motion.p>
          </div>
        </motion.section>

        {/* Biodiversity Section */}
        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div
            className="section-background"
            style={{ backgroundImage: `url(${last_image})` }}
          />
          <div className="section-overlay" />
          <FloatingParticles />
          <Fireflies />

          <div className="section-content-left">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="section-badge">Предисловие</p>
            </motion.div>

            <motion.h2
              className="section-title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Говорят
            </motion.h2>

            <motion.p
              className="section-text"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {formatTextWithLinks(
                "он нашёл там ответы, о которых не смел мечтать. А если прислушаться, можно услышать шаги Искателя — там, где сливаются бесконечность @portals и поток @fintopio. Врата раскрылись, и он исчез в поисках истины."
              )}
            </motion.p>
          </div>
        </motion.section>

        {/* Contest Section */}
        <motion.section
          className="section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            background:
              "linear-gradient(135deg, #2e2e2e 0%, #1a1a1a 50%, #0a0a0a 100%)",
          }}
        >
          <div className="section-overlay" />
          <FloatingParticles />
          <Fireflies />

          <div className="contest-content">
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="section-badge">Создано специально</p>
            </motion.div>

            <motion.h2
              className="contest-title"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              Для конкурса
            </motion.h2>

            <motion.p
              className="contest-text"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Этот интерактивный сайт был создан специально для участия в
              конкурсе СТЕНКИ, демонстрируя возможности современных
              веб-технологий и креативного дизайна. Объединяя притчу о порталах
              и финтопии с плавными анимациями и отзывчивым интерфейсом.
            </motion.p>

            <motion.p
              className="contest-text"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              {formatTextWithLinks(
                "Путешествие к новым горизонтам. Скорее отправляйся в @portals и @fintopio"
              )}
            </motion.p>

            <motion.div
              className="contest-links"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.a
                href="https://t.me/portals"
                className="contest-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Portals
              </motion.a>
              <motion.a
                href="https://t.me/fintopio"
                className="contest-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Fintopio
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        <motion.div
          className="media-controls"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <div className="progress-bar">
            <motion.div className="progress-fill" style={{ width: progress }} />
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default App;

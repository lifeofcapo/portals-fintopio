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
} from "./assets";
import "./App.css";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
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
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  text-align: center;
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
  z-index: 1;
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
  font-size: 6rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
}

.hero-subtitle {
  font-size: 1.5rem;
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
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  text-shadow: 1px 1px 10px rgba(0, 0, 0, 0.8);
}

.section-title {
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
}

.section-text {
  font-size: 1.3rem;
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
  font-size: 4rem;
  font-weight: bold;
  color: white;
  margin-bottom: 30px;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
}

.contest-text {
  font-size: 1.3rem;
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
  width: 8px;
  height: 8px;
  background: #FFD700;
  border-radius: 50%;
  box-shadow: 0 0 20px #FFD700, 0 0 40px #FFD700;
  pointer-events: none;
}

.cloud {
  position: absolute;
  pointer-events: none;
  filter: brightness(0.8);
}

.cloud1 {
  width: 120px;
  height: 80px;
  top: 15%;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 50px;
}

.cloud2 {
  width: 100px;
  height: 60px;
  top: 25%;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 40px;
}

.birds {
  position: absolute;
  width: 40px;
  height: 30px;
  top: 20%;
  filter: brightness(0.4);
  pointer-events: none;
}

@media (max-width: 768px) {
  .header {
    padding: 15px 25px;
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
    font-size: 3rem;
  }

  .section-title {
    font-size: 2.5rem;
  }

  .contest-title {
    font-size: 2.5rem;
  }

  .progress-bar {
    width: 300px;
  }

  .contest-links {
    flex-direction: column;
    align-items: center;
  }

  .hero-subtitle, .section-text, .contest-text {
    font-size: 1.1rem;
  }
}
`;

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
  const fireflies = Array.from({ length: 15 }, (_, i) => i);

  return (
    <>
      {fireflies.map((firefly) => (
        <motion.div
          key={firefly}
          className="firefly"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            opacity: [0.2, 1, 0.2],
            scale: [0.5, 1.5, 0.5],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
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
        className="cloud cloud1"
        animate={{
          x: ["-120px", "100vw"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="cloud cloud2"
        animate={{
          x: ["-100px", "100vw"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          delay: 5,
        }}
      />
    </>
  );
};

const Birds = () => {
  return (
    <motion.div
      className="birds"
      animate={{
        x: ["-40px", "100vw"],
      }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
        delay: 3,
      }}
    >
      🦅
    </motion.div>
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
          <motion.a
            href="https://t.me/portals"
            className="logo"
            whileHover={{ scale: 1.1 }}
          >
            Portals & Fintopio
          </motion.a>
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
                @portals
              </motion.a>
              <motion.a
                href="https://t.me/fintopio"
                className="contest-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                @fintopio
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

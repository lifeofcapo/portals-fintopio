import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { hero_image, second_image, last_image } from "./assets";
import "./App.css";

const styles = `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
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
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.section {
  height: 100vh;
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
  background-size: contain;
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
  position: relative;
  z-index: 10;
  max-width: 800px;
  width: 100%;
  padding: 0 50px;
  text-align: center;
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
  margin-left: auto;
  margin-right: auto;
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

@media (max-width: 768px) {
  .header {
    padding: 15px 25px;
  }

  .section-content, .hero-content {
    padding: 0 25px;
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

  const scrollToSection = (index) => {
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

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
          <motion.a href="#" className="logo" whileHover={{ scale: 1.1 }}>
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
              В далёком мире были два великих творения: @portals — врата в
              безграничное, и @fintopio — поток токенов знаний и силы.
            </motion.p>

            <motion.button
              className="start-btn"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(1)}
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

          <div className="section-content">
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
              искал истину и услышал о волшебных вратах — Портале, что открывает
              двери в любые миры. Но топливо для путешествий — не золото, а
              токены из Финтопии. Однажды он подошёл к вратам: слева мерцал
              портал, справа струился невидимый поток токенов @fintopio.
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

          <div className="section-content">
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
              он нашёл там ответы, о которых не смел мечтать. А если
              прислушаться, можно услышать шаги Искателя — там, где сливаются
              бесконечность @portals и поток @fintopio. Врата раскрылись, и он
              исчез в поисках истины.
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
              конкурсе, демонстрируя возможности современных веб-технологий и
              креативного дизайна. Объединяя притчу о порталах и финтопии с
              плавными анимациями и отзывчивым интерфейсом.
            </motion.p>

            <motion.p
              className="contest-text"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Путешествие к новым горизонтам. Скорее отправляйся в @portals и
              @fintopio
            </motion.p>

            <motion.div
              className="contest-links"
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <motion.a
                href="#"
                className="contest-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                @portals
              </motion.a>
              <motion.a
                href="#"
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

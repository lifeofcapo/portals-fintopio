import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  hero_image,
  second_image,
  last_image,
  portals,
  fintopio,
} from "./assets";
import {
  SoloBirds,
  Clouds,
  FloatingParticles,
  Birds,
  Fireflies,
} from "./components/components";
import "./App.css";

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

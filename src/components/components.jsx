import { solobird, cloud, cloud2, birds, firefly } from "../assets";
import { motion } from "framer-motion";

export const SoloBirds = () => {
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
          x: ["0px", "-50vw"],
          rotate: [-15, 5, -10],
          opacity: [0, 1, 0.8, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          repeatDelay: 5,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
      />
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
          x: ["0px", "-40vw"],
          rotate: [10, -5, 8],
          opacity: [0, 0.8, 0.9, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          repeatDelay: 8,
          ease: [0.2, 0.8, 0.4, 0.9],
        }}
      />
    </>
  );
};

export const FloatingParticles = () => {
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

export const Fireflies = () => {
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

export const Clouds = () => {
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

export const Birds = () => {
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

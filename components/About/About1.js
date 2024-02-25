import { useEffect, useRef } from "react";
import { gsap, Linear } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About1 = ({ clientHeight }) => {
  const quoteRef = useRef(null);
  const targetSection = useRef(null);

  useEffect(() => {
    const timeline = gsap.timeline({
      defaults: { ease: Linear.easeNone, duration: 0.1 },
    });

    timeline
      .fromTo(
        quoteRef.current.querySelector(".about-1"),
        { opacity: 0.2 },
        { opacity: 1 }
      )
      .to(quoteRef.current.querySelector(".about-1"), {
        opacity: 0.2,
        delay: 0.5,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-2"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-2"), {
        opacity: 0.2,
        delay: 1,
      })
      .fromTo(
        quoteRef.current.querySelector(".about-3"),
        { opacity: 0.2 },
        { opacity: 1 },
        "<"
      )
      .to(quoteRef.current.querySelector(".about-3"), {
        opacity: 0.2,
        delay: 1,
      });

    // Animation to change color of the specified text
    gsap.to(quoteRef.current.querySelector(".about-5"), {
      color: "transparent",
      scrollTrigger: {
        trigger: targetSection.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
      },
    });

    // Additional animation for the specified line
    gsap.to(quoteRef.current.querySelector(".about-5"), {
      color: "#4b0082",
      opacity: 1,  // Set the final opacity value
      scrollTrigger: {
        trigger: targetSection.current,
        start: "center 80%",
        end: "center top",
        scrub: 0,
      },
    });

    ScrollTrigger.create({
      trigger: targetSection.current,
      start: "center 80%",
      end: "center top",
      scrub: 0,
      animation: timeline,
    });
  }, [quoteRef, targetSection]);

  return (
    <section className="w-full relative select-none" ref={targetSection}>
      <div
        className={`${
          clientHeight > 650 ? "pt-28 pb-16" : "pt-80 pb-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[1.10rem] md:text-6xl lg:text-[4rem] text-center"
        >
          <span className="about-1 leading-tight">
            Driven{" "}
            <span className="about-5 font-bold">
              C.E. student currently pursuing an MBA in Technology at NMIMS{" "}
            </span>{" "}
            with a keen focus on specializing in finance.{" "}
          </span>
          <span className="about-2 leading-tight">
            Enthusiastic about leveraging a robust tech background to drive strategic financial initiatives.{" "}
          </span>
          <span className="about-3 leading-tight">
            Passionate learner committed to bridging the gap between technology and finance for innovative solutions.
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About1;

export const bubble = {
  fullScreen: {
    enable: true,
    zIndex: 0,
  },
  particles: {
    number: {
      value: 200,
      limit: 300,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "images/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.5,
        sync: false,
      },
    },
    size: {
      value: 30,
      random: true,
      anim: {
        enable: true,
        speed: 10,
        size_min: 10,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 1,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
        parallax: {
          enable: false,
          force: 60,
          smooth: 10,
        },
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        lineLinked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 1,
        speed: 2,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  backgroundMask: {
    enable: true,
    cover: {
      color: {
        value: {
          r: 0,
          g: 0,
          b: 0,
        },
      },
    },
  },
  retina_detect: true,
  fps_limit: 120,
  background: {
    image: "url('https://particles.js.org/images/background3.jpg')",
  },
};

export const triangle = {
  fullScreen: { enable: false },
  fpsLimit: 120,
  interactivity: {
    // two modes repulse or attract change what happens with mouse
    events: {
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#EE0F0F",
    },
    links: {
      color: "#EE0F0F",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 2,
    },
    collisions: {
      enable: true,
    },
    move: {
      enable: true,
      direction: "top-left",
      outModes: {
        default: "bounce",
      },
      random: true,
      straight: false,
      speed: 1,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 105,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
};

export const triangle2 = {
  fpsLimit: 60,
  particles: {
    number: {
      value: 160,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: "#ff0000",
      animation: {
        enable: true,
        speed: 20,
        sync: true,
      },
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
      },
      polygon: {
        nb_sides: 5,
      },
      image: {
        src: "https://cdn.matteobruni.it/images/particles/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 3,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 20,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 100,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
    life: {
      duration: {
        sync: false,
        value: 3,
      },
      count: 0,
      delay: {
        random: {
          enable: true,
          minimumValue: 0.5,
        },
        value: 1,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 40,
        duration: 2,
        opacity: 0.8,
      },
      repulse: {
        distance: 200,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#000000",
    image: "",
    position: "50% 50%",
    repeat: "no-repeat",
    size: "cover",
  },
};

// template for useMemo:
// const triangle = useMemo(
//     () => ({
//       fullScreen: { enable: false },
//       fpsLimit: 120,
//       interactivity: {
//         // two modes repulse or attract change what happens with mouse
//         events: {
//           onHover: {
//             enable: true,
//             mode: "repulse",
//           },
//           //resize: true,
//         },
//         modes: {
//           repulse: {
//             distance: 100,
//             duration: 0.4,
//           },
//         },
//       },
//       particles: {
//         color: {
//           value: "#ffffff",
//         },
//         links: {
//           color: "#ffffff",
//           distance: 150,
//           enable: true,
//           opacity: 0.5,
//           width: 2,
//         },
//         collisions: {
//           enable: true,
//         },
//         move: {
//           enable: true,
//           direction: "top-left",
//           outModes: {
//             default: "bounce",
//           },
//           random: true,
//           straight: false,
//           speed: 1,
//         },
//         number: {
//           density: {
//             enable: true,
//             //area: 800,
//           },
//           value: 105,
//         },
//         opacity: {
//           value: 0.5,
//         },
//         shape: {
//           type: "circle",
//         },
//         size: {
//           value: { min: 1, max: 5 },
//         },
//       },
//       detectRetina: true,
//     }),
//     []
//   );

//rafce template code
// Need to run the following npm install @tsparticles/react tsparticles
//10: 25
// https://github.com/tsparticles/react/#readme
"use client";

import { useEffect, useMemo, useState } from "react";
import { loadFull } from "tsparticles";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container } from "@tsparticles/engine";
import { bubble, triangle, triangle2 } from "./ParticleOptions";

const Particle = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container: Container) => {
    console.log(container);
  };

  return init ? (
    <Particles
      className="h-screen"
      particlesLoaded={particlesLoaded}
      options={triangle}
    />
  ) : (
    <></>
  );
};

export default Particle;

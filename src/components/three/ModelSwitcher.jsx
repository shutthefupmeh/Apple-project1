import { PresentationControls } from "@react-three/drei";
import React, { useEffect, useRef, useState } from "react";
import MacbookModel16 from "../models/Macbook-16";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MacbookModel14 from "../models/Macbook-14";

const ANIMATION_DURATION = 1;
const OFFSET_DISTANCE = 5;

const fadeMeshes = (group, opacity) => {
  if (!group) return;

  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      gsap.to(child.material, { opacity, duration: ANIMATION_DURATION });
    }
  });
};

const moveGroup = (group, x) => {
  if (!group) return;
  gsap.to(group.position, { x, duration: ANIMATION_DURATION });
};

const setInitialState = (group, x, opacity) => {
  if (!group) return;

  group.position.x = x;
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      child.material.opacity = opacity;
    }
  });
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const SCALE_LARGE_DESKTOP = 0.08;
  const SCALE_LARGE_MOBILE = 0.05;

  const smallMacbookRef = useRef();
  const largeMacbookRef = useRef();
  const [isInitialized, setIsInitialized] = useState(false);

  const showLargeMacbook =
    scale === SCALE_LARGE_DESKTOP || scale === SCALE_LARGE_MOBILE;

  useEffect(() => {
    if (!isInitialized && smallMacbookRef.current && largeMacbookRef.current) {
      if (showLargeMacbook) {
        setInitialState(smallMacbookRef.current, -OFFSET_DISTANCE, 0);
        setInitialState(largeMacbookRef.current, 0, 1);
      } else {
        setInitialState(smallMacbookRef.current, 0, 1);
        setInitialState(largeMacbookRef.current, OFFSET_DISTANCE, 0);
      }
      setIsInitialized(true);
    }
  }, [showLargeMacbook, isInitialized]);

  useGSAP(() => {
    if (!isInitialized) return;
    if (showLargeMacbook) {
      moveGroup(smallMacbookRef.current, -OFFSET_DISTANCE);
      moveGroup(largeMacbookRef.current, 0);

      fadeMeshes(smallMacbookRef.current, 0);
      fadeMeshes(largeMacbookRef.current, 1);
    } else {
      moveGroup(smallMacbookRef.current, 0);
      moveGroup(largeMacbookRef.current, OFFSET_DISTANCE);

      fadeMeshes(smallMacbookRef.current, 1);
      fadeMeshes(largeMacbookRef.current, 0);
    }
  }, [scale, isInitialized]);

  const controlsConfig = {
    snap: true,
    speed: 1,
    zoom: 1,
    polar: [-Math.PI, Math.PI],
    azimuth: [-Infinity, Infinity],
    config: { mass: 1, tension: 0, friction: 25 },
  };

  return (
    <>
      <PresentationControls {...controlsConfig}>
        <group ref={largeMacbookRef}>
          <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
        </group>
      </PresentationControls>

      <PresentationControls {...controlsConfig}>
        <group ref={smallMacbookRef}>
          <MacbookModel14 scale={isMobile ? 0.03 : 0.06} />
        </group>
      </PresentationControls>
    </>
  );
};

export default ModelSwitcher;

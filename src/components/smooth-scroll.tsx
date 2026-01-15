"use client";

import React, { useEffect } from "react";
import { ReactLenis, useLenis } from "lenis/react";
import type Lenis from "lenis";

interface LenisProps {
  children: React.ReactNode;
  isInsideModal?: boolean;
  className?: string;
}

function SmoothScroll({ children, isInsideModal = false, className }: LenisProps) {
  const lenis = useLenis((lenis: Lenis) => {
    // called every scroll
  });

  useEffect(() => {
    if (!lenis) return;
    // ensure lenis is running
    lenis.start();

    return () => {
      // cleanup if needed
    }
  }, [lenis]);

  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        prevent: (node: Element) => {
          if (isInsideModal) return true;
          const modalOpen = node.classList?.contains("modall");
          return !!modalOpen;
        },
      }}
    >
      <div className={className}>{children}</div>
    </ReactLenis>
  );
}

export default SmoothScroll;

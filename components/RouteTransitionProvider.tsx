"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  ReactNode,
} from "react";
import { usePathname, useRouter } from "next/navigation";
import Transition from "@/components/Transition";

type RouteTransitionContextType = {
  navigateWithTransition: (href: string) => void;
};

const RouteTransitionContext =
  createContext<RouteTransitionContextType | null>(null);

export const useRouteTransition = () => {
  const context = useContext(RouteTransitionContext);

  if (!context) {
    throw new Error(
      "useRouteTransition must be used inside RouteTransitionProvider"
    );
  }

  return context;
};

export const RouteTransitionProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const router = useRouter();
  const path = usePathname();
  const [isRouting, setIsRouting] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

  const clearTimers = () => {
    timers.current.forEach((timer) => clearTimeout(timer));
    timers.current = [];
  };

  const navigateWithTransition = (href: string) => {
    if (href === path) return;

    clearTimers();
    setIsRouting(true);

    timers.current.push(
      setTimeout(() => {
        router.push(href);
      }, 150)
    );

    timers.current.push(
      setTimeout(() => {
        setIsRouting(false);
      }, 1150)
    );
  };

  return (
    <RouteTransitionContext.Provider value={{ navigateWithTransition }}>
      {isRouting && <Transition />}
      {children}
    </RouteTransitionContext.Provider>
  );
};
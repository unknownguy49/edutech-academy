"use client";

import { useEffect, useState } from "react";
import { GraduationCap } from "lucide-react";

interface AnimatedLoaderProps {
  onComplete: () => void;
}

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
}

export function AnimatedLoader({ onComplete }: AnimatedLoaderProps) {
  const [stage, setStage] = useState(0);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Generate particles only on client side to avoid hydration mismatch
    const generatedParticles: Particle[] = Array.from({ length: 20 }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${2 + Math.random() * 2}s`,
    }));
    setParticles(generatedParticles);
  }, []);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2500);
    const timer4 = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary/20 via-background to-secondary/20">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.animationDelay,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      {/* Main loader content */}
      <div className="relative z-10 text-center space-y-8">
        {/* Logo Animation */}
        <div className="relative">
          <div
            className={`transition-all duration-1000 ${
              stage >= 1 ? "scale-100 opacity-100" : "scale-50 opacity-0"
            }`}
          >
            <div className="relative mx-auto w-24 h-24 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full animate-spin-slow opacity-20" />
              <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
                <GraduationCap className="h-12 w-12 text-primary" />
              </div>
              {/* Pulsing rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" />
              <div className="absolute inset-4 rounded-full border border-secondary/30 animate-ping animation-delay-300" />
            </div>
          </div>
        </div>

        {/* Text Animation */}
        <div className="space-y-4">
          <div
            className={`transition-all duration-1000 delay-500 ${
              stage >= 2
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-primary via-primary/80 to-secondary bg-clip-text text-transparent">
                EduTech
              </span>
            </h1>
          </div>

          <div
            className={`transition-all duration-1000 delay-700 ${
              stage >= 2
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">
              Academy
            </h2>
          </div>

          <div
            className={`transition-all duration-1000 delay-1000 ${
              stage >= 2
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <p className="text-lg text-muted-foreground">
              Unlock Your Potential
            </p>
          </div>
        </div>

        {/* Loading bar */}
        <div
          className={`transition-all duration-500 delay-1200 ${
            stage >= 2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="w-64 h-1 bg-muted rounded-full mx-auto overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000 ${
                stage >= 3 ? "w-full" : "w-0"
              }`}
            />
          </div>
        </div>
      </div>

      {/* Exit animation overlay */}
      <div
        className={`absolute inset-0 bg-background transition-all duration-700 ${
          stage >= 3 ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />
    </div>
  );
}

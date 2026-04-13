"use client";
import { useState, useEffect, useRef, useCallback } from 'react';
import { LiquidMetal, liquidMetalPresets } from '@paper-design/shaders-react';
import { Button } from '@/components/ui/button';

/* ─── helpers ─── */
function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

/* ─── config ─── */
const IDLE_TIMEOUT = 5000;
const LERP_SPEED = 0.025;
const AUTO_FLOW_SPEED = 0.00015;

const ANGLE_MIN = 30;
const ANGLE_MAX = 150;
const ORIGIN_MIN = 0.3;
const ORIGIN_MAX = 0.7;
const DISTORTION_MIN = 0.15;
const DISTORTION_MAX = 0.4;
const CONTOUR_MIN = 0.15;
const CONTOUR_MAX = 0.35;

function useInteractiveLiquidMetal() {
  const current = useRef({
    angle: 70, originX: 0.5, originY: 0.5, distortion: 0.07, contour: 0.2,
  });
  const target = useRef({ ...current.current });
  const mouseNorm = useRef({ x: 0.5, y: 0.5 });
  const isIdle = useRef(true);
  const idleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafId = useRef<number>(0);
  const [params, setParams] = useState({ ...current.current });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseNorm.current = { x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight };
    isIdle.current = false;
    if (idleTimer.current) clearTimeout(idleTimer.current);
    idleTimer.current = setTimeout(() => { isIdle.current = true; }, IDLE_TIMEOUT);
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    const animate = () => {
      const now = Date.now();
      if (isIdle.current) {
        const t = now * AUTO_FLOW_SPEED;
        target.current.angle = lerp(ANGLE_MIN, ANGLE_MAX, (Math.sin(t) + 1) / 2);
        target.current.originX = lerp(ORIGIN_MIN, ORIGIN_MAX, (Math.sin(t * 0.7 + 1.2) + 1) / 2);
        target.current.originY = lerp(ORIGIN_MIN, ORIGIN_MAX, (Math.cos(t * 0.6 + 0.8) + 1) / 2);
        target.current.distortion = lerp(DISTORTION_MIN, DISTORTION_MAX, (Math.sin(t * 0.5 + 2.5) + 1) / 2);
        target.current.contour = lerp(CONTOUR_MIN, CONTOUR_MAX, (Math.cos(t * 0.4 + 1.0) + 1) / 2);
      } else {
        const mx = mouseNorm.current.x;
        const my = mouseNorm.current.y;
        target.current.angle = lerp(ANGLE_MIN, ANGLE_MAX, mx);
        target.current.originX = lerp(ORIGIN_MIN, ORIGIN_MAX, mx);
        target.current.originY = lerp(ORIGIN_MIN, ORIGIN_MAX, my);
        target.current.distortion = lerp(DISTORTION_MIN, DISTORTION_MAX, 1 - Math.abs(mx - 0.5) * 2);
        target.current.contour = lerp(CONTOUR_MIN, CONTOUR_MAX, 1 - Math.abs(my - 0.5) * 2);
      }
      current.current.angle = lerp(current.current.angle, target.current.angle, LERP_SPEED);
      current.current.originX = lerp(current.current.originX, target.current.originX, LERP_SPEED);
      current.current.originY = lerp(current.current.originY, target.current.originY, LERP_SPEED);
      current.current.distortion = lerp(current.current.distortion, target.current.distortion, LERP_SPEED);
      current.current.contour = lerp(current.current.contour, target.current.contour, LERP_SPEED);
      setParams({ ...current.current });
      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId.current);
      if (idleTimer.current) clearTimeout(idleTimer.current);
    };
  }, [handleMouseMove]);

  return params;
}

interface LiquidMetalHeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  onPrimaryCtaClick: () => void;
  onSecondaryCtaClick?: () => void;
  features?: string[];
}

export default function LiquidMetalHero({
  badge,
  title,
  subtitle,
  primaryCtaLabel,
  secondaryCtaLabel,
  secondaryCtaHref,
  onPrimaryCtaClick,
  onSecondaryCtaClick,
}: LiquidMetalHeroProps) {
  const shaderParams = useInteractiveLiquidMetal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center"
      style={{ minHeight: '100vh', background: '#0a0a0a', overflow: 'visible' }}
    >
      {/* CSS-based entrance animation */}
      <style>{`
        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroScaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .hero-animate-1 { animation: heroFadeIn 0.8s ease-out 0.2s both; }
        .hero-animate-2 { animation: heroFadeIn 0.8s ease-out 0.35s both; }
        .hero-animate-3 { animation: heroFadeIn 0.8s ease-out 0.5s both; }
        .hero-animate-4 { animation: heroFadeIn 0.8s ease-out 0.65s both; }
        .hero-animate-5 { animation: heroScaleIn 0.8s ease-out 0.8s both; }
      `}</style>

      {/* LiquidMetal shader — absolute positioned, fills the hero section */}
      {mounted && (
        <div
          style={{
            position: 'absolute',
            top: '-220px',
            left: '-500px',
            right: '-500px',
            bottom: '-220px',
            zIndex: 0,
            overflow: 'hidden',
          }}
        >
          <LiquidMetal
            {...liquidMetalPresets[1]}
            colorBack="#0a0a0a"
            shape="metaballs"
            scale={0.7}
            speed={1.2}
            contour={shaderParams.contour}
            angle={shaderParams.angle}
            originX={shaderParams.originX}
            originY={shaderParams.originY}
            distortion={shaderParams.distortion}
            style={{
              width: '100%',
              height: '100%',
              display: 'block',
              border: 'none',
              outline: 'none',
            }}
          />
        </div>
      )}

      {/* Hero content — on top of the shader */}
      <div className="max-w-[1440px] mx-auto px-10" style={{ position: 'relative', zIndex: 1 }}>
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <h1
              role="heading"
              aria-level={1}
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-tight hero-animate-2"
              style={{ color: '#ededed' }}
            >
              {title.split("\n").map((line, i, arr) => (
                <span key={i}>
                  {line}
                  {i < arr.length - 1 && <br />}
                </span>
              ))}
            </h1>

            <p
              className="max-w-3xl mx-auto text-xl sm:text-2xl leading-relaxed hero-animate-3"
              style={{ color: 'rgba(237, 237, 237, 0.9)' }}
            >
              {subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center hero-animate-5">
            <div className="w-full sm:w-auto">
              <Button
                onClick={onPrimaryCtaClick}
                size="lg"
                className="w-full sm:w-auto transition-all duration-300 shadow-2xl text-lg px-8 py-6 font-semibold"
                style={{ backgroundColor: '#ededed', color: '#0a0a0a' }}
              >
                {primaryCtaLabel}
              </Button>
            </div>

            {secondaryCtaLabel && (secondaryCtaHref || onSecondaryCtaClick) && (
              <div className="w-full sm:w-auto">
                {secondaryCtaHref ? (
                  <a href={secondaryCtaHref}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="w-full sm:w-auto transition-all duration-300 backdrop-blur-sm text-lg px-8 py-6 font-semibold"
                      style={{
                        borderColor: 'rgba(237, 237, 237, 0.3)',
                        color: '#ededed',
                        backgroundColor: 'transparent',
                      }}
                    >
                      {secondaryCtaLabel}
                    </Button>
                  </a>
                ) : (
                  <Button
                    onClick={onSecondaryCtaClick}
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto transition-all duration-300 backdrop-blur-sm text-lg px-8 py-6 font-semibold"
                    style={{
                      borderColor: 'rgba(237, 237, 237, 0.3)',
                      color: '#ededed',
                      backgroundColor: 'transparent',
                    }}
                  >
                    {secondaryCtaLabel}
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

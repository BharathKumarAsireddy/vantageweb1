"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import type { ServiceData, ServiceSection } from "@/lib/services-data";

/* ─── Video background helper ──────────────────────────────────────────────── */
function VideoBg({
  url,
  fallback,
  opacity = 35,
  overlayOpacity = 0.45,
  rotate = 0,
  shift = 0,
}: {
  url: string;
  fallback: string;
  opacity?: number;
  overlayOpacity?: number;
  rotate?: number;
  shift?: number;
}) {
  const needsRotate = rotate !== 0;
  return (
    <div className="absolute inset-0 overflow-hidden" style={{ background: fallback }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        className={needsRotate ? "absolute" : "absolute inset-0 w-full h-full object-cover"}
        style={{
          opacity: opacity / 100,
          ...(needsRotate && {
            top: "50%",
            left: "50%",
            width: "100vh",
            height: "100vw",
            minWidth: "100%",
            minHeight: "100%",
            objectFit: "cover",
            transform: `translate(-50%, -50%) rotate(${rotate}deg) translateY(${shift}%)`,
          }),
        }}
      >
        <source src={url} type={url.endsWith(".mov") ? "video/quicktime" : "video/mp4"} />
        {url.endsWith(".mov") && <source src={url} type="video/mp4" />}
      </video>
      <div className="absolute inset-0" style={{ background: `rgba(0,0,0,${overlayOpacity})` }} />
    </div>
  );
}

/* ─── Fade-in wrapper ───────────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Section label / heading helpers ──────────────────────────────────────── */
function SectionLabel({ text, accent }: { text: string; accent: string }) {
  return (
    <span
      className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase"
      style={{ color: accent }}
    >
      {text}
    </span>
  );
}

function GradientHeading({
  children,
  accent,
  accentSecondary,
}: {
  children: React.ReactNode;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <h2
      className="text-3xl sm:text-4xl lg:text-5xl font-black mb-5"
      style={{
        background: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 50%, ${accent} 100%)`,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </h2>
  );
}

/* ─── Overview section ──────────────────────────────────────────────────────── */
function OverviewSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <VideoBg
        url={section.videoUrl}
        fallback="linear-gradient(135deg, #1a1a1a 0%, #0f1a0f 100%)"
        opacity={60}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <SectionLabel text="Overview" accent={accent} />
            <GradientHeading accent={accent} accentSecondary={accentSecondary}>
              {section.title}
            </GradientHeading>
            <p className="text-sm font-semibold mb-6" style={{ color: accentSecondary }}>
              {section.subtitle}
            </p>
            {section.description.split("\n\n").map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed mb-4"
                style={{ color: "#9ca3af" }}
              >
                {para}
              </p>
            ))}
          </FadeIn>
          {section.image && (
            <FadeIn delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[420px]">
                <Image
                  src={section.image}
                  alt={section.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: `linear-gradient(135deg, ${accent}18 0%, transparent 60%)`,
                  }}
                />
                {/* Gold corner accent */}
                <div
                  className="absolute top-0 left-0 w-16 h-1 rounded-br"
                  style={{ background: accent }}
                />
                <div
                  className="absolute top-0 left-0 w-1 h-16 rounded-br"
                  style={{ background: accent }}
                />
              </div>
            </FadeIn>
          )}
        </div>
      </div>
    </section>
  );
}

/* ─── Features section ──────────────────────────────────────────────────────── */
function FeaturesSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <VideoBg
        url={section.videoUrl}
        fallback="linear-gradient(135deg, #0a0a0d 0%, #1a1a1a 100%)"
        opacity={60}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <SectionLabel text={section.subtitle} accent={accent} />
          <GradientHeading accent={accent} accentSecondary={accentSecondary}>
            {section.title}
          </GradientHeading>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "#9ca3af" }}>
            {section.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {section.features?.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div
                className="group relative rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.02]"
                style={{
                  borderColor: `${accent}22`,
                  background: "rgba(255,255,255,0.02)",
                }}
              >
                {/* Feature image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(to bottom, transparent 40%, rgba(9,9,11,0.95) 100%)`,
                    }}
                  />
                  {/* Accent strip */}
                  <div
                    className="absolute bottom-0 left-0 h-0.5 w-full"
                    style={{
                      background: `linear-gradient(to right, ${accent}, transparent)`,
                    }}
                  />
                </div>
                {/* Text content */}
                <div className="p-6">
                  <div className="flex items-start gap-3 mb-3">
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0"
                      style={{ color: accent }}
                    />
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed pl-7" style={{ color: "#6b7280" }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Process section ───────────────────────────────────────────────────────── */
function ProcessSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <VideoBg
        url={section.videoUrl}
        fallback="linear-gradient(135deg, #1a1a1a 0%, #0d0d10 100%)"
        opacity={60}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <SectionLabel text={section.subtitle} accent={accent} />
          <GradientHeading accent={accent} accentSecondary={accentSecondary}>
            {section.title}
          </GradientHeading>
          <p className="max-w-2xl mx-auto text-base" style={{ color: "#9ca3af" }}>
            {section.description}
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.processSteps?.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.12}>
              <div
                className="relative rounded-2xl p-6 border h-full"
                style={{
                  background: "rgba(255,255,255,0.025)",
                  borderColor: `${accent}1a`,
                }}
              >
                {/* Step number */}
                <div
                  className="text-5xl font-black mb-4 leading-none"
                  style={{
                    background: `linear-gradient(135deg, ${accent}60, ${accent}20)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {step.step}
                </div>
                {/* Connector line (not on last) */}
                {i < (section.processSteps?.length ?? 0) - 1 && (
                  <div
                    className="hidden lg:block absolute top-[52px] right-0 w-6 h-px translate-x-full"
                    style={{ background: `linear-gradient(to right, ${accent}40, transparent)` }}
                  />
                )}
                <h3 className="text-base font-bold text-white mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Podcast section ───────────────────────────────────────────────────────── */
function PodcastSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <VideoBg
        url={section.videoUrl}
        fallback="linear-gradient(135deg, #1a1a1a 0%, #0d0d08 100%)"
        opacity={60}
      />
      {/* Warm radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at 50% 30%, ${accent}0c 0%, transparent 65%)`,
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-14">
          <SectionLabel text={section.subtitle} accent={accent} />
          <GradientHeading accent={accent} accentSecondary={accentSecondary}>
            {section.title}
          </GradientHeading>
          {section.description.split("\n\n").map((para, i) => (
            <p
              key={i}
              className="max-w-2xl mx-auto text-base leading-relaxed mb-3"
              style={{ color: "#9ca3af" }}
            >
              {para}
            </p>
          ))}
        </FadeIn>

        {/* Featured podcast video player */}
        {section.featuredVideoUrl && (
          <FadeIn delay={0.15}>
            <div className="relative max-w-4xl mx-auto">
              {/* Glow frame */}
              <div
                className="absolute -inset-px rounded-2xl"
                style={{
                  background: `linear-gradient(135deg, ${accent}60, ${accentSecondary}30, transparent)`,
                }}
              />
              <div
                className="relative rounded-2xl overflow-hidden border"
                style={{ borderColor: `${accent}30` }}
              >
                {/* Top bar — podcast branding strip */}
                <div
                  className="flex items-center gap-3 px-5 py-3 border-b"
                  style={{
                    background: "rgba(9,9,11,0.9)",
                    borderColor: `${accent}20`,
                  }}
                >
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
                    <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
                  </div>
                  <span
                    className="text-xs font-bold tracking-[0.2em] uppercase ml-2"
                    style={{ color: `${accent}cc` }}
                  >
                    Vantage Podcast — Now Playing
                  </span>
                </div>

                {/* Video */}
                <video
                  controls
                  playsInline
                  className="w-full aspect-video bg-black"
                  poster="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=1280&q=80"
                >
                  <source src={section.featuredVideoUrl} type="video/mp4" />
                </video>

                {/* Bottom meta bar */}
                <div
                  className="flex items-center justify-between px-5 py-3 border-t"
                  style={{
                    background: "rgba(9,9,11,0.9)",
                    borderColor: `${accent}20`,
                  }}
                >
                  <div>
                    <p className="text-sm font-bold text-white">
                      Shaping the Future of Media
                    </p>
                    <p className="text-xs" style={{ color: "#6b7280" }}>
                      Episode 01 · The Vantage Podcast
                    </p>
                  </div>
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{
                      color: accent,
                      borderColor: `${accent}40`,
                      background: `${accent}10`,
                    }}
                  >
                    New Episode
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>
        )}
      </div>
    </section>
  );
}

/* ─── Results section ───────────────────────────────────────────────────────── */
function ResultsSection({
  section,
  accent,
  accentSecondary,
}: {
  section: ServiceSection;
  accent: string;
  accentSecondary: string;
}) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <VideoBg
        url={section.videoUrl}
        fallback="linear-gradient(135deg, #1a1a1a 0%, #111 100%)"
        opacity={60}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <FadeIn>
            <SectionLabel text="Results" accent={accent} />
            <GradientHeading accent={accent} accentSecondary={accentSecondary}>
              {section.title}
            </GradientHeading>
            <p className="text-sm font-semibold mb-6" style={{ color: accentSecondary }}>
              {section.subtitle}
            </p>
            <p className="text-base leading-relaxed" style={{ color: "#9ca3af" }}>
              {section.description}
            </p>
          </FadeIn>

          <div className="grid grid-cols-2 gap-4">
            {section.stats?.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div
                  className="rounded-2xl p-6 border text-center"
                  style={{
                    background: `linear-gradient(135deg, ${accent}0a 0%, rgba(9,9,11,0.8) 100%)`,
                    borderColor: `${accent}25`,
                  }}
                >
                  <div
                    className="text-4xl font-black mb-2"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, ${accentSecondary})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold tracking-wide uppercase" style={{ color: "#6b7280" }}>
                    {stat.label}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── CTA section ───────────────────────────────────────────────────────────── */
function CTASection({
  accent,
  accentSecondary,
  heroVideo,
}: {
  accent: string;
  accentSecondary: string;
  heroVideo: string;
}) {
  return (
    <section className="relative py-28 overflow-hidden">
      <VideoBg
        url={heroVideo}
        fallback="linear-gradient(135deg, #1a1a1a 0%, #0d0d0f 100%)"
        opacity={60}
      />
      {/* Gold radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at center, ${accent}08 0%, transparent 70%)`,
        }}
      />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <FadeIn>
          <SectionLabel text="Get Started" accent={accent} />
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-5">
            Ready to Elevate Your{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accentSecondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Brand?
            </span>
          </h2>
          <p className="text-lg mb-10" style={{ color: "#9ca3af" }}>
            Let&apos;s build something remarkable together. Schedule a free consultation with our
            team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-full font-bold text-black transition-all duration-200"
                style={{
                  background: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 100%)`,
                  boxShadow: `0 4px 24px ${accent}35`,
                }}
              >
                Schedule Free Consultation
              </motion.button>
            </Link>
            <Link href="/#services">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 rounded-full font-bold text-white border transition-all duration-200"
                style={{ borderColor: `${accent}50` }}
              >
                View All Services
              </motion.button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ─── Main export ───────────────────────────────────────────────────────────── */
export default function ServicePageContent({ service }: { service: ServiceData }) {
  const { accent, accentSecondary } = service;

  return (
    <div className="bg-[#1a1a1a] min-h-screen">
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <VideoBg
          url={service.heroVideo}
          fallback="#ffffff"
          opacity={100}
          overlayOpacity={0.22}
          rotate={service.heroVideo.endsWith(".mov") ? -90 : 0}
          shift={service.heroVideo.endsWith(".mov") ? 30 : 0}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at 50% 60%, ${accent}10 0%, transparent 65%)`,
          }}
        />

        {/* Top border line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background: `linear-gradient(to right, transparent, ${accent}60, transparent)`,
          }}
        />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          {/* Back link */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200 hover:opacity-100"
              style={{ color: `${accent}99` }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = accent)}
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = `${accent}99`)
              }
            >
              <ArrowLeft size={16} />
              Back to Services
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-block mb-5 text-xs font-bold tracking-[0.35em] uppercase"
              style={{ color: accent }}
            >
              Vantage Media Consulting
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-6"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.85)" }}
            >
              {service.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
              className="text-xl font-semibold mb-5"
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accentSecondary})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {service.tagline}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
              className="text-lg max-w-2xl mb-10"
              style={{ color: "#9ca3af" }}
            >
              {service.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-7 py-3.5 rounded-full font-bold text-black"
                  style={{
                    background: `linear-gradient(135deg, ${accent} 0%, ${accentSecondary} 100%)`,
                    boxShadow: `0 4px 24px ${accent}35`,
                  }}
                >
                  Get Started
                </motion.button>
              </Link>
              <motion.a
                href="#overview"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-7 py-3.5 rounded-full font-bold text-white border inline-flex items-center gap-2"
                style={{ borderColor: `${accent}45` }}
              >
                Explore Service <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs tracking-[0.2em] uppercase" style={{ color: `${accent}70` }}>
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-px h-8"
            style={{ background: `linear-gradient(to bottom, ${accent}80, transparent)` }}
          />
        </motion.div>
      </section>

      {/* ── Dynamic sections ── */}
      <div id="overview">
        {service.sections.map((section) => {
          if (section.type === "overview")
            return (
              <OverviewSection
                key={section.type}
                section={section}
                accent={accent}
                accentSecondary={accentSecondary}
              />
            );
          if (section.type === "features")
            return (
              <FeaturesSection
                key={section.type}
                section={section}
                accent={accent}
                accentSecondary={accentSecondary}
              />
            );
          if (section.type === "process")
            return (
              <ProcessSection
                key={section.type}
                section={section}
                accent={accent}
                accentSecondary={accentSecondary}
              />
            );
          if (section.type === "results")
            return (
              <ResultsSection
                key={section.type}
                section={section}
                accent={accent}
                accentSecondary={accentSecondary}
              />
            );
          if (section.type === "podcast")
            return (
              <PodcastSection
                key={section.type}
                section={section}
                accent={accent}
                accentSecondary={accentSecondary}
              />
            );
          return null;
        })}
      </div>

      {/* ── CTA ── */}
      <CTASection
        accent={accent}
        accentSecondary={accentSecondary}
        heroVideo={service.heroVideo}
      />
    </div>
  );
}

"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Database, RefreshCw, Plug, GraduationCap, BarChart3, Settings, ArrowRight, Mic } from "lucide-react";
import Link from "next/link";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { FloatingPaths } from "@/components/ui/background-paths";

const services = [
  { icon: Database, title: "CRM Implementation", slug: "crm-implementation", description: "End-to-end CRM setup and configuration tailored to your business workflows, ensuring a smooth launch from day one.", accent: "#C9A84C" },
  { icon: RefreshCw, title: "CRM Data Migration", slug: "crm-data-migration", description: "Secure, accurate migration of your existing data into your CRM with full validation, deduplication, and integrity checks.", accent: "#1A6B3C" },
  { icon: Plug, title: "CRM Integration & Automation", slug: "crm-integration", description: "Connect your CRM with third-party tools — ERP, email, marketing platforms — and automate repetitive tasks to boost efficiency.", accent: "#C9A84C" },
  { icon: GraduationCap, title: "CRM Training & Support", slug: "crm-training", description: "Hands-on training programs and ongoing support to empower your team to get the most out of your CRM investment.", accent: "#1A6B3C" },
  { icon: BarChart3, title: "CRM Analytics & Reporting", slug: "crm-analytics", description: "Custom dashboards and reports that surface real-time insights from your CRM data to drive smarter business decisions.", accent: "#C9A84C" },
  { icon: Settings, title: "CRM Customization", slug: "crm-customization", description: "Tailor your CRM with custom fields, modules, workflows, and UI adjustments to perfectly fit your unique business processes.", accent: "#1A6B3C" },
  { icon: RefreshCw, title: "CRM Maintenance", slug: "crm-maintenance", description: "Ongoing monitoring, health checks, performance tuning, and proactive fixes to keep your CRM running at peak efficiency 24/7.", accent: "#C9A84C" },
  { icon: Mic, title: "Podcast Studio", slug: "podcasting", description: "A fully equipped, acoustically treated podcast studio available for rent — professional lighting, velvet lounge seating, and broadcast-quality infrastructure for creators and brands.", accent: "#8B5CF6" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="relative py-24 lg:py-32 overflow-hidden">
      <FloatingPaths position={1} color="rgba(201,168,76" />
      <FloatingPaths position={-1} color="rgba(26,107,60" />

      {/* Section divider */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20"
        style={{ background: "linear-gradient(to bottom, transparent, #C9A84C, transparent)" }} />

      {/* Subtle green tint */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(26,107,60,0.04) 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block mb-4 text-xs font-bold tracking-[0.3em] uppercase"
            style={{ color: "#C9A84C" }}
          >
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-5">
            Our{" "}
            <span style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #e8d070 50%, #C9A84C 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>
              Services
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg" style={{ color: "#9ca3af" }}>
            Comprehensive CRM maintenance solutions designed to keep your systems
            running efficiently and your teams performing at their best.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.ul
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc) => {
            const Icon = svc.icon;
            return (
              <motion.li
                key={svc.title}
                variants={cardVariants}
                className="min-h-[14rem] list-none"
              >
                <Link
                  href={`/services/${svc.slug}`}
                  target={svc.slug === "brand-analytics" || svc.slug === "media-production" ? "_blank" : undefined}
                  rel={svc.slug === "brand-analytics" || svc.slug === "media-production" ? "noopener noreferrer" : undefined}
                  className="block h-full group"
                >
                  <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3 transition-transform duration-300 group-hover:scale-[1.02]"
                    style={{ borderColor: `${svc.accent}20` }}
                  >
                    <GlowingEffect
                      spread={40}
                      glow={true}
                      disabled={false}
                      proximity={64}
                      inactiveZone={0.01}
                      borderWidth={3}
                    />
                    <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] p-6 shadow-sm md:p-6"
                      style={{
                        background: "rgba(255,255,255,0.02)",
                        borderColor: `${svc.accent}18`,
                      }}
                    >
                      <div className="relative flex flex-1 flex-col justify-between gap-3">
                        {/* Icon */}
                        <div
                          className="w-fit rounded-lg border-[0.75px] p-2"
                          style={{
                            background: `${svc.accent}14`,
                            borderColor: `${svc.accent}28`,
                          }}
                        >
                          <Icon size={18} style={{ color: svc.accent }} />
                        </div>

                        <div className="space-y-3">
                          <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-white">
                            {svc.title}
                          </h3>
                          <p className="font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem]"
                            style={{ color: "#6b7280" }}
                          >
                            {svc.description}
                          </p>
                        </div>
                      </div>

                      {/* Learn more indicator */}
                      <div className="flex items-center gap-1.5 text-xs font-semibold"
                        style={{ color: svc.accent }}
                      >
                        Learn More
                        <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

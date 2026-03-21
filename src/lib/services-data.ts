export interface ServiceFeatureItem {
  title: string;
  description: string;
  image: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
}

export interface ServiceSection {
  type: "overview" | "features" | "process" | "results" | "podcast";
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
  featuredVideoUrl?: string;
  image?: string;
  features?: ServiceFeatureItem[];
  processSteps?: ProcessStep[];
  stats?: ServiceStat[];
}

export interface ServiceData {
  slug: string;
  title: string;
  tagline: string;
  heroDescription: string;
  accent: string;
  accentSecondary: string;
  heroVideo: string;
  sections: ServiceSection[];
}

const pv = (id: number, fps = 30) =>
  `https://videos.pexels.com/video-files/${id}/${id}-hd_1920_1080_${fps}fps.mp4`;

export const servicesData: ServiceData[] = [
  {
    slug: "media-strategy",
    title: "Media Strategy",
    tagline: "Data-Driven. Results-Focused. Audience-Centered.",
    heroDescription:
      "We craft comprehensive media strategies that maximise reach, engagement, and ROI across all channels — traditional and digital.",
    accent: "#C9A84C",
    accentSecondary: "#e8d070",
    heroVideo: pv(3195394),
    sections: [
      {
        type: "overview",
        title: "Strategic Media Planning That Delivers",
        subtitle: "Built on Data. Powered by Insight.",
        description:
          "Our media strategy service begins with deep audience research and market analysis. We identify your target demographics, understand their media consumption habits, and craft tailored strategies that put your brand in front of the right people at precisely the right moment.\n\nFrom traditional broadcast to cutting-edge digital platforms, we build integrated media plans that create consistent brand experiences across every touchpoint — driving awareness, consideration, and conversion at every stage of the funnel.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=80",
        videoUrl: pv(3044943),
      },
      {
        type: "features",
        title: "What We Offer",
        subtitle: "Comprehensive Media Strategy Services",
        description:
          "From audience insights to campaign execution, we cover every dimension of your media strategy.",
        videoUrl: pv(2795405),
        features: [
          {
            title: "Audience Research & Segmentation",
            description:
              "Deep behavioural analysis to identify and segment your ideal audiences, ensuring every media dollar reaches the people most likely to convert.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          },
          {
            title: "Channel Mix Optimisation",
            description:
              "We identify the optimal blend of media channels — TV, radio, digital, OOH, and social — to achieve maximum reach and frequency for your budget.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
          },
          {
            title: "Budget Allocation & Planning",
            description:
              "Precision budget allocation based on historical performance data, market trends, and competitive analysis to maximise your media investment ROI.",
            image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=600&q=80",
          },
          {
            title: "Performance Measurement",
            description:
              "Comprehensive KPI frameworks and real-time dashboards to track campaign performance and make data-driven optimisations on the fly.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
          },
        ],
      },
      {
        type: "process",
        title: "Our Strategic Process",
        subtitle: "A Proven Framework for Media Success",
        description:
          "Our four-phase process ensures every media strategy is grounded in data, aligned with your goals, and built for measurable success.",
        videoUrl: pv(3209828, 25),
        processSteps: [
          {
            step: "01",
            title: "Discovery & Audit",
            description:
              "We audit your existing media presence, analyse competitors, and identify gaps and opportunities in your current strategy.",
          },
          {
            step: "02",
            title: "Strategy Development",
            description:
              "Our strategists craft a tailored media plan with clear objectives, channel recommendations, and budget frameworks.",
          },
          {
            step: "03",
            title: "Campaign Activation",
            description:
              "We execute across selected channels, managing placements, negotiations, and creative delivery with precision.",
          },
          {
            step: "04",
            title: "Optimisation & Reporting",
            description:
              "Continuous performance monitoring with regular reporting and data-driven optimisations to improve results over time.",
          },
        ],
      },
      {
        type: "results",
        title: "Proven Results",
        subtitle: "Numbers That Speak for Themselves",
        description:
          "Our media strategies have delivered exceptional outcomes for clients across industries, consistently outperforming benchmarks and driving sustainable growth.",
        videoUrl: pv(3255438, 24),
        stats: [
          { value: "340%", label: "Average ROI Increase" },
          { value: "12M+", label: "Audience Reach" },
          { value: "280%", label: "Brand Recognition Growth" },
          { value: "98%", label: "Client Retention Rate" },
        ],
      },
    ],
  },

  {
    slug: "brand-analytics",
    title: "Brand Analytics",
    tagline: "Insight. Intelligence. Impact.",
    heroDescription:
      "Deep-dive performance analysis with actionable insights to track brand health and optimise campaigns in real-time.",
    accent: "#1A6B3C",
    accentSecondary: "#25A047",
    heroVideo: pv(3209828, 25),
    sections: [
      {
        type: "overview",
        title: "Transform Data Into Competitive Advantage",
        subtitle: "From Raw Data to Strategic Intelligence.",
        description:
          "In today's data-rich environment, the brands that win are those that extract meaningful insights from complex datasets. Our brand analytics service delivers the intelligence you need to make confident decisions, optimise your media spend, and stay ahead of market shifts.\n\nWe go beyond vanity metrics to deliver insights that directly connect to business outcomes — revenue, market share, customer lifetime value, and brand equity.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
        videoUrl: pv(3044943),
      },
      {
        type: "features",
        title: "Analytics Capabilities",
        subtitle: "Full-Spectrum Brand Intelligence",
        description:
          "We deliver comprehensive analytics solutions that give you a 360-degree view of your brand performance.",
        videoUrl: pv(2795405),
        features: [
          {
            title: "Brand Health Tracking",
            description:
              "Continuous monitoring of brand awareness, consideration, preference, and advocacy metrics to give you a real-time pulse on brand health.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          },
          {
            title: "Campaign Performance Analytics",
            description:
              "Granular campaign measurement across all channels with attribution modelling to understand exactly which activities drive results.",
            image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80",
          },
          {
            title: "Competitive Intelligence",
            description:
              "Real-time tracking of competitor activity, share of voice, and market positioning to identify threats and opportunities.",
            image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80",
          },
          {
            title: "Predictive Analytics & Forecasting",
            description:
              "Advanced modelling to forecast future performance, identify emerging trends, and simulate campaign scenarios before launch.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
          },
        ],
      },
      {
        type: "process",
        title: "Our Analytics Process",
        subtitle: "Structured Insight Generation",
        description:
          "Our analytics methodology transforms complex data into clear, actionable strategies.",
        videoUrl: pv(3195394),
        processSteps: [
          {
            step: "01",
            title: "Data Integration",
            description:
              "We connect all your data sources — CRM, media platforms, social, web analytics — into a unified analytics environment.",
          },
          {
            step: "02",
            title: "Insight Mining",
            description:
              "Our analysts apply advanced statistical methods and machine learning to surface patterns and insights hidden in your data.",
          },
          {
            step: "03",
            title: "Dashboard & Reporting",
            description:
              "We build custom dashboards and reporting frameworks that give your team real-time access to the metrics that matter most.",
          },
          {
            step: "04",
            title: "Strategic Recommendations",
            description:
              "Regular insight briefings that translate data into clear, prioritised actions to improve brand and campaign performance.",
          },
        ],
      },
      {
        type: "results",
        title: "Analytics That Drive Growth",
        subtitle: "Real Impact, Measured Results",
        description:
          "Our analytics services have helped brands dramatically improve their performance, optimise media investment, and build sustainable competitive advantages.",
        videoUrl: pv(3044943),
        stats: [
          { value: "65%", label: "Improvement in Campaign ROI" },
          { value: "3.2x", label: "Increase in Marketing Efficiency" },
          { value: "50M+", label: "Data Points Analysed Monthly" },
          { value: "200+", label: "Brands Empowered" },
        ],
      },
    ],
  },

  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Connect. Convert. Grow.",
    heroDescription:
      "Omnichannel digital campaigns that connect with your audience through SEO, paid media, social, and content marketing.",
    accent: "#C9A84C",
    accentSecondary: "#e8d070",
    heroVideo: pv(2795405),
    sections: [
      {
        type: "overview",
        title: "Digital Marketing That Moves the Needle",
        subtitle: "Precision Targeting. Measurable Growth.",
        description:
          "The digital landscape is more competitive than ever. Standing out requires more than just presence — it demands a cohesive, data-driven approach that connects your brand with the right audience at every stage of their journey.\n\nOur digital marketing team combines strategic thinking with technical expertise to build integrated campaigns that drive awareness, generate qualified leads, and convert prospects into loyal brand advocates.",
        image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
        videoUrl: pv(1093662),
      },
      {
        type: "features",
        title: "Our Digital Services",
        subtitle: "Full-Funnel Digital Marketing",
        description:
          "We deliver comprehensive digital marketing solutions across every channel and every stage of the customer journey.",
        videoUrl: pv(3209828, 25),
        features: [
          {
            title: "SEO & Content Marketing",
            description:
              "Dominate search results with technical SEO excellence and compelling content that attracts, engages, and converts your target audience organically.",
            image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
          },
          {
            title: "Paid Media & PPC",
            description:
              "Precision-targeted paid advertising across Google, Meta, LinkedIn, and programmatic networks with continuous optimisation for maximum ROAS.",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
          },
          {
            title: "Social Media Marketing",
            description:
              "Build engaged communities and drive brand affinity through strategic social media management, content creation, and influencer partnerships.",
            image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
          },
          {
            title: "Email & Marketing Automation",
            description:
              "Convert leads to loyal customers with personalised email journeys and sophisticated marketing automation workflows that nurture at scale.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
          },
        ],
      },
      {
        type: "process",
        title: "Our Digital Approach",
        subtitle: "Strategy First, Always",
        description:
          "We follow a proven process that ensures every digital marketing initiative is strategically sound and optimised for performance.",
        videoUrl: pv(3255438, 24),
        processSteps: [
          {
            step: "01",
            title: "Audit & Opportunity Analysis",
            description:
              "Comprehensive audit of your digital presence, competitor landscape, and market opportunities to establish your digital baseline.",
          },
          {
            step: "02",
            title: "Strategy & Channel Planning",
            description:
              "We develop a tailored digital strategy with clear KPIs, channel recommendations, and budget allocation frameworks.",
          },
          {
            step: "03",
            title: "Campaign Build & Launch",
            description:
              "Our team builds, configures, and launches all campaign elements — creative, targeting, tracking — with precision.",
          },
          {
            step: "04",
            title: "Optimise, Scale & Report",
            description:
              "Continuous A/B testing, bid optimisation, and creative refresh cycles to consistently improve performance and scale results.",
          },
        ],
      },
      {
        type: "results",
        title: "Digital Excellence, Proven Results",
        subtitle: "Performance That Speaks for Itself",
        description:
          "Our digital marketing campaigns consistently outperform industry benchmarks, delivering superior ROI and sustainable growth.",
        videoUrl: pv(3044943),
        stats: [
          { value: "5.2x", label: "Average ROAS" },
          { value: "90", label: "Days to Measurable Results" },
          { value: "180%", label: "Average Organic Traffic Growth" },
          { value: "12M+", label: "Monthly Impressions Managed" },
        ],
      },
    ],
  },

  {
    slug: "pr-communications",
    title: "PR & Communications",
    tagline: "Shape Narratives. Build Trust. Amplify Impact.",
    heroDescription:
      "Strategic public relations and communications to shape narratives, manage reputation, and amplify your brand voice.",
    accent: "#1A6B3C",
    accentSecondary: "#25A047",
    heroVideo: pv(3209828, 25),
    sections: [
      {
        type: "overview",
        title: "Communications That Build Lasting Reputation",
        subtitle: "Your Story, Told Powerfully.",
        description:
          "In an age where public perception can shift overnight, having a proactive, strategic communications partner has never been more important. Our PR and communications team works with you to craft authentic narratives that resonate with media, stakeholders, and the public.\n\nFrom launching new products to navigating complex reputation challenges, we bring the media relationships, strategic counsel, and creative storytelling capabilities to help your brand communicate with confidence.",
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?w=900&q=80",
        videoUrl: pv(3195394),
      },
      {
        type: "features",
        title: "Our PR Services",
        subtitle: "Comprehensive Communications Solutions",
        description:
          "From media relations to crisis management, we provide the full spectrum of communications services.",
        videoUrl: pv(3044943),
        features: [
          {
            title: "Media Relations",
            description:
              "Cultivated relationships with key journalists and editors across print, broadcast, and digital media ensure your stories get the coverage they deserve.",
            image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80",
          },
          {
            title: "Brand Storytelling",
            description:
              "We craft compelling narratives that bring your brand's purpose, values, and vision to life in ways that resonate emotionally with your audiences.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
          },
          {
            title: "Crisis Communications",
            description:
              "Rapid-response crisis management with proven protocols to protect your reputation and navigate challenging situations with confidence and clarity.",
            image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
          },
          {
            title: "Executive Communications",
            description:
              "Position your leaders as industry thought leaders through speaking opportunities, bylined articles, and strategic executive communications programmes.",
            image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
          },
        ],
      },
      {
        type: "process",
        title: "Our Communications Approach",
        subtitle: "Strategic. Proactive. Measurable.",
        description:
          "Our PR methodology combines strategic planning with agile execution to deliver consistent, impactful results.",
        videoUrl: pv(2795405),
        processSteps: [
          {
            step: "01",
            title: "Stakeholder Mapping",
            description:
              "We identify all key stakeholders — media, investors, customers, regulators — and develop targeted communication strategies for each.",
          },
          {
            step: "02",
            title: "Narrative Development",
            description:
              "Our team crafts your core messaging architecture, brand narrative, and key messages that resonate across all audiences.",
          },
          {
            step: "03",
            title: "Media & Content Outreach",
            description:
              "Proactive media pitching, press release distribution, and content placement to earn the coverage your brand deserves.",
          },
          {
            step: "04",
            title: "Measurement & Optimisation",
            description:
              "Comprehensive media monitoring and sentiment analysis to measure impact and continuously optimise our communications approach.",
          },
        ],
      },
      {
        type: "results",
        title: "Communications That Create Impact",
        subtitle: "Reputation Built. Trust Earned.",
        description:
          "Our PR programmes have helped brands build powerful reputations, navigate crises successfully, and establish lasting credibility with their most important audiences.",
        videoUrl: pv(1093662),
        stats: [
          { value: "200+", label: "Media Placements Per Campaign" },
          { value: "85%", label: "Positive Sentiment Rate" },
          { value: "50+", label: "Top-Tier Publications" },
          { value: "15+", label: "Years of Media Relationships" },
        ],
      },
    ],
  },

  {
    slug: "media-production",
    title: "Media Production",
    tagline: "Captivate. Inspire. Communicate.",
    heroDescription:
      "Premium video, audio, and content production that captivates audiences and communicates your brand story with impact.",
    accent: "#C9A84C",
    accentSecondary: "#e8d070",
    heroVideo: "/media-production-bg.mov",
    sections: [
      {
        type: "overview",
        title: "Production That Elevates Your Brand",
        subtitle: "Premium Quality. Purposeful Storytelling.",
        description:
          "In a world of infinite content, only premium production quality breaks through. Our media production team combines cinematic craft with strategic brand thinking to create content that not only looks stunning but achieves your business objectives.\n\nFrom broadcast TV commercials to viral social content, from corporate films to award-winning podcasts, we deliver production excellence at every scale — on time and on budget.",
        image: "https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=900",
        videoUrl: pv(3045925, 25),
      },
      {
        type: "features",
        title: "Production Services",
        subtitle: "End-to-End Content Production",
        description:
          "From concept to delivery, we handle every aspect of your content production with meticulous attention to quality.",
        videoUrl: pv(3195394),
        features: [
          {
            title: "Video Production",
            description:
              "Cinematic quality video production from concept to delivery — commercials, corporate films, documentary-style content, social media videos, and more.",
            image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
          },
          {
            title: "Audio Production",
            description:
              "Professional podcast production, radio commercials, sonic branding, voiceovers, and audio post-production from our state-of-the-art recording facilities.",
            image: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=600&q=80",
          },
          {
            title: "Photography & Visual Content",
            description:
              "Brand photography, campaign imagery, product photography, and executive portraits that consistently communicate your brand's visual identity.",
            image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
          },
          {
            title: "Post-Production & VFX",
            description:
              "World-class editing, colour grading, motion graphics, visual effects, and finishing to ensure your content stands out in any environment.",
            image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?w=600&q=80",
          },
        ],
      },
      {
        type: "podcast",
        title: "The Vantage Podcast",
        subtitle: "Conversations That Shape the Industry",
        description:
          "Behind every great brand is a powerful story. Our award-winning podcast brings together industry leaders, creative thinkers, and marketing innovators to explore the ideas shaping the future of media and communications.\n\nEach episode is produced to broadcast standard — rich audio, dynamic visuals, and compelling storytelling that keeps audiences coming back.",
        videoUrl: pv(3044943),
        featuredVideoUrl: pv(3045925, 25),
      },
      {
        type: "process",
        title: "Our Production Process",
        subtitle: "From Brief to Broadcast",
        description:
          "Our production process ensures every project is delivered to the highest standard, on time and on budget.",
        videoUrl: pv(2795405),
        processSteps: [
          {
            step: "01",
            title: "Creative Development",
            description:
              "We develop creative concepts, scripts, storyboards, and production plans that align with your brand objectives and budget.",
          },
          {
            step: "02",
            title: "Pre-Production",
            description:
              "Casting, location scouting, crew assembly, equipment preparation, and all logistics managed by our experienced production team.",
          },
          {
            step: "03",
            title: "Production",
            description:
              "Principal photography and recording managed with precision — our crew delivers exceptional quality whether in-studio or on location.",
          },
          {
            step: "04",
            title: "Post-Production & Delivery",
            description:
              "Editing, grading, sound design, VFX, and final delivery in all required formats, with revisions managed through our efficient feedback process.",
          },
        ],
      },
      {
        type: "results",
        title: "Production That Performs",
        subtitle: "Content That Converts",
        description:
          "Our production work has helped brands build deeper connections with their audiences, increase engagement, and drive measurable business results.",
        videoUrl: pv(3209828, 25),
        stats: [
          { value: "500+", label: "Productions Completed" },
          { value: "4x", label: "Higher Engagement vs Average" },
          { value: "98%", label: "On-Time Delivery Rate" },
          { value: "15+", label: "Industry Awards Won" },
        ],
      },
    ],
  },

  {
    slug: "creative-consulting",
    title: "Creative Consulting",
    tagline: "Distinctive. Memorable. Transformative.",
    heroDescription:
      "Innovative creative direction and brand identity development that sets you apart and resonates with your target market.",
    accent: "#1A6B3C",
    accentSecondary: "#25A047",
    heroVideo: pv(3045925, 25),
    sections: [
      {
        type: "overview",
        title: "Creative Thinking That Transforms Brands",
        subtitle: "Where Strategy Meets Imagination.",
        description:
          "Great brands are built on great ideas. Our creative consulting team brings together strategic thinking and imaginative execution to help you build a brand identity that is distinctive, consistent, and deeply resonant with your audience.\n\nWhether you're launching a new brand, repositioning an existing one, or evolving your creative platform, we bring the insight, craft, and courage to create work that truly makes a difference.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=900&q=80",
        videoUrl: pv(4271668),
      },
      {
        type: "features",
        title: "Creative Services",
        subtitle: "Full-Spectrum Creative Solutions",
        description:
          "From brand strategy to visual design, we offer the complete range of creative consulting services.",
        videoUrl: pv(3255438, 24),
        features: [
          {
            title: "Brand Identity Design",
            description:
              "Create a distinctive, ownable visual identity — logo, colour, typography, imagery — that consistently communicates your brand's values and personality.",
            image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
          },
          {
            title: "Creative Direction",
            description:
              "Visionary creative leadership that ensures brand consistency and creative excellence across every touchpoint, campaign, and communication.",
            image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=600&q=80",
          },
          {
            title: "Campaign Concept Development",
            description:
              "Big-idea thinking that generates breakthrough campaign concepts with the strategic insight to make them commercially effective.",
            image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&q=80",
          },
          {
            title: "Brand Guidelines & Systems",
            description:
              "Comprehensive brand guidelines that ensure your team and agency partners deliver consistent, on-brand creative across every channel and touchpoint.",
            image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=600&q=80",
          },
        ],
      },
      {
        type: "process",
        title: "Our Creative Process",
        subtitle: "Structured Creativity",
        description:
          "We believe great creative work emerges from a disciplined process that balances strategic rigour with imaginative freedom.",
        videoUrl: pv(3195394),
        processSteps: [
          {
            step: "01",
            title: "Strategic Insight",
            description:
              "Deep brand strategy work — positioning, personality, purpose — that gives us the strategic foundation for all creative development.",
          },
          {
            step: "02",
            title: "Creative Exploration",
            description:
              "Wide-ranging creative exploration across multiple territories and directions, grounded in the strategic brief but free to explore.",
          },
          {
            step: "03",
            title: "Concept Refinement",
            description:
              "Rigorous refinement of the most promising creative directions, tested against strategic objectives and audience insights.",
          },
          {
            step: "04",
            title: "Brand System Build",
            description:
              "Development of the complete brand system — all assets, guidelines, and tools — needed to bring the new creative to life at scale.",
          },
        ],
      },
      {
        type: "results",
        title: "Creative That Creates Value",
        subtitle: "Brand Impact. Business Results.",
        description:
          "Our creative consulting work has helped brands achieve significant commercial results, from improved brand recognition to increased customer acquisition and retention.",
        videoUrl: pv(3044943),
        stats: [
          { value: "65%", label: "Average Brand Recognition Increase" },
          { value: "40%", label: "Improvement in Brand Preference" },
          { value: "3x", label: "Higher Creative Engagement" },
          { value: "100+", label: "Brands Transformed" },
        ],
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return servicesData.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return servicesData.map((s) => s.slug);
}

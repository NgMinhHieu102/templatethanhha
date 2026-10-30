"use client";

import { useEffect, useRef, useState } from "react";

const photos = {
  field: "/images/acre/field-overview.webp",
  terraces: "/images/acre/terraced-fields.webp",
  vineyard: "/images/acre/vineyard-dashboard.webp",
  crop: "/images/acre/crop-intelligence.webp",
  precision: "/images/acre/precision-farming.webp",
  water: "/images/acre/smart-irrigation.webp",
  soil: "/images/acre/soil-harvest.webp",
  hills: "/images/acre/green-hills.webp",
  signalSoil: "/images/acre/crop-rows.webp",
  signalWater: "/images/acre/irrigation-tractor.webp",
  signalWeather: "/images/acre/wheat-field.webp",
  signalActivity: "/images/acre/grower-lukas.webp",
  rows: "/images/acre/crop-rows.webp",
  tractor: "/images/acre/irrigation-tractor.webp",
  wheat: "/images/acre/wheat-field.webp",
  grower: "/images/acre/grower-lukas.webp",
  roots: "/images/acre/soil-profile.webp",
};

const heroVideo = "/images/acre/hero-loop.mp4";
const heroPoster = "/images/acre/hero-poster.jpg";

const serviceCards = [
  ["01", "Crop intelligence", "Monitor crop health and identify changes earlier.", photos.crop],
  ["02", "Precision farming", "Make every acre more productive with better field data.", photos.precision],
  ["03", "Smart irrigation", "Use water where and when crops need it.", photos.water],
  ["04", "Soil & resource management", "Understand soil conditions and optimize essential resources.", photos.soil],
];

function SectionLabel({ number, children, outlined = false }: { number: string; children: string; outlined?: boolean }) {
  return <div className={`section-label${outlined ? " section-label-outlined" : ""}`}><span>{number}</span><i>/</i><span>{children}</span></div>;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={`arrow${diagonal ? " arrow-diagonal" : ""}`} aria-hidden="true">{diagonal ? <svg viewBox="0 0 24 24" fill="none"><path d="M7 7h10v10M7 17 17 7" /></svg> : <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M14 6l6 6-6 6" /></svg>}</span>;
}

function AcreMark() {
  return <svg className="brand-mark" viewBox="0 0 48 48" fill="none" aria-hidden="true"><circle cx="24" cy="24" r="22.5" stroke="currentColor" strokeWidth="1.5"/><path d="M24 32V17m0 8c-4.8 0-7-2.2-7-6 4.4 0 7 2.3 7 6Zm0-2c0-4.6 2.1-7.1 6.4-7.8 0 4.5-2.1 7.1-6.4 7.8Z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>;
}

function PillLink({ href, children }: { href: string; children: string }) {
  const isHeroCta = children === "Explore our approach";
  return <a className={`pill${isHeroCta ? " hero-cta" : ""}`} href={href}><span className="pill-label" aria-label={children}>{children.split("").map((letter, index) => <span aria-hidden="true" key={`${letter}-${index}`} style={{ "--letter-index": index } as React.CSSProperties}>{letter === " " ? "\u00a0" : letter}</span>)}</span><Arrow /></a>;
}

function Navigation() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 320);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return <nav className={`site-nav${scrolled ? " is-scrolled" : ""}`}>
    <a className="wordmark" href="#top"><AcreMark /><span>Acre</span></a>
    <div className={`nav-links ${open ? "is-open" : ""}`}>
      <a href="/about">About</a><a href="#technology">Technology</a><a href="/services">Services</a><a href="/insights">Insights</a>
    </div>
    <a className="pill nav-contact" href="/contact"><span className="contact-label" aria-label="Contact">{"Contact".split("").map((letter, index) => <span aria-hidden="true" key={`${letter}-${index}`} style={{ "--letter-index": index } as React.CSSProperties}>{letter}</span>)}</span><Arrow diagonal /></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}><span /><span /></button>
  </nav>;
}

function Hero() {
  return <header className="hero" id="top">
    <video className="hero-video" autoPlay muted loop playsInline poster={heroPoster} src={heroVideo} />
    <div className="hero-scrim" />
    <Navigation />
    <div className="hero-copy"><p className="eyebrow hero-eyebrow">AGRICULTURE / INTELLIGENCE</p><h1 className="hero-title" aria-label="Grow with intelligence."><span>Grow</span> <span>with</span><br className="desktop-break" /> <span>intelligence.</span></h1>
      <div className="hero-bottom"><p className="hero-description">Better insights for healthier fields, smarter resources, and stronger harvests.</p><PillLink href="#field">Explore our approach</PillLink></div>
    </div>
    <div className="hero-sheet-cap" aria-hidden="true" style={{ position: "absolute", zIndex: 3, left: 0, right: 0, bottom: -1, height: 48, borderRadius: "48px 48px 0 0", background: "var(--cream)", pointerEvents: "none" }} />
  </header>;
}

function FieldSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [chartsVisible, setChartsVisible] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setChartsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.18 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className={`field-section${chartsVisible ? " charts-visible" : ""}`} id="field">
    <div className="field-intro"><SectionLabel number="02" outlined>FROM THE FIELD</SectionLabel>
    <div className="section-heading"><h2>Agriculture<br />is changing.</h2><p>From soil to harvest, better decisions begin with better visibility.</p></div></div>
    <div className="field-grid">
      <article className="field-card field-photo"><div className="image-wrap"><img src={photos.field} alt="Patchwork of cultivated fields seen from the air" /><span className="live-badge"><i />Live field view</span></div><div className="card-caption"><span>01</span><div><h3>Field intelligence</h3><p>Real-time visibility across every acre.</p></div></div></article>
      <article className="field-card efficiency-card"><div className="efficiency-gauge"><div className="gauge-ring gauge-water"><div className="gauge-cutout"><div className="gauge-ring gauge-energy"><div className="gauge-centre"><strong>−18%</strong><span>inputs used</span></div></div></div></div><div className="gauge-legend"><span><i />Water</span><span><i />Energy</span></div></div><div className="compact-caption"><span>02</span><div><h3>Resource efficiency</h3><p>Smarter use of water and energy.</p></div></div></article>
      <article className="field-card performance-card"><div className="performance-copy"><span className="card-number">03</span><h3>Crop performance</h3><p>Better decisions. Stronger growth.</p></div><div className="performance-chart"><div className="performance-stat"><strong>+24%</strong><span>yield, season on season</span></div><div className="performance-bars" aria-hidden="true">{[34, 42, 40, 56, 63, 78, 100].map((height, index) => <i key={index} style={{ "--bar-height": `${height}%`, "--bar-index": index } as React.CSSProperties} />)}</div></div></article>
    </div>
  </section>;
}

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const roundBadgeRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [experienceVisible, setExperienceVisible] = useState(false);
  const [roundBadgeVisible, setRoundBadgeVisible] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    const copy = section?.querySelector(".about-copy");
    if (!copy) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.15 });
    observer.observe(copy);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const targets = [
      [experienceRef.current, setExperienceVisible],
      [roundBadgeRef.current, setRoundBadgeVisible],
    ] as const;
    const observers = targets.map(([target, setVisible]) => {
      if (!target) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      }, { threshold: 0.15 });
      observer.observe(target);
      return observer;
    });
    return () => observers.forEach(observer => observer?.disconnect());
  }, []);
  useEffect(() => {
    const image = imageRef.current;
    if (!image) return;
    let frame = 0;
    const updateParallax = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const { top, height } = (image.parentElement ?? image).getBoundingClientRect();
        const offset = (window.innerHeight / 2 - (top + height / 2)) * 0.036;
        image.style.setProperty("--about-parallax-y", `${offset}px`);
      });
    };
    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });
    window.addEventListener("resize", updateParallax);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateParallax);
      window.removeEventListener("resize", updateParallax);
    };
  }, []);
  return <section ref={sectionRef} className={`about-section${visible ? " is-visible" : ""}`} id="about"><div className="about-copy"><SectionLabel number="03">ABOUT US</SectionLabel><h2>Rooted in agriculture. Built for what’s next.</h2><p className="about-statement">We started in the field, not the lab. Every tool we build begins with a simple belief: the people who work the land deserve to see it clearly, and to act on what they see with confidence.</p><a className="text-link" href="/about">More about us <Arrow diagonal /></a></div>
    <div className="about-visual"><div className="about-arch-image"><img ref={imageRef} src={photos.terraces} alt="Terraced rice fields in a mountain valley under a bright sky" /></div><div ref={experienceRef} className={`experience-badge${experienceVisible ? " is-visible" : ""}`}><strong>15+</strong><span>YEARS OF FIELD<br />EXPERIENCE</span></div><div ref={roundBadgeRef} className={`round-badge${roundBadgeVisible ? " is-visible" : ""}`}><span>24/7</span><small>FIELD<br />INTELLIGENCE</small></div></div>
  </section>;
}

function Dashboard() {
  const soilMoisture = [40, 64, 60, 48, 75, 92, 100];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weather = [["27°", "Mon", "sun"], ["28°", "Tue", "sun"], ["25°", "Wed", "sun"], ["21°", "Thu", "rain"], ["24°", "Fri", "sun"]];
  return <div className="dashboard" aria-label="Example field intelligence dashboard"><div className="dash-content">
    <div className="dash-top-row">
      <div className="map-panel"><img src={photos.vineyard} alt="Vineyard rows and fields below a green hill beside a lake" /><span className="map-chip">● Live · 148 ha</span><span className="parcel parcel-one">Parcel A-04 · Healthy</span><span className="parcel parcel-two">Moisture 31%</span><span className="parcel parcel-three">Parcel C-11 · Check</span><span className="map-legend">Vigour: low to high</span></div>
      <div className="metric-panel"><div className="metric-heading"><div><span>CROP HEALTH</span></div><div className="health-ring"><b>94%</b></div><small>Up 3 points this week</small></div>
        <div className="mini-metrics"><div><div className="metric-row"><span>WATER</span><b>82%</b></div><i><em style={{ width: "82%" }} /></i></div><div><div className="metric-row"><span>SOIL</span><b>91%</b></div><i><em style={{ width: "91%" }} /></i></div></div>
        <div className="temperature-panel"><div><span>TEMPERATURE</span><small>Clear skies<br />Wind 8 km/h NE</small></div><b>27°C</b></div>
      </div>
    </div>
    <div className="dash-bottom-row">
      <div className="activity-panel"><span>FIELD ACTIVITY</span><p><i />Irrigation cycle complete, East block <time>06:40</time></p><p><i />Canopy scan, 148 ha covered <time>09:15</time></p><p><i />Soil probe sync, 24 sensors <time>13:02</time></p></div>
      <div className="moisture-panel"><div><span>SOIL MOISTURE · 7 DAYS</span><b>31%</b></div><div className="moisture-chart"><div className="moisture-bars" aria-hidden="true">{soilMoisture.map((height, index) => <div className="moisture-day" key={days[index]}><i style={{ "--bar-height": height + "%", "--bar-index": index } as React.CSSProperties} /><span>{days[index]}</span></div>)}</div></div></div>
      <div className="forecast-panel"><span>WEATHER</span>{weather.map(([temperature, day, condition]) => <div key={day}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{condition === "rain" ? <><path d="M7 16.5h9.2a3.8 3.8 0 0 0 .1-7.6 5.2 5.2 0 0 0-9.8 1.2A3.2 3.2 0 0 0 7 16.5Z" /><path d="m9 19-1 2m6-2-1 2m6-2-1 2" /></> : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>}</svg><b>{temperature}</b><small>{day}</small></div>)}</div>
    </div>
  </div></div>;
}

function TechnologySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  useEffect(() => {
    const section = sectionRef.current;
    const targets = [
      [section?.querySelector(".technology-heading"), setHeadingVisible],
      [section?.querySelector(".technology-dashboard-reveal"), setDashboardVisible],
    ] as const;
    const observers = targets.map(([target, setVisible]) => {
      if (!target) return null;
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      }, { threshold: 0.25 });
      observer.observe(target);
      return observer;
    });
    return () => observers.forEach(observer => observer?.disconnect());
  }, []);
  return <section ref={sectionRef} className="technology-section" id="technology"><div className="technology-copy">
    <div className={`technology-heading${headingVisible ? " is-visible" : ""}`}><SectionLabel number="04" outlined>AGRICULTURE INTELLIGENCE</SectionLabel><div className="section-heading"><h2>See more.<br />Grow smarter.</h2><p>One living picture of the field: health, soil, water and weather, read together.</p></div></div>
    <div className={`technology-dashboard-reveal${dashboardVisible ? " is-visible" : ""}`}><Dashboard /></div>
  </div></section>;
}

function ServicesSection() {
  return <section className="services-section" id="services"><div className="services-head"><div><SectionLabel number="05">SERVICES</SectionLabel><h2>Everything<br />your field needs.</h2></div><a className="text-link" href="/services">All services <Arrow diagonal /></a></div>
    <div className="services-grid">{serviceCards.map(([n, title, desc, img]) => <a className="service-card" key={n} href={`/services/${title.toLowerCase().replaceAll(" ", "-")}`}><div className="service-image"><img src={img} alt={title} /></div><span className="service-arrow"><Arrow diagonal /></span><div className="service-meta"><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div></div></a>)}</div>
  </section>;
}

function SignalsSection() {
  const [active, setActive] = useState(0);
  const signals = [
    { name: "Crop health", image: photos.hills, value: "94%", description: "Canopy vigour, updated every pass. Stress shows up days before the eye can see it." },
    { name: "Soil condition", image: photos.signalSoil, value: "91%", description: "Structure, nutrients and organic matter, mapped row by row." },
    { name: "Water usage", image: photos.signalWater, value: "82%", description: "Every drop tracked, so irrigation reaches the places that need it." },
    { name: "Weather", image: photos.signalWeather, value: "27°", description: "Local forecasts meet field conditions, updated as weather moves." },
    { name: "Field activity", image: photos.signalActivity, value: "24/7", description: "Every pass, scan and sensor reading collected in one live field record." },
  ];
  const selected = signals[active];
  return <section className="signals-section" id="signals"><div className="signals-copy"><SectionLabel number="06" outlined>SIGNALS</SectionLabel><h2>One field.<br />Multiple signals.</h2><div className="signal-list">{signals.map((item, i) => <button className={`signal-row ${i === active ? "is-active" : ""}`} key={item.name} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} aria-pressed={i === active}><span>0{i + 1}</span><b>{item.name}</b></button>)}</div></div><div className="signal-visual"><div className="signal-photo-stack">{signals.map((item, i) => <img className={i === active ? "is-visible" : ""} src={item.image} alt={item.name} key={item.name} />)}</div><div className="signal-wipe" aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <i key={i} />)}</div><div className="signal-value" key={selected.name}><strong>{selected.value}</strong><span>{selected.description}</span></div></div></section>;
}

function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [revealedStep, setRevealedStep] = useState(0);
  const steps = [
    ["01", "Connect", "Sensors, imagery and machines join one field record.", "/images/acre/process-connect.png"],
    ["02", "Observe", "Every acre is watched continuously, in every season.", "/images/acre/process-observe.png"],
    ["03", "Analyze", "Patterns surface early, before they become problems.", "/images/acre/process-analyze.png"],
    ["04", "Act", "Clear recommendations, delivered when they matter.", "/images/acre/process-act.png"],
  ];
  useEffect(() => {
    const section = sectionRef.current;
    const progress = progressRef.current;
    if (!section || !progress) return;

    const headingObserver = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setHeadingVisible(true);
        headingObserver.disconnect();
      }
    }, { threshold: 0.15 });
    const heading = section.querySelector(".process-heading");
    if (heading) headingObserver.observe(heading);

    let frame = 0;
    const updateProgress = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const track = section.querySelector(".process-grid");
        if (!track) return;
        const top = track.getBoundingClientRect().top;
        const start = window.innerHeight * 0.7;
        const end = -window.innerHeight * 0.02;
        const value = Math.max(0, Math.min(1, (start - top) / (start - end)));
        progress.style.transform = `scaleX(${value})`;
        const current = value < 0.35 ? 0 : value < 0.55 ? 1 : value < 0.75 ? 2 : 3;
        setActiveStep(current);
        setRevealedStep(previous => Math.max(previous, current));
        const imageThresholds = [0.02, 0.35, 0.55, 0.75];
        section.querySelectorAll<HTMLElement>(".process-art").forEach((image, index) => {
          const radius = getComputedStyle(image).borderRadius;
          image.style.clipPath = value >= imageThresholds[index]
            ? `inset(0 round ${radius})`
            : `inset(100% 0 0 round ${radius})`;
        });
      });
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      headingObserver.disconnect();
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
      cancelAnimationFrame(frame);
    };
  }, []);
  return <section ref={sectionRef} className="process-section" id="process">
    <div className={`process-heading${headingVisible ? " is-visible" : ""}`}>
      <SectionLabel number="07" outlined>HOW IT WORKS</SectionLabel>
      <h2>From field<br />to insight.</h2>
    </div>
    <div className="process-grid">
      <div className="process-track" aria-hidden="true"><div ref={progressRef} /></div>
      {steps.map(([n, title, desc, img], index) => <article className={`process-card${index <= activeStep ? " is-current" : ""}${index <= revealedStep ? " is-revealed" : ""}`} key={n}>
        <span>{n}</span><h3>{title}</h3><p>{desc}</p>
        <div className="process-art"><img src={img} alt={title} /></div>
      </article>)}
    </div>
  </section>;
}

function ImpactSection() {
  const metrics = [["10", "K+", "Fields monitored"], ["2.4", "M+", "Acres analyzed"], ["32", "%", "Resource efficiency"], ["94", "%", "Crop visibility"]];
  const sectionRef = useRef<HTMLElement>(null);
  const [counted, setCounted] = useState(false);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setCounted(true);
        setRevealed(true);
      } else {
        setCounted(false);
        setRevealed(false);
      }
    }, { threshold: .12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <section ref={sectionRef} className={`impact-section${counted ? " is-counted" : ""}${revealed ? " is-revealed" : ""}`} id="impact"><div className="impact-inner"><div className="impact-content"><SectionLabel number="08" outlined>IMPACT</SectionLabel><h2>Better farming starts with<br /><span>better decisions.</span></h2><div className="impact-stats">{metrics.map(([number, suffix, label]) => { const value = `${number}${suffix}`; return <div className="impact-metric" key={label}><strong aria-label={value}><span className="odometer" data-value={number}>{Array.from(number).map((character, i) => character === "." ? <span className="decimal-point" key={`dot-${i}`}>.</span> : <span className="digit-window" data-digit={character} key={i}><span className="digit-current" aria-hidden="true">{character}</span><span className="digit-strip" data-digit={character} aria-hidden="true">{"0123456789".split("").map(digit => <i key={digit}>{digit}</i>)}</span></span>)}</span><span className="stat-suffix">{suffix}</span></strong><p>{label}</p></div>;})}</div></div></div></section>;
}
function ApproachSection() {
  const pieces = [["Water", photos.water], ["Crop", photos.crop], ["Soil", photos.roots], ["Harvest", photos.soil]];
  return <section className="approach-section" id="approach"><div className="approach-copy"><SectionLabel number="09">OUR APPROACH</SectionLabel><h2>Everything<br />is connected.</h2><p>Soil feeds the crop. Water moves through both. The harvest is the sum of a thousand small decisions. Data is what lets you see them as one system.</p></div><div className="approach-visual"><img className="approach-main" src={photos.vineyard} alt="Vineyard landscape representing a connected farm" /><div className="approach-overlay"><span className="data-orbit">✳<small>DATA</small></span><span className="orbit-line" />{pieces.map(([name, img]) => <div className={`orbit-item orbit-${name.toLowerCase()}`} key={name}><img src={img} alt="" /><span>{name}</span></div>)}</div><span className="approach-caption">Sunfield Nurseries</span></div></section>;
}

function VoicesSection() {
  const testimonials = [
    { farm: "Riverbend Growers", quote: "When you can see what is happening in the field, you can make better decisions.", name: "Daniel Okafor", role: "Farm Manager", image: "/images/acre/grower-daniel.jpg", alt: "Portrait of Daniel Okafor tending leafy crops" },
    { farm: "Sunfield Nurseries", quote: "We stopped watering by the calendar. Now the data tells us when.", name: "Lukas Hoffmann", role: "Head Grower", image: photos.grower, alt: "Portrait of Lukas Hoffmann checking crops in a green field" },
    { farm: "Hillside Farm", quote: "I farm the same land my father did. Now I can see it the way he always felt it.", name: "Wei Chen", role: "Owner", image: "/images/acre/grower-wei.webp", alt: "Portrait of Wei Chen on his hillside farm" },
  ];
  const [index, setIndex] = useState(1);
  const selected = testimonials[index];
  const move = (step: number) => setIndex((current) => (current + step + testimonials.length) % testimonials.length);
  return <section className="voices-section" id="voices"><div className="voice-image" key={selected.farm}><img src={selected.image} alt={selected.alt} /><span>{selected.farm}</span></div><div className="voice-copy" key={`${selected.farm}-copy`}><SectionLabel number="10">FROM A GROWER</SectionLabel><blockquote>{selected.quote}</blockquote><div className="voice-footer"><div className="voice-author"><img src={selected.image} alt="" /><span><b>{selected.name}</b><small>{selected.role} · {selected.farm}</small></span></div><div className="voice-controls"><button aria-label="Previous testimonial" onClick={() => move(-1)}>←</button><button aria-label="Next testimonial" onClick={() => move(1)}>→</button></div></div></div></section>;
}

function InsightsSection() {
  const notes = [
    ["PRECISION AGRICULTURE", "SEP 18, 2026", "The acre is no longer the smallest unit of farming", "Why managing by the row, not the field, is changing how growers plan a season.", photos.precision, "/insights/the-acre-is-no-longer-the-smallest-unit-of-farming"],
    ["WATER MANAGEMENT", "AUG 29, 2026", "Irrigating by need, not by calendar", "What soil moisture data reveals about the water we never needed to use.", photos.water, "/insights/irrigating-by-need-not-by-calendar"],
    ["CROP INTELLIGENCE", "AUG 7, 2026", "Seeing stress before the leaf does", "Early signals in canopy data, and how to act on them in time.", photos.crop, "/insights/seeing-stress-before-the-leaf-does"],
  ];
  return <section className="insights-section" id="insights"><div className="services-head"><div><SectionLabel number="11">FIELD NOTES</SectionLabel><h2>Ideas from<br />the field.</h2></div><a className="text-link" href="/insights">All field notes <Arrow diagonal /></a></div><div className="insights-grid">{notes.map(([category, date, title, desc, img, href], i) => <a className={`insight-card ${i === 0 ? "insight-featured" : ""}`} href={href} key={title}><img src={img} alt={title} /><div className="insight-meta"><span>{category}</span><span>{date}</span></div><h3>{title}</h3><p>{desc}</p></a>)}</div></section>;
}

function Footer() {
  const groups = [
    ["NAVIGATE", ["Home|/", "About|/about", "Technology|#technology", "Services|/services", "Insights|/insights", "Contact|/contact", "404|/404"]],
    ["SERVICES", ["Crop Intelligence|/services/crop-intelligence", "Precision Farming|/services/precision-farming", "Smart Irrigation|/services/smart-irrigation", "Soil & Resources|/services/soil-resource-management"]],
    ["FOLLOW", ["Instagram|https://instagram.com/", "LinkedIn|https://linkedin.com/", "X|https://x.com/"]],
  ];
  return <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#top"><AcreMark /><span>Acre</span></a><p>Agriculture,<br />reimagined.</p></div>{groups.map(([heading, items]) => <nav className="footer-links" key={heading as string}><span>{heading}</span>{(items as string[]).map((item) => { const [label, href] = item.split("|"); return <a key={label} href={href}>{label}</a>; })}</nav>)}</div><div className="footer-bottom"><span>© 2026 Acre. All rights reserved.</span><nav><a href="/legal/privacy-policy">Privacy Policy</a><a href="/legal/terms-of-service">Terms of Service</a><a href="/legal/cookie-policy">Cookie Policy</a></nav></div></footer>;
}

export default function Home() {
  useEffect(() => {
    const targets = document.querySelectorAll<HTMLElement>([
      ".about-visual",
      ".services-head",
      ".service-card",
      ".signals-copy",
      ".signal-visual",
      ".approach-copy",
      ".approach-visual",
      ".voice-image",
      ".voice-copy",
      ".insight-card",
      ".closing > div:last-child",
      ".footer-brand",
      ".footer-links",
      ".footer-bottom",
    ].join(","));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      targets.forEach(target => target.classList.add("scroll-revealed"));
      return;
    }
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add("scroll-revealed");
        else entry.target.classList.remove("scroll-revealed");
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return <main><Hero /><FieldSection /><AboutSection /><TechnologySection /><ServicesSection /><SignalsSection /><ProcessSection /><ImpactSection /><ApproachSection /><VoicesSection /><InsightsSection /><section className="closing-wrap"><div className="closing"><video autoPlay muted loop playsInline poster={heroPoster} src={heroVideo} /><div className="closing-scrim" /><div><h2>Let’s grow something better.</h2><p>Bring smarter decisions to every field.</p><PillLink href="/contact">Start a conversation</PillLink></div></div></section><Footer /></main>;
}

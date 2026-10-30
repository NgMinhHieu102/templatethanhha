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
  ["01", "Trí tuệ cây trồng", "Theo dõi sức khỏe cây trồng và phát hiện thay đổi sớm hơn.", photos.crop],
  ["02", "Canh tác chính xác", "Nâng cao năng suất trên từng thửa ruộng nhờ dữ liệu đồng ruộng.", photos.precision],
  ["03", "Tưới tiêu thông minh", "Cung cấp nước đúng nơi, đúng lúc cây trồng cần.", photos.water],
  ["04", "Quản lý đất và tài nguyên", "Thấu hiểu điều kiện đất và sử dụng hiệu quả các nguồn lực thiết yếu.", photos.soil],
];

function SectionLabel({ number, children, outlined = false }: { number: string; children: string; outlined?: boolean }) {
  return <div className={`section-label${outlined ? " section-label-outlined" : ""}`}><span>{number}</span><i>/</i><span>{children}</span></div>;
}

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span className={`arrow${diagonal ? " arrow-diagonal" : ""}`} aria-hidden="true">{diagonal ? <svg viewBox="0 0 24 24" fill="none"><path d="M7 7h10v10M7 17 17 7" /></svg> : <svg viewBox="0 0 24 24" fill="none"><path d="M4 12h16M14 6l6 6-6 6" /></svg>}</span>;
}

function PillLink({ href, children }: { href: string; children: string }) {
  const isHeroCta = children === "Khám phá cách chúng tôi làm";
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
    <a className="wordmark" href="#top"><img className="brand-logo" src="/images/thanhha-logo.png" alt="Thanh Hà — Đồng hành cùng nông nghiệp" /></a>
    <div className={`nav-links ${open ? "is-open" : ""}`}>
      <a href="/about">Về chúng tôi</a><a href="#technology">Công nghệ</a><a href="/services">Dịch vụ</a><a href="/insights">Góc nhìn</a>
    </div>
    <a className="pill nav-contact" href="/contact"><span className="contact-label" aria-label="Liên hệ">{"Liên hệ".split("").map((letter, index) => <span aria-hidden="true" key={`${letter}-${index}`} style={{ "--letter-index": index } as React.CSSProperties}>{letter}</span>)}</span><Arrow diagonal /></a>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Mở hoặc đóng trình đơn" aria-expanded={open}><span /><span /></button>
  </nav>;
}

function Hero() {
  return <header className="hero" id="top">
    <video className="hero-video" autoPlay muted loop playsInline poster={heroPoster} src={heroVideo} />
    <div className="hero-scrim" />
    <Navigation />
    <div className="hero-copy"><p className="eyebrow hero-eyebrow">NÔNG NGHIỆP / TRÍ TUỆ</p><h1 className="hero-title" aria-label="Canh tác thông minh hơn."><span>Canh tác</span> <span>thông</span><br className="desktop-break" /> <span>minh hơn.</span></h1>
      <div className="hero-bottom"><p className="hero-description">Thấu hiểu đồng ruộng để cây trồng khỏe mạnh, tài nguyên được dùng hiệu quả và mùa vụ bội thu.</p><PillLink href="#field">Khám phá cách chúng tôi làm</PillLink></div>
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
    <div className="field-intro"><SectionLabel number="02" outlined>TỪ ĐỒNG RUỘNG</SectionLabel>
    <div className="section-heading"><h2>Nông nghiệp<br />đang đổi thay.</h2><p>Từ đất đến mùa thu hoạch, quyết định tốt hơn bắt đầu từ khả năng quan sát rõ hơn.</p></div></div>
    <div className="field-grid">
      <article className="field-card field-photo"><div className="image-wrap"><img src={photos.field} alt="Những thửa ruộng nhìn từ trên cao" /><span className="live-badge"><i />Theo dõi trực tiếp</span></div><div className="card-caption"><span>01</span><div><h3>Trí tuệ đồng ruộng</h3><p>Dữ liệu theo thời gian thực trên từng thửa ruộng.</p></div></div></article>
      <article className="field-card efficiency-card"><div className="efficiency-gauge"><div className="gauge-ring gauge-water"><div className="gauge-cutout"><div className="gauge-ring gauge-energy"><div className="gauge-centre"><strong>−18%</strong><span>vật tư sử dụng</span></div></div></div></div><div className="gauge-legend"><span><i />Nước</span><span><i />Năng lượng</span></div></div><div className="compact-caption"><span>02</span><div><h3>Sử dụng tài nguyên hiệu quả</h3><p>Tối ưu nguồn nước và năng lượng.</p></div></div></article>
      <article className="field-card performance-card"><div className="performance-copy"><span className="card-number">03</span><h3>Năng suất cây trồng</h3><p>Quyết định sáng suốt. Cây trồng khỏe mạnh.</p></div><div className="performance-chart"><div className="performance-stat"><strong>+24%</strong><span>sản lượng tăng qua mỗi vụ</span></div><div className="performance-bars" aria-hidden="true">{[34, 42, 40, 56, 63, 78, 100].map((height, index) => <i key={index} style={{ "--bar-height": `${height}%`, "--bar-index": index } as React.CSSProperties} />)}</div></div></article>
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
  return <section ref={sectionRef} className={`about-section${visible ? " is-visible" : ""}`} id="about"><div className="about-copy"><SectionLabel number="03">VỀ CHÚNG TÔI</SectionLabel><h2>Gắn bó với nông nghiệp. Sẵn sàng cho tương lai.</h2><p className="about-statement">Chúng tôi bắt đầu từ đồng ruộng, không phải phòng thí nghiệm. Mỗi công cụ được xây dựng từ một niềm tin giản dị: người làm nông xứng đáng nhìn thấu mảnh đất của mình và tự tin hành động dựa trên những gì họ thấy.</p><a className="text-link" href="/about">Tìm hiểu về chúng tôi <Arrow diagonal /></a></div>
    <div className="about-visual"><div className="about-arch-image"><img ref={imageRef} src={photos.terraces} alt="Ruộng bậc thang trong thung lũng dưới bầu trời trong xanh" /></div><div ref={experienceRef} className={`experience-badge${experienceVisible ? " is-visible" : ""}`}><strong>15+</strong><span>NĂM KINH NGHIỆM<br />ĐỒNG RUỘNG</span></div><div ref={roundBadgeRef} className={`round-badge${roundBadgeVisible ? " is-visible" : ""}`}><span>24/7</span><small>TRÍ TUỆ<br />ĐỒNG RUỘNG</small></div></div>
  </section>;
}

function Dashboard() {
  const soilMoisture = [40, 64, 60, 48, 75, 92, 100];
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const weather = [["27°", "Mon", "sun"], ["28°", "Tue", "sun"], ["25°", "Wed", "sun"], ["21°", "Thu", "rain"], ["24°", "Fri", "sun"]];
  return <div className="dashboard" aria-label="Bảng điều khiển thông tin đồng ruộng minh họa"><div className="dash-content">
    <div className="dash-top-row">
      <div className="map-panel"><img src={photos.vineyard} alt="Những hàng nho và cánh đồng dưới triền đồi xanh bên hồ" /><span className="map-chip">● Trực tiếp · 148 ha</span><span className="parcel parcel-one">Thửa A-04 · Khỏe mạnh</span><span className="parcel parcel-two">Độ ẩm 31%</span><span className="parcel parcel-three">Thửa C-11 · Cần kiểm tra</span><span className="map-legend">Sức sống cây trồng: thấp đến cao</span></div>
      <div className="metric-panel"><div className="metric-heading"><div><span>SỨC KHỎE CÂY TRỒNG</span></div><div className="health-ring"><b>94%</b></div><small>Tăng 3 điểm trong tuần này</small></div>
        <div className="mini-metrics"><div><div className="metric-row"><span>NƯỚC</span><b>82%</b></div><i><em style={{ width: "82%" }} /></i></div><div><div className="metric-row"><span>ĐẤT</span><b>91%</b></div><i><em style={{ width: "91%" }} /></i></div></div>
        <div className="temperature-panel"><div><span>NHIỆT ĐỘ</span><small>Trời quang<br />Gió Đông Bắc 8 km/h</small></div><b>27°C</b></div>
      </div>
    </div>
    <div className="dash-bottom-row">
      <div className="activity-panel"><span>HOẠT ĐỘNG ĐỒNG RUỘNG</span><p><i />Hoàn tất tưới tiêu tại khu phía Đông <time>06:40</time></p><p><i />Quét tán cây, đã phủ 148 ha <time>09:15</time></p><p><i />Đồng bộ 24 cảm biến đất <time>13:02</time></p></div>
      <div className="moisture-panel"><div><span>ĐỘ ẨM ĐẤT · 7 NGÀY</span><b>31%</b></div><div className="moisture-chart"><div className="moisture-bars" aria-hidden="true">{soilMoisture.map((height, index) => <div className="moisture-day" key={days[index]}><i style={{ "--bar-height": height + "%", "--bar-index": index } as React.CSSProperties} /><span>{["T2", "T3", "T4", "T5", "T6", "T7", "CN"][index]}</span></div>)}</div></div></div>
      <div className="forecast-panel"><span>THỜI TIẾT</span>{weather.map(([temperature, day, condition]) => <div key={day}><svg viewBox="0 0 24 24" fill="none" aria-hidden="true">{condition === "rain" ? <><path d="M7 16.5h9.2a3.8 3.8 0 0 0 .1-7.6 5.2 5.2 0 0 0-9.8 1.2A3.2 3.2 0 0 0 7 16.5Z" /><path d="m9 19-1 2m6-2-1 2m6-2-1 2" /></> : <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>}</svg><b>{temperature}</b><small>{["T2", "T3", "T4", "T5", "T6"][weather.findIndex(item => item[1] === day)]}</small></div>)}</div>
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
    <div className={`technology-heading${headingVisible ? " is-visible" : ""}`}><SectionLabel number="04" outlined>TRÍ TUỆ NÔNG NGHIỆP</SectionLabel><div className="section-heading"><h2>Thấu hiểu hơn.<br />Canh tác tốt hơn.</h2><p>Bức tranh đồng ruộng toàn diện: sức khỏe cây trồng, đất, nước và thời tiết được kết nối trong một nơi.</p></div></div>
    <div className={`technology-dashboard-reveal${dashboardVisible ? " is-visible" : ""}`}><Dashboard /></div>
  </div></section>;
}

function ServicesSection() {
  return <section className="services-section" id="services"><div className="services-head"><div><SectionLabel number="05">DỊCH VỤ</SectionLabel><h2>Mọi điều<br />đồng ruộng cần.</h2></div><a className="text-link" href="/services">Tất cả dịch vụ <Arrow diagonal /></a></div>
    <div className="services-grid">{serviceCards.map(([n, title, desc, img]) => <a className="service-card" key={n} href={`/services/${title.toLowerCase().replaceAll(" ", "-")}`}><div className="service-image"><img src={img} alt={title} /></div><span className="service-arrow"><Arrow diagonal /></span><div className="service-meta"><span>{n}</span><div><h3>{title}</h3><p>{desc}</p></div></div></a>)}</div>
  </section>;
}

function SignalsSection() {
  const [active, setActive] = useState(0);
  const signals = [
    { name: "Sức khỏe cây trồng", image: photos.hills, value: "94%", description: "Sức sống của tán cây được cập nhật sau mỗi lượt quét. Cây có dấu hiệu căng thẳng trước khi mắt thường nhận ra." },
    { name: "Tình trạng đất", image: photos.signalSoil, value: "91%", description: "Cấu trúc, dưỡng chất và chất hữu cơ được lập bản đồ đến từng hàng cây." },
    { name: "Lượng nước sử dụng", image: photos.signalWater, value: "82%", description: "Theo dõi từng giọt nước để tưới đúng nơi cần thiết." },
    { name: "Thời tiết", image: photos.signalWeather, value: "27°", description: "Dự báo địa phương kết hợp điều kiện thực tế tại ruộng, cập nhật theo diễn biến thời tiết." },
    { name: "Hoạt động đồng ruộng", image: photos.signalActivity, value: "24/7", description: "Mọi lượt máy chạy, lần quét và dữ liệu cảm biến được lưu trong hồ sơ đồng ruộng trực tiếp." },
  ];
  const selected = signals[active];
  return <section className="signals-section" id="signals"><div className="signals-copy"><SectionLabel number="06" outlined>CHỈ SỐ</SectionLabel><h2>Một cánh đồng.<br />Nhiều tín hiệu.</h2><div className="signal-list">{signals.map((item, i) => <button className={`signal-row ${i === active ? "is-active" : ""}`} key={item.name} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} aria-pressed={i === active}><span>0{i + 1}</span><b>{item.name}</b></button>)}</div></div><div className="signal-visual"><div className="signal-photo-stack">{signals.map((item, i) => <img className={i === active ? "is-visible" : ""} src={item.image} alt={item.name} key={item.name} />)}</div><div className="signal-wipe" aria-hidden="true">{Array.from({ length: 8 }, (_, i) => <i key={i} />)}</div><div className="signal-value" key={selected.name}><strong>{selected.value}</strong><span>{selected.description}</span></div></div></section>;
}

function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [revealedStep, setRevealedStep] = useState(0);
  const steps = [
    ["01", "Kết nối", "Cảm biến, hình ảnh và máy móc cùng tạo nên hồ sơ đồng ruộng.", "/images/acre/process-connect.png"],
    ["02", "Quan sát", "Theo dõi liên tục từng thửa ruộng trong suốt các mùa vụ.", "/images/acre/process-observe.png"],
    ["03", "Phân tích", "Nhận diện xu hướng sớm, trước khi chúng trở thành vấn đề.", "/images/acre/process-analyze.png"],
    ["04", "Hành động", "Đề xuất rõ ràng, được gửi đến đúng lúc cần thiết.", "/images/acre/process-act.png"],
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
      <SectionLabel number="07" outlined>QUY TRÌNH</SectionLabel>
      <h2>Từ đồng ruộng<br />đến thấu hiểu.</h2>
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
  const metrics = [["10", "K+", "Thửa ruộng được theo dõi"], ["2.4", "M+", "Mẫu Anh được phân tích"], ["32", "%", "Tài nguyên tiết kiệm"], ["94", "%", "Mức độ quan sát cây trồng"]];
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
  return <section ref={sectionRef} className={`impact-section${counted ? " is-counted" : ""}${revealed ? " is-revealed" : ""}`} id="impact"><div className="impact-inner"><div className="impact-content"><SectionLabel number="08" outlined>TÁC ĐỘNG</SectionLabel><h2>Nông nghiệp bền vững bắt đầu từ<br /><span>những quyết định sáng suốt.</span></h2><div className="impact-stats">{metrics.map(([number, suffix, label]) => { const value = `${number}${suffix}`; return <div className="impact-metric" key={label}><strong aria-label={value}><span className="odometer" data-value={number}>{Array.from(number).map((character, i) => character === "." ? <span className="decimal-point" key={`dot-${i}`}>.</span> : <span className="digit-window" data-digit={character} key={i}><span className="digit-current" aria-hidden="true">{character}</span><span className="digit-strip" data-digit={character} aria-hidden="true">{"0123456789".split("").map(digit => <i key={digit}>{digit}</i>)}</span></span>)}</span><span className="stat-suffix">{suffix}</span></strong><p>{label}</p></div>;})}</div></div></div></section>;
}
function ApproachSection() {
  const pieces = [["Water", photos.water], ["Crop", photos.crop], ["Soil", photos.roots], ["Harvest", photos.soil]];
  return <section className="approach-section" id="approach"><div className="approach-copy"><SectionLabel number="09">CÁCH TIẾP CẬN</SectionLabel><h2>Mọi yếu tố<br />đều kết nối.</h2><p>Đất nuôi cây. Nước luân chuyển qua cả hai. Mùa thu hoạch là kết quả của hàng nghìn quyết định nhỏ. Dữ liệu giúp bạn nhìn thấy tất cả như một hệ thống thống nhất.</p></div><div className="approach-visual"><img className="approach-main" src={photos.vineyard} alt="Khung cảnh vườn nho, biểu trưng cho một nông trại kết nối" /><div className="approach-overlay"><span className="data-orbit">✳<small>DỮ LIỆU</small></span><span className="orbit-line" />{pieces.map(([name, img]) => <div className={`orbit-item orbit-${name.toLowerCase()}`} key={name}><img src={img} alt="" /><span>{({ Water: "Nước", Crop: "Cây trồng", Soil: "Đất", Harvest: "Thu hoạch" } as Record<string, string>)[name]}</span></div>)}</div><span className="approach-caption">Vườn ươm Sunfield</span></div></section>;
}

function VoicesSection() {
  const testimonials = [
    { farm: "Nông trại Riverbend", quote: "Khi nhìn rõ những gì đang diễn ra trên đồng ruộng, chúng tôi có thể đưa ra quyết định tốt hơn.", name: "Daniel Okafor", role: "Quản lý nông trại", image: "/images/acre/grower-daniel.jpg", alt: "Chân dung Daniel Okafor chăm sóc rau xanh" },
    { farm: "Vườn ươm Sunfield", quote: "Chúng tôi không còn tưới theo lịch cố định. Giờ đây, dữ liệu cho biết khi nào cần tưới.", name: "Lukas Hoffmann", role: "Trưởng bộ phận canh tác", image: photos.grower, alt: "Chân dung Lukas Hoffmann kiểm tra cây trồng trên cánh đồng xanh" },
    { farm: "Nông trại Hillside", quote: "Tôi canh tác trên mảnh đất cha mình từng gắn bó. Giờ đây, tôi có thể thấu hiểu nó như cách cha tôi vẫn cảm nhận.", name: "Wei Chen", role: "Chủ nông trại", image: "/images/acre/grower-wei.webp", alt: "Chân dung Wei Chen tại nông trại trên sườn đồi" },
  ];
  const [index, setIndex] = useState(1);
  const selected = testimonials[index];
  const move = (step: number) => setIndex((current) => (current + step + testimonials.length) % testimonials.length);
  return <section className="voices-section" id="voices"><div className="voice-image" key={selected.farm}><img src={selected.image} alt={selected.alt} /><span>{selected.farm}</span></div><div className="voice-copy" key={`${selected.farm}-copy`}><SectionLabel number="10">LỜI CHIA SẺ</SectionLabel><blockquote>{selected.quote}</blockquote><div className="voice-footer"><div className="voice-author"><img src={selected.image} alt="" /><span><b>{selected.name}</b><small>{selected.role} · {selected.farm}</small></span></div><div className="voice-controls"><button aria-label="Lời chia sẻ trước" onClick={() => move(-1)}>←</button><button aria-label="Lời chia sẻ tiếp theo" onClick={() => move(1)}>→</button></div></div></div></section>;
}

function InsightsSection() {
  const notes = [
    ["CANH TÁC CHÍNH XÁC", "18 THÁNG 9, 2026", "Thửa ruộng không còn là đơn vị nhỏ nhất trong canh tác", "Vì sao quản lý theo từng hàng cây thay vì cả cánh đồng đang thay đổi cách nhà nông hoạch định mùa vụ.", photos.precision, "/insights/the-acre-is-no-longer-the-smallest-unit-of-farming"],
    ["QUẢN LÝ NGUỒN NƯỚC", "29 THÁNG 8, 2026", "Tưới theo nhu cầu, không theo lịch", "Dữ liệu độ ẩm đất cho thấy chúng ta đã có thể tiết kiệm lượng nước tưới như thế nào.", photos.water, "/insights/irrigating-by-need-not-by-calendar"],
    ["TRÍ TUỆ CÂY TRỒNG", "7 THÁNG 8, 2026", "Nhận biết cây căng thẳng trước khi lá đổi màu", "Tín hiệu sớm từ dữ liệu tán cây và cách hành động kịp thời.", photos.crop, "/insights/seeing-stress-before-the-leaf-does"],
  ];
  return <section className="insights-section" id="insights"><div className="services-head"><div><SectionLabel number="11">NHẬT KÝ ĐỒNG RUỘNG</SectionLabel><h2>Ý tưởng từ<br />thực tiễn.</h2></div><a className="text-link" href="/insights">Tất cả bài viết <Arrow diagonal /></a></div><div className="insights-grid">{notes.map(([category, date, title, desc, img, href], i) => <a className={`insight-card ${i === 0 ? "insight-featured" : ""}`} href={href} key={title}><img src={img} alt={title} /><div className="insight-meta"><span>{category}</span><span>{date}</span></div><h3>{title}</h3><p>{desc}</p></a>)}</div></section>;
}

function Footer() {
  const groups = [
    ["ĐIỀU HƯỚNG", ["Trang chủ|/", "Về chúng tôi|/about", "Công nghệ|#technology", "Dịch vụ|/services", "Góc nhìn|/insights", "Liên hệ|/contact", "404|/404"]],
    ["DỊCH VỤ", ["Trí tuệ cây trồng|/services/crop-intelligence", "Canh tác chính xác|/services/precision-farming", "Tưới tiêu thông minh|/services/smart-irrigation", "Đất và tài nguyên|/services/soil-resource-management"]],
    ["THEO DÕI", ["Instagram|https://instagram.com/", "LinkedIn|https://linkedin.com/", "X|https://x.com/"]],
  ];
  return <footer className="footer"><div className="footer-main"><div className="footer-brand"><a className="wordmark" href="#top"><img className="brand-logo" src="/images/thanhha-logo.png" alt="Thanh Hà — Đồng hành cùng nông nghiệp" /></a><p>Nông nghiệp,<br />tái định nghĩa.</p></div>{groups.map(([heading, items]) => <nav className="footer-links" key={heading as string}><span>{heading}</span>{(items as string[]).map((item) => { const [label, href] = item.split("|"); return <a key={label} href={href}>{label}</a>; })}</nav>)}</div><div className="footer-bottom"><span>© 2026 Thanh Hà. Bảo lưu mọi quyền.</span><nav><a href="/legal/privacy-policy">Chính sách quyền riêng tư</a><a href="/legal/terms-of-service">Điều khoản dịch vụ</a><a href="/legal/cookie-policy">Chính sách cookie</a></nav></div></footer>;
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

  return <main><Hero /><FieldSection /><AboutSection /><TechnologySection /><ServicesSection /><SignalsSection /><ProcessSection /><ImpactSection /><ApproachSection /><VoicesSection /><InsightsSection /><section className="closing-wrap"><div className="closing"><video autoPlay muted loop playsInline poster={heroPoster} src={heroVideo} /><div className="closing-scrim" /><div><h2>Cùng vun đắp tương lai tốt đẹp hơn.</h2><p>Mang quyết định sáng suốt đến mọi cánh đồng.</p><PillLink href="/contact">Bắt đầu trò chuyện</PillLink></div></div></section><Footer /></main>;
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Droplets, 
  ChevronRight, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Star, 
  Zap, 
  Clock, 
  PlayCircle,
  Menu,
  X,
  Instagram,
  Facebook,
  Search,
  MessageSquare
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
            <Droplets className="text-white w-6 h-6" />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
            NICE BUBBLE <span className="text-brand-500">24</span>
          </span>
        </div>

        <div className={`hidden md:flex items-center gap-10 font-medium ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
          <a href="#brand" className="hover:text-brand-500 transition-colors">브랜드 스토리</a>
          <a href="#features" className="hover:text-brand-500 transition-colors">매장 특장점</a>
          <a href="#process" className="hover:text-brand-500 transition-colors">창업 절차</a>
          <a href="#locations" className="hover:text-brand-500 transition-colors">전국 매장</a>
          <a href="#news" className="hover:text-brand-500 transition-colors">고객센터</a>
        </div>

        <div className="flex items-center gap-4">
          <button className={`hidden sm:flex items-center px-5 py-2.5 rounded-full font-bold transition-all ${
            isScrolled 
              ? 'bg-brand-600 text-white hover:bg-brand-700' 
              : 'bg-white text-brand-600 hover:bg-brand-50'
          }`}>
            상담 신청하기
          </button>
          <button 
            className={`md:hidden p-2 rounded-lg ${isScrolled ? 'text-slate-900' : 'text-white'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-100 p-6 flex flex-col gap-4 shadow-xl md:hidden"
          >
            <a href="#brand" className="text-lg font-semibold text-slate-800">브랜드 스토리</a>
            <a href="#features" className="text-lg font-semibold text-slate-800">매장 특장점</a>
            <a href="#process" className="text-lg font-semibold text-slate-800">창업 절차</a>
            <a href="#locations" className="text-lg font-semibold text-slate-800">전국 매장</a>
            <button className="w-full py-4 bg-brand-600 text-white rounded-xl font-bold">
              상담 신청하기
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[700px] flex items-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80&w=2600" 
          alt="Car Wash Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/60 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full pt-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-400 font-bold text-sm mb-6 uppercase tracking-wider">
            Premium Car Wash Culture
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-8 text-balance">
            대한민국 1등 <br />
            <span className="text-brand-500 underline decoration-brand-500/30 decoration-8 underline-offset-8">프리미엄 세차</span> 전문
            <br />나이스버블 24
          </h1>
          <p className="text-xl text-white/70 leading-relaxed max-w-lg mb-10 text-balance">
            단순한 세차를 넘어선 휴식과 문화의 공간. 
            나이스버블24는 차별화된 기술력과 감각적인 디자인으로 
            최고의 세차 경험을 선사합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 bg-brand-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-brand-700 transition-all shadow-lg shadow-brand-600/25">
              가맹 문의하기 <ChevronRight className="w-5 h-5" />
            </button>
            <button className="flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all">
              매장 둘러보기 <MapPin className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-16 flex items-center gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-white/40 text-sm font-medium mb-1">성공 가맹점</p>
              <p className="text-2xl font-bold text-white">250+</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-white/40 text-sm font-medium mb-1">고객 만족도</p>
              <p className="text-2xl font-bold text-white">99%</p>
            </div>
            <div className="w-px h-10 bg-white/10"></div>
            <div>
              <p className="text-white/40 text-sm font-medium mb-1">전문가 지원</p>
              <p className="text-2xl font-bold text-white">24h</p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-0 top-0 w-1/3 hidden xl:block"
      >
        <div className="h-full bg-brand-600/10 backdrop-blur-sm border-l border-white/10 p-12 flex flex-col justify-center">
          <div className="mb-12">
            <div className="w-12 h-12 bg-brand-500 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">빠른 상담</h3>
            <p className="text-white/60">전문가와의 1:1 상담을 통해 가장 적합한 창업 솔루션을 확인해보세요.</p>
          </div>
          
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="이름" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-500 transition-colors"
            />
            <input 
              type="tel" 
              placeholder="연락처" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3.5 text-white placeholder:text-white/20 focus:outline-none focus:border-brand-500 transition-colors"
            />
            <div className="flex items-center gap-3 py-2">
              <input type="checkbox" id="privacy-hero" className="w-4 h-4 accent-brand-500 rounded" />
              <label htmlFor="privacy-hero" className="text-xs text-white/40">개인정보 수집 및 이용에 동의합니다.</label>
            </div>
            <button className="w-full py-4 bg-white text-brand-900 font-bold rounded-xl hover:bg-brand-50 transition-colors">
              상담 신청하기
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

const Statistics = () => {
  const stats = [
    { label: '누적 가맹점 수', value: '254개', icon: MapPin },
    { label: '월 평균 방문객', value: '450,000+', icon: Droplets },
    { label: '고객 재방문율', value: '88%', icon: Star },
    { label: '평균 수익률', value: '38%', icon: Zap },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-brand-50 rounded-2xl text-brand-600 mb-6">
                <stat.icon />
              </div>
              <p className="text-slate-500 font-medium mb-1">{stat.label}</p>
              <p className="text-4xl font-extrabold text-slate-900 tracking-tight">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      title: "프리미엄 세정 시스템",
      desc: "특수 설계된 고압 노즐과 나이스버블만의 전용 세제를 통해 도장면 손상 없이 완벽한 세척력을 자랑합니다.",
      icon: Droplets,
      img: "https://cdn.imweb.me/upload/S20220215d5bc0d1f16d2a/74d8ca4462497.jpg"
    },
    {
      title: "IOT 무인 운영 시스템",
      desc: "24시간 매장 상주 없이도 스마트폰 하나로 현장을 관리하고 고객 피드백을 실시간으로 처리할 수 있습니다.",
      icon: Zap,
      img: "https://cdn.imweb.me/upload/S20220215d5bc0d1f16d2a/4d0472a56cf75.png"
    },
    {
      title: "감각적인 디자인 공간",
      desc: "칙칙한 세차장이 아닌, 카페처럼 머물고 싶은 고급스러운 인테리어 디자인으로 여성 및 MZ세대 고객을 유입합니다.",
      icon: Star,
      img: "https://cdn.imweb.me/upload/S20220215d5bc0d1f16d2a/65a5c34a0906c.jpg"
    }
  ];

  return (
    <section id="features" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">나이스버블24만의 <br className="sm:hidden" /> 압도적인 경쟁력</h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">기존 세차장과는 차원이 다른 혁신적인 기술과 공간 기획으로 성공적인 창업을 지원합니다.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[2rem] overflow-hidden wanted-shadow transition-all hover:-translate-y-2"
            >
              <div className="h-64 overflow-hidden relative">
                <img src={f.img} alt={f.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-6 left-6 w-12 h-12 bg-white/90 backdrop-blur rounded-xl flex items-center justify-center text-brand-600 shadow-sm">
                  <f.icon />
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.desc}</p>
                <div className="mt-8 flex items-center gap-2 text-brand-600 font-bold">
                  자세히 보기 <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: '상담 및 미팅', desc: '창업 환경과 예산에 맞춘 맞춘 상권 분석', icon: '01' },
    { title: '현장 실측', desc: '전문 기술자가 방문하여 부지 적합성 판단', icon: '02' },
    { title: '인허가 신청', desc: '세차장 설치에 필요한 복잡한 법규 검토', icon: '03' },
    { title: '시공 및 설치', desc: '나이스버블 본사 소속 시공팀의 정밀 시공', icon: '04' },
    { title: '테스트 및 교육', desc: '장비 작동 상태 최종 점검 및 점주 교육', icon: '05' },
    { title: '그랜드 오픈', desc: '오픈 기념 마케팅 지원 및 상시 관리', icon: '06' },
  ];

  return (
    <section id="process" className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-20 gap-8">
          <div>
            <span className="text-brand-600 font-bold tracking-widest text-sm uppercase mb-4 block">Process Guide</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">당신의 성공을 위한 <br /> 치밀한 창업 로드맵</h2>
          </div>
          <p className="text-slate-500 text-lg max-w-md lg:text-right">
            첫 상담부터 오픈 후 사후 관리까지, <br />
            나이스버블24의 전문가들이 모든 과정을 함께합니다.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-8 relative">
          <div className="hidden lg:block absolute top-[60px] left-0 right-0 h-px bg-slate-100 z-0"></div>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative group pt-16"
            >
              <div className="absolute top-0 left-0 text-[100px] font-black text-slate-100/60 leading-none group-hover:text-brand-100 transition-colors z-0 select-none pointer-events-none">
                {step.icon}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-brand-600 font-black mb-6 group-hover:border-brand-500 group-hover:bg-brand-500 group-hover:text-white transition-all shadow-sm">
                  {i + 1}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 truncate">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SuccessGallery = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  const cases = [
    {
      img: "https://cdn.imweb.me/upload/S20220215d5bc0d1f16d2a/c3f0523a00ccd.jpg",
      location: "강남 반포점"
    },
    {
      img: "https://cdn.imweb.me/upload/S20220215d5bc0d1f16d2a/d94f1f2028312.jpg",
      location: "분당 정자점"
    },
    {
      img: "https://images.unsplash.com/photo-1571127236794-81c0bbfe1ce3?auto=format&fit=crop&q=80&w=1200",
      location: "송도 센트럴점"
    },
    {
      img: "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&q=80&w=1200",
      location: "해운대 마린점"
    }
  ];

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-slate-900">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-12 w-full">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-px bg-brand-500"></div>
            <span className="text-brand-500 font-bold uppercase tracking-wider text-sm">Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">매장 시공 사례</h2>
          <p className="text-white/50 text-xl">휠을 내려 나이스버블24의 프리미엄 공간들을 확인해보세요.</p>
        </div>

        <div className="flex items-center px-6 md:px-24">
          <motion.div style={{ x }} className="flex gap-8">
            {cases.map((c, i) => (
              <div 
                key={i}
                className="flex-shrink-0 w-[450px] md:w-[700px] h-[350px] md:h-[450px] rounded-[2.5rem] overflow-hidden relative group shadow-2xl"
              >
                <img src={c.img} alt={c.location} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-10 left-10">
                  <p className="text-brand-400 font-bold text-sm mb-2">프리미엄 지점 0{i+1}</p>
                  <h4 className="text-2xl md:text-3xl font-bold text-white">{c.location}</h4>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-16 w-full text-center">
          <button className="inline-flex items-center gap-3 px-10 py-5 bg-white text-slate-950 rounded-2xl font-bold hover:bg-brand-50 transition-all shadow-xl">
            인스타그램으로 더보기 <Instagram className="w-5 h-5 text-pink-500" />
          </button>
        </div>
      </div>
    </section>
  );
};

const QuickInquiryForm = () => {
  return (
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-600 rounded-[3rem] p-12 md:p-24 relative overflow-hidden flex flex-col lg:flex-row gap-20 items-center">
          {/* Abstract Decorations */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-500 rounded-full blur-[100px] opacity-50"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-slate-900 rounded-full blur-[100px] opacity-20"></div>

          <div className="relative z-10 lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-[1.1]">지금 바로 <br /> 창업 상담을 <br /> 시작하세요</h2>
            <p className="text-white/80 text-xl mb-12">
              불확실한 미래, 안정적인 수익 모델을 찾고 계신가요? <br />
              나이스버블24의 전문 상담원이 24시간 이내에 답변 드립니다.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <Phone className="text-white w-8 h-8" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">창업 문의 대표번호</p>
                  <p className="text-3xl font-black text-white">1811-7288</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur rounded-2xl flex items-center justify-center">
                  <Clock className="text-white w-8 h-8" />
                </div>
                <div>
                  <p className="text-white/60 text-sm font-medium">상담 가능 시간</p>
                  <p className="text-2xl font-bold text-white">AM 09:00 ~ PM 21:00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 lg:w-1/2 w-full bg-white rounded-[2rem] p-10 md:p-14 shadow-2xl">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-500 mb-2">이름</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-500 transition-colors" placeholder="홍길동" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-500 mb-2">연락처</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-500 transition-colors" placeholder="010-0000-0000" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-2">희망 지역</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-500 transition-colors" placeholder="서울시 강남구" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-500 mb-2">문의 내용</label>
                <textarea rows={3} className="w-full bg-slate-50 border border-slate-100 rounded-xl px-5 py-4 focus:outline-none focus:border-brand-500 transition-colors resize-none" placeholder="문의하실 내용을 입력해주세요."></textarea>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" id="privacy-main" className="w-5 h-5 accent-brand-500" />
                <label htmlFor="privacy-main" className="text-sm text-slate-400">개인정보 수집 및 마케팅 활용 동의 (필수)</label>
              </div>
              <button className="w-full py-5 bg-brand-600 text-white font-black text-lg rounded-xl hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/20">
                무료 창업 컨설팅 신청하기
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const MediaSection = () => {
  const news = [
    {
      publisher: '경제매거진Y',
      title: '셀프세차 브랜드 나이스버블24, 전국 250호점 돌파... 성공 비결은?',
      date: '2024.03.15',
      img: 'https://cdn.imweb.me/upload/S20220215d5bc0d1f16d2a/c52d3173ad744.jpg'
    },
    {
      publisher: '데일리창업',
      title: '나이스버블24, MZ세대를 사로잡은 고급스러운 무인 시스템 도입',
      date: '2024.02.10',
      img: 'https://cdn.imweb.me/upload/S20220215d5bc0d1f16d2a/13441021af6ac.jpg'
    },
    {
      publisher: '테크인사이드',
      title: '특허받은 프리미엄 세정액, 나이스버블24의 기술력이 차이를 만든다',
      date: '2024.01.05',
      img: 'https://cdn.imweb.me/upload/S20220215d5bc0d1f16d2a/d5e6d6851b35d.jpg'
    }
  ];

  return (
    <section id="news" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">언론에 비친 나이스버블24</h2>
            <p className="text-slate-500 text-lg">신뢰와 가치로 인정받는 프리미엄 세차장의 표준이 됩니다.</p>
          </div>
          <button className="text-brand-600 font-bold flex items-center gap-2 px-6 py-3 bg-white rounded-xl border border-slate-200 hover:bg-slate-50 transition-colors">
            전체 보도자료 확인하기 <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-brand-600 font-bold bg-brand-50 px-3 py-1 rounded-lg text-xs">{item.publisher}</span>
                  <span className="text-slate-400 text-xs">{item.date}</span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 leading-snug mb-6 line-clamp-2">{item.title}</h4>
                <button className="text-slate-400 hover:text-brand-600 font-medium text-sm flex items-center gap-1 transition-colors">
                  기사 전문 보기 <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center">
                <Droplets className="text-white w-6 h-6" />
              </div>
              <span className="text-xl font-bold tracking-tight">
                NICE BUBBLE <span className="text-brand-500">24</span>
              </span>
            </div>
            <p className="text-white/50 leading-relaxed mb-8">
              나이스버블24는 차별화된 기술력과 <br />
              고객 중심의 공간 기획으로 <br />
              새로운 세차 문화를 선도합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-600 transition-colors">
                <MessageSquare className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold mb-8 text-white/90">브랜드 소개</h5>
            <div className="flex flex-col gap-4 text-white/40">
              <a href="#" className="hover:text-brand-500 transition-colors">CEO 인사말</a>
              <a href="#" className="hover:text-brand-500 transition-colors">브랜드 아이덴티티</a>
              <a href="#" className="hover:text-brand-500 transition-colors">특허 및 인증</a>
              <a href="#" className="hover:text-brand-500 transition-colors">전국 가맹점 현황</a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold mb-8 text-white/90">창업 안내</h5>
            <div className="flex flex-col gap-4 text-white/40">
              <a href="#" className="hover:text-brand-500 transition-colors">창업 경쟁력</a>
              <a href="#" className="hover:text-brand-500 transition-colors">창업 비용 안내</a>
              <a href="#" className="hover:text-brand-500 transition-colors">창업 FAQ</a>
              <a href="#" className="hover:text-brand-500 transition-colors">1:1 창업 상담</a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h5 className="font-bold mb-8 text-white/90">고객 지원</h5>
            <div className="flex flex-col gap-4 text-white/40">
              <a href="#" className="hover:text-brand-500 transition-colors">공지사항</a>
              <a href="#" className="hover:text-brand-500 transition-colors">자주 묻는 질문</a>
              <a href="#" className="hover:text-brand-500 transition-colors">제휴 및 입점 문의</a>
              <a href="#" className="hover:text-brand-500 transition-colors">불만 접수</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-12 text-sm text-white/30 flex flex-col md:flex-row justify-between gap-6">
          <div className="space-y-1">
            <p>상호 : (주)나이스버블24 | 대표 : 김나이스 | 사업자등록번호 : 123-45-67890</p>
            <p>주소 : 서울특별시 강남구 테헤란로 123, 나이스빌딩 10층</p>
            <p>이메일 : info@nicebubble24.co.kr | TEL : 1811-7288 | FAX : 02-123-4567</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">서비스 이용약관</a>
            <a href="#" className="hover:text-white transition-colors font-bold text-white/60">개인정보처리방침</a>
          </div>
        </div>
        <div className="text-center mt-12 text-[10px] text-white/20 uppercase tracking-widest font-medium">
          &copy; 2024 NICE BUBBLE 24. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative">
      <Navbar />
      <Hero />
      <Statistics />
      <Features />
      <Process />
      <SuccessGallery />
      <MediaSection />
      <QuickInquiryForm />
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-10 right-10 z-[60] flex flex-col gap-4">
        <button className="w-16 h-16 bg-yellow-400 text-slate-900 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <MessageSquare fill="currentColor" className="w-7 h-7" />
        </button>
        <button className="w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
          <Phone className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}


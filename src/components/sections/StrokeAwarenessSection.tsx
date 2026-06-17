"use client";

import { useState } from "react";
import {
  Scale,
  Eye,
  Smile,
  Armchair,
  Mic,
  Clock3,
} from "lucide-react";

const signs = [
  {
    letter: "B",
    title: "Balance Difficulty",
    icon: Scale,
    description:
      "Sudden dizziness, loss of balance, difficulty walking, or problems with coordination can be an early warning sign of stroke.",
  },
  {
    letter: "E",
    title: "Eyesight Changes",
    icon: Eye,
    description:
      "Sudden blurred vision, double vision, or loss of vision in one or both eyes requires immediate medical attention.",
  },
  {
    letter: "F",
    title: "Facial Droop",
    icon: Smile,
    description:
      "One side of the face may droop or feel numb. Ask the person to smile and check whether the smile is uneven.",
  },
  {
    letter: "A",
    title: "Arm Weakness",
    icon: Armchair,
    description:
      "Weakness or numbness in one arm is a common stroke symptom. Ask the person to raise both arms and observe any drift.",
  },
  {
    letter: "S",
    title: "Speech Difficulty",
    icon: Mic,
    description:
      "Speech may become slurred, difficult to understand, or the person may be unable to speak properly.",
  },
  {
    letter: "T",
    title: "Time To Act",
    icon: Clock3,
    description:
      "If you notice any of these signs, seek emergency medical care immediately. Early treatment can save lives and reduce disability.",
  },
];

export default function StrokeAwarenessSection() {
  const [active, setActive] = useState(0);

  return (
   <section className="py-10 lg:py-14 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
       <div className="text-center mb-0 lg:mb-1">
          <span className="inline-block px-4 py-1 rounded-full bg-red-100 text-red-600 text-sm font-semibold">
            Stroke Awareness
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900">
            Know The Sudden Signs Of Stroke
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            Recognizing stroke symptoms early can save a life.
            Remember the B.E.F.A.S.T warning signs and seek immediate
            medical help.
          </p>
        </div>

       {/* <div className="grid lg:grid-cols-[32%_68%] gap-2 items-center"> */}
          <div className="grid lg:grid-cols-[45%_55%] gap-6 items-center lg:-mt-12">
          {/* LEFT SIDE */}
<div className="flex flex-col justify-center">
  <div className="space-y-7">
    {signs.map((item, index) => {
      const isActive = active === index;

      return (
        <div
          key={item.letter}
          onMouseEnter={() => setActive(index)}
          onClick={() => setActive(index)}
          className="cursor-pointer group"
        >
          {/* Main Row */}
          <div className="flex items-center gap-6">
            {/* Letter */}
            <span
              className={`text-5xl md:text-6xl font-black transition-all duration-300 ${
                isActive
                  ? "text-red-500 scale-110"
                  : "text-slate-300"
              }`}
            >
              {item.letter}
            </span>

            {/* Title */}
            <h3
              className={`text-2xl md:text-3xl lg:text-4xl font-semibold transition-all duration-300 ${
                isActive
                  ? "text-slate-900 translate-x-2"
                  : "text-slate-700"
              }`}
            >
              {item.title}
            </h3>
          </div>

          {/* Animated Line */}
          <div
            className={`ml-[72px] transition-all duration-500 overflow-hidden ${
              isActive
                ? "max-w-[120px] opacity-100 mt-2"
                : "max-w-0 opacity-0"
            }`}
          >
            <div className="h-[3px] bg-red-500 rounded-full" />
          </div>

          {/* Description */}
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isActive
                ? "max-h-32 opacity-100 mt-3"
                : "max-h-0 opacity-0"
            }`}       
          >
            <p className="ml-[72px] text-slate-500 leading-relaxed max-w-lg">
              {item.description}
            </p>
          </div>
        </div>
      );
    })}
  </div>
</div>

          {/* RIGHT SIDE IMAGE */}
<div className="flex justify-center min-h-[700px] lg:min-h-[850px] lg:-translate-x-8 lg:-translate-y-4 overflow-hidden">
  <div className="relative lg:-ml-20 lg:mt-36">
    
    {/* Blue ambient glow */}
    <div className="absolute inset-0 pointer-events-none z-[1] animate-[pulseBlue_3.5s_ease-in-out_infinite]"
      style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(30,130,255,0.1) 0%, transparent 65%)' }} />

    {/* Red stroke glow */}
    <div className="absolute top-[12%] right-[18%] w-40 h-40 rounded-full pointer-events-none z-[3] animate-[pulseRed_1.8s_ease-in-out_infinite]"
      style={{ background: 'radial-gradient(circle, rgba(255,60,0,0.5) 0%, rgba(220,30,0,0.2) 50%, transparent 75%)' }} />

    {/* Ripple rings */}
    {[0, 0.75, 1.5].map((delay, i) => (
      <div key={i} className="absolute rounded-full pointer-events-none z-[4]"
        style={{
          top: 'calc(12% + 35px)', right: 'calc(18% + 35px)',
          width: 90, height: 90,
          border: '1.5px solid rgba(255,70,0,0.7)',
          animation: `rippleOut 2.2s ease-out ${delay}s infinite`
        }} />
    ))}

    {/* Scan line */}
    <div className="absolute left-0 right-0 h-px pointer-events-none z-[6]"
      style={{
        background: 'linear-gradient(90deg, transparent, rgba(0,200,255,0.4), transparent)',
        animation: 'scanLine 5s linear infinite'
      }} />

    {/* Particles */}
    {[
      { top:'18%', right:'22%', d:'2.2s', dl:'0s',   tx:'-15px', ty:'-35px', c:'rgba(255,90,0,0.9)' },
      { top:'22%', right:'19%', d:'1.9s', dl:'0.5s', tx:'10px',  ty:'-28px', c:'rgba(255,90,0,0.9)' },
      { top:'16%', right:'25%', d:'2.6s', dl:'0.9s', tx:'-20px', ty:'-30px', c:'rgba(255,170,0,0.85)' },
      { top:'25%', right:'21%', d:'2.0s', dl:'1.3s', tx:'18px',  ty:'-22px', c:'rgba(255,170,0,0.85)' },
      { top:'20%', right:'28%', d:'2.4s', dl:'0.3s', tx:'-8px',  ty:'-40px', c:'rgba(255,90,0,0.9)' },
    ].map((p, i) => (
      <div key={i} className="absolute w-[3px] h-[3px] rounded-full pointer-events-none z-[5]"
        style={{
          top: p.top, right: p.right, background: p.c,
          animation: `floatUp ${p.d} ease-in ${p.dl} infinite`,
          '--tx': p.tx, '--ty': p.ty,
        } as React.CSSProperties} />
    ))}

    {/* Image with float + glow */}
<img
  src="/images/stroke.png"
  alt="Stroke Awareness"
  className="relative z-10 w-full max-w-[850px] lg:max-w-[1900px] xl:max-w-[1100px] object-contain"
/>
  </div>
</div>
        </div>
      </div>
    </section>
  );
}
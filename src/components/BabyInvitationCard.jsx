import React, { useState, useEffect } from 'react';
import babyGaneshaImg from '../assets/baby-ganesha.png';
import familyImg from '../assets/family.png';
import { VENUE_DATA } from '../data/venueData';
import { SakuraFlower, DaisyFlower } from './FloralMotifs';
import {
  Calendar,
  Clock,
  MapPin,
  Navigation,
  ExternalLink,
  Heart,
  Share2,
  Sparkles,
  Copy,
  Check,
  CalendarPlus,
  Flame
} from 'lucide-react';

export function BabyInvitationCard({ onOpenRsvp }) {
  const [copiedAddress, setCopiedAddress] = useState(false);

  // Dynamic real-time countdown to Sunday, 1st November 2026, 11:30 AM IST
  const calculateTimeLeft = () => {
    const targetDate = new Date('2026-11-01T11:30:00+05:30').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(VENUE_DATA.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  const handleWhatsAppShare = () => {
    const text = encodeURIComponent(
      `👶 Warm Invitation to our Baby's Naamkaran & Cradle Ceremony (नामकरण सोहळा)!\n\n` +
      `📅 Date: Sunday, 1st November 2026 | 11:30 AM Onwards\n` +
      `🏛️ Venue: Venkateshwara MultiPurpose Hall, Solapur\n\n` +
      `📍 Google Maps Location:\n${VENUE_DATA.googleMapsUrl}\n\n` +
      `We look forward to your gracious presence and blessings! 🙏`
    );
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Baby Naamkaran & Cradle Ceremony");
    const details = encodeURIComponent(
      "Auspicious Baby Naming & Cradle Ceremony followed by festive Mahaprasad Lunch at Venkateshwara MultiPurpose Hall."
    );
    const location = encodeURIComponent(VENUE_DATA.fullAddress);
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20261101T060000Z/20261101T103000Z`;
    window.open(gCalUrl, '_blank');
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto my-3 sm:my-5 px-3 sm:px-4 z-20">

      {/* 2-Column Layout: Background-less Left + Seamlessly Blended Right */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch animate-card-entry">

        {/* ================= COLUMN 1 (LEFT): Background-less Divine Ceremony Invitation ================= */}
        <div className="relative p-4 sm:p-6 lg:p-7 flex flex-col justify-between overflow-hidden">

          {/* Top-Left Corner: Solid Sakura Blossom Watermark Accent */}
          <div className="absolute top-1 left-1 pointer-events-none select-none z-0">
            <SakuraFlower
              className="w-14 h-14 sm:w-16 sm:h-16 opacity-85"
              filled={true}
              color="#a1204bff"
            />
          </div>

          {/* Bottom-Right Corner: Outline Sakura Blossom Watermark Accent */}
          <div className="absolute -bottom-2 -right-2 pointer-events-none select-none z-0">
            <SakuraFlower
              className="w-24 h-24 sm:w-28 sm:h-28 opacity-30"
              filled={false}
              color="#f498b83e"
              strokeWidth={2.5}
            />
          </div>

          {/* Content (Clean, background-less layout on warm canvas) */}
          <div className="relative z-10 flex flex-col items-center text-center space-y-4 sm:space-y-5">

            {/* Google Material 3 Pill Badge: Divine Invocation */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-xs border border-pink-200/80 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-[#E11D48]" />
              <span className="text-xs font-semibold text-[#831843] tracking-wider uppercase">
                ॥ श्री गणेशाय नमः ॥
              </span>
            </div>

            {/* Baby Ganesha Spotlight */}
            <div className="relative flex items-center justify-center w-full max-w-xs pt-1">
              {/* Left Diya */}
              <div className="flex flex-col items-center mr-3 animate-diya">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-400" />
                <div className="w-6 h-2.5 bg-[#831843] rounded-b-full border border-pink-200" />
                <span className="text-[10px] text-[#831843] font-bold mt-1">शुभ</span>
              </div>

              {/* Central Floating Ganesha Bubble */}
              <div className="relative">
                <div className="absolute -inset-2 rounded-full bg-rose-200/40 blur-md animate-aura pointer-events-none" />
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full p-2 bg-white/95 shadow-md border-2 border-pink-200/70 flex items-center justify-center overflow-hidden">
                  <img
                    src={babyGaneshaImg}
                    alt="Baby Lord Ganesha"
                    className="w-full h-full object-contain animate-ganesha select-none pointer-events-none"
                  />
                </div>
              </div>

              {/* Right Diya */}
              <div className="flex flex-col items-center ml-3 animate-diya">
                <Flame className="w-4 h-4 text-amber-500 fill-amber-400" />
                <div className="w-6 h-2.5 bg-[#831843] rounded-b-full border border-pink-200" />
                <span className="text-[10px] text-[#831843] font-bold mt-1">लाभ</span>
              </div>
            </div>

            {/* Joyous Invitation Header */}
            <div className="space-y-1">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-widest bg-pink-100/90 text-[#9F1239]">
                Joyous Celebration
              </span>

              <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto pt-1 leading-relaxed">
                "A brand new miracle has arrived to fill our lives with boundless love, laughter & light."
              </p>
            </div>

            {/* ================= EXACT STYLED COUNTDOWN CARD ================= */}
            <div className="w-full max-w-md bg-white p-5 sm:p-6 border border-[#EFE5E0] shadow-2xs text-left">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#7A283C] shrink-0" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#7A283C]">
                  COUNTDOWN TO CEREMONY
                </span>
              </div>

              {/* 4 Clean Countdown Metric Tiles */}
              <div className="grid grid-cols-4 gap-2.5 mt-4 text-center">
                <div className="py-3 px-1.5 bg-[#FAF6F3] border border-[#EFE5E0]">
                  <span className="text-xl sm:text-2xl font-bold text-[#2D1E20] block leading-none">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#5C4549] mt-1.5 block">
                    Days
                  </span>
                </div>
                <div className="py-3 px-1.5 bg-[#FAF6F3] border border-[#EFE5E0]">
                  <span className="text-xl sm:text-2xl font-bold text-[#2D1E20] block leading-none">
                    {timeLeft.hours}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#5C4549] mt-1.5 block">
                    Hours
                  </span>
                </div>
                <div className="py-3 px-1.5 bg-[#FAF6F3] border border-[#EFE5E0]">
                  <span className="text-xl sm:text-2xl font-bold text-[#2D1E20] block leading-none">
                    {timeLeft.minutes}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#5C4549] mt-1.5 block">
                    Mins
                  </span>
                </div>
                <div className="py-3 px-1.5 bg-[#FAF6F3] border border-[#EFE5E0]">
                  <span className="text-xl sm:text-2xl font-bold text-[#2D1E20] block leading-none">
                    {timeLeft.seconds}
                  </span>
                  <span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider text-[#5C4549] mt-1.5 block">
                    Secs
                  </span>
                </div>
              </div>

              <div className=" pt-4">
                {/* Card 1: Date & Auspicious Muhurat */}
                <div className="bg-white shadow-2xs">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#7A283C] shrink-0" />
                    <span className="text-sm text-[#5C4549]">
                      Sunday, 1st November 2026
                    </span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <Clock className="w-5 h-5 text-[#7A283C] shrink-0" />
                    <span className="text-sm text-[#5C4549]">
                      Auspicious Muhurat: 11:30 AM Onwards
                    </span>
                  </div>
                  <button
                    onClick={handleAddToCalendar}
                    className="w-full mt-5 py-2.5 px-4 text-center text-sm font-semibold text-[#7A283C] bg-white border border-[#D9C7C0] hover:bg-stone-50 transition-colors cursor-pointer"
                  >
                    Add to Calendar
                  </button>
                </div>


              </div>


            </div>

          </div>
        </div>

        {/* ================= COLUMN 2 (RIGHT): Beautifully Blended Family & Venue Card ================= */}
        <div className="relative  rounded-[28px] sm:rounded-[32px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden  transition-all duration-300">



          {/* Bottom-Right Corner: Outline Daisy Blossom (From User Reference) */}
          <div className="absolute -bottom-4 -right-4 pointer-events-none select-none z-0">
            <DaisyFlower
              className="w-24 h-24 sm:w-28 sm:h-28 opacity-40"
              filled={false}
              color="#FBA585"
              strokeWidth={2.5}
            />
          </div>

          {/* Content (Elegantly Structured) */}
          <div className="relative z-10 flex flex-col justify-between h-full space-y-3">
            {/* ================= NAAMKARAN CEREMONY HEADER WITH GRADIENT UI DESIGN ================= */}
            <div className="relative w-full rounded-2xl bg-gradient-to-r  text-center overflow-hidden">
              {/* Subtle Ambient Gradient Aura */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-20 bg-gradient-to-r from-rose-300/20 via-amber-300/30 to-orange-300/20 blur-xl pointer-events-none" />

              {/* Top Auspicious Tag */}
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gradient-to-r from-rose-100/80 to-amber-100/80 border border-rose-200/50 mb-2">
                <Sparkles className="w-3 h-3 text-[#B45309]" />
                <span className="text-[14px] font-bold uppercase tracking-widest text-[#7A283C]">
                  NAAMKARAN CEREMONY
                </span>
                <Sparkles className="w-3 h-3 text-[#B45309]" />
              </div>



              {/* Decorative Subtle Line */}
              <div className="flex items-center justify-center gap-2 mt-2.5 opacity-80">
                <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#7A283C]/40" />
                <span className="text-[10px] text-[#7A283C] font-semibold">ॐ</span>
                <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#7A283C]/40" />
              </div>
            </div>



            {/* ================= NETFLIX-STYLE HERO BANNER WITH BOTTOM GRADIENT BLEND ================= */}
            <div className="relative w-full my-0.5 flex flex-col items-center justify-center">
              {/* Soft warm radiant aura behind family */}
              <div className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full bg-gradient-to-tr from-rose-200/40 via-amber-200/35 to-orange-200/40 blur-2xl pointer-events-none" />

              {/* Banner Container with bottom gradient blend */}
              <div className="relative w-full max-w-[270px] sm:max-w-[305px] mx-auto">
                <img
                  src={familyImg}
                  alt="Aarav with Parents"
                  className="w-full h-auto object-contain select-none drop-shadow-sm"
                  style={{
                    WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 98%)',
                    maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 62%, rgba(0,0,0,0) 98%)'
                  }}
                />

                {/* Netflix-style bottom gradient overlay to smoothly melt into the card UI */}
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F4ECE5] via-[#F4ECE5]/70 to-transparent pointer-events-none" />

                {/* Floating Caption Tag on the gradient transition */}
                <div className="absolute -bottom-1 inset-x-0 flex justify-center z-10">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#831843] bg-white/90 backdrop-blur-xs border border-pink-200/70 shadow-2xs">
                    ✨ Blessed with Love, Cherished Forever ✨
                  </span>
                </div>
              </div>

              {/* Card 2: Ceremony Venue & Actions */}
              <div className="bg-white p-5 sm:p-6 border border-[#EFE5E0] shadow-2xs mt-5">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#7A283C] shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7A283C]">
                    CEREMONY VENUE
                  </span>
                </div>

                <h4 className="text-lg sm:text-xl font-bold text-[#2D1E20] mt-3">
                  {VENUE_DATA.name}
                </h4>

                <p className="text-xs text-[#5C4549] mt-1 leading-relaxed">
                  {VENUE_DATA.fullAddress}
                </p>

                <div className="my-5 border-t border-[#EFE5E0]" />

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={VENUE_DATA.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 text-center text-sm font-semibold text-white bg-[#7A283C] hover:bg-[#661E2E] transition-colors"
                  >
                    Get GPS Route
                  </a>

                  <a
                    href={VENUE_DATA.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 text-center text-sm font-semibold text-[#7A283C] bg-white border border-[#D9C7C0] hover:bg-stone-50 transition-colors"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>



          </div>

        </div>

      </div>

      {/* Footer */}
      <div className="mt-5 text-center text-xs text-stone-500">
        <p>© 2026 Baby Naamkaran Ceremony • Venkateshwara MultiPurpose Hall, Solapur</p>
      </div>

    </div>
  );
}

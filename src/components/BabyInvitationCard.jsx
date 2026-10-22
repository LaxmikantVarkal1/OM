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
  const [timeLeft, setTimeLeft] = useState({ days: 24, hours: 8, minutes: 45, seconds: 12 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
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
      `📅 Date: Sunday, 15th November 2026 | 11:30 AM Onwards\n` +
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
    const gCalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=20261115T060000Z/20261115T103000Z`;
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
              <h1 className="text-2xl sm:text-3xl lg:text-[32px] font-extrabold tracking-tight text-[#541224] pt-1">
                NAAMKARAN CEREMONY
              </h1>
              <p className="text-sm sm:text-base font-semibold text-[#831843]">
                & CRADLE CEREMONY (बारसे / पाळणा सोहळा)
              </p>
              <p className="text-xs sm:text-sm text-stone-600 max-w-sm mx-auto pt-1 leading-relaxed">
                "A brand new miracle has arrived to fill our lives with boundless love, laughter & light."
              </p>
            </div>

            {/* Countdown Timer in clean white rounded tiles */}
            <div className="w-full max-w-md p-3.5 sm:p-4 rounded-2xl bg-white/90 backdrop-blur-xs border border-pink-200/60 shadow-sm">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#831843] block mb-2">
                Countdown to the Auspicious Ceremony:
              </span>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="px-2 py-2 rounded-xl bg-[#FFF8FA] border border-pink-200/70 shadow-2xs">
                  <span className="text-lg font-bold text-[#831843] block">{timeLeft.days}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#9F1239]">Days</span>
                </div>
                <div className="px-2 py-2 rounded-xl bg-[#FFF8FA] border border-pink-200/70 shadow-2xs">
                  <span className="text-lg font-bold text-[#831843] block">{timeLeft.hours}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#9F1239]">Hours</span>
                </div>
                <div className="px-2 py-2 rounded-xl bg-[#FFF8FA] border border-pink-200/70 shadow-2xs">
                  <span className="text-lg font-bold text-[#831843] block">{timeLeft.minutes}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#9F1239]">Mins</span>
                </div>
                <div className="px-2 py-2 rounded-xl bg-[#FFF8FA] border border-pink-200/70 shadow-2xs">
                  <span className="text-lg font-bold text-[#831843] block">{timeLeft.seconds}</span>
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#9F1239]">Secs</span>
                </div>
              </div>
            </div>

            {/* Action Buttons: RSVP & WhatsApp */}
            <div className="w-full max-w-md flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                onClick={onOpenRsvp}
                className="flex-1 py-3 px-5 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold text-xs tracking-wide shadow-md shadow-pink-900/15 flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Heart className="w-4 h-4 fill-current text-pink-200" />
                <span>Send Blessings & RSVP</span>
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="py-3 px-4 rounded-full bg-white hover:bg-pink-50 text-[#831843] font-semibold text-xs border border-pink-200/80 shadow-2xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                title="Share Invitation on WhatsApp"
              >
                <Share2 className="w-4 h-4 text-[#E11D48]" />
                <span>Share</span>
              </button>
            </div>

          </div>
        </div>

        {/* ================= COLUMN 2 (RIGHT): Beautifully Blended Family & Venue Card ================= */}
        <div className="relative bg-gradient-to-br from-[#FFF7F0] via-[#FFEADA]/90 to-[#FFF3E8] rounded-[32px] sm:rounded-[36px] p-5 sm:p-7 flex flex-col justify-between overflow-hidden shadow-lg shadow-orange-900/5 border border-orange-100/90 transition-all duration-300 hover:shadow-xl">



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
          <div className="relative z-10 flex flex-col justify-between h-full space-y-4">

            {/* Header: Auspicious Muhurat Pill Banner & Date */}
            <div className="flex flex-col items-center sm:items-start space-y-2">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-xs border border-orange-200/70 shadow-2xs mx-auto sm:mx-0">
                <Calendar className="w-3.5 h-3.5 text-[#EA580C]" />
                <span className="text-xs font-semibold text-[#7C2D12] tracking-wider uppercase">
                  Auspicious Muhurat & Venue
                </span>
              </div>

              {/* Date & Time Container */}
              <div className="w-full p-3 sm:p-3.5 rounded-2xl bg-white/95 backdrop-blur-xs border border-orange-100 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
                <div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-[#7C2D12] font-bold text-sm sm:text-base">
                    <Calendar className="w-4 h-4 text-[#EA580C]" />
                    <span>Sunday, 15th November 2026</span>
                  </div>
                  <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[#9A3412] font-semibold mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-[#EA580C]" />
                    <span>Auspicious Muhurat: 11:30 AM Onwards</span>
                  </div>
                </div>

                <button
                  onClick={handleAddToCalendar}
                  className="px-3.5 py-1.5 rounded-full bg-[#FFEADA] hover:bg-[#FED7AA] text-[#7C2D12] font-semibold text-xs border border-orange-200/80 flex items-center gap-1.5 transition-colors cursor-pointer shrink-0"
                >
                  <CalendarPlus className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Add to Calendar</span>
                </button>
              </div>
            </div>

            {/* Google-styled Venue Card */}
            <div className="p-3 sm:p-3.5 rounded-2xl bg-white/95 border border-orange-100 shadow-sm space-y-2">
              <div className="flex items-start justify-between gap-2.5">
                <div className="flex items-start gap-2.5">
                  <div className="p-2 rounded-xl bg-[#FFEADA] text-[#EA580C] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#EA580C] block">
                      Ceremony Venue
                    </span>
                    <h4 className="text-sm sm:text-base font-bold text-[#5C2817] leading-snug">
                      {VENUE_DATA.name}
                    </h4>

                    <p className="text-[11px] text-stone-600 mt-0.5 leading-relaxed">
                      {VENUE_DATA.fullAddress}
                    </p>
                  </div>
                </div>


              </div>

              {/* Navigation Action Buttons */}
              <div className="pt-3 border-t border-orange-100 flex flex-wrap gap-2">
                <a
                  href={VENUE_DATA.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] py-2 px-3.5 rounded-full bg-[#EA580C] hover:bg-[#C2410C] text-white font-medium text-xs flex items-center justify-center gap-1.5 transition-all shadow-2xs hover:shadow-xs"
                >
                  <Navigation className="w-3.5 h-3.5 fill-current" />
                  <span>Get GPS Route</span>
                </a>

                <a
                  href={VENUE_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 px-3.5 rounded-full bg-[#FFEADA] hover:bg-[#FED7AA] text-[#7C2D12] font-medium text-xs flex items-center justify-center gap-1.5 border border-orange-200 transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#EA580C]" />
                  <span>Open in Google Maps</span>
                </a>
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
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#FFEADA] via-[#FFEADA]/70 to-transparent pointer-events-none" />

                {/* Floating Caption Tag on the gradient transition */}
                <div className="absolute -bottom-1 inset-x-0 flex justify-center z-10">
                  <span className="px-3.5 py-1 rounded-full text-[11px] font-semibold text-[#831843] bg-white/90 backdrop-blur-xs border border-pink-200/70 shadow-2xs">
                    ✨ Blessed with Love, Cherished Forever ✨
                  </span>
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

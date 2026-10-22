import React, { useState } from 'react';
import { X, Heart, Send, Check } from 'lucide-react';

export function RsvpModal({ isOpen, onClose, babyName }) {
  const [guestName, setGuestName] = useState('');
  const [attending, setAttending] = useState('yes');
  const [guestCount, setGuestCount] = useState('2');
  const [blessing, setBlessing] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      // auto close after 2.5s
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/40 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-md bg-[#FAF7F2] rounded-[28px] border border-pink-100 shadow-2xl overflow-hidden animate-card-entry">
        {/* Header (Pastel Pink Container) */}
        <div className="bg-[#FDE8EF] p-5 text-[#541224] border-b border-pink-100 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#E11D48] shadow-2xs">
              <Heart className="w-4 h-4 fill-current" />
            </div>
            <div>
              <h3 className="font-bold text-base text-[#541224] leading-snug">
                Send Blessings & RSVP
              </h3>
              <p className="text-[11px] text-[#831843] font-medium">
                Celebrate with our family
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-stone-500 hover:text-stone-800 hover:bg-white/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 animate-bounce">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-[#831843]">
              Dhanyavaad! (धन्यवाद)
            </h4>
            <p className="text-sm text-stone-700">
              Your blessings and warm wishes have been received with love for {babyName}! We look forward to celebrating together.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 text-left">
            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Your Full Name:
              </label>
              <input
                type="text"
                required
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                placeholder="e.g. Ramesh & Family"
                className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3.5 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Will You Attend?
                </label>
                <select
                  value={attending}
                  onChange={(e) => setAttending(e.target.value)}
                  className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                >
                  <option value="yes">Joyfully Yes!</option>
                  <option value="maybe">Will Try Best</option>
                  <option value="no">Sending Blessings</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                  Number of Guests:
                </label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3 py-2.5 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 Persons</option>
                  <option value="3">3-4 Family Members</option>
                  <option value="5+">5+ Family Members</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1.5">
                Blessings / Message for Baby:
              </label>
              <textarea
                rows={3}
                value={blessing}
                onChange={(e) => setBlessing(e.target.value)}
                placeholder="May Lord Ganesha bless the baby with health, happiness & long life..."
                className="w-full text-xs bg-white border border-stone-200 rounded-xl px-3.5 py-2 text-stone-800 focus:outline-none focus:ring-2 focus:ring-[#E11D48]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-full bg-[#E11D48] hover:bg-[#BE123C] text-white font-semibold text-xs tracking-wide shadow-md shadow-pink-900/15 flex items-center justify-center gap-2 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Confirm & Send Blessings</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

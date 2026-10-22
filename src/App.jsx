import React, { useState } from 'react';
import { AuspiciousAudio } from './components/AuspiciousAudio';
import { FloatingPetals } from './components/FloatingPetals';
import { FestiveToran } from './components/FestiveToran';
import { BabyInvitationCard } from './components/BabyInvitationCard';
import { RsvpModal } from './components/RsvpModal';

export function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full bg-[#FAF7F2] flex flex-col justify-between overflow-x-hidden selection:bg-pink-200 selection:text-[#831843]">

      {/* 1. Auspicious Ambient Flute Audio Player */}
      <AuspiciousAudio />

      {/* 2. Floating Pastel Petals in Background */}
      <FloatingPetals />

      {/* 3. Top Decorative Festive Garland */}
      <FestiveToran />

      {/* 4. Main Google-Styled Pastel Baby Ceremony Invitation Cards */}
      <BabyInvitationCard onOpenRsvp={() => setIsRsvpOpen(true)} />

      {/* 5. RSVP & Blessings Modal */}
      <RsvpModal
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        babyName="Baby"
      />
    </div>
  );
}

export default App;

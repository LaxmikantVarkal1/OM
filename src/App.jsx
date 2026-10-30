import React, { useState, useEffect } from 'react';
import { AuspiciousAudio } from './components/AuspiciousAudio';
import { FloatingPetals } from './components/FloatingPetals';
import { FestiveToran } from './components/FestiveToran';
import { BabyInvitationCard } from './components/BabyInvitationCard';
import { RsvpModal } from './components/RsvpModal';

function getGuestNameFromUrl() {
  if (typeof window === 'undefined') return '';
  try {
    const params = new URLSearchParams(window.location.search);
    let name =
      params.get('name') ||
      params.get('Name') ||
      params.get('to') ||
      params.get('To') ||
      params.get('guest') ||
      params.get('Guest') ||
      params.get('n') ||
      params.get('N');

    if (!name && window.location.hash.includes('?')) {
      const hashQuery = window.location.hash.substring(window.location.hash.indexOf('?'));
      const hashParams = new URLSearchParams(hashQuery);
      name =
        hashParams.get('name') ||
        hashParams.get('Name') ||
        hashParams.get('to') ||
        hashParams.get('To') ||
        hashParams.get('guest') ||
        hashParams.get('Guest') ||
        hashParams.get('n') ||
        hashParams.get('N');
    }

    return name ? name.trim() : '';
  } catch {
    return '';
  }
}

export function App() {
  const [isRsvpOpen, setIsRsvpOpen] = useState(false);
  const [guestName, setGuestName] = useState(getGuestNameFromUrl);

  useEffect(() => {
    const handlePopState = () => {
      setGuestName(getGuestNameFromUrl());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    if (guestName) {
      document.title = `${guestName}'s Invitation | Baby Naamkaran Ceremony`;
    } else {
      document.title = 'Baby Naming & Cradle Ceremony Invitation | Venkateshwara MultiPurpose Hall, Solapur';
    }
  }, [guestName]);

  return (
    <div className="relative min-h-screen w-full bg-[#FAF7F2] flex flex-col justify-between overflow-x-hidden selection:bg-pink-200 selection:text-[#831843]">

      {/* 1. Auspicious Ambient Flute Audio Player */}
      <AuspiciousAudio />

      {/* 2. Floating Pastel Petals in Background */}
      <FloatingPetals />

      {/* 3. Top Decorative Festive Garland */}
      <FestiveToran />

      {/* 4. Main Google-Styled Pastel Baby Ceremony Invitation Cards */}
      <BabyInvitationCard
        guestName={guestName}
        onOpenRsvp={() => setIsRsvpOpen(true)}
      />

      {/* 5. RSVP & Blessings Modal */}
      <RsvpModal
        key={guestName}
        isOpen={isRsvpOpen}
        onClose={() => setIsRsvpOpen(false)}
        babyName="Baby"
        initialGuestName={guestName}
      />
    </div>
  );
}

export default App;


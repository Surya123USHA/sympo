import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AnnouncementBanner from '@/components/AnnouncementBanner';
import AboutSection from '@/components/AboutSection';
import EventsSection from '@/components/EventsSection';
import Footer from '@/components/Footer';
import Announcements from '@/components/section/Announcements';
import GuestSpeakers from '@/components/Guestspeakers';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <AnnouncementBanner />
      <HeroSection />
      <AboutSection />
      <Announcements />
      <GuestSpeakers />
      <Footer />
    </div>
  );
};

export default Index;

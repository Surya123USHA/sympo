import { Calendar, Clock, MapPin, Users, Star, Anchor } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      day: 'Day 1',
      date: 'March 15, 2024',
      theme: 'Setting Sail',
      icon: Anchor,
      bounty: '1,000,000,000',
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Opening Ceremony: Welcome Aboard',
          speaker: 'Captain Symposium Team',
          location: 'Main Deck Auditorium',
          type: 'keynote',
          bounty: '500,000,000'
        },
        {
          time: '11:00 - 12:30',
          title: 'Navigating the Future of AI',
          speaker: 'Dr. Marina Tech',
          location: 'Innovation Island',
          type: 'workshop',
          bounty: '300,000,000'
        },
        {
          time: '14:00 - 15:30',
          title: 'Building Your Dream Crew',
          speaker: 'Prof. Team Dynamics',
          location: 'Collaboration Cove',
          type: 'panel',
          bounty: '250,000,000'
        },
        {
          time: '16:00 - 17:00',
          title: 'Networking: Meet Your Nakama',
          speaker: 'All Participants',
          location: 'Friendship Bay',
          type: 'social',
          bounty: '100,000,000'
        }
      ]
    },
    {
      day: 'Day 2',
      date: 'March 16, 2024',
      theme: 'Exploring New Waters',
      icon: Star,
      bounty: '1,500,000,000',
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Sustainable Innovation Treasure Hunt',
          speaker: 'Dr. Green Explorer',
          location: 'Eco-Adventure Zone',
          type: 'workshop',
          bounty: '400,000,000'
        },
        {
          time: '11:00 - 12:30',
          title: 'Leadership Lessons from the Grand Line',
          speaker: 'Admiral Success',
          location: 'Command Center',
          type: 'keynote',
          bounty: '600,000,000'
        },
        {
          time: '14:00 - 15:30',
          title: 'Creative Problem Solving Battles',
          speaker: 'Innovation Pirates',
          location: 'Strategy Room',
          type: 'workshop',
          bounty: '350,000,000'
        },
        {
          time: '16:00 - 17:30',
          title: 'Research Showcase & Poster Session',
          speaker: 'Rising Researchers',
          location: 'Discovery Deck',
          type: 'showcase',
          bounty: '450,000,000'
        }
      ]
    },
    {
      day: 'Day 3',
      date: 'March 17, 2024',
      theme: 'Reaching the Summit',
      icon: Star,
      bounty: '2,000,000,000',
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Global Collaboration: One Piece at a Time',
          speaker: 'World Alliance Council',
          location: 'Unity Hall',
          type: 'panel',
          bounty: '550,000,000'
        },
        {
          time: '11:00 - 12:30',
          title: 'Future Technologies & Adventures Ahead',
          speaker: 'Tech Visionary Fleet',
          location: 'Future Harbor',
          type: 'keynote',
          bounty: '700,000,000'
        },
        {
          time: '14:00 - 15:30',
          title: 'Action Plans: Your Next Adventure',
          speaker: 'Journey Guides',
          location: 'Planning Plaza',
          type: 'workshop',
          bounty: '400,000,000'
        },
        {
          time: '16:00 - 17:00',
          title: 'Closing Ceremony: Until We Meet Again',
          speaker: 'The Entire Crew',
          location: 'Main Deck Auditorium',
          type: 'ceremony',
          bounty: '1,000,000,000'
        }
      ]
    }
  ];

  const getSessionTypeStyles = (type: string) => {
    switch (type) {
      case 'keynote':
        return 'bg-gradient-to-r from-primary to-primary-glow text-white';
      case 'workshop':
        return 'bg-gradient-to-r from-secondary to-secondary-glow text-navy';
      case 'panel':
        return 'bg-gradient-to-r from-adventure to-accent text-white';
      case 'social':
        return 'bg-gradient-to-r from-muted to-card text-navy border-2 border-border';
      case 'showcase':
        return 'bg-gradient-to-r from-accent to-adventure text-white';
      case 'ceremony':
        return 'bg-gradient-depth text-white';
      default:
        return 'bg-card text-card-foreground';
    }
  };

  return (
    <section id="events" className="relative py-20 px-6 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/ocean-background.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/80" />
        <div className="absolute inset-0 bg-gradient-ocean/20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Adventure Schedule
            </span>
          </h2>
          <p className="text-xl text-foreground max-w-3xl mx-auto">
            Three days of epic exploration, learning, and discovery await you on this grand adventure!
          </p>
        </div>

        {/* Events Timeline */}
        <div className="space-y-12">
          {events.map((day, dayIndex) => (
            <div key={day.day} className="relative">
              {/* Day Header - Wanted Poster Style */}
              <div className="relative mb-8">
                <div className="wanted-poster bg-amber-50 dark:bg-amber-100 border-4 border-amber-800 dark:border-amber-900 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-red-800 dark:text-red-900 font-black text-lg mb-2 tracking-wider">WANTED</div>
                    <div className="flex items-center justify-center gap-4 mb-4">
                      <div className="bg-gradient-treasure rounded-full p-3 shadow-treasure">
                        <day.icon className="w-6 h-6 text-navy" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-amber-900 dark:text-amber-950 mb-2">{day.day}</h3>
                    <p className="text-sm text-amber-800 dark:text-amber-900 font-bold mb-2">{day.date} • {day.theme}</p>
                    <div className="border-t-2 border-amber-800 dark:border-amber-900 pt-2">
                      <div className="text-red-800 dark:text-red-900 font-black text-sm">BOUNTY</div>
                      <div className="text-lg font-black text-amber-900 dark:text-amber-950">₿{day.bounty}</div>
                      <div className="text-xs text-amber-700 dark:text-amber-800 font-bold">ADVENTURE POINTS</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sessions Grid - Wanted Poster Cards */}
              <div className="grid lg:grid-cols-2 gap-6">
                {day.sessions.map((session, sessionIndex) => (
                  <div 
                    key={sessionIndex}
                    className="wanted-poster bg-amber-50 dark:bg-amber-100 border-4 border-amber-800 dark:border-amber-900 rounded-lg p-6 shadow-lg transform hover:scale-105 hover:rotate-1 transition-all duration-300 animate-wanted-swing relative"
                    style={{ animationDelay: `${sessionIndex * 0.5}s` }}
                  >
                    {/* Wanted Header */}
                    <div className="text-center mb-4">
                      <div className="text-red-800 dark:text-red-900 font-black text-sm mb-2 tracking-wider">WANTED</div>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2 text-xs text-amber-800 dark:text-amber-900 font-bold">
                          <Clock className="w-3 h-3" />
                          <span>{session.time}</span>
                        </div>
                        <span className="text-xs font-black text-red-800 dark:text-red-900 uppercase tracking-wide bg-red-100 dark:bg-red-200 px-2 py-1 rounded">
                          {session.type}
                        </span>
                      </div>
                    </div>
                    
                    {/* Session Photo Area */}
                    <div className="bg-gradient-to-br from-amber-200 to-amber-300 dark:from-amber-300 dark:to-amber-400 h-24 rounded-lg mb-4 flex items-center justify-center border-2 border-amber-700 dark:border-amber-800">
                      <div className="text-amber-800 dark:text-amber-900 font-bold text-center">
                        <div className="text-sm">{session.speaker}</div>
                      </div>
                    </div>
                    
                    {/* Session Details */}
                    <div className="text-center">
                      <h4 className="text-base font-black text-amber-900 dark:text-amber-950 mb-3 leading-tight">
                        {session.title}
                      </h4>
                      
                      <div className="space-y-1 text-xs text-amber-800 dark:text-amber-900 font-bold mb-3">
                        <div className="flex items-center justify-center gap-1">
                          <MapPin className="w-3 h-3" />
                          <span>{session.location}</span>
                        </div>
                      </div>

                      {/* Bounty */}
                      <div className="border-t-2 border-amber-800 dark:border-amber-900 pt-2">
                        <div className="text-red-800 dark:text-red-900 font-black text-xs">BOUNTY</div>
                        <div className="text-base font-black text-amber-900 dark:text-amber-950">₿{session.bounty}</div>
                        <div className="text-xs text-amber-700 dark:text-amber-800 font-bold">DEAD OR ALIVE</div>
                      </div>
                    </div>

                    {/* Aging Effect */}
                    <div className="absolute inset-0 pointer-events-none rounded-lg" 
                         style={{
                           background: `radial-gradient(circle at 30% 20%, rgba(139, 69, 19, 0.1) 0%, transparent 40%),
                                        radial-gradient(circle at 80% 70%, rgba(139, 69, 19, 0.1) 0%, transparent 40%)`
                         }}>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - Wanted Poster Style */}
        <div className="text-center mt-16">
          <div className="wanted-poster bg-amber-50 dark:bg-amber-100 border-4 border-amber-800 dark:border-amber-900 rounded-lg p-8 shadow-lg max-w-2xl mx-auto">
            <div className="text-red-800 dark:text-red-900 font-black text-lg mb-4 tracking-wider">WANTED</div>
            <h3 className="text-2xl font-black text-amber-900 dark:text-amber-950 mb-4">
              Ready to Join the Adventure?
            </h3>
            <p className="text-amber-800 dark:text-amber-900 font-bold mb-6">
              Secure your spot aboard the Esperanza and be part of this legendary journey!
            </p>
            <div className="border-t-2 border-amber-800 dark:border-amber-900 pt-4 mb-6">
              <div className="text-red-800 dark:text-red-900 font-black text-sm">BOUNTY</div>
              <div className="text-2xl font-black text-amber-900 dark:text-amber-950">UNLIMITED ADVENTURE</div>
            </div>
            <button className="btn-treasure">
              <Calendar className="w-5 h-5 mr-2" />
              Register Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
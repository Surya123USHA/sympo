import { Calendar, Clock, MapPin, Users, Star, Anchor } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      day: 'Day 1',
      date: 'March 15, 2024',
      theme: 'Setting Sail',
      icon: Anchor,
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Opening Ceremony: Welcome Aboard',
          speaker: 'Captain Symposium Team',
          location: 'Main Deck Auditorium',
          type: 'keynote'
        },
        {
          time: '11:00 - 12:30',
          title: 'Navigating the Future of AI',
          speaker: 'Dr. Marina Tech',
          location: 'Innovation Island',
          type: 'workshop'
        },
        {
          time: '14:00 - 15:30',
          title: 'Building Your Dream Crew',
          speaker: 'Prof. Team Dynamics',
          location: 'Collaboration Cove',
          type: 'panel'
        },
        {
          time: '16:00 - 17:00',
          title: 'Networking: Meet Your Nakama',
          speaker: 'All Participants',
          location: 'Friendship Bay',
          type: 'social'
        }
      ]
    },
    {
      day: 'Day 2',
      date: 'March 16, 2024',
      theme: 'Exploring New Waters',
      icon: Star,
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Sustainable Innovation Treasure Hunt',
          speaker: 'Dr. Green Explorer',
          location: 'Eco-Adventure Zone',
          type: 'workshop'
        },
        {
          time: '11:00 - 12:30',
          title: 'Leadership Lessons from the Grand Line',
          speaker: 'Admiral Success',
          location: 'Command Center',
          type: 'keynote'
        },
        {
          time: '14:00 - 15:30',
          title: 'Creative Problem Solving Battles',
          speaker: 'Innovation Pirates',
          location: 'Strategy Room',
          type: 'workshop'
        },
        {
          time: '16:00 - 17:30',
          title: 'Research Showcase & Poster Session',
          speaker: 'Rising Researchers',
          location: 'Discovery Deck',
          type: 'showcase'
        }
      ]
    },
    {
      day: 'Day 3',
      date: 'March 17, 2024',
      theme: 'Reaching the Summit',
      icon: Star,
      sessions: [
        {
          time: '09:00 - 10:30',
          title: 'Global Collaboration: One Piece at a Time',
          speaker: 'World Alliance Council',
          location: 'Unity Hall',
          type: 'panel'
        },
        {
          time: '11:00 - 12:30',
          title: 'Future Technologies & Adventures Ahead',
          speaker: 'Tech Visionary Fleet',
          location: 'Future Harbor',
          type: 'keynote'
        },
        {
          time: '14:00 - 15:30',
          title: 'Action Plans: Your Next Adventure',
          speaker: 'Journey Guides',
          location: 'Planning Plaza',
          type: 'workshop'
        },
        {
          time: '16:00 - 17:00',
          title: 'Closing Ceremony: Until We Meet Again',
          speaker: 'The Entire Crew',
          location: 'Main Deck Auditorium',
          type: 'ceremony'
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
    <section id="events" className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Adventure Schedule
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Three days of epic exploration, learning, and discovery await you on this grand adventure!
          </p>
        </div>

        {/* Events Timeline */}
        <div className="space-y-12">
          {events.map((day, dayIndex) => (
            <div key={day.day} className="relative">
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-gradient-treasure rounded-full p-4 shadow-treasure">
                  <day.icon className="w-8 h-8 text-navy" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-navy">{day.day}</h3>
                  <p className="text-lg text-muted-foreground">{day.date} • {day.theme}</p>
                </div>
              </div>

              {/* Sessions Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {day.sessions.map((session, sessionIndex) => (
                  <div 
                    key={sessionIndex}
                    className={`p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300 ${getSessionTypeStyles(session.type)}`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-2 text-sm opacity-90">
                        <Clock className="w-4 h-4" />
                        <span className="font-semibold">{session.time}</span>
                      </div>
                      <span className="text-xs font-bold opacity-75 uppercase tracking-wide">
                        {session.type}
                      </span>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-3 leading-tight">
                      {session.title}
                    </h4>
                    
                    <div className="space-y-2 text-sm opacity-90">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{session.speaker}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{session.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-ocean p-8 rounded-2xl shadow-ocean text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Adventure?</h3>
            <p className="text-lg opacity-90 mb-6">
              Secure your spot aboard the Esperanza and be part of this legendary journey!
            </p>
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
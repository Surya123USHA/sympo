import { Compass, Heart, Globe, Zap } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Compass,
      title: 'Adventure & Discovery',
      description: 'Embark on a journey of knowledge and exploration, just like the Straw Hat Pirates sailing the Grand Line.',
      color: 'text-primary'
    },
    {
      icon: Heart,
      title: 'Unity & Friendship',
      description: 'Building bonds that transcend boundaries, creating a crew of lifelong adventurers and learners.',
      color: 'text-accent'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Connecting minds from across the States to share diverse viewpoints and innovative solutions.',
      color: 'text-secondary'
    },
    {
      icon: Zap,
      title: 'Innovation & Dreams',
      description: 'Pursuing impossible dreams and turning them into reality through collaboration and determination.',
      color: 'text-adventure'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 opacity-10 rotate-12">
        <Compass className="w-32 h-32 text-primary animate-spin" style={{animationDuration: '20s'}} />
      </div>
      
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              About Esperanza
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Named after hope and adventure, Esperanza Symposium brings together brilliant minds from around the world to explore, discover, and innovate together.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-navy mb-6">
              Setting Sail for Knowledge
            </h3>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              Esparanza is the annual symposium of Gojan School of Business and Technology, organized by the Department of Information Technology. It serves as a vibrant platform for students to showcase their technical skills, creativity, and innovation.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Our symposium creates a space where dreamers, thinkers, and innovators can share their passions, 
              learn from one another, and build the future together. Every participant becomes part of our crew, 
              contributing their unique skills and perspectives to our collective adventure.
            </p>
            <button className="btn-ocean">
              Join Our Crew
            </button>
          </div>

          <div className="relative">
            <div className="treasure-chest bg-gradient-treasure p-8 rounded-2xl shadow-treasure">
              <h4 className="text-2xl font-bold text-navy mb-4 text-center">
                🏴‍☠️ Treasure Map of Topics
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'AI & Machine Learning',
                  'Prompt Engineering',
                  'Global Collaboration',
                  'Future Technologies',
                  'Creative Problem Solving',
                  'Leadership Excellence'
                ].map((topic, index) => (
                  <div key={topic} className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                    <span className="text-sm font-semibold text-navy">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div 
              key={value.title} 
              className="text-center group hover:scale-105 transition-transform duration-300"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-card to-muted mb-4 group-hover:shadow-float transition-shadow duration-300 ${value.color}`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-navy mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
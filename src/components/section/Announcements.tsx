import React from 'react';
import WantedPoster from '@/components/ui/wanted-poster';

const announcements = [
  {
    title: "lightning Presentation",
    content: "To Know more about fast presentation of different research topics.",
    date: " OCT 11th 10:00 AM",
    bounty: "50% DISCOUNT",
    learnMoreUrl: "/light"
  },
  {
    title: "Bug Busters",
    content: "To Enter the world of debugging and bug fixing in software development.",
    date: "OCT 11th 10:00 AM",
    bounty: "50% DISCOUNT",
    learnMoreUrl: "/bug"
  },
  {
    title: "Pixel Perfect",
    content: "Here you have use the creativity mind to build UI Design and the demo is Provided.",
    date: "Limited Spots OCT 11th 10:00 AM ",
    bounty: "RARE OPPORTUNITY",
    learnMoreUrl: "/pixel"
  },
  {
    title: "Decode Derby",
    content: "It based on the concept of code breaking and cryptography with the help of logical reasoning.",
    date: "OCT 11th 11:30 AM ",
    bounty: "FREE ENTRY",
    learnMoreUrl: "/decode"
  },
  {
    title: "Result Rush",
    content: "Result Rush is an intense, fast-paced challenge  through levels to crack outputs from flowcharts, code snippets, and full programs.",
    date: "OCT 11th 11:00 AM",
    bounty: "GOLD TROPHY",
    learnMoreUrl: "/result"
  },
  {
    title: "Code Rewind",
    content: "Here Result is provided but you have write entire program it's fully on c,python,java.",
    date: "OCT 11th 10:30 AM",
    bounty: "SKILL UPGRADE",
    learnMoreUrl: "/rewind"
  },
  {
    title: "Escape Protocal",
    content: "It's suprise event you have to escape from the room by solving the puzzles.",
    date:" OCT 11th 10:00 PM",
    bounty: "RESEARCH GRANT",
    learnMoreUrl: "/escp"
  },
  {
    title: "Crack The Box",
    content: "It's a fun and challenging event but  fully based on your logical and analytical skills.",
    date: "OCT 11th 10:00 PM",
    bounty: "STORYTELLER BADGE",
    learnMoreUrl: "/crack"
  }
];

const Announcements = () => {
  return (
    <section id='events' className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-pirate text-3xl md:text-4xl mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Latest Bounties & Announcements
          </h2>
          <p className="font-adventure text-lg text-foreground/80 max-w-2xl mx-auto">
            Stay updated with the latest news from our symposium headquarters!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {announcements.map((announcement, index) => (
            <div
              key={index}
              className="animate-float"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <WantedPoster
                title={announcement.title}
                content={announcement.content}
                date={announcement.date}
                bounty={announcement.bounty}
                learnMoreUrl={announcement.learnMoreUrl}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Announcements;
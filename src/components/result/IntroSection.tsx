import makima2 from "@/assets/makima-2.jpeg";

export const IntroSection = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background with Makima */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${makima2})`,
          filter: "brightness(0.2) blur(2px)",
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="chainsaw-border bg-[hsl(var(--dark-grey))]/90 backdrop-blur-md p-8 md:p-12 hover:scale-[1.02] transition-transform duration-300">
          <div className="border-l-4 border-[hsl(var(--blood-red))] pl-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-glow-red">
              WHAT IS <span className="text-[hsl(var(--neon-orange))]">RESULT RUSH</span>?
            </h2>
            
            <p className="text-base md:text-xl text-gray-300 leading-relaxed">
              Result Rush is an <span className="text-[hsl(var(--blood-red))] font-bold">intense, fast-paced challenge</span> where 
              participants race through levels to crack outputs from <span className="text-[hsl(var(--neon-orange))] font-bold">flowcharts, 
              code snippets, and full programs</span>. Only the sharpest minds will survive the rush!
            </p>

            {/* Blood drip effect */}
            <div className="mt-8 flex gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-gradient-to-b from-[hsl(var(--blood-red))] to-transparent animate-pulse"
                  style={{
                    height: `${Math.random() * 40 + 20}px`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export const MissionSection = () => {
  return (
    <section id="mission" className="py-16 bg-background">
      <div className="container mx-auto px-0">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">Mission</h2>
          <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          <p className="text-base sm:text-xl md:text-2xl text-foreground/90 leading-relaxed inline-block mx-auto whitespace-normal sm:whitespace-nowrap px-4 sm:px-0">
            To spread the Dharma to <span className="font-bold text-primary">100 million</span> screens,
            inspiring compassion and wisdom by <span className="font-bold">2030</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;



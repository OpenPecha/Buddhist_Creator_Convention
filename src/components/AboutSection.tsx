import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-bodhgaya.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import milan from "@/assets/milan.jpeg";
export const AboutSection = () => {
  return <section className="py-24 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Timeline
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          {/* Timeline Tabs */}
          <Tabs defaultValue="day0" className="w-full">
            <TabsList className="flex flex-wrap gap-2">
              <TabsTrigger value="day0">Day 0</TabsTrigger>
              <TabsTrigger value="day1">Day 1</TabsTrigger>
              <TabsTrigger value="day2">Day 2</TabsTrigger>
              <TabsTrigger value="day3">Day 3</TabsTrigger>
              <TabsTrigger value="day4">Day 4</TabsTrigger>
              <TabsTrigger value="day5">Day 5</TabsTrigger>
              <TabsTrigger value="day6">Day 6</TabsTrigger>
              <TabsTrigger value="day7">Day 7</TabsTrigger>
              <TabsTrigger value="day8">Day 8</TabsTrigger>
            </TabsList>

            {/* Day 0 */}
            <TabsContent value="day0">
              <Card className="p-6 md:p-8 shadow-soft border-border/50">
                <h3 className="text-2xl font-bold mb-4">Day 0 — Registration</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="overflow-hidden rounded-lg">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img src="/drone_shot.gif" alt="Venue aerial view for registration day" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground/80">Arrivals, on-site registration, and an inspiring opening to welcome everyone and set the tone for the week.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Day 1 */}
            <TabsContent value="day1">
              <Card className="p-6 md:p-8 shadow-soft border-border/50">
                <h3 className="text-2xl font-bold mb-4">Day 1 — Community Day</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="overflow-hidden rounded-lg">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img src={milan} alt="Creators sharing ideas during community day" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground/80">Keynotes, lightning talks, and community circles to connect, share, and learn from each other.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Days 2 - 7 */}
            {Array.from({ length: 6 }).map((_, i) => {
              const dayNumber = i + 2; // 2..7
              return (
                <TabsContent key={`day${dayNumber}`} value={`day${dayNumber}`}>
                  <Card className="p-6 md:p-8 shadow-soft border-border/50">
                    <h3 className="text-2xl font-bold mb-4">Day {dayNumber} — Masterclass</h3>
                    <div className="grid md:grid-cols-2 gap-6 items-center">
                      <div className="overflow-hidden rounded-lg">
                        <div className="aspect-[16/9] w-full overflow-hidden">
                          <img src={dayNumber % 2 === 0 ? coach1 : coach2} alt={`Hands-on masterclass session Day ${dayNumber}`} className="w-full h-full object-cover" loading="lazy" />
                        </div>
                      </div>
                      <div>
                        <p className="text-foreground/80">Hands-on training in content strategy, production, and growth—guided by experienced coaches.</p>
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              );
            })}

            {/* Day 8 */}
            <TabsContent value="day8">
              <Card className="p-6 md:p-8 shadow-soft border-border/50">
                <h3 className="text-2xl font-bold mb-4">Day 8 — Recap & Closing</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="overflow-hidden rounded-lg">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img src={heroImage} alt="Closing ceremony and award presentation" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div>
                    <p className="text-foreground/80">Celebrate progress, share takeaways, and honor excellence with the Creator of the Year award.</p>
                  </div>
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>;
};
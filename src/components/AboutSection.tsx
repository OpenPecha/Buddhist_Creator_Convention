import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import heroImage from "@/assets/hero-bodhgaya.jpg";
import coach1 from "@/assets/coach-1.jpg";
import coach2 from "@/assets/coach-2.jpg";
import milan from "@/assets/milan.jpeg";
export const AboutSection = () => {
  const masterclassDays = [
    {
      day: 2,
      title: "Becoming a Digital Bodhisattva",
      bullets: [
        "Discover why social media is the modern monastery where billions seek meaning, comfort, and truth every day.",
        "Learn how to define your Dharma niche, choose your ideal format, and find the right platforms to begin sharing.",
        "Understand that spreading the Dharma online is not self-promotion but service — compassion expressed through digital wisdom."
      ]
    },
    {
      day: 3,
      title: "The Art of Validation: Knowing What the World Needs",
      bullets: [
        "Learn how to stop guessing and start creating content that truly resonates through real-world validation.",
        "Discover the three layers of alignment — your lived truth, market demand, and your audience’s voice.",
        "Turn insight into magnetic content that feels personal, authentic, and deeply needed."
      ]
    },
    {
      day: 4,
      title: "Storytelling that Transforms",
      bullets: [
        "Master the timeless structure of storytelling to make your Dharma unforgettable and emotionally resonant.",
        "Learn how global storytellers captivate millions and how to express your own authentic voice.",
        "Bridge the sacred and the everyday by blending humour, emotion, and humanity into your Dharma teaching."
      ]
    },
    {
      day: 5,
      title: "Amplification: Working with AI as Your Dharma Assistant",
      bullets: [
        "Transform AI from a generic tool into your creative partner — helping you script, refine, and validate content faster.",
        "Learn how to train AI with your own teachings, principles, and insights to reflect your authentic voice.",
        "Use AI tools for scripting, editing, dubbing, and global reach — without losing your soul in the process."
      ]
    },
    {
      day: 6,
      title: "Growth and Momentum: Virality through Consistency",
      bullets: [
        "Understand the true science of virality — how ethical resonance spreads faster than trends.",
        "Build a rhythm of consistency that sustains your growth through small, steady 1% improvements.",
        "Refine, reflect, and evolve through analytics, discipline, and the Dharma of daily effort."
      ]
    },
    {
      day: 7,
      title: "The Great Recap: Integrating Wisdom into Action",
      bullets: [
        "Revisit Six Days of Transformation — a guided review from storytelling and validation to AI, virality, and presence.",
        "Anchor the teachings in practice — reflect, ground, and integrate your journey to become a Digital Bodhisattva.",
        "Celebrate and commit — recognise your progress, receive completion awards, and set the intention to carry the Dharma fearlessly into the world."
      ]
    }
  ];
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
            {masterclassDays.map(({ day, title, bullets }) => (
              <TabsContent key={`day${day}`} value={`day${day}`}>
                <Card className="p-6 md:p-8 shadow-soft border-border/50">
                  <h3 className="text-2xl font-bold mb-4">Day {day} — {title}</h3>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="overflow-hidden rounded-lg">
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img src={day % 2 === 0 ? coach1 : coach2} alt={`Hands-on masterclass session Day ${day}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </div>
                    <div>
                      <ul className="text-foreground/80 list-disc space-y-2 pl-5 text-left">
                        {bullets.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}

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
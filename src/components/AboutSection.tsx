import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
export const AboutSection = () => {
  const dayImages: Record<number, string> = {
    1: "/time_line/Day 1 - Community Day.png",
    2: "\u002Ftime_line\u002FDay 2 – Becoming a Digital Bodhisattva.png",
    3: "\u002Ftime_line\u002FDay 3 – The Art of Validation_ Knowing What the World Needs.png",
    4: "\u002Ftime_line\u002FDay 4 – Storytelling that Transforms.png",
    5: "\u002Ftime_line\u002FDay 5 – Amplification_ Working with AI as Your Dharma Assistant.png",
    6: "\u002Ftime_line\u002FDay 6 – Growth and Momentum_ Virality through Consistency.png",
    7: "\u002Ftime_line\u002FDay 7 – Sustainability_ Monetisation and Presence.png",
    8: "\u002Ftime_line\u002FDay 8 – The Great Recap_ Integrating Wisdom into Action.png",
  };
  const masterclassDays = [
    {
      day: 2,
      title: "Becoming a Digital Bodhisattva",
      bullets: [
        "<b>Social Media as a Sacred Space:</b>Discover why social media is the modern monastery where billions seek meaning, comfort, and truth every day.",
        "<b>Finding Your Niche:</b>Learn how to define your Dharma niche, choose your ideal format, and find the right platforms to begin sharing.",
        "<b>The Bodhisattva's Motivation Online:</b>Understand that spreading the Dharma online is not self-promotion but service — compassion expressed through digital wisdom."
      ]
    },
    {
      day: 3,
      title: "Knowing What the World Needs",
      bullets: [
        "<b>Creating Content That Resonates:</b>Learn how to stop guessing and start creating content that truly resonates through real-world validation.",
        "<b>Truth, Demand, and Audience:</b>Discover the three layers of alignment — your lived truth, market demand, and your audience’s voice.",
        "<b>Crafting Magnetic Content:</b>Turn insight into magnetic content that feels personal, authentic, and deeply needed."
      ]
    },
    {
      day: 4,
      title: "Storytelling that Transforms",
      bullets: [
        "<b>Making the Dharma Unforgettable:</b>Master the timeless structure of storytelling to make your Dharma unforgettable and emotionally resonant.",
        "<b>Learning from the Masters:</b>Learn how global storytellers captivate millions and how to express your own authentic voice.",
        "<b>Bridging Worlds:</b>Bridge the sacred and the everyday by blending humour, emotion, and humanity into your Dharma teaching."
      ]
    },
    {
      day: 5,
      title: "Working with AI as Your Dharma Assistant",
      bullets: [
        "<b>AI as Your Creative Partner:</b>Transform AI from a generic tool into your creative partner — helping you script, refine, and validate content faster.",
        "<b>Training Your AI:</b>Learn how to train AI with your own teachings, principles, and insights to reflect your authentic voice.",
        "<b>Ethical AI Tools:</b>Use AI tools for scripting, editing, dubbing, and global reach — without losing your soul in the process."
      ]
    },
    {
      day: 6,
      title: "Virality through Consistency",
      bullets: [
        "<b>The Science of Virality:</b>Understand the true science of virality — how ethical resonance spreads faster than trends.",
        "<b>The Power of 1% Improvements:</b>Build a rhythm of consistency that sustains your growth through small, steady 1% improvements.",
        "<b>Reflecting and Evolving with Analytics:</b>Refine, reflect, and evolve through analytics, discipline, and the Dharma of daily effort."
      ]
    },
    {
      day: 7,
      title: "Sustainability and Presence",
      bullets: [
        "<b>Compassionate Monetization:</b>Redefine monetisation as compassion in action building sustainable support for your Dharma work.",
        "<b>On-Camera Presence:</b>Strengthen your presence on camera, turning nervousness into service and energy into connection.",
        "<b>Authenticity and Mindfulness on Screen:</b>Learn how authenticity, body language, and mindfulness create a digital presence that truly transmits the Dharma."
      ]
    },
    {
      day: 8,
      title: "Integrating Wisdom into Action",
      bullets: [
        "<b>Revisit Six Days of Transformation:</b> A full guided review of everything learned from storytelling and validation to AI, virality, and presence.",
        "<b>Anchor the Teachings in Practice:</b> Reflect, ground, and integrate your journey to become a true Digital Bodhisattva.",
        "<b>Celebrate and Commit:</b> Recognise your progress, receive your completion awards, and set your intention to carry the Dharma fearlessly into the world."
      ]
    }
  ];
  return <section id="timeline" className="py-16 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Convention Program
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          {/* Timeline Tabs */}
          <Tabs defaultValue="day0" className="w-full">
            <TabsList className="flex gap-2 overflow-x-auto whitespace-nowrap sm:flex-wrap sm:overflow-visible px-4 py-1 w-full justify-start sm:justify-center scroll-pl-4">
              <TabsTrigger value="day0" className="shrink-0">Jan 29</TabsTrigger>
              <TabsTrigger value="day1" className="shrink-0">Jan 30</TabsTrigger>
              <TabsTrigger value="day2" className="shrink-0">Jan 31</TabsTrigger>
              <TabsTrigger value="day3" className="shrink-0">Feb 1</TabsTrigger>
              <TabsTrigger value="day4" className="shrink-0">Feb 2</TabsTrigger>
              <TabsTrigger value="day5" className="shrink-0">Feb 3</TabsTrigger>
              <TabsTrigger value="day6" className="shrink-0">Feb 4</TabsTrigger>
              <TabsTrigger value="day7" className="shrink-0">Feb 5</TabsTrigger>
              <TabsTrigger value="day8" className="shrink-0">Feb 6</TabsTrigger>
            </TabsList>

            {/* Day 0 */}
            <TabsContent value="day0">
              <Card className="p-6 md:p-8 shadow-soft border-border/50">
                <h3 className="text-2xl font-bold mb-4">Day 1 — Welcome & Registration</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="overflow-hidden rounded-lg">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img src="/shechen.png" alt="Venue aerial view for registration day" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <li>
                    <b>Afternoon:</b> Arrive, complete your on-site registration, and take some time to settle in and meet other attendees.
                    </li>
                    <li>
                    <b>Evening:</b> Join our opening session to officially kick off the week. It will be a friendly and inspiring welcome to help everyone connect.
                    </li>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Day 1 */}
            <TabsContent value="day1">
              <Card className="p-6 md:p-8 shadow-soft border-border/50">
                <h3 className="text-2xl font-bold mb-4">Day 2 — Community Day</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="overflow-hidden rounded-lg">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img src={dayImages[1]} alt="Creators sharing ideas during community day" className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </div>
                  <div style={{ marginLeft: '20px' }}>
                    <li>
                    <b>Panel Discussion:</b> "Future of Buddhism in the Digital Age"
                    </li>
                    <li>
                    <b>Lightning talks:</b>  Creators present their work-in-progress, challenges and lessons learned
                    </li>
                    <li>
                      <b>Community circles:</b> Deepen connections and support each other's growth
                    </li>
                  </div>
                </div>
              </Card>
            </TabsContent>

            {/* Days 2 - 7 */}
            {masterclassDays.map(({ day, title, bullets }) => (
              <TabsContent key={`day${day}`} value={`day${day}`}>
                <Card className="p-6 md:p-8 shadow-soft border-border/50">
                  <h3 className="text-2xl font-bold mb-4">Day {day+1} — {title}</h3>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="overflow-hidden rounded-lg">
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img src={dayImages[day]} alt={`Hands-on masterclass session Day ${day}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    </div>
                    <div>
                      <ul className="text-foreground/80 list-disc space-y-2 pl-5 text-left">
                        {bullets.map((item) => {
                          const cleaned = item.replace(/<\/?b>/g, "");
                          const colonIndex = cleaned.indexOf(":");
                          if (colonIndex > 0 && colonIndex < cleaned.length - 1) {
                            const title = cleaned.slice(0, colonIndex).trim();
                            const desc = cleaned.slice(colonIndex + 1).trim();
                            return (
                              <li key={item}>
                                <span className="font-bold">{title}:</span> {desc}
                              </li>
                            );
                          }
                          return <li key={item}>{cleaned}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </Card>
              </TabsContent>
            ))}

            
          </Tabs>
        </div>
      </div>
    </section>;
};
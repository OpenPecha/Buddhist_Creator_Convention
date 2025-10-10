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
      title: "Sustainability: Monetisation and Presence",
      bullets: [
        "Redefine monetisation as compassion in action building sustainable support for your Dharma work.",
        "Strengthen your presence on camera, turning nervousness into service and energy into connection.",
        "Learn how authenticity, body language, and mindfulness create a digital presence that truly transmits the Dharma."
      ]
    },
    {
      day: 8,
      title: "The Great Recap: Integrating Wisdom into Action",
      bullets: [
        "Revisit Six Days of Transformation: A full guided review of everything learned from storytelling and validation to AI, virality, and presence.",
        "Anchor the Teachings in Practice: Reflect, ground, and integrate your journey to become a true Digital Bodhisattva.",
        "Celebrate and Commit: Recognise your progress, receive your completion awards, and set your intention to carry the Dharma fearlessly into the world."
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
            <TabsList className="flex gap-2 overflow-x-auto whitespace-nowrap sm:flex-wrap sm:overflow-visible px-4 py-1 w-full justify-start sm:justify-center scroll-pl-4">
              <TabsTrigger value="day0" className="shrink-0">Day 0</TabsTrigger>
              <TabsTrigger value="day1" className="shrink-0">Day 1</TabsTrigger>
              <TabsTrigger value="day2" className="shrink-0">Day 2</TabsTrigger>
              <TabsTrigger value="day3" className="shrink-0">Day 3</TabsTrigger>
              <TabsTrigger value="day4" className="shrink-0">Day 4</TabsTrigger>
              <TabsTrigger value="day5" className="shrink-0">Day 5</TabsTrigger>
              <TabsTrigger value="day6" className="shrink-0">Day 6</TabsTrigger>
              <TabsTrigger value="day7" className="shrink-0">Day 7</TabsTrigger>
              <TabsTrigger value="day8" className="shrink-0">Day 8</TabsTrigger>
            </TabsList>

            {/* Day 0 */}
            <TabsContent value="day0">
              <Card className="p-6 md:p-8 shadow-soft border-border/50">
                <h3 className="text-2xl font-bold mb-4">Day 0 — Welcome & Registration</h3>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                  <div className="overflow-hidden rounded-lg">
                    <div className="aspect-[16/9] w-full overflow-hidden">
                      <img src="/drone_shot.gif" alt="Venue aerial view for registration day" className="w-full h-full object-cover" loading="lazy" />
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
                <h3 className="text-2xl font-bold mb-4">Day 1 — Community Day</h3>
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
                  <h3 className="text-2xl font-bold mb-4">Day {day} — {title}</h3>
                  <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="overflow-hidden rounded-lg">
                      <div className="aspect-[16/9] w-full overflow-hidden">
                        <img src={dayImages[day]} alt={`Hands-on masterclass session Day ${day}`} className="w-full h-full object-cover" loading="lazy" />
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

            
          </Tabs>
        </div>
      </div>
    </section>;
};
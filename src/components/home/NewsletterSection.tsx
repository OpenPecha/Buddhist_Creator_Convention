import { FormEvent, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/shared/Reveal";
import { Send } from "lucide-react";

export const NewsletterSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("Newsletter Signup");
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nPlease add me to the Buddhist Creators newsletter.`);
    window.location.href = `mailto:hello@buddhistcreators.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="newsletter" className="py-20 md:py-28 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <Reveal className="max-w-xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-primary-foreground text-balance">
            Stay Connected
          </h2>
          <p className="text-lg text-primary-foreground/90 leading-relaxed">
            Occasional updates on upcoming events, masterclasses, and stories from the community.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 pt-2">
            <Input
              required
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white/95 border-0 h-12 rounded-full px-5"
            />
            <Input
              required
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/95 border-0 h-12 rounded-full px-5"
            />
            <Button type="submit" size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full h-12 px-6 shrink-0">
              <Send className="w-4 h-4 mr-2" /> Subscribe
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  );
};

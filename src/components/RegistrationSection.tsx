import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
export const RegistrationSection = () => {
  return <section id="registration" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Header */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              How to Register
            </h2>
            <div className="w-24 h-1 bg-gradient-hero mx-auto rounded-full" />
          </div>

          {/* CTA Card */}
          <Card className="p-8 md:p-12 bg-gradient-hero text-center shadow-elevated border-0">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-primary-foreground">
                Join the Convention
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" className="bg-background text-primary hover:bg-background/90 shadow-lg text-lg px-8" asChild>
                  <a href="#register" target="_blank" rel="noopener noreferrer">
                    Register In One Minute
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm text-lg px-8" asChild>
                  
                </Button>
              </div>
            </div>
          </Card>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            

            
          </div>
        </div>
      </div>
    </section>;
};
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Shield, Award, UserPlus, MessageCircle } from "lucide-react";

export const ExpandableDetails = () => {
  return (
    <section className="relative z-10 py-12 bg-background/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 font-display text-foreground">
          Event Details
        </h2>

        <Accordion type="multiple" className="space-y-4">
          {/* Rules & Code of Conduct */}
          <AccordionItem
            value="rules"
            className="bg-card/50 backdrop-blur-md border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-primary" />
                Rules & Code of Conduct
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-3 pt-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Team Size</h4>
                  <p>1 to 3 members per team.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fair Play</h4>
                  <p>Mobile phones and electronic devices are not allowed unless explicitly permitted.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Punctuality</h4>
                  <p>Arrive on time; latecomers may lose participation.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Final Authority</h4>
                  <p>Jury's decision is final and binding.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">One Chance</h4>
                  <p>Only one answer submission per team per round.</p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* Scoring & Prize Info */}
          <AccordionItem
            value="prizes"
            className="bg-card/50 backdrop-blur-md border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary" />
                Scoring & Prize Info
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground space-y-3 pt-4">
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Shortlisting Process</h4>
                  <p>
                    The first two teams overall will be selected for prizes based on cumulative performance
                    across all three rounds.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Tie-Breaker</h4>
                  <p>
                    In case of a tie, the team with the fastest correct submission wins. Speed and accuracy
                    matter!
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Prize Distribution</h4>
                  <p>
                    Top 2 teams will be rewarded with exciting prizes. Details will be announced at the event.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          {/* How to Register */}
          <AccordionItem
            value="register"
            className="bg-card/50 backdrop-blur-md border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              <div className="flex items-center gap-3">
                <UserPlus className="w-5 h-5 text-primary" />
                How to Register
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-4">
              <p className="mb-4">
                Click the "Join the Shinobi Arena — Register" button above to open the registration form.
                You'll need to provide:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Team name</li>
                <li>Team leader's name and email</li>
                <li>Team members' names (1-3 total)</li>
                <li>Contact number</li>
              </ul>
              <p className="mt-4 text-accent font-medium">
                Registration deadline will be announced soon. Stay tuned!
              </p>
            </AccordionContent>
          </AccordionItem>

          {/* Contact / Queries */}
          <AccordionItem
            value="contact"
            className="bg-card/50 backdrop-blur-md border border-border rounded-lg px-6 overflow-hidden"
          >
            <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors">
              <div className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-primary" />
                Contact / Queries
              </div>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pt-4">
              <div className="space-y-3">
                <p>Have questions? Need help with registration? Reach out to our event coordinators:</p>
                <div className="p-4 bg-secondary/50 rounded-lg border border-border">
                  <p className="font-semibold text-foreground mb-1">Event Coordinator</p>
                  <p className="text-sm">
                    Email:{" "}
                    <a href="mailto:coordinator@cyberninjas.event" className="text-primary hover:underline">
                      coordinator@cyberninjas.event
                    </a>
                  </p>
                  <p className="text-sm">
                    Discord:{" "}
                    <span className="text-accent">CyberNinjas#1234</span>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground italic">
                  Response time: Within 24 hours
                </p>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};
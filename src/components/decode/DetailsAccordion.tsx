import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const DetailsAccordion = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-12 max-w-3xl mx-auto">
      <Button
        variant="outline"
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full justify-between btn-metallic-swipe border-muted-foreground/30 hover:border-secondary/50 hover:bg-muted/30"
        aria-expanded={isExpanded}
        aria-controls="additional-details"
      >
        <span className="font-semibold">Show more event details</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </Button>

      <div
        id="additional-details"
        className={`overflow-hidden transition-all duration-300 ${
          isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="glass-card rounded-lg p-6 space-y-6 border-2 border-primary/20">
          {/* Schedule */}
          <div>
            <h3 className="font-bold text-xl mb-3 text-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Full Schedule
            </h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Round 1:</strong> Initial knockout — 10 teams compete simultaneously</p>
              <p><strong>Break:</strong> 15-minute strategic regroup</p>
              <p><strong>Round 2:</strong> Final confrontation — Top 8 teams battle for supremacy</p>
              <p><strong>Victory:</strong> Top 3 teams will be recognized</p>
            </div>
          </div>

          {/* Team Instructions */}
          <div>
            <h3 className="font-bold text-xl mb-3 text-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Team Instructions
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside">
              <li>Arrive 15 minutes before your designated round time</li>
              <li>Bring valid student ID or registration confirmation</li>
              <li>Designated team leader must check in at registration desk</li>
              <li>All team members must be present at start time</li>
              <li>Writing materials will be provided — no personal notes allowed</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl mb-3 text-accent flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
              Contact
            </h3>
            <p className="text-sm text-muted-foreground">
              Questions? Reach out to:{' '}
              <a
                href="mailto:decodederby@event.com"
                className="text-secondary hover:text-accent underline transition-colors"
              >
                decodederby@event.com
              </a>
            </p>
          </div>

          {/* Disclaimer */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground italic">
              By registering, you agree to abide by all event rules and the decisions of the organizing committee.
              Limited slots available — first come, first served.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
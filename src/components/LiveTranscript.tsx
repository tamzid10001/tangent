import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Phone, Radio } from 'lucide-react';
import type { Transcript } from '@/types/emergency';

interface LiveTranscriptProps {
  transcripts: Transcript[];
}

export function LiveTranscript({ transcripts }: LiveTranscriptProps) {
  return (
    <Card className="p-6 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Radio className="h-4 w-4 text-green-500 animate-pulse" />
          <h3 className="text-lg font-semibold">Live Transcript</h3>
        </div>
        <Badge variant="outline" className="gap-2">
          <Phone className="h-4 w-4" />
          Connected
        </Badge>
      </div>
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {transcripts.map((transcript) => (
            <div
              key={transcript.id}
              className={`flex flex-col ${
                transcript.speaker === 'operator' ? 'items-start' : 'items-end'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  transcript.speaker === 'operator'
                    ? 'bg-muted shadow-sm'
                    : 'bg-blue-600 text-white shadow-sm'
                }`}
              >
                <p className="text-sm">{transcript.text}</p>
              </div>
              <span className="text-xs text-muted-foreground mt-1">
                {transcript.timestamp}
              </span>
            </div>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
}
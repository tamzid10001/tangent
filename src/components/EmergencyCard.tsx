import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Timer, Users, AlertTriangle } from 'lucide-react';
import type { Emergency } from '@/types/emergency';

interface EmergencyCardProps {
  emergency: Emergency;
}

export function EmergencyCard({ emergency }: EmergencyCardProps) {
  return (
    <Card className="p-4 hover:bg-accent cursor-pointer transition-colors border-l-4 border-l-red-600 shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-1.5">
          <Badge variant="destructive" className="mb-2">CRITICAL</Badge>
          <h3 className="font-medium leading-none">{emergency.title}</h3>
          <p className="text-sm text-muted-foreground">{emergency.location}</p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Timer className="h-4 w-4" />
            <span>{emergency.time}</span>
          </div>
          {emergency.affectedPeople && (
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
              <Users className="h-4 w-4" />
              <span>{emergency.affectedPeople} affected</span>
            </div>
          )}
        </div>
        <AlertTriangle className="h-5 w-5 text-red-600" />
      </div>
    </Card>
  );
}
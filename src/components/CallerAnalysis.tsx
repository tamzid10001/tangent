import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

export function CallerAnalysis() {
  return (
    <Card className="p-6 shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Caller Analysis</h3>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <p className="text-sm text-muted-foreground mb-2">Fear Level</p>
          <Progress value={75} className="h-2" indicatorClassName="bg-amber-500" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-2">Urgency Level</p>
          <Progress value={90} className="h-2" indicatorClassName="bg-red-500" />
        </div>
      </div>
    </Card>
  );
}
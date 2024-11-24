import { Button } from '@/components/ui/button';
import { ShieldAlert, Flame, Ambulance } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface DispatchButtonsProps {
  dispatched: Set<string>;
  onDispatch: (service: string) => void;
}

export function DispatchButtons({ dispatched, onDispatch }: DispatchButtonsProps) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Button 
        className={`bg-blue-600 hover:bg-blue-700 ${dispatched.has('Police') ? 'opacity-50' : ''} shadow-lg`}
        onClick={() => onDispatch('Police')}
      >
        <ShieldAlert className="mr-2 h-5 w-5" />
        {dispatched.has('Police') ? 'Police Dispatched' : 'Dispatch Police'}
      </Button>
      <Button 
        className={`bg-red-600 hover:bg-red-700 ${dispatched.has('Fire') ? 'opacity-50' : ''} shadow-lg`}
        onClick={() => onDispatch('Fire')}
      >
        <Flame className="mr-2 h-5 w-5" />
        {dispatched.has('Fire') ? 'Fire Dispatched' : 'Dispatch Fire'}
      </Button>
      <Button 
        className={`bg-green-600 hover:bg-green-700 ${dispatched.has('Medical') ? 'opacity-50' : ''} shadow-lg`}
        onClick={() => onDispatch('Medical')}
      >
        <Ambulance className="mr-2 h-5 w-5" />
        {dispatched.has('Medical') ? 'Medical Dispatched' : 'Dispatch Medical'}
      </Button>
    </div>
  );
}
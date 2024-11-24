import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useToast } from '@/hooks/use-toast';
import { Map } from '@/components/Map';
import { EmergencyCard } from '@/components/EmergencyCard';
import { CallerAnalysis } from '@/components/CallerAnalysis';
import { LiveTranscript } from '@/components/LiveTranscript';
import { DispatchButtons } from '@/components/DispatchButtons';
import { AlertCircle, Bell, Building2, PlusCircle } from 'lucide-react';
import type { Emergency, Transcript } from '@/types/emergency';

function App() {
  const { toast } = useToast();
  const [dispatched, setDispatched] = useState<Set<string>>(new Set());

  const [selectedEmergency] = useState<Emergency>({
    id: '1',
    title: 'Earthquake Emergency',
    time: '2:46:37 AM',
    status: 'Critical',
    location: 'Banani, Dhaka',
    coordinates: [23.7937, 90.4066],
    affectedPeople: 150
  });

  const [transcripts] = useState<Transcript[]>([
    { id: '1', speaker: 'operator', text: "What's your emergency?", timestamp: '2:46:37 AM' },
    { id: '2', speaker: 'caller', text: "Um, there's current earthquakes. Um, send help, please.", timestamp: '2:46:42 AM' },
    { id: '3', speaker: 'operator', text: "What's your location?", timestamp: '2:46:45 AM' },
    { id: '4', speaker: 'caller', text: "I am currently at Banani, there's a lot of people injured. Please send help.", timestamp: '2:46:52 AM' },
    { id: '5', speaker: 'operator', text: "Is there immediate danger where you are?", timestamp: '2:47:00 AM' },
    { id: '6', speaker: 'caller', text: "Yes, there are still tremors, and people are panicking.", timestamp: '2:47:08 AM' },
    { id: '7', speaker: 'operator', text: "Are there any visible injuries that require urgent medical attention?", timestamp: '2:47:15 AM' },
    { id: '8', speaker: 'caller', text: "Yes, some people are bleeding and need help urgently.", timestamp: '2:47:23 AM' },
    { id: '9', speaker: 'operator', text: "Okay, stay calm. Help is on the way. Can you stay on the line and provide updates?", timestamp: '2:47:30 AM' },
    { id: '10', speaker: 'caller', text: "Yes, I will stay on the line.", timestamp: '2:47:35 AM' },
  ]);

  const handleDispatch = (service: string) => {
    if (dispatched.has(service)) {
      toast({
        title: "Already Dispatched",
        description: `${service} units are already en route.`,
        variant: "default"
      });
      return;
    }

    setDispatched(prev => new Set(prev).add(service));
    
    const messages = {
      Police: {
        title: "Police Units Dispatched",
        description: "Multiple police units are en route to the location."
      },
      Fire: {
        title: "Fire Units Dispatched",
        description: "Fire response teams have been deployed."
      },
      Medical: {
        title: "Medical Teams Dispatched",
        description: "Emergency medical services are on their way."
      }
    };

    const serviceInfo = messages[service as keyof typeof messages];

    toast({
      title: serviceInfo.title,
      description: serviceInfo.description,
      variant: "default"
    });
  };

  return (
    <div className="flex h-screen bg-zinc-50">
      {/* Sidebar */}
      <div className="w-80 border-r bg-white p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-red-600 animate-pulse" />
            <h2 className="text-lg font-semibold">Active Emergencies</h2>
          </div>
          <Button variant="ghost" size="icon">
            <PlusCircle className="h-5 w-5" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-100px)]">
          <div className="space-y-4">
            <EmergencyCard emergency={selectedEmergency} />
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex">
        <div className="flex-1 p-6 overflow-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  {selectedEmergency.title}
                </h1>
                <p className="text-muted-foreground flex items-center gap-2 mt-1">
                  <Building2 className="h-4 w-4" />
                  {selectedEmergency.location}
                </p>
              </div>
              <Badge variant="destructive" className="text-base px-4 py-1">LIVE</Badge>
            </div>

            <div className="p-6 shadow-lg bg-white rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Location</h3>
              <Map center={selectedEmergency.coordinates} className="shadow-lg" />
            </div>

            <CallerAnalysis />
            <DispatchButtons dispatched={dispatched} onDispatch={handleDispatch} />
            <LiveTranscript transcripts={transcripts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
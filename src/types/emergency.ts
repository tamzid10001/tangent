export interface Emergency {
  id: string;
  title: string;
  time: string;
  status: 'Critical' | 'High' | 'Medium' | 'Low';
  location: string;
  coordinates: [number, number];
  affectedPeople?: number;
}

export interface Transcript {
  id: string;
  speaker: 'operator' | 'caller';
  text: string;
  timestamp: string;
}
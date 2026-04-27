export interface TextInputProps {
  value: string;
  onTextChange: (text: string) => void;
  placeholder?: string;
}

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
  wordGoal?: number;
}

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

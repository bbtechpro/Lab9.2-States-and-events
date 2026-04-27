// types/index.ts
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}
 
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

// export type TextInputProps = {
//   value: string;
//   onChange: (value: string) => void;
// };

// export type StatsDisplayProps = {
//   count: number;
// };

// export type CharacterCounterState = {
//   text: string;
// };

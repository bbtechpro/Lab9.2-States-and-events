type StatsDisplayProps = {
  count: number;
};

export default function StatsDisplay({ count }: StatsDisplayProps) {
  return <div>Character count: {count}</div>;
}

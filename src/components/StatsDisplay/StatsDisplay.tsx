import type { StatsDisplayProps } from '../../types'

export default function StatsDisplay({
  stats,
  showReadingTime = true,
  wordGoal
}: StatsDisplayProps) {
  const readingTimeText =
    stats.readingTime === 0
      ? 'Less than 1 minute'
      : `${stats.readingTime.toFixed(1)} minute${stats.readingTime === 1 ? '' : 's'}`

  const progressPercentage =
    wordGoal && wordGoal > 0
      ? Math.min(100, Math.round((stats.wordCount / wordGoal) * 100))
      : 0

  return (
    <div className="stats-display">
      <div className="stats-display__grid">
        <div className="stats-display__item">
          <span>Characters</span>
          <strong>{stats.characterCount}</strong>
        </div>
        <div className="stats-display__item">
          <span>Words</span>
          <strong>{stats.wordCount}</strong>
        </div>
        {showReadingTime && (
          <div className="stats-display__item">
            <span>Reading time</span>
            <strong>{readingTimeText}</strong>
          </div>
        )}
      </div>

      {wordGoal ? (
        <div className="stats-display__progress">
          <div className="stats-display__progress-label">
            <span>Word goal</span>
            <strong>{progressPercentage}%</strong>
          </div>
          <progress value={stats.wordCount} max={wordGoal} />
          <p>{stats.wordCount} / {wordGoal} words</p>
        </div>
      ) : null}
    </div>
  )
}

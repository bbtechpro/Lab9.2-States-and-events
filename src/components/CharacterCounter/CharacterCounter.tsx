import { useMemo, useState } from 'react'
import TextInput from '../TextInput/TextInput'
import StatsDisplay from '../StatsDisplay/StatsDisplay'
import type { CharacterCounterProps, TextStats } from '../../types'

const splitWords = (text: string) => {
  return text.trim().split(/\s+/).filter(Boolean)
}

const estimateReadingTime = (wordCount: number) => {
  return wordCount === 0 ? 0 : Number((wordCount / 200).toFixed(1))
}

export default function CharacterCounter({
  minWords = 50,
  maxWords = 250,
  targetReadingTime = 2
}: CharacterCounterProps) {
  const [text, setText] = useState('')

  const stats = useMemo<TextStats>(() => {
    const wordCount = text.trim().length === 0 ? 0 : splitWords(text).length
    return {
      characterCount: text.length,
      wordCount,
      readingTime: estimateReadingTime(wordCount)
    }
  }, [text])

  const isUnderMin = stats.wordCount < minWords
  const isOverMax = stats.wordCount > maxWords

  return (
    <section className="character-counter">
      <header className="character-counter__header">
        <h1>Character counter</h1>
        <p className="character-counter__description">
          Type your text and see characters, words, and reading time update instantly.
        </p>
      </header>

      <TextInput
        value={text}
        onTextChange={setText}
        placeholder="Write your article draft here..."
      />

      <StatsDisplay stats={stats} showReadingTime wordGoal={maxWords} />

      <div className="character-counter__feedback">
        <p>
          {isUnderMin
            ? `Keep going — ${minWords - stats.wordCount} more words to reach the minimum goal.`
            : 'Good progress — you have met the minimum word goal.'}
        </p>
        <p>
          {isOverMax
            ? `You are ${stats.wordCount - maxWords} words above the upper goal.`
            : `Your target range is ${minWords}–${maxWords} words.`}
        </p>
        <p>Recommended reading time: {targetReadingTime} minute(s).</p>
      </div>
    </section>
  )
}

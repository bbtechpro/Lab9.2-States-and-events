import type { TextInputProps } from '../../types'

export default function TextInput({
  value,
  onTextChange,
  placeholder = 'Start typing...'
}: TextInputProps) {
  return (
    <div className="text-input">
      <textarea
        className="text-input__field"
        placeholder={placeholder}
        value={value}
        onChange={(event) => onTextChange(event.target.value)}
        rows={8}
      />
    </div>
  )
}

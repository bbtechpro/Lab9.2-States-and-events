import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";

export default function CharacterCounter() {
  const [text, setText] = useState("");

  return (
    <div>
      <TextInput value={text} onChange={setText} />
      <StatsDisplay count={text.length} />
    </div>
  );
}

import { useEffect, useState } from "react";
import { lyrics } from "../data/lyrics";

export default function ShowLyric() {
  return (
    <div
      className="flex flex-col items-center text-5xl font-bold gap-y-4 font-custom text-pink-400 justify-center ease-in duration-100 top-0 absolute h-screen w-full
    "
    >
      {lyrics.map((lyric) => (
        <TimingLyric
          phrase={lyric.phrase}
          time={lyric.time}
          key={lyric.phrase}
        />
      ))}
    </div>
  );
}

function TimingLyric({ phrase, time }: { phrase: string; time: number }) {
  const [displayLyric, setDisplayLyric] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayLyric(true);
    }, time);

    return () => {
      clearTimeout(timeout);
    };
  }, [time]);

  return displayLyric ? <div>{phrase}</div> : null;
}

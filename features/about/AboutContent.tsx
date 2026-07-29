import { aboutContent } from "./about.data";
import Credentials from "./Credentials";

export default function AboutContent() {
  return (
    <div>
      {/* Eyebrow */}
      <p
        className="
          mb-5
          text-[0.6rem]
          uppercase tracking-[0.35em]
          text-[#B28A62]
        "
      >
        {aboutContent.eyebrow}
      </p>

      {/* Title */}
      <h2
        className="
          font-serif
          text-3xl md:text-4xl lg:text-[2.75rem]
          leading-[1.18]
          tracking-[-0.025em]
          text-[#3B2A26]
          max-w-2xl
        "
      >
        {aboutContent.title}
      </h2>

      {/* Accent line */}
      <div className="my-7 h-px w-14 bg-[#D4A9B6]" />

      {/* Body */}
      <p
        className="
          text-[0.95rem] md:text-[1rem]
          leading-[1.85]
          text-[#7E6B63]
          max-w-2xl
        "
      >
        {aboutContent.description}
      </p>

      {/* Credentials sit cleanly below the wrapped text */}
      <Credentials />
    </div>
  );
}

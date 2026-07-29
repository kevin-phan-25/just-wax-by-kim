import { aboutContent } from "./about.data";
import Credentials from "./Credentials";

export default function AboutContent() {
  return (
    <div>
      {/* Eyebrow */}
      <p
        className="
          mb-5
          text-[0.65rem]
          uppercase tracking-[0.38em]
          text-[#B28A62]
        "
      >
        {aboutContent.eyebrow}
      </p>

      {/* Title — more presence */}
      <h2
        className="
          font-serif
          text-3xl sm:text-4xl md:text-[2.75rem]
          leading-[1.15]
          tracking-[-0.03em]
          text-[#3B2A26]
          max-w-xl
        "
      >
        {aboutContent.title}
      </h2>

      {/* Accent line */}
      <div className="my-8 h-px w-16 bg-[#D4A9B6]" />

      {/* Body */}
      <p
        className="
          text-[0.98rem] md:text-[1.05rem]
          leading-[1.9]
          text-[#7E6B63]
          max-w-xl
        "
      >
        {aboutContent.description}
      </p>

      {/* Credentials clear below the float */}
      <Credentials />
    </div>
  );
}

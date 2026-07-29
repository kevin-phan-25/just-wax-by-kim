import { aboutContent } from "./about.data";
import Credentials from "./Credentials";

export default function AboutContent() {
  return (
    <div className="max-w-lg">
      <p
        className="
          mb-5
          text-[0.6rem]
          uppercase
          tracking-[0.35em]
          text-[#B28A62]
        "
      >
        {aboutContent.eyebrow}
      </p>

      <h2
        className="
          font-serif
          text-3xl
          md:text-4xl
          leading-[1.18]
          tracking-[-0.025em]
          text-[#3B2A26]
        "
      >
        {aboutContent.title}
      </h2>

      <div
        className="
          my-7
          h-px
          w-14
          bg-[#D4A9B6]
        "
      />

      <p
        className="
          text-[0.95rem]
          leading-[1.85]
          text-[#7E6B63]
        "
      >
        {aboutContent.description}
      </p>

      <Credentials />
    </div>
  );
}

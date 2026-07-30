import { credentials } from "./about.data";

export default function Credentials() {
  return (
    <div
      className="
        flex
        flex-col

        space-y-10
      "
    >

      {credentials.map((item) => (
        <div
          key={item.title}
          className="
            pb-10

            border-b
            border-[#E8DDD8]

            last:border-none
          "
        >

          <h3
            className="
              mb-4

              font-serif

              text-[1.35rem]

              leading-tight

              text-[#3B2A26]
            "
          >
            {item.title}
          </h3>


          <p
            className="
              text-[0.95rem]

              leading-[1.9]

              text-[#8A776E]
            "
          >
            {item.description}
          </p>

        </div>
      ))}

    </div>
  );
}

/**
 *
 * ---
 * File:
 * components/ui/Logo.tsx
 *
 * Description:
 * Luxury responsive brand logo.
 *
 * Updates:
 * • Correct logo path
 * • Balanced navbar sizing
 * • Responsive scaling
 * • Prevents distortion
 *
 * ---
 *
 */


import Image from "next/image";
import Link from "next/link";


interface LogoProps {

  className?: string;

  priority?: boolean;

}



export function Logo({

  className = "",

  priority = false,

}:LogoProps){


  return (

    <Link

      href="/"

      aria-label="Just Wax by Kim Home"

      className={`

        inline-flex

        items-center

        justify-center


        transition-transform

        duration-300


        hover:scale-[1.03]


        ${className}

      `}

    >


      <Image

        src="/logo/just-wax-by-kim-logo.jpg"

        alt="Just Wax by Kim"

        width={500}

        height={200}


        priority={priority}


        className="
          h-auto

          w-[150px]

          sm:w-[180px]

          md:w-[220px]

          xl:w-[250px]

          object-contain

        "

      />


    </Link>

  );

}

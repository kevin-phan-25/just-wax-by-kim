/**
 * -----------------------------------------------------------------------------
 * File: Card.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Reusable luxury card component.
 *
 * Used by:
 * - Services
 * - Gallery
 * - Testimonials
 * - Experience sections
 *
 * Changes:
 * - July 27, 2026
 *   - Added v1.0.2 luxury visual foundation.
 *   - Created reusable premium card styling.
 *
 * -----------------------------------------------------------------------------
 */


import { cn } from "@/lib/cn";


interface CardProps {

  children: React.ReactNode;

  className?: string;

}



export default function Card({

  children,

  className,

}: CardProps) {


  return (

    <div

      className={cn(

        `
        rounded-2xl
        border
        border-neutral-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:shadow-lg
        `,

        className

      )}

    >

      {children}

    </div>

  );


}

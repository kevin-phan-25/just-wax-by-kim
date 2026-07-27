/**
 * -----------------------------------------------------------------------------
 * File: Card.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Luxury reusable card component.
 *
 * Changes:
 * - July 27, 2026
 *   - Migrated colors to design tokens.
 *
 * -----------------------------------------------------------------------------
 */


import {
  cn,
} from "@/lib/cn";


interface CardProps {

children:
React.ReactNode;

className?:
string;

}


export default function Card({

children,

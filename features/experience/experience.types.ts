/**
 * -----------------------------------------------------------------------------
 * File: experience.types.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Experience section data models.
 *
 * Changes:
 * - v1.0.3
 *   - Added luxury customer journey types.
 *
 * -----------------------------------------------------------------------------
 */


export interface ExperienceItem {

    id:string;

    title:string;

    description:string;

    icon:string;

}


export interface TimelineItem {

    step:string;

    title:string;

    description:string;

}

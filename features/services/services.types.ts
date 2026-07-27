/**
 * -----------------------------------------------------------------------------
 * File: services.types.ts
 *
 * Created: July 27, 2026
 *
 * Description:
 * Type definitions for services feature.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


export interface Service {

    id: string;

    name: string;

    description: string;

    price: string;

    duration: string;

    category: string;

}


export interface ServiceCategory {

    title: string;

    description: string;

}

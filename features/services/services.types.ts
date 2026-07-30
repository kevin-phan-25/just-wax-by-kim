/**
 * -----------------------------------------------------------------------------
 * File:
 * services.types.ts
 *
 * Description:
 * Service domain models.
 *
 * Updated:
 * July 30, 2026
 *
 * Changes:
 * - Added gender support
 * - Added flexible category grouping
 *
 * -----------------------------------------------------------------------------
 */


export type ServiceGender =
  | "ladies"
  | "gentlemen";



export interface Service {

  id: string;

  title: string;

  category: string;

  description: string;

  price: string;

  duration: string;

  gender: ServiceGender;

}



export interface ServiceCategory {

  id: string;

  title: string;

  description: string;

  services: Service[];

}

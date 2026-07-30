/**
 * -----------------------------------------------------------------------------
 * File:
 * features/services/services.types.ts
 *
 * Description:
 * Service domain models.
 *
 * -----------------------------------------------------------------------------
 */

export interface Service {

  id: string;

  title: string;

  category: string;

  description: string;

  price: string;

  duration: string;

  gender: "ladies" | "gentlemen";

  image:string;

}



export interface ServiceCategory {

  id: string;

  title: string;

  description: string;

  services: Service[];

}

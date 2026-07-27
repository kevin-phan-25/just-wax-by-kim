/**
 * -----------------------------------------------------------------------------
 * File: services.types.ts
 *
 * Description:
 * Service domain models.
 *
 * v1.0.0 Production
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


}





export interface ServiceCategory {


  id: string;


  title: string;


  description: string;


  services: Service[];


}

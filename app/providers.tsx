/**
 * -----------------------------------------------------------------------------
 * File: providers.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Global client-side providers.
 *
 * Changes:
 * - July 27, 2026
 *   - Added Vercel Analytics.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import {

Analytics

}

from "@vercel/analytics/react";



export default function Providers({

children

}:{

children:React.ReactNode;

}){


return (

<>


{children}


<Analytics />


</>

);


}

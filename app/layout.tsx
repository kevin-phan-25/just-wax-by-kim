/**
 * -----------------------------------------------------------------------------
 * File: layout.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Root application layout.
 *
 * Changes:
 * - July 27, 2026
 *   - Added v1.0.0 production SEO.
 *
 * -----------------------------------------------------------------------------
 */


import type { Metadata } from "next";


import Script from "next/script";


import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";


import {

createMetadata

}

from "@/lib/metadata";


import {

businessSchema

}

from "@/lib/seo";


import "./globals.css";



export const metadata: Metadata = createMetadata();



export default function RootLayout({

children

}:{

children:React.ReactNode

}){


return (

<html lang="en">


<body>


<Script

id="business-schema"

type="application/ld+json"

dangerouslySetInnerHTML={{

__html:

JSON.stringify(

businessSchema()

)

}}

/>



<Navbar />


{children}


<Footer />


</body>


</html>


);


}

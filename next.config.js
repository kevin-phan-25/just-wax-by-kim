/**
 * -----------------------------------------------------------------------------
 * File: next.config.js
 *
 * Created: July 27, 2026
 *
 * Description:
 * Next.js production configuration.
 *
 * Changes:
 *
 * - July 27, 2026
 *   - Added v1.1.0 production configuration.
 *   - Added image optimization support.
 *
 * -----------------------------------------------------------------------------
 */


/** @type {import('next').NextConfig} */


const nextConfig = {


reactStrictMode:true,


images:{


formats:[

"image/avif",

"image/webp"

],


remotePatterns:[


{


protocol:"https",

hostname:"images.unsplash.com",

},


{


protocol:"https",

hostname:"instagram.com",

},


{


protocol:"https",

hostname:"*.instagram.com",

},


],


},


experimental:{


optimizePackageImports:[

"lucide-react"

],


},


};



module.exports = nextConfig;

/**
 * -----------------------------------------------------------------------------
 * File: Footer.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Website footer.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial creation.
 *
 * -----------------------------------------------------------------------------
 */


import Container from "@/components/ui/Container";


export default function Footer() {


return (

<footer className="
border-t
border-[#ECE7E1]
py-10
">


<Container>


<p className="
text-center
text-sm
text-[#8A817C]
">

© {new Date().getFullYear()} Just Wax by Kim.
All rights reserved.

</p>


</Container>


</footer>

);

}

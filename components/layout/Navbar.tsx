/**
 * -----------------------------------------------------------------------------
 * File: Navbar.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Main website navigation.
 *
 * Changes:
 * - July 27, 2026
 *   - Initial desktop navigation.
 *   - Added primary booking CTA.
 *
 * -----------------------------------------------------------------------------
 */


import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";


export default function Navbar() {


return (

<nav className="
fixed
top-0
z-50
w-full
border-b
border-[#ECE7E1]
bg-[#FAF8F5]/90
backdrop-blur
">


<Container>


<div className="
flex
h-20
items-center
justify-between
">


<div className="
text-2xl
font-semibold
tracking-wide
">

Just Wax by Kim

</div>


<Button>

Book Now

</Button>


</div>


</Container>


</nav>

);

}

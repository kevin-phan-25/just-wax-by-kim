/**
 * -----------------------------------------------------------------------------
 * File: ContactHours.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Studio operating hours.
 *
 * Changes:
 * - v1.0.3
 *   - Added business hours display.
 *
 * -----------------------------------------------------------------------------
 */


const HOURS = [


{
day:"Monday - Friday",
time:"9:00 AM - 6:00 PM"
},


{
day:"Saturday",
time:"9:00 AM - 3:00 PM"
},


{
day:"Sunday",
time:"Closed"
}



];



export default function ContactHours(){


return (


<div>


<h3

className="
font-serif
text-xl
"

>

Studio Hours

</h3>



<div

className="
mt-4
space-y-3
"

>


{

HOURS.map(item=>(


<div

key={item.day}

className="
flex
justify-between
text-gray-600
"

>


<span>

{item.day}

</span>


<span>

{item.time}

</span>


</div>


))

}



</div>


</div>


);


}

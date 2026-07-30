import type { ServiceCategory } from "../services.types";


export const ladiesCategories: ServiceCategory[] = [

{
id: "ladies-face",
title: "Face & Beauty",
description:
"Detailed facial waxing and brow services with a luxury touch.",

services: [

{
id:"face",
title:"Face",
category:"Face & Beauty",
description:
"A gentle facial waxing service designed for smooth, refreshed, beautifully cared skin.",
price:"$25",
duration:"15 minutes",
},

{
id:"brow-clean-up",
title:"Brow Clean Up",
category:"Face & Beauty",
description:
"A precise brow cleanup to maintain a polished and natural shape.",
price:"$10",
duration:"10 minutes",
},

{
id:"brow-shaping",
title:"Brow Shaping",
category:"Face & Beauty",
description:
"Custom brow shaping designed to enhance your natural features.",
price:"$20",
duration:"20 minutes",
},

]

},

];

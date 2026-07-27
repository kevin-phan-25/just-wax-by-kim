/**
 * -----------------------------------------------------------------------------
 * File: ThemeProvider.tsx
 *
 * Created: July 27, 2026
 *
 * Description:
 * Application theme provider.
 *
 * Controls:
 *
 * - Theme state
 * - Dark/light compatibility
 * - Future design system expansion
 *
 * Changes:
 *
 * - July 27, 2026
 *   - Added v1.1.0 theme architecture.
 *
 * -----------------------------------------------------------------------------
 */


"use client";


import {
createContext,
useContext,
useState,
ReactNode
}
from "react";



type Theme = "light" | "dark";



interface ThemeContextType{


theme:Theme;


toggleTheme:()=>void;


}



const ThemeContext =
createContext<ThemeContextType | undefined>(undefined);





export function ThemeProvider({

children

}:{

children:ReactNode

}){


const [theme,setTheme] = useState<Theme>("light");





function toggleTheme(){


setTheme(

previous =>

previous === "light"

?

"dark"

:

"light"

);


}





return (

<ThemeContext.Provider

value={{

theme,

toggleTheme,

}}

>


<div

className={

theme === "dark"

?

"dark"

:

""

}

>


{children}


</div>


</ThemeContext.Provider>

);


}






export function useTheme(){


const context = useContext(
ThemeContext
);



if(!context){


throw new Error(

"useTheme must be used inside ThemeProvider"

);


}



return context;


}

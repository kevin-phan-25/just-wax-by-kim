"use client";


import {
  ReactNode,
} from "react";


import {
  useBooking,
} from "./BookingProvider";



interface BookingTriggerProps {

  children: ReactNode;

  className?: string;

}



export default function BookingTrigger({
  children,
  className = "",
}: BookingTriggerProps) {


  const {
    openBooking,
  } = useBooking();



  return (

    <button

      type="button"

      onClick={openBooking}

      className={className}

    >

      {children}

    </button>

  );

}

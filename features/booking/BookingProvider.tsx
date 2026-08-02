"use client";

import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";

import BookingWidget from "./BookingWidget";


interface BookingContextType {
  openBooking: () => void;
  closeBooking: () => void;
}


const BookingContext =
  createContext<BookingContextType | null>(null);



export function BookingProvider({
  children,
}: {
  children: ReactNode;
}) {


  const [
    open,
    setOpen,
  ] = useState(false);



  const openBooking = () => {
    setOpen(true);
  };



  const closeBooking = () => {
    setOpen(false);
  };



  return (

    <BookingContext.Provider
      value={{
        openBooking,
        closeBooking,
      }}
    >

      {children}


      <BookingWidget
        open={open}
        onClose={closeBooking}
      />


    </BookingContext.Provider>

  );

}



export function useBooking() {

  const context =
    useContext(
      BookingContext
    );


  if (!context) {
    throw new Error(
      "useBooking must be used inside BookingProvider"
    );
  }


  return context;

}

import React from 'react'
import { Toaster } from "react-hot-toast";
export const ToastWrapper = () => {
    return (
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          style: {
            minWidth: "260px",
          },
          duration:2000,
          success: {
            style:{
              background: '#86efac',
            },
            iconTheme: {
              primary: 'white',
            },
          //  duration: 2000,
          },
          error:{
            style:{
              background: '#fecaca',
            },
          }
        }}
      />
    );
  };
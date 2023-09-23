"use client"
import React from "react";
import { Stateagus } from "@/context/Stateagus"

import { QueryClient, QueryClientProvider } from 'react-query';
const queryClient = new QueryClient();

export function Klient({children}){
    return (
        <>
        <QueryClientProvider client={queryClient}>
        <Stateagus>
         
          {children}
          </Stateagus>
    
        </QueryClientProvider>
        </>
      )
}
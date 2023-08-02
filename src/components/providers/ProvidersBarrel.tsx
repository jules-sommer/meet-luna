import { Outlet } from "@solidjs/router";
import { JSX, createSignal } from "solid-js";
import { api, queryClient } from "@utils/api";

export const ProvidersBarrel = ({ children } : { children: JSX.Element }) => {
  
  return (
    {children}
  );

};

import { css } from "styled-system/css";
import { CubeLoader } from "./CubeLoader";

export const FullscreenLoading = ({ loader, colour } : { loader: "cube" | "spinner", colour: "cyan" | "orange" | "indigo" }) => {

    return (

        <div class={`${css({ display: "flex", alignContent: "center", height: 500, alignItems: "center", justifyContent: "center" })} bg-slate-950`}>

            {loader === "cube" && <CubeLoader colour={'cyan'}/>}
            {loader === "spinner" && <span class="loading loading-spinner text-primary"/>}

        </div>

    );

}
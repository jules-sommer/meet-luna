import { A } from "@solidjs/router";
import { For, createSignal } from "solid-js";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { ClassNameValue } from "tailwind-merge";
import { SignInForm } from "./signIn/Form";
import { createStore } from "solid-js/store";
import { useLocation } from "solid-start";

export type NavLinks = {
    [index: string]: [string, string];
}

const [isOpen, setIsOpen] = createStore({
    open: false,
    verifyEmail: false,
}) 

export const SignInDialog = () => {

    return (

        <dialog 
            class="bg-slate-950 text-white p-10 rounded-md h-72 w-72"
            open={true}
            >

            hey dude bro I am {isOpen.open}
            <SignInForm />

        </dialog>

    )

}

export const SignInButton = ({ className } : { className?: ClassNameValue }) => {

    return (

        <button 
            role="button"
            class={twMerge(["btn btn-accent btn-sm", className])}
            onClick={() => setIsOpen({
                ...isOpen,
                open: !isOpen.open,
            })}
        >
            Sign In
        </button>

    )

}

export const Nav = ({ links } : { links: NavLinks }) => {

	const location = useLocation();

    return (

        <nav class={`py-5 px-10 bg-pink-950 flex flex-row justify-between items-center h-[72px]`}>
            
            <div class="flex items-center grow justify-center">

                <For each={Object.entries(links)}>
                    {(item, index) => (
                        <A class={`mr-5 ${item[1][0] === location.pathname ? 'text-white border-b-2 border-b-fuchsia-600' : 'text-slate-300'} last-of-type:mr-0 hover:text-white transition ease-in-out hover:-translate-y-[2px]`} href={item[1][0]}>{item[1][1]}</A>
                    )}
                </For>

            </div>

        </nav>
    
    );

};

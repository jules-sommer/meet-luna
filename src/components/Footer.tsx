import { AiFillHeart } from 'solid-icons/ai'
import { BiSolidCoffee } from 'solid-icons/bi'
import { FaRegularFaceSadCry } from 'solid-icons/fa'
import { CgPill } from 'solid-icons/cg'

import { Show } from 'solid-js';

import { createEffect, createSignal } from 'solid-js'
import { Transition, TransitionGroup } from 'solid-transition-group';

export const Footer = () => {

    const icons = ["heart", "coffee", "sad-cry", "pill"] as const;
    type Icon = typeof icons[number];
        
    const [icon, setIcon] = createSignal<Icon>(icons[0]);

    createEffect(() => {

        setInterval(() => {

            const nextIcon = icons[icons.indexOf(icon()) + 1] || icons[0];

            setIcon(nextIcon);

        }, 500 );

    })

    return (
        
        <footer class={`bg-gradient-to-b from-pink-950 to-pink-950/50 w-full h-20 flex flex-row items-center justify-center h-[144px]`}>

            <span>Made with </span>

            <Show when={icon() === icons[0]}>
                <AiFillHeart class="@apply invert sepia-[0%] saturate-[7499%] hue-rotate-[125deg] brightness-[94%] contrast-[107%] mx-4" size={32} color="white"/>
            </Show>
            <Show when={icon() === icons[1]}>
                <BiSolidCoffee class="@apply invert sepia-[0%] saturate-[7499%] hue-rotate-[125deg] brightness-[94%] contrast-[107%] mx-4" size={32} color={"white"}/>
            </Show>
            <Show when={icon() === icons[2]}>
                <FaRegularFaceSadCry class="@apply invert sepia-[0%] saturate-[7499%] hue-rotate-[125deg] brightness-[94%] contrast-[107%] mx-4" size={32} color={"white"}/>
            </Show>
            <Show when={icon() === icons[3]}>
                <CgPill class="mx-4" size={32} color={"white"}/>
            </Show>

            <span> by Jules</span>

        </footer>

    )

}
import { createEffect, createSignal } from "solid-js";

import { css } from "styled-system/css";

import { isServer } from "solid-js/web";
import { unstable_clientOnly } from "solid-start";

import { spring, stagger } from "motion";
import { Motion, Presence } from "@motionone/solid";

import { clsx } from 'clsx';
import { twMerge } from "tailwind-merge";
import { TransitionGroup } from "solid-transition-group";

const AnimatedTitle = () => {

    let firstLine: HTMLHeadingElement | null = null;
    let secondLine: HTMLHeadingElement | null = null;

    const [bg, setBg] = createSignal("red");

    return (

        <div class="p-16 flex items-center h-full justify-center">

            <h1 class="bg-pink-900 shadow-pink-900 shadow-2xl p-16 rounded-2xl">
                <TransitionGroup name="slide-fade">
                    <span class="font-mono font-black text-7xl pl-11">MEETLUNA</span><br/>
                    <span class="font-mono font-black text-7xl">.CA</span>
                </TransitionGroup>
            </h1>

        </div>

    );

}

export default AnimatedTitle;
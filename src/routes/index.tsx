import { Title, redirect } from "solid-start";
import Counter from "@components/Counter";
import { api } from "@utils/api";
import { For, createEffect, onMount } from "solid-js";
import AnimatedTitle from "@/components/AnimatedTitle";
import { getBaseUrl } from '@/lib/getBaseUrl'


const Home = () => {

	return (
	
		<div class="bg-pink-950 h-[calc(100vh-216px)] en m-0 p-0 text-white overflow-x-hidden">
		
			<main class="h-full flex items-center justify-center">

				<AnimatedTitle />

			</main>

		</div>

	);

}

export default Home;
// @refresh reload
import { Suspense, createEffect } from "solid-js";
import {
	A,
	Body,
	ErrorBoundary,
	FileRoutes,
	Head,
	Html,
	Meta,
	Routes,
	Scripts,
	Title,
	useLocation,
} from "solid-start";
import { unstable_clientOnly } from "solid-start";

import { api, queryClient } from "@/utils/api";
import { ProvidersBarrel } from "@providers/ProvidersBarrel";
import "./root.css";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import { FullscreenLoading } from "@components/loaders/FullscreenLoading";
import { css } from "styled-system/css";
import { createStore } from "solid-js/store";

export const meta = {
	title: "Jules.Codes",
	description:
		"Hey there, my name is Jules and I got this really cool TLD for my personal portfolio, come check out all the projects I am working on right now! And get in touch if you have another or just want to send me some XMR because you're generous. Please send me XMR, am nearing homelessness.",
};

const Root = () => {

	const location = useLocation();

	return (

		<Html lang="en">

			<Head>

				<Title>{meta.title}</Title>
				
				<link rel="preconnect" href="https://fonts.googleapis.com"/>

				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={"anonymous"}/>
				<link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>
					
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={"anonymous"} />
				<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" />

				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={"anonymous"}/>
				<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"/>

				<Meta charset="utf-8" />
				<Meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>

			</Head>

			<Body class="overflow-x: hidden; bg-pink-900">

				<Suspense fallback={<FullscreenLoading loader={'cube'} colour="cyan" />}>
		
					<ErrorBoundary>

						<api.Provider queryClient={queryClient}>
	
							<Nav
								links={{
									home: ["/", "Home"],
									about: ["/about", "About"],
								}}
							/>

							<Routes>
								<FileRoutes />
							</Routes>

							<Footer />

						</api.Provider>								

					</ErrorBoundary>
	
				</Suspense>

				<Scripts />
				
			</Body>

		</Html>

	);

}

export default Root;

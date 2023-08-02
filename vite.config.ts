import solid from "solid-start/vite";
import dotEnvExpand from "dotenv-expand";
import { loadEnv, defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import vercel from "solid-start-vercel";
import devtools from 'solid-devtools/vite'
import path from "path";

export default defineConfig(({ mode }) => {
	// This check is important!
	if (mode === 'development') {
		const env = loadEnv(mode, './.env.local', '');
		dotEnvExpand.expand({ parsed: env });
	}

	return {

		plugins: [
			devtools({
				autoname: true,
			}),
			solid({
				adapter: vercel({}),
			}),
			[tsconfigPaths({
				projects: [path.resolve(__dirname, 'tsconfig.json')],
			})],
		],
		
	};

})
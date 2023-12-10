import { encodeBase58 } from "$std/encoding/base58.ts";

const circles = new Array(2).fill(0).map((_, i) => ({
  id: encodeBase58(crypto.getRandomValues(new Uint8Array(8))),
  name: `Circle ${i}`,
}));

export default function Home() {
  // support dark theme by using bg-slate-900 and white text, if light theme use bg-white and black text

  return (
    <div class="px-4 py-8 mx-auto bg-slate-50 text-slate-950 dark:bg-slate-900 dark:text-slate-200 min-h-screen">
      <div className="absolute -mt-8 z-0">
        <img
          src="https://tailwindcss.com/_next/static/media/docs-dark@30.1a9f8cbf.avif"
          className=""
        />
      </div>
      <div class="max-w-screen-md mx-auto isolate">
        <h1 class="font-bold tracking-normal text-2xl -ml-16">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 125 149.83"
            class="w-16 h-16 inline-block pr-3 align-text-bottom"
          >
            <defs>
              <linearGradient id="test">
                <stop
                  offset="0%"
                  stop-color="hsl(35 99.8% 46.0% / 0.832)"
                  stop-opacity="1"
                >
                </stop>
                <stop
                  offset="100%"
                  stop-color="hsl(336 99.9% 62.8% / 0.903)"
                  stop-opacity="1"
                >
                </stop>
              </linearGradient>
            </defs>
            <g fill="url(#test)">
              <path d="M123.49 108s-5.11-4-11.55-9.12c-1.11-.89-2.52-2.19-4.16-3.7a117 117 0 00-11.73-9.79L116 77a3.5 3.5 0 10-2.72-6.46l-9 3.76 13.49-12.5a3.5 3.5 0 10-4.76-5.14l-14.2 13.25 5.47-11.22A3.5 3.5 0 1098 55.62L86.1 80a25.72 25.72 0 00-9-1.73 20.31 20.31 0 00-2.93.21H74V2a2 2 0 10-3.9 0v77c-6.1.89-11.1 1.61-14.58 2.11-.1-.23-.2-.46-.29-.69l4.51-1.33a2 2 0 00-1.11-3.77l-4.89 1.45c-.24-.6-.47-1.2-.7-1.81l5-1.47a2 2 0 10-1.11-3.76l-5.24 1.55c-.2-.56-.41-1.12-.6-1.68l5.42-1.6a2 2 0 00-1.11-3.76l-5.65 1.66c-.19-.54-.37-1.07-.54-1.58l6-1.78a2 2 0 10-1.11-3.76L48 60.59c-.14-.4-.26-.79-.38-1.16C56.5 57.62 61.21 53 63.64 49.12A20.78 20.78 0 0066.89 39a3.92 3.92 0 00-5.38-3.69l-13.79 5.5a26.66 26.66 0 00-3.06-10.11 2 2 0 00-3.43.1L33 46.73 2.47 58.89a3.92 3.92 0 00-2.38 4.49l3 13.46a3.93 3.93 0 003.83 3.07h.33l9-.75-1.5 26L.35 137a3.92 3.92 0 003.58 5.53h5.41a3.92 3.92 0 002.77-1.14l9.51-9.48-2.22 13.16a3.92 3.92 0 003.86 4.58h7.1a3.91 3.91 0 003.38-1.93l13.67-23.15L71 118.1l19.69 18.83a3.93 3.93 0 002.74 1.07 3.75 3.75 0 001.19-.19l9.91-3.17a3.93 3.93 0 002.33-5.44c-2.19-4.55-4.49-9.37-6.32-13.28l15.24 5.67a3.91 3.91 0 004.77-1.72l3.93-6.82a3.93 3.93 0 00-.99-5.05zM42.8 36.31a23.4 23.4 0 011.1 6.06l-5.35 2.13zm74.35 81.62s-23.35-8.68-23.92-8.87c-.46 0 10.09 21.86 10.09 21.86l-9.9 3.18-21.3-20.37-27.28 7.47-14.48 24.52h-7.1l4.27-25.26-18.19 18.12H3.92l14.64-32.51 1.81-31.2L6.91 76l-.53-2.4c4.33-.28 12.86-1.76 15-8.88a1.4 1.4 0 00-2.69-.8c-1.69 5.64-9.4 6.7-12.92 6.89l-1.84-8.28L63 39s-.19 15.7-20.55 17.19c0 0 5.68 18.4 10.73 29.24 3.45-.5 11.28-1.63 21.59-3.08a17.3 17.3 0 012.38-.16c13.27 0 26.2 14.84 32.37 19.78 6.54 5.23 11.59 9.15 11.59 9.15z">
              </path>
              <path d="M81.12 88.05l-9.6 1.07a1.4 1.4 0 10.31 2.78l8-.89v5.72l-7.13-.47a1.43 1.43 0 00-1.42.92 1.4 1.4 0 00.5 1.61l4.65 3.37-3.23 4.92-4.86-3.31a1.4 1.4 0 00-1.57 2.32l6 4.11a1.39 1.39 0 00.79.24 1.24 1.24 0 00.27 0 1.41 1.41 0 00.9-.6l4.74-7.23a1.4 1.4 0 00-.34-1.9l-1.8-1.31 3.78.25a1.33 1.33 0 001-.38 1.36 1.36 0 00.45-1v-8.83a1.37 1.37 0 00-.47-1 1.35 1.35 0 00-.97-.39z">
              </path>
              <circle cx="30.08" cy="66.09" r="3.27"></circle>
              <path d="M52.94 128.33l-3.39-1.48-3.6 8.47 5.3 1.27 1.69-8.26zm4.66 5.09l7.2 5.19 2.97-2.33-5.3-7.74-4.87 4.88zm10.17-10.7v8.26l4.66-1.9-2.33-6.36h-2.33zm-20.18 23.91l5.04 3.2 4.57-5.95-1.98-2.44-7.63 5.19zm6.76-55.55l-7.19-2.94a1.4 1.4 0 00-1.06 2.6l5.83 2.38-2.13 4.58-6.78-2a1.42 1.42 0 00-1.58.58 1.4 1.4 0 00.1 1.67l4.31 5.05-4.74 4.17-5.83-5.08a1.4 1.4 0 00-2.28 1.37l1.41 6.81-7.58 2-1-6.47a1.4 1.4 0 00-2.77.45l1.28 8a1.38 1.38 0 00.62.95 1.3 1.3 0 001.11.19l10.37-2.66a1.4 1.4 0 001-1.64l-.86-4.09 3.62 3.15a1.39 1.39 0 001.84 0l6.7-5.88a1.41 1.41 0 00.15-2l-2.17-2.57 3.44 1a1.39 1.39 0 001.67-.75l3.26-7a1.36 1.36 0 000-1.1 1.41 1.41 0 00-.74-.77z">
              </path>
            </g>
          </svg>
          Welcome to Gifty.lol <span className="font-normal text-sm">(v2)</span>
        </h1>
        <p className="mt-4 mb-3">Your circles</p>
        <div class="grid grid-cols-3 gap-5">
          {circles.map((circle) => (
            <div class="p-4 rounded-lg shadow-lg dark:bg-slate-800">
              <h2 class="font-bold text-xl">{circle.name}</h2>
              <p class="text-gray-600">ID: {circle.id}</p>
              <a
                href={`/circle/${circle.id}`}
                class="inline-block px-4 py-2 mt-4 text-white bg-slate-600 rounded-lg"
              >
                Open
              </a>
            </div>
          ))}
          <div class="border-2 border-dashed rounded-lg flex items-center justify-center">
            <a
              href="/circle/new"
              class="pl-3 pr-4 py-2 text-white rounded-lg items-center inline-flex gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 text-slate-400"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                  clipRule="evenodd"
                />
              </svg>
              Create new circle
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

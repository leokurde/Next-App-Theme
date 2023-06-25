import { DarkMode } from "../containers/DarkMode.js";

export default function Layout() {
  return (
    <main className="flex items-center justify-center min-h-screen min-w-screen">
      <DarkMode className={`dark max-w-screen-sm max-h-screen`} />
    </main>
  );
}

import { useContext } from "react";
import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import MyContext from "../pages/MyContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const contextValue = useContext(MyContext);
  const router = useRouter();

  // Track pageview when the route changes
  useEffect(() => {
    const handleRouteChange = (url) => {
      // Replace this with your analytics tracking code or custom logic
      console.log("Pageview:", url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;

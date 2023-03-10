import "@/styles/globals.css";
import { ThemeProvider, theme } from "@reusejs/react";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider value={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

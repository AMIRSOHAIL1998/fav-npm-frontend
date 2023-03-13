import "@/styles/globals.css";
import { ThemeProvider, theme } from "@reusejs/react";
import { Provider } from "react-redux";
import store from '../store/store'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider value={theme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

import "@/styles/globals.css";
import { ThemeProvider, theme } from "@reusejs/react";
import { Provider } from "react-redux";
import store from '../store/store'

export default function App({ Component, pageProps }) {
  const newTheme = {
    ...theme,
    variants: {},
  };
  
  const variants = {
    green: {
      buttonBaseClasses: {
        backgroundColor: 'bg-green-600',
        borderRadius: 'rounded-md',
        font: 'text-sm font-medium',
        padding: 'px-4 py-2',
        textColor: 'text-white',
      },
    },
  };
  
  newTheme['variants'] = variants;
  return (
    <ThemeProvider value={newTheme}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

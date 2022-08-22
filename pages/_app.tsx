import "../styles/globals.css";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import type { AppProps } from "next/app";

// uncomment here
// import { QueryClient, QueryClientProvider } from "react-query";

//  dont uncomment here

// import "@fontsource/inter/200.css";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/600.css";
// import "@fontsource/inter/700.css";

// import "@fontsource/roboto/100.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/700.css";
// import "@fontsource/roboto/900.css";
import { customTheme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  // uncomment here

  // const queryClient = new QueryClient({
  //   defaultOptions: {
  //     queries: {
  //       retry: 1,
  //       refetchOnMount: false,
  //       refetchOnWindowFocus: false,
  //     },
  //   },
  // });

  return (
    // <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
    // </QueryClientProvider>
  );
}

export default MyApp;

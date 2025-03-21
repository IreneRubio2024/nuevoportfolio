import { PortfolioProvider } from "@/Contexts/PortfolioContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  );
}

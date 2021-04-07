import ShopContextProvider from "../context/shopContext";
import Nav from "../compenents/nav";
//import "tailwindcss/tailwind.css";
import { Provider } from "next-auth/client";
import "../styles/global.css";
function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <ShopContextProvider>
        <Nav />
        <div className="lg:max-w-screen-2xl lg:w-full lg:m-auto md:m-auto lg:shadow-xl lg:px-6 lg:py-6">
          <Component {...pageProps} />
        </div>
      </ShopContextProvider>
    </Provider>
  );
}
export default MyApp;

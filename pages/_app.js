import Layout from "../components/Layout";
import "../styles/globals.css";

// MyApp is a function that takes each of the pages (and the pages props) and displays it however we want.
// In this case, I've created a Layout component that wraps around the page component
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

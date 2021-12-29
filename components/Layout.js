import Head from "next/head";
import styles from "../styles/Layout.module.css";
import Navigation from "../components/Navigation";

// The curly braces destructures the passed in object (the props) into the chosen object's attributes.
// In this case, we've only chosen to take the children from the props object.
function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Osama Hafez</title>
        <link
          rel="icon"
          href="https://lh3.googleusercontent.com/proxy/_4pRq4iSIa6Hnre9iB8ws3R9YbpoFafbavrsRb-DmjE_JNRNMsRyVhSurF9zc7KlAAn-kyd8oUOhkmixd8T6OnpZ"
        />
      </Head>
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.overlay}>
            <Navigation></Navigation>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;

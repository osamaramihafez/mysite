import styles from "../styles/Nav.module.css";

export default function Home() {
  return (
    <div>
      <h2 style={{ float: "left" }}>Osama Hafez</h2>
      <p className={styles.homeText}>
        {
          "A personal website... right? The real reason this website exists is \
        because I wanted to practice Next.js a little before using it in a \
        project. Nothing fancy, but hey, I'm all for fulfilling two needs with \
        one deed. That's what make the deed all the much sweeter. So for that \
        reason, I will be introducing some very unnecessary features to this \
        website. That should look good on my resume... Enjoy!"
        }
      </p>
    </div>
  );
}

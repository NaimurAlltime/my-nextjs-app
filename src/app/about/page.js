import styles from "./About.module.css";

export const metadata = {
  title: "About",
  description: "This is about page",
};

const AboutPage = () => {
  return (
    <div>
      <h2 className={styles.heading}>AboutPage</h2>
    </div>
  );
};

export default AboutPage;

import Link from "next/link";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      Made with 🔥 by&nbsp;
      <Link href="https://www.linkedin.com/in/ethem-kizilyer/" target="_blank">
        Ethem KIZILYER
      </Link>
    </footer>
  );
}

export default Footer;
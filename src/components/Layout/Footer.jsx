import Image from 'next/image';
import styles from '../../styles/components/Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <a
        href="https://www.linkedin.com/in/ankitgoel25/"
        target="_blank"
        rel="noreferrer"
      >
        <p>Made by Ankit Goel</p>
        {/* Could use Next Link but since its a cross origin
      href, so it is of no use here. */}

        <span>
          <Image
            src="/images/linkedin-white.png"
            alt="linkedin"
            layout="fill"
          />
        </span>
      </a>
    </footer>
  );
}

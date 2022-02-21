import Image from 'next/image';
import { Cog } from '../../helpers/svgs';
import styles from '../../styles/components/Header.module.scss';

export default function Header() {
  return (
    <div className={styles.Head}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Logo" width={40} height={38} />
      </div>
      <div className={styles.mainHead}>
        <p>Rich-Text Editor</p>
        <div className={styles.HeadCog}>
          <Cog />
        </div>
      </div>
    </div>
  );
}

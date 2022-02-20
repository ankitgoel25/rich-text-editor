import Head from 'next/head';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plotline | Rich Text Editor</title>
      </Head>
      <p>Home Page</p>
    </div>
  );
}

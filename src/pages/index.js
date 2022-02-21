import Head from 'next/head';
import Editor from '../components/Editor';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Head>
        <title>Plotline | Rich Text Editor</title>
      </Head>
      <h1>Ankit Goel Interview</h1>
      <Editor />
    </div>
  );
}

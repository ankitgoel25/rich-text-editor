import Head from 'next/head';
import Comments from '../components/Comments';
import Editor from '../components/Editor';
import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <main className={styles.homeContainer}>
      <Head>
        <title>Plotline | Rich Text Editor</title>
      </Head>
      <h1>Ankit Goel Interview</h1>
      <Editor />
      <Comments />
    </main>
  );
}

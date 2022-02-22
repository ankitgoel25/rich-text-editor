import Image from 'next/image';
import styles from '../styles/components/Comments.module.scss';

export default function Comments() {
  const speakers = [
    {
      name: 'Ankit Goel',
      timestamp: '07:25',
      comment: `There are many variations of Lorem Ipsum but the majority have
              suffered alteration There are many variationpassa don't look
              even slightly believable. If you are going to use a passage.`,
      picture: '/images/dp1.png',
    },
    {
      name: 'Aagam Jain',
      timestamp: '12:35',
      comment: `There are many variations of Lorem Ipsum but the majority have
              suffered alteration There are many variationpassa don't look
              even slightly believable. If you are going to use a passage.`,
      picture: '/images/dp2.png',
    },
    {
      name: 'Amrish Puri',
      timestamp: '11:11',
      comment: `There are many variations of Lorem Ipsum but the majority have
              suffered alteration There are many variationpassa don't look
              even slightly believable. If you are going to use a passage.`,
      picture: '/images/dp3.png',
    },
  ];

  const Comment = ({ data }) => {
    return (
      <div className={styles.commentBox}>
        <div className={styles.imageSection}>
          <span>
            <Image src={data.picture} alt="Display picture" layout="fill" />
          </span>
        </div>
        <div className={styles.commentMain}>
          <div className={styles.commentHeader}>
            <span>{data.name}</span>
            <span>{data.timestamp}</span>
          </div>
          <div className={styles.comment}>
            <p>{data.comment}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className={styles.OuterBox}>
      <div className={styles.innerBox}>
        <p>Box 1</p>
        {speakers.map((data) => (
          <Comment key={data.name} data={data} />
        ))}
      </div>
    </section>
  );
}

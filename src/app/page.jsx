import Button from "@/components/Button/Button";
import styles from "./page.module.css";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your digital products</h1>
        <p className={styles.desc}>
          Turning your ideas into reality. We bring together the teams from the
          global tech industry
        </p>
        <Button url="/portfolio" text="See our work" />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="hero image" className={styles.img} />
      </div>
    </div>
  );
}

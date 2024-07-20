import { Inter } from "next/font/google";
import styles from "@/style/Home.module.css";
import { cnn } from "@/service/cnn";
import Profile from "@/interface/IProfile";
import HeaderHistory from "@/components/HeaderHistory";

const inter = Inter({
  display: "block",
  subsets: ["latin"],
  weight: ["400"]
})

export default async function Home() {
  const res = await cnn.get("/users")

  console.log(res.data[0].id.machine)
  return (
    <main>
      <HeaderHistory>
        <ul className={styles.history__list}>
          {res.data.map((i: Profile) =>
            <li key={crypto.randomUUID()}>
              <a href={`#history/${i.identify}`} title={i.username} className={`${styles.history__link} ${i.history ? styles["history__link-history"] : ""}`}>
                <img src={`${process.env.API_URL}${i.picture}`} alt={i.username} />
                <span className={inter.className}>{i.username}</span>
              </a>
            </li>
          )}
        </ul>
      </HeaderHistory>
    </main>
  );
}

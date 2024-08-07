import { Suspense, lazy } from "react";
import { Inter } from "next/font/google";
import { cnn } from "@/service/cnn";
import HeaderHistory from "@/components/HeaderHistory";
import IProfile from "@/interface/IProfile";
import styles from "@/style/Home.module.css";
import Loading from "@/components/Loading";
import { wait } from "@/service/time";

const inter = Inter({
  display: "block",
  subsets: ["latin"],
  weight: ["400"]
})

export default async function Home() {
  const PostContent = lazy(() => wait(1000).then(() => import("@/components/PostContent")))
  const profile = await cnn.get("/users")

  return (


    <main className={inter.className}>
      <HeaderHistory>
        <ul className={styles.history__list}>
          {profile.data.map((i: IProfile) =>
            <li key={crypto.randomUUID()}>
              <a href={`#history/${i.identify}`} title={i.username} className={`${styles.history__link} ${i.history ? styles["history__link-history"] : ""}`}>
                <img src={`${process.env.NEXT_PUBLIC_API_BASE_URL}${i.picture}`} alt={i.username} />
                <span className={inter.className}>{i.username}</span>
              </a>
            </li>
          )}
        </ul>
      </HeaderHistory>
      <Suspense fallback={<Loading />}>

        <PostContent />
      </Suspense>
    </main>

  );
}

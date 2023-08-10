import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.connect}>
            <ConnectWallet
              dropdownPosition={{
                side: "bottom",
                align: "center"
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

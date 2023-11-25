import React from "react";

import Header from "../header/Header";
import Container from "../container/Container";
import Footer from "../footer/Footer";

import styles from "./page-layout.module.css";

const PageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Container>{children}</Container>
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;

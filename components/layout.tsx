import styles from './layout.module.css';
import { ReactNode } from "react";

export default function Layout({ children }:{children:ReactNode;}) {
    return <div className={styles.container}>{children}</div>;
  }
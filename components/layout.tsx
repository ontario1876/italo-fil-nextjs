import styles from './layout.module.css';
import { ReactNode } from "react";

export default function Layout({ 
  children,
  home 
}:{
  children:ReactNode
  home?:boolean
}) {
    return <div className={styles.container}>{children}</div>;
  }
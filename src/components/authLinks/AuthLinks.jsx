"use client";

import React, { useState } from 'react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import styles from './authLinks.module.css';

const AuthLinks = () => {
  const [open, setOpen] = useState(false);
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>Login</Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>Write</Link>
          <span className={styles.link} onClick={() => signOut()}>Logout</span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href="/" className={styles.link}>Home</Link>
          <Link href="/" className={styles.link}>About</Link>
          <Link href="/" className={styles.link}>Contact</Link>
          {status === "notuthenticated" ? (
            <Link href="/login" className={styles.link}>Login</Link>
          ) : (
            <>
              <Link href="/write" className={styles.link}>Write</Link>
              <span className={styles.link}>Logout</span>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default AuthLinks;

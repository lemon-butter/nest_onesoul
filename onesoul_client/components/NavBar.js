import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();
    let activeItem;

    if(router.pathname === "/"){
        activeItem = "home";
    }else if(router.pathname === "/admin"){
        activeItem = "admin";
    }else if(router.pathname === "/login") {
        activeItem = "login";
    }

    return (
    <nav className={styles.nav}>
        <Link href="/">
            <a className={`${styles.link}, ${activeItem==="home"?styles.on:''}`}>Home</a>
        </Link>
        <Link href="/admin">
            <a className={`${styles.link}, ${activeItem==="admin"?styles.on:''}`}>admin</a>
        </Link>
        <Link href="/login">
            <a className={`${styles.link}, ${activeItem==="login"?styles.on:''}`}>login</a>
        </Link>
    </nav>
    );
}
import Image from "next/image";
import React from "react"
import Avatar from "../../../assets/images/avatar.svg";

import styles from "./Header.module.scss";

export interface IHeader {
    avatar?: any;
    name: String;
    tag: String;
    author: String;
    timeAgo: String;
}

const Header: React.FC<IHeader> = ({ avatar, name, tag, author, timeAgo }) => {
    return (
        <div className={styles.container}>
            <Image src={Avatar} width={32} height={32} alt="logo" />
            <div className={styles.content}>
                <div className={styles.content_top}>
                    <strong>{name}</strong>
                    <span>{tag}</span>
                </div>
                <div className={styles.content_bottom}>
                    <span>Đăng bởi</span>
                    <b>{author}</b>
                    <span>{timeAgo}</span>
                </div>
            </div>
        </div>
    )
}

export default Header
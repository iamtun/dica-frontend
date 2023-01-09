import Image from "next/image";
import React from "react"
import AvatarIMG from "../../../assets/images/avatar.svg";

import styles from "./Header.module.scss";
import { Avatar } from 'antd';
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
            <Avatar shape="square" size={32} icon={<Image src={AvatarIMG} width={32} height={32} alt="logo" />} />
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
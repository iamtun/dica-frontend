import Image from "next/image";
import React from "react"

import styles from "./Header.module.scss";
import { Avatar } from 'antd';
import LayoutHeaderPageDetail from "@/components/Layout/layout-header-page-detail";
import { ITag } from "models/tag";

export interface IHeader {
    avatar?: any;
    name: String;
    tags: [ITag];
    author: String;
    timeAgo: String;
}

const Header: React.FC<IHeader> = ({ avatar, name, tags, author, timeAgo }) => {
    return (
        <LayoutHeaderPageDetail
            sizeTop={0}
            left={<Avatar 
                    shape="square" 
                    size={32} 
                    className={styles.__avatar}
                    icon={<Image src={'https://docdn.giainhanh.io/media/avatars/bear-2.png'} width={32} height={32} alt="logo" />} 
                />
            }
            rightTop={<div className={styles.content_top}>
                <b>{author}</b>
                <span>{timeAgo}</span>
            </div>}
            rightDown={<div className={styles.content_bottom}>
                {tags.map(tag => <span key={tag.slug_name}>{tag.display_name}</span>)}
            </div>}
        />
    )
}

export default Header
import { Avatar, Col, Row } from "antd";
import React from "react";
import Image from "next/image";

import AvatarIMG from "@/assets/images/avatar.svg";
import styles from "./UserInfo.module.scss";
import { IUserInfo } from "models/userInfo";
import LayoutHeaderPageDetail from "@/components/Layout/layout-header-page-detail";

interface IUserInfoComponent {
    user_info: IUserInfo
}

const UserInfo: React.FC<IUserInfoComponent> = ({ user_info }) => {
    return (
        <LayoutHeaderPageDetail 
            sizeTop={20}
            left={<Avatar shape="circle" size={32} icon={<Image src={AvatarIMG} width={32} height={32} alt="logo" />} />} 
            rightTop={<p className={styles.__username}>{user_info.display_name}</p>} 
            rightDown={<p className={styles.__info}>345 Lá &#8226; Đã giúp được 628 bạn</p>}
        />
    )
}

export default UserInfo;
import Image from "next/image";
import React from "react"

interface IHeader {
    avatar: String;
    name: String;
    tag: String;
    author: String;
    timeAgo: String;
}

const Header: React.FC<IHeader> = ({ avatar, name, tag, author, timeAgo }) => {
    return <div>
        <Image src={'../../../assets/images/avatar.png'} width={32} height={32} alt="logo" />
    </div>
}

export default Header
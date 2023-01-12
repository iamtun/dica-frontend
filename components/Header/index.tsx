import { LOGO } from "@/common/svg";
import Image from "next/image";
import React from "react";

import styles from "./Header.module.scss";

const HeaderPage: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.__top}>
                <Image src={LOGO} width={90} height={15} alt="logo" />
            </div>
        </div>
    )
}

export default HeaderPage;
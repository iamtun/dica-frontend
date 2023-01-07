import Image from "next/image"
import React from "react"
import { ROTATE } from "@/common/svg";

import styles from "./Image.module.scss";

interface IImageQuestion {
    image: any;
}
const ImageQuestion: React.FC<IImageQuestion> = ({ image }) => {
    return <div className={styles.container}>
        <Image src={image} alt="img-question" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 33vw" fill priority className={styles.main}/>
        <Image src={ROTATE} alt="rotate" width={44} height={44} className={styles.rotate}/>
    </div>
}

export default ImageQuestion
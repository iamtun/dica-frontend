import Image from "next/image"
import React from "react"
import { ROTATE } from "@/common/svg";

import styles from "./Image.module.scss";

interface IQuestionImage {
    image: any;
}
const QuestionImage: React.FC<IQuestionImage> = ({ image }) => {
    return <div className={styles.container}>
        <Image src={image} alt="img-question" width={350} height={148} priority className={styles.main}/>
        <Image src={ROTATE} alt="rotate" width={44} height={44} className={styles.rotate} />
    </div>
}

export default QuestionImage
import React from "react"
import { IQuestionControl } from "../Question/Control";
import styles from "./Count.module.scss";

const Count: React.FC<IQuestionControl> = ({ answer_count }) => {
    return <div className={styles.count}>
        <p>{answer_count.toString()}</p>
    </div>
}

export default Count
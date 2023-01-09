import React from "react"
import QuestionImage from "../Question/Image";

import styles from "./Answer.module.scss";
import AnswerControl from "./Control";
import AnswerHeader from "./Header";
import UserInfo from "./UserInfo";

interface IAnswer {
    userAccept?: {
        username: String,
        tag: String,
    }

    userAnswer?: {
        username: String,
        leaf: Number,
        help: Number,
    }

    desc?: String,
    image?: any,
    react?: Number,
    comment?: Number,
}

const Answer: React.FC<IAnswer> = () => {
    return <div className={styles.container}>
        <AnswerHeader/>

        <UserInfo/>

        <p className={styles.__text_content}>{`Juan's words and actions in the first part of the story suggest that he has a strong interest in sewing. In the story, Juan is described as "a quick learner" and "eager to learn" (Steinbeck 2), indicating that he is motivated and interested in acquiring new skills`}</p>

        <QuestionImage image={'https://docdn.giainhanh.io/media/attachments/2023/01/06/442023579324777297.jpeg'}/>

        <AnswerControl />
    </div>
}

export default Answer;
import { IAnswer } from "models/answer";
import React from "react"
import QuestionImage from "../Question/Image";

import styles from "./Answer.module.scss";
import AnswerControl from "./Control";
import AnswerHeader from "./Header";
import UserInfo from "./UserInfo";

interface IAnswerComponent {
    answer: IAnswer;
}

const Answer: React.FC<IAnswerComponent> = ({ answer }) => {

    return <div className={styles.container} >
        <AnswerHeader isAccepted={true} />

        <UserInfo user_info={answer.user_info} />

        <p className={styles.__text_content}>{answer.content}</p>

        <QuestionImage image={'https://docdn.giainhanh.io/media/attachments/2023/01/06/442023579324777297.jpeg'} />

        <AnswerControl vote_count={answer.vote_count} />
    </div>
}

export default Answer;
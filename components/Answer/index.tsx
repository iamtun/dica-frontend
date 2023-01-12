import React from "react"
import clsx from "clsx";

import { IAnswer } from "models/answer";
import QuestionImage from "../Question/Image";
import styles from "./Answer.module.scss";
import AnswerControl from "./Control";
import AnswerHeader from "./Header";
import UserInfo from "./UserInfo";

interface IAnswerComponent {
    answer: IAnswer;
}

const Answer: React.FC<IAnswerComponent> = ({ answer }) => {
    const isAccepted = false;
    return (
        <div className={clsx([styles.container, isAccepted && styles.__accepted])} > 
            <AnswerHeader isAccepted={isAccepted} />

            <UserInfo user_info={answer.user_info} />

            <p className={styles.__text_content}>{answer.content}</p>

            <QuestionImage image={'https://docdn.giainhanh.io/media/attachments/2023/01/11/442746847539233617.jpeg'} />

            <AnswerControl vote_count={answer.vote_count} />
        </div>
    )
}

export default Answer;
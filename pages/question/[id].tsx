import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React from "react"
import Head from "next/head";

import QuestionItem from "@/components/Question";
import LayoutPageDetail from "@/components/Layout/layout-page-detail";
import Answer from "@/components/Answer";
import request from "utils/request";
import { IQuestion } from "models/question";
import { IAnswer, IAnswers } from "models/answer";

const QuestionDetail: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ question, answers }) => {

    return (
        <>
            <Head>
                <title>{question.title}</title>
                <meta name="description" content={question.description} />
            </Head>
            <LayoutPageDetail>
                {/* <div className="container"> */}
                <QuestionItem {...question} />
                {/* </div> */}

               {answers.map((answer:IAnswer) =>  <Answer answer={answer} key={answer.id}/>)}
            </LayoutPageDetail>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;

    try {
        const questionPromise = request.get<IQuestion>(`question/info?id=${params?.id}`);
        const answersPromise = request.get<IAnswers>(`/answer/page?question_id=${params?.id}`);
        
        const resp = await Promise.all([questionPromise, answersPromise]);
        
        const question = resp[0];
        const answers = resp[1].list;
        
        const _question = {
            header: {
                author: question.user_info.display_name,
                tags: question.tags,
                timeAgo: "2 giờ trước",
            },
            id: question.id,
            title: question.title,
            url_title: question.url_title,
            content: "https://docdn.giainhanh.io/media/attachments/2023/01/11/442746847539233617.jpeg",
            comment: question.answer_count,
            answer_count: question.answer_count,
        }

        return {
            props: {
                question: _question,
                answers,
            }
        }
    } catch (error) {
        console.log('Error request question detail', error);
    }

    return {
        notFound: true,
    }
}
export default QuestionDetail;
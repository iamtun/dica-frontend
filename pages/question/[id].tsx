import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import React, { useEffect } from "react"
import QuestionItem from "@/components/Question";
import LayoutPageDetail from "@/components/Layout/layout-page-detail";
import Answer from "@/components/Answer";
import request from "utils/request";
import { IQuestion } from "models/question";
import Head from "next/head";

const QuestionDetail: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({ question }) => {

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

                <Answer />
            </LayoutPageDetail>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
    const { params } = context;

    try {
        const question = await request.get<IQuestion>(`question/info?id=${params?.id}`);
        console.log(question);

        const _question = {
            header: {
                name: "Cộng đồng vật lý Dicamon",
                author: question.user_info.display_name,
                tag: "#Vật lý - 9",
                timeAgo: "2 giờ trước",
            },
            id: question.id,
            title: question.title,
            url_title: question.url_title,
            content: "https://docdn.giainhanh.io/media/attachments/2023/01/11/442710032203645777.jpeg",
            comment: question.answer_count,
            answer_count: question.answer_count,
        }

        return {
            props: {
                question: _question,
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
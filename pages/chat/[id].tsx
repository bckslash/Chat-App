import Head from "next/head";

import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";

import { GetServerSideProps } from "next/types";

import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import { ChatProps, DocumentProps, Messages } from "../../typings";

// ! FIX the TS error, line 34 below
const Chat = ({ chat, messages }: ChatProps) => {
    const [user] = useAuthState(auth);

    return (
        <main className="flex">
            <Head>
                <title>Chat with {getRecipientEmail(chat.users, user)} </title>
            </Head>

            <Sidebar />
            <section className="scroll-hide flex-1 overflow-scroll">
                {/* @ts-ignore */}
                <ChatScreen chat={chat} messages={messages} />
            </section>
        </main>
    );
};

export default Chat;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.query;

    const ref = db.collection("chats").doc(id);

    const messagesRes = await ref
        .collection("messages")
        .orderBy("timestamp", "asc")
        .get();

    const messages = messagesRes.docs
        .map((doc: DocumentProps) => ({
            id: doc.id,
            ...doc.data(),
        }))
        .map((messages: Messages) => ({
            ...messages,
            timestamp: messages.timestamp.toDate().getTime(),
        }));

    const chatRes = await ref.get();
    const chat = {
        id: chatRes.id,
        ...chatRes.data(),
    };

    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat,
        },
    };
};

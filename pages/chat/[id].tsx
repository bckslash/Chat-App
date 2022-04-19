import Head from "next/head";

import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";

import { GetServerSideProps } from "next/types";

import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import { ChatScreenProps, DocumentProps } from "../../typings";

const Chat = ({ chat, messages }: ChatScreenProps) => {
    const [user] = useAuthState(auth);

    console.log(chat);
    console.log(messages);

    return (
        <main className="flex">
            <Head>
                <title>Chat with: {getRecipientEmail(chat.users, user)} </title>
            </Head>

            <Sidebar />
            <section className="scroll-hide flex-1 overflow-scroll">
                <ChatScreen />
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
        .map((messages: any) => ({
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

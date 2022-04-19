import Head from "next/head";

import { db, auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";

import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";

interface ChatScreenProps {
    chat: any;
    messages: any;
}

const Chat = () => {
    const [user] = useAuthState(auth);

    return (
        <main className="flex">
            <Head>
                <title>Chat with: </title>
            </Head>

            <Sidebar />
            <section className="scroll-hide flex-1 overflow-scroll">
                <ChatScreen />
            </section>
        </main>
    );
};

export default Chat;

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

import TimeAgo from "timeago-react";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import firebase from "firebase/compat/app";

import { FaUserCircle } from "react-icons/fa";
import { IoMdAttach } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdInsertEmoticon } from "react-icons/md";
import { BiMicrophone } from "react-icons/bi";

import { ChatProps } from "../typings";
import DefaultButton from "./DefaultButton";
import Message from "./Message";
import getRecipientEmail from "../utils/getRecipientEmail";

function ChatScreen({ chat, messages }: ChatProps) {
    const [user] = useAuthState(auth);
    const endOfChatRef: any = useRef(null);

    const [input, setInput] = useState("");
    const router = useRouter();

    const [messagesSnapchot] = useCollection(
        db
            .collection("chats")
            .doc(router.query.id)
            .collection("messages")
            .orderBy("timestamp", "asc")
    );

    const [recipientSnapshot] = useCollection(
        db
            .collection("users")
            .where("email", "==", getRecipientEmail(chat.users, user))
    );
    const recipient = recipientSnapshot?.docs[0]?.data();

    const showMessages = () => {
        if (messagesSnapchot) {
            return messagesSnapchot.docs.map((message) => {
                return (
                    <Message
                        key={message.id}
                        // TODO: fix the type
                        // @ts-ignore
                        user={message.data().user}
                        message={{
                            ...message.data(),
                            timestamp: message
                                .data()
                                .timestamp?.toDate()
                                .getTime(),
                        }}
                    />
                );
            });
        } else {
            return JSON.parse(messages).map((message: any) => {
                return (
                    <Message
                        key={message.id}
                        user={message.user}
                        message={message}
                    />
                );
            });
        }
    };

    const sendMessage = (e: any) => {
        e.preventDefault();

        if (input.length == 0) {
            return;
        }

        db.collection("users").doc(user?.uid).set(
            {
                lastSeen: firebase.firestore.FieldValue.serverTimestamp(),
            },
            { merge: true }
        );

        db.collection("chats").doc(router.query.id).collection("messages").add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message: input,
            user: user?.email,
            photoURL: user?.photoURL,
        });

        scrollToBottom();
        setInput("");
    };

    const scrollToBottom = () => {
        // @ts-ignore
        endOfChatRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    useEffect(() => {
        scrollToBottom();
    }, [chat, messages]);

    useEffect(() => {
        scrollToBottom();
    });

    return (
        <main className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-10 flex min-w-max place-items-center gap-3 border-b border-gray-300 bg-gray-200 p-2 shadow-sm">
                {recipient ? (
                    <img
                        className="m-2 w-10 cursor-pointer rounded-full transition-opacity duration-200 ease-in-out hover:opacity-70"
                        // TODO: FIX THIS
                        // @ts-ignore
                        src={recipient?.photoURL}
                    />
                ) : (
                    <FaUserCircle className="m-2 h-10 w-10 cursor-pointer text-3xl text-gray-500 transition-opacity duration-200 ease-in-out hover:opacity-70" />
                )}
                <div className="text-primary_dark">
                    <h3 className="text-lg font-semibold">
                        {getRecipientEmail(chat.users, user)}
                    </h3>
                    {recipientSnapshot ? (
                        <div className="flex gap-2 text-sm text-gray-500">
                            Last active:{" "}
                            {recipient?.lastSeen?.toDate() ? (
                                // TODO: FIX time ago dates
                                // @ts-ignore
                                // <TimeAgo
                                //     dateTime={recipient?.lastSeen
                                //         ?.toDate()
                                //         .toLocaleString()}
                                // />

                                <p>
                                    {recipient?.lastSeen
                                        ?.toDate()
                                        .toLocaleString()}
                                </p>
                            ) : (
                                "Unknown"
                            )}
                        </div>
                    ) : (
                        <p className="text-gray-500">...</p>
                    )}
                </div>

                <aside className="flex-1 text-right">
                    <DefaultButton>
                        <IoMdAttach className="text-xl text-primary_dark" />
                    </DefaultButton>

                    <DefaultButton>
                        <BsThreeDotsVertical className="text-xl text-primary_dark" />
                    </DefaultButton>
                </aside>
            </header>

            {/* messages container */}
            <div className="flex-grow bg-white px-5 py-5">
                {showMessages()}
                <div className="mb-10" ref={endOfChatRef} />
            </div>

            {/* input container */}
            <section className="group sticky bottom-0 flex items-center justify-between gap-2 border-t bg-gray-100 p-2 shadow-sm">
                <DefaultButton>
                    <MdInsertEmoticon className="text-xl text-primary_dark" />
                </DefaultButton>

                <form onSubmit={sendMessage} className="w-full">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full flex-1 break-normal bg-inherit text-primary_dark outline-none focus:outline-none"
                        type="text"
                        placeholder="Write the message..."
                    />
                </form>

                <DefaultButton>
                    <BiMicrophone className="text-xl text-primary_dark" />
                </DefaultButton>
            </section>
        </main>
    );
}

export default ChatScreen;

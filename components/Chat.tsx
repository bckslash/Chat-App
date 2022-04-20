import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useRouter } from "next/router";

import { FaUserCircle } from "react-icons/fa";
import getRecipientEmail from "../utils/getRecipientEmail";

import { Chat } from "../typings";

const Chat = ({ id, users }: Chat) => {
    const router = useRouter();
    const [user] = useAuthState(auth);
    const [recipientSnapshot] = useCollection(
        db
            .collection("users")
            .where("email", "==", getRecipientEmail(users, user))
    );

    const enterChat = () => {
        router.push(`/chat/${id}`);
    };

    const recipient = recipientSnapshot?.docs[0]?.data();
    const recipientEmail: any = getRecipientEmail(users, user);

    return (
        <div
            onClick={enterChat}
            className="flex cursor-pointer items-center justify-start gap-3 break-words px-5 py-3 hover:bg-gray-200"
        >
            {recipient ? (
                <img
                    className="m-2 w-10 rounded-full"
                    src={recipient?.photoURL}
                />
            ) : (
                <FaUserCircle className="m-3 text-3xl text-gray-500" />
            )}
            <p className="max-words-3 break-words text-gray-700">
                {recipientEmail.length > 25
                    ? (recipientEmail.substring(0, 25) + "...").toString()
                    : recipientEmail}
            </p>
        </div>
    );
};
export default Chat;

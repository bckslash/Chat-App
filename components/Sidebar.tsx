import { FaUserCircle } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

import * as EmailValidator from "email-validator";
import { auth, db } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";
import DefaultButton from "./DefaultButton";

interface CreateChat {
    (): void;
}

function Sidebar() {
    const [user]: any = useAuthState(auth);
    const userChatRef = db
        .collection("chats")
        .where("users", "array-contains", user.email);

    const [chatsSnapshot] = useCollection(userChatRef);

    const createChat: CreateChat = () => {
        const input = prompt(
            "Please enter an email address for the user you wish to chat with"
        );

        if (!input) return null;

        if (
            EmailValidator.validate(input) &&
            input !== user.email &&
            !chatAlreadyExists(input)
        ) {
            db.collection("chats").add({
                users: [user.email, input],
            });
        }
    };

    const chatAlreadyExists = (recipientEmail: string) =>
        !!chatsSnapshot?.docs.find(
            (chat) =>
                chat
                    .data()
                    .users.find((user: string) => user === recipientEmail)
                    ?.length > 0
        );

    return (
        <aside className="min-h-screen min-w-max border-r border-gray-300 bg-gray-100">
            <header className="sticky z-10 flex flex-wrap items-center justify-between gap-20 border-b border-gray-300 bg-gray-200 p-2">
                {user ? (
                    <img
                        onClick={() => auth.signOut()}
                        className="m-2 w-10 cursor-pointer rounded-full transition-opacity duration-200 ease-in-out hover:opacity-70"
                        src={user?.photoURL}
                    />
                ) : (
                    <FaUserCircle
                        onClick={() => auth.signOut()}
                        className="m-3 cursor-pointer text-3xl text-gray-500 transition-opacity duration-200 ease-in-out hover:opacity-70"
                    />
                )}
                <div className="flex items-center justify-center gap-2">
                    <DefaultButton>
                        <BsFillChatLeftTextFill className="text-xl text-gray-800" />
                    </DefaultButton>
                    <DefaultButton>
                        <BsThreeDotsVertical className="text-xl text-gray-800" />
                    </DefaultButton>
                </div>
            </header>
            <main>
                <Search />

                {/* Create chat button */}
                <div className="border-y border-gray-300 text-center transition-colors duration-200 hover:bg-gray-200">
                    <input
                        onClick={createChat}
                        className="h-full w-full cursor-pointer p-3"
                        type="button"
                        value="START A NEW CHAT"
                    />
                </div>

                {/* list of chats */}
                <div className="">
                    {chatsSnapshot?.docs.map((chat) => {
                        return (
                            <Chat
                                key={chat.id}
                                id={chat.id}
                                users={chat.data().users}
                            />
                        );
                    })}
                </div>
            </main>
        </aside>
    );
}

export const Search = () => {
    return (
        <div className="group m-2 flex items-center justify-between gap-2 rounded-3xl p-2">
            <AiOutlineSearch className="text-2xl text-gray-800" />
            <input
                className="flex-1 bg-inherit outline-none focus:outline-none"
                type="text"
                placeholder="Search in chats"
            />
        </div>
    );
};

export default Sidebar;

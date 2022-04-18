import { FaUserCircle } from "react-icons/fa";
import { BsFillChatLeftTextFill } from "react-icons/bs";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";

import * as EmailValidator from "email-validator";

interface createChat {
    (): void;
}

function Sidebar() {
    // TODO: add chats

    const createChat: createChat = () => {
        const input = prompt(
            "Enter the email of the person you want to chat with"
        );
        if (!input) {
            return null;
        }

        if (!EmailValidator.validate(input)) {
            alert("Invalid email");
            return null;
        }
    };

    return (
        <aside className="min-h-screen min-w-max border-r border-gray-300 bg-gray-100">
            <header className="sticky z-10 flex flex-wrap items-center justify-between gap-20 border-b border-gray-300 bg-gray-200 p-2 xl:p-5">
                <FaUserCircle className="m-3 cursor-pointer text-3xl text-gray-500 transition-opacity duration-200 ease-in-out hover:opacity-70 lg:text-5xl xl:m-0" />
                <div className="flex items-center justify-center gap-2">
                    <button className="rounded-full p-3 text-center transition-colors duration-200 ease-in-out hover:bg-gray-300 active:bg-gray-400">
                        <BsFillChatLeftTextFill className="text-xl text-gray-800 md:text-2xl" />
                    </button>
                    <button className="rounded-full p-3 text-center transition-colors duration-200 ease-in-out hover:bg-gray-300 active:bg-gray-400">
                        <BsThreeDotsVertical className="text-xl text-gray-800 md:text-2xl" />
                    </button>
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

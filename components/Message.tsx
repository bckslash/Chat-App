import moment from "moment";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

import { MessageProps } from "../typings";

function Message({ user, message }: MessageProps) {
    const [userLoggedIn]: any = useAuthState(auth);

    return (
        <div>
            {user === userLoggedIn.email ? (
                <SentMessage message={message} />
            ) : (
                <RecievedMessage message={message} />
            )}
        </div>
    );
}

export default Message;

const SentMessage = ({ message }: any) => {
    return (
        <section className="my-1 text-white">
            <div
                className={`${
                    message.message.length < 30 ? "w-fit" : "w-[45%]"
                } ml-auto break-words rounded-lg bg-sky-500 px-4 py-2`}
            >
                <p>{message.message}</p>
                <div className="w-full text-right text-xs text-gray-200">
                    <p>
                        {message.timestamp
                            ? moment(message.timestamp).format("LT")
                            : "..."}
                    </p>
                </div>
            </div>
        </section>
    );
};

const RecievedMessage = ({ message }: any) => {
    return (
        <section className="my-1 text-white">
            <p
                className={`${
                    message.message.length < 30 ? "w-fit" : "w-[45%]"
                } break-words rounded-lg bg-gray-500 px-4 py-2`}
            >
                {message.message}
            </p>
        </section>
    );
};

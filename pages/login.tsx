import Head from "next/head";
import { auth, provider } from "../firebase";

import { FcGoogle } from "react-icons/fc";

function Login() {
    const singIn: any = () => {
        auth.signInWithPopup(provider).catch(function (error: any) {
            let errorCode = error.code;
            console.error(errorCode);
            alert(errorCode);

            let errorMessage = error.message;
            console.error(errorMessage);
            alert(errorMessage);
        });
    };

    return (
        <section className="flex h-screen items-center justify-center">
            <Head>
                <title>Login</title>
            </Head>

            <section className="space-y-5 rounded-lg bg-gray-100 p-10">
                <h1 className="text-2xl font-semibold text-primary_dark">
                    Welcome to ZCT-Chat
                </h1>
                <hr />
                <button
                    onClick={singIn}
                    className=" flex w-full items-center justify-evenly rounded-sm bg-blue-500 py-2 text-white transition-opacity duration-200 ease-in-out hover:opacity-70"
                >
                    <div className="rounded-sm bg-white p-1 text-center">
                        <FcGoogle className="text-3xl" />
                    </div>
                    <h1 className="text-md font-semibold">
                        Continue with Google
                    </h1>
                </button>
            </section>
        </section>
    );
}

export default Login;

import { AiOutlineLoading3Quarters } from "react-icons/ai";

function Loading() {
    return (
        <section className="flex max-h-screen gap-10 p-10">
            <div className="absolute z-10 flex h-full w-full animate-pulse items-center justify-center ">
                <AiOutlineLoading3Quarters className="animate-spin text-8xl text-gray-800" />
            </div>
            <aside className="space-y-10 overflow-hidden">
                <div className="flex items-center justify-center gap-5">
                    <div className="h-10 w-48 animate-pulse rounded-md bg-gray-300"></div>
                    <div className="h-10 w-48 animate-pulse rounded-md bg-gray-300"></div>
                </div>
                <div className="flex items-center justify-center gap-5">
                    <div className="h-10 w-48 animate-pulse rounded-md bg-gray-300"></div>
                    <div className="h-10 w-48 animate-pulse rounded-md bg-gray-300"></div>
                </div>
                <div className="h-10 w-full animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-10 w-full animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-10 w-full animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-10 w-full animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-10 w-full animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-10 w-full animate-pulse rounded-md bg-gray-300"></div>
                <div className="h-60 w-full animate-pulse rounded-md bg-gray-300"></div>
            </aside>
            <section className="t max-h-screen w-full animate-pulse rounded-md bg-gray-300"></section>
        </section>
    );
}

export default Loading;

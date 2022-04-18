import Head from "next/head";
import Sidebar from "../components/Sidebar";

function Home() {
    return (
        <div>
            <Head>
                <title>Chat-App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sidebar />
        </div>
    );
}

export default Home;

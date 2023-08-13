import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default function FirstPost(){
    return <Layout>
        <Head>
            <title>
                My first post!
            </title>
            <script src="https://connect.facebook.net/en_US/sdk.js" />
        </Head>
        <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        <img src="/images/profile.jpg" alt="Profile photo"/>
        <h1>This is First Post</h1>
        <h2>
        Go back to <Link href="/">home page</Link>
        </h2>
    </Layout>

}
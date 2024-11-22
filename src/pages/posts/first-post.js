import React from "react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

function FirstPostPage() {
    return (
        <Layout>
            <Head>
                <title>First Post</title>
            </Head>
            <div>
                <h1>First Post</h1>
                <p>This is my first post</p>
                <p>
                    <Link href="/">Go to Home</Link>
                </p>
            </div>
        </Layout>
    );
}

export default FirstPostPage;
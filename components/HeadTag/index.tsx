import Head from "next/head";
import { HeadTagProps } from "../../types/head.types";

const HeadTag = (props: HeadTagProps) => {
  const { title } = props;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="List of users using ReqRes API" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadTag;

import {FC} from 'react';
import Head from 'next/head'

export function TitleHead() {
  return (
    <Head>
      <meta charSet='utf-8' />
      <title>React · TodoMVC</title>
    </Head>
  );
}
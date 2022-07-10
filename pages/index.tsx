import { BookOpen, Search } from 'lucide-react';
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import data from '../questions.json';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>UEK Krakow | Thesis Defense Memo</title>
        <meta name="description" content="IZ Applied Informatics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1><BookOpen/> Questions</h1>
        <ul>
          {data.files.map((question: string) => {
            const page = question.split('.')[0];

            return (
              <li key={question}>
                <Link href={`questions/${page}`}>
                  {`Question ${page} `}
                </Link>
                { (page === '08' || page === '15') && <strong>(selected)</strong>}
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  )
}

export default Home

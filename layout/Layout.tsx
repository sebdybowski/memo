import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";
import { toString } from "ramda";
import { FC, ReactNode } from "react";
import styles from './Layout.module.css';

interface LayoutProps {
  children: ReactNode,
  questionNumber?: number
}

const convertNumberToPath = (number: number) => {
  let path = toString(number);

  if (path.length === 1) return `0${path}`;

  return path;
}

export const Layout: FC<LayoutProps> = ({ children, questionNumber = 1 }) => {
  const prevPath = convertNumberToPath(questionNumber - 1);
  const nextPath = convertNumberToPath(questionNumber + 1);
  
  return (
    <article className={styles.Layout}>
      <Link href='/'>
        <a><ArrowBigLeft size={12} /> List</a>
      </Link>
      <br />
      {children}
      <br />
      <nav>
        {questionNumber !== 1 && <Link href={prevPath}>
          <a><ArrowBigLeft size={12} /> Previous</a>
        </Link>}
        {questionNumber !== 30 && <Link href={nextPath}>
          <a>Next <ArrowBigRight size={12} /></a>
        </Link>}
      </nav>
    </article>
  );
}
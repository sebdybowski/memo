import clsx from "clsx";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import Link from "next/link";
import { toString } from "ramda";
import { FC, ReactNode } from "react";
import styles from './Layout.module.scss';

interface LayoutProps {
  children: ReactNode,
  questionNumber?: number,
  title: string,
}

const convertNumberToPath = (number: number) => {
  let path = toString(number);

  if (path.length === 1) return `0${path}`;

  return path;
}

export const Layout: FC<LayoutProps> = ({ title, children, questionNumber = 1 }) => {
  const prevPath = convertNumberToPath(questionNumber - 1);
  const nextPath = convertNumberToPath(questionNumber + 1);

  return (
    <article className={clsx(
      'container',
      styles.Layout
    )}>
      <div className="row">
        <div className="column">
        <Link href='/'>
          <ArrowBigLeft size={12} /> List
        </Link>
        <br />
        <h3>
          <em>({convertNumberToPath(questionNumber)})</em>
          {` ${title}`}
        </h3>
        <hr/>
        {children}
        <hr />
        <nav className={styles.Nav}>
          {questionNumber !== 1 && <Link href={prevPath}>
            <ArrowBigLeft size={12} /> Prev <em>({prevPath})</em>
          </Link>}
          {questionNumber !== 30 && <Link href={nextPath}>
            Next <em>({nextPath})</em> <ArrowBigRight size={12} />
          </Link>}
        </nav>
        </div>
      </div>
    </article>
  );
}
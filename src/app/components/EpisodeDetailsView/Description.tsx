import {Fragment} from 'react';

type Props = {
  description: string;
};

function Description({description}: Props) {
  const paragraphs = description.split('\n');

  return (
    <>
      {paragraphs.map((p, index) => (
        <p key={`${index + 1})`}>
          {p.split('\n').map((line, i) => {
            const match = line.match(/\bwww\.\S+/);
            if (match) {
              const [before, after] = line.split(match[0]);
              return (
                <Fragment key={`${i + 1})`}>
                  {before}
                  <a className="text-sky-700" href={`http://${match[0]}`}>
                    {match[0]}
                  </a>
                  {after}
                </Fragment>
              );
            }
            return (
              <Fragment key={`${i + 1})`}>
                {line}
                <br />
              </Fragment>
            );
          })}
        </p>
      ))}
    </>
  );
}

export default Description;

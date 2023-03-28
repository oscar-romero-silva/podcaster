import {format, intervalToDuration} from 'date-fns';
import {Link} from 'react-router-dom';

type HeadingType = {
  id: string;
  value: string;
  url?: string;
};

interface TableProps {
  headings: HeadingType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>[];
}

function EpisodesTable({headings, data}: TableProps) {
  const formatRow = (value: Date | number | string) => {
    if (value instanceof Date) {
      return format(value, 'dd/MM/yyyy');
    }

    if (typeof value === 'number') {
      const duration = intervalToDuration({start: 0, end: value});
      const hours = duration.hours?.toString().padStart(2, '0') || '00';
      const minutes = duration.minutes?.toString().padStart(2, '0') || '00';
      const seconds = duration.seconds?.toString().padStart(2, '0') || '00';
      return `${hours}:${minutes}:${seconds}`;
    }
    return value;
  };

  return (
    <div className="shadow-custom p-4">
      <table className="table-auto w-full">
        <thead className="bg-white">
          <tr className="text-left bg-white-100">
            {headings.map(heading => (
              <th className={`${heading.id === headings[0].id && 'w-4/5 '}`} key={heading.id}>
                {heading.value}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={`tableRow-${rowIndex + 1}`}
              className={`${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-200'}`}
            >
              {headings.map(heading => (
                <td
                  className={`${heading.id === headings[0].id && 'w-4/5 py-1 px-2'}`}
                  key={heading.id}
                >
                  {heading.url ? (
                    <Link className="text-sky-700" role="link" to={row[heading.url]}>
                      {formatRow(row[heading.id])}
                    </Link>
                  ) : (
                    formatRow(row[heading.id])
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EpisodesTable;

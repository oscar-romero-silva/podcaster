import {format, intervalToDuration} from 'date-fns';

type HeadingType = {
  id: string;
  value: string;
};

type TableProps = {
  headings: HeadingType[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onTitleClick: (item: any) => void;
};

function EpisodesTable({headings, data, onTitleClick}: TableProps) {
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

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onClick = (item: any) => {
    onTitleClick(item);
  };

  return (
    <div className="shadow-custom p-4">
      <table className="table-auto w-full">
        <thead className="bg-white">
          <tr className="text-left bg-white-100">
            {headings.map(heading => (
              <th className={`px-2 ${heading.id === headings[0].id && 'w-4/5'}`} key={heading.id}>
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
                  className={`px-2 py-1 ${heading.id === headings[0].id && 'w-4/5'}`}
                  key={heading.id}
                >
                  {heading.id === headings[0].id ? (
                    <button className=" text-sky-700" type="button" onClick={() => onClick(row)}>
                      {formatRow(row[heading.id])}
                    </button>
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

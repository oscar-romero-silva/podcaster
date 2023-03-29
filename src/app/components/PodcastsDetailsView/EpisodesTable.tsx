import formatRow from '@/app/helpers/formatRow';

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
                    <button
                      className="text-left text-sky-700"
                      type="button"
                      onClick={() => onClick(row)}
                    >
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

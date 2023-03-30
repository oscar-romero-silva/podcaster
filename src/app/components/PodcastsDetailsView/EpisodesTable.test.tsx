import {render, screen, fireEvent} from '@testing-library/react';
import {vi} from 'vitest';
import {BrowserRouter} from 'react-router-dom';
import {PodcasterProvider} from '@/infrastructure/PodcastContextProvider';
import EpisodesTable from './EpisodesTable';
import {MOCKED_EPISODES} from '@/app/mocks/MockedData';

describe('EpisodesTable', () => {
  const onTitleClick = vi.fn();
  it('render correctly', async () => {
    render(
      <BrowserRouter>
        <PodcasterProvider>
          <EpisodesTable
            headings={[
              {value: 'Title', id: 'name'},
              {value: 'Date', id: 'releaseDate'},
              {value: 'Duration', id: 'duration'},
            ]}
            data={MOCKED_EPISODES}
            onTitleClick={onTitleClick}
          />
        </PodcasterProvider>
      </BrowserRouter>
    );

    const titles = screen.getAllByRole('button');
    expect(titles[0]).toBeInTheDocument();
    expect(titles[1]).toBeInTheDocument();

    fireEvent.click(titles[0]);
    expect(titles[0]).toHaveTextContent(MOCKED_EPISODES[0].name);
    expect(onTitleClick).toHaveBeenCalledWith(MOCKED_EPISODES[0]);

    fireEvent.click(titles[1]);
    expect(titles[1]).toHaveTextContent(MOCKED_EPISODES[1].name);
    expect(onTitleClick).toHaveBeenCalledWith(MOCKED_EPISODES[1]);
  });
});

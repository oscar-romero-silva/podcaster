import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import PodcastCard from './PodcastCard';
import Podcast from '@/domain/Podcast';
import {MOCKED_PODCASTS} from '@/app/mocks/MockedData';

describe('PodcastCard', () => {
  it('render correctly', () => {
    render(
      <BrowserRouter>
        <PodcastCard podcast={MOCKED_PODCASTS[0] as Podcast} />
      </BrowserRouter>
    );

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe('https://image1.com');

    const title = screen.getByRole('heading', {level: 2});
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(MOCKED_PODCASTS[0].name);

    const artist = screen.getByRole('heading', {level: 6});
    expect(artist).toBeInTheDocument();
    expect(artist).toHaveTextContent(MOCKED_PODCASTS[0].artist);
  });
});

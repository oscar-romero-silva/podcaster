import {render, screen} from '@testing-library/react';
import {vi} from 'vitest';
import PodcastCardDetails from './PodcastDetailsCard';
import Podcast from '@/domain/Podcast';
import {MOCKED_PODCASTS} from '@/app/mocks/MockedData';

describe('PodcastCardDetails', () => {
  const onClick = vi.fn();

  it('render correctly', () => {
    render(<PodcastCardDetails podcast={MOCKED_PODCASTS[0] as Podcast} onClick={onClick} />);

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe('https://image1.com');

    const title = screen.getByRole('heading', {level: 1});
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(MOCKED_PODCASTS[0].name);
  });
});

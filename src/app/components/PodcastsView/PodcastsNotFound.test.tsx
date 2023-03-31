import {render, screen} from '@testing-library/react';
import PodcastsNotFound from './PodcastsNotFound';

describe('PodcastsNotFound', () => {
  it('render correctly', () => {
    render(<PodcastsNotFound />);

    const heading = screen.getByRole('heading', {level: 1});
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('No se encontraron resultados');
  });
});

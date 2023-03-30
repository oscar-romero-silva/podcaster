import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {PodcasterProvider} from '@/infrastructure/PodcastContextProvider';
import PodcastsNotFound from './PodcastsNotFound';

describe('PodcastsNotFound', () => {
  it('render correctly', () => {
    render(
      <BrowserRouter>
        <PodcasterProvider>
          <PodcastsNotFound />
        </PodcasterProvider>
      </BrowserRouter>
    );

    const heading = screen.getByRole('heading', {level: 1});
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('No se encontraron resultados');
  });
});

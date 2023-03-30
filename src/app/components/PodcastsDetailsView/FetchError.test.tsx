import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {PodcasterProvider} from '@/infrastructure/PodcastContextProvider';
import FetchError from './FetchError';

describe('FetchError', () => {
  it('render correctly', () => {
    render(
      <BrowserRouter>
        <PodcasterProvider>
          <FetchError />
        </PodcasterProvider>
      </BrowserRouter>
    );

    const heading = screen.getByRole('heading', {level: 1});
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Error');
  });
});

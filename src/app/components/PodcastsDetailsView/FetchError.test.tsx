import {render, screen} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import {PodcasterProvider} from '@/infrastructure/PodcastContextProvider';
import FetchError from './FetchError';

describe('FetchError', () => {
  it('render correctly', () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <PodcasterProvider>
            <FetchError />
          </PodcasterProvider>
        </RecoilRoot>
      </BrowserRouter>
    );

    const heading = screen.getByRole('heading', {level: 1});
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Error');
  });
});

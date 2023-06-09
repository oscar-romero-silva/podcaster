import {render, screen} from '@testing-library/react';
import {RecoilRoot} from 'recoil';
import {BrowserRouter} from 'react-router-dom';
import {PodcasterProvider} from '@/infrastructure/PodcastContextProvider';
import Header from './Header';

describe('Header', () => {
  it('render correctly', () => {
    render(
      <BrowserRouter>
        <RecoilRoot>
          <PodcasterProvider>
            <Header />
          </PodcasterProvider>
        </RecoilRoot>
      </BrowserRouter>
    );

    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();
    expect(img.getAttribute('src')).toBe('/podcastIcon.ico');

    const title = screen.getByRole('heading', {level: 1});
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent('Podcaster');
  });
});

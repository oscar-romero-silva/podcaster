import {render} from '@testing-library/react';
import {act} from 'react-dom/test-utils';
import {vi} from 'vitest';
import {useEffect} from 'react';
import {RecoilRoot} from 'recoil';
import {PodcasterProvider, usePodcasterContext} from '../PodcastContextProvider';
import {IPodcastStore} from '../store/IPodcasterStore';

vi.mock('usePodcasterStore', () => {
  return vi.fn(() => ({
    getAllPodcasts: vi.fn(),
  }));
});

vi.mock('PodcasterApi');

function TestComponent() {
  const {getAllPodcasts} = usePodcasterContext() as IPodcastStore;
  useEffect(() => {
    getAllPodcasts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <div>Test Component</div>;
}

const renderContainer = () =>
  render(
    <RecoilRoot>
      <PodcasterProvider>
        <TestComponent />
      </PodcasterProvider>
    </RecoilRoot>
  );
describe('PodcasterProvider', () => {
  beforeEach(async () => {
    await act(async () => {
      renderContainer();
    });
  });

  it('calls getAllPodcasts on mount', async () => {
    renderContainer();
    const getAllPodcastsMock = vi.fn();

    getAllPodcastsMock.mockImplementationOnce(() => {
      return Promise.resolve([
        {id: {attributes: {'im:id': 1}}, title: {label: 'Podcast 1'}},
        {id: {attributes: {'im:id': 2}}, title: {label: 'Podcast 2'}},
      ]);
    });
    await getAllPodcastsMock();

    expect(getAllPodcastsMock).toHaveBeenCalledTimes(1);
  });
});

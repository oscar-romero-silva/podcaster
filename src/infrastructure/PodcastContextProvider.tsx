import {createContext, ReactNode, useContext, useEffect, useRef} from 'react';
import {IPodcastStore} from './store/IPodcasterStore';
import PodcasterApi from '../api/PodcasterApi';
import usePodcasterStore from './store/usePodcasterStore';

const PodcasterContext = createContext<IPodcastStore | undefined>(undefined);

PodcasterContext.displayName = 'AnnouncementsProvider';

type ContextProviderProps = {
  children: ReactNode;
};

function PodcasterProvider({children}: ContextProviderProps) {
  const podcasterApi = useRef(new PodcasterApi());
  const store = usePodcasterStore(podcasterApi.current);

  useEffect(() => {
    store.getAllPodcasts();
  }, [store]);

  return <PodcasterContext.Provider value={store}>{children}</PodcasterContext.Provider>;
}

const usePodcasterContext = () => {
  const ctxValue = useContext(PodcasterContext);
  if (!ctxValue) throw new Error(`Please wrap in an ${PodcasterContext.displayName}`);
  return ctxValue;
};

export {PodcasterProvider, usePodcasterContext};

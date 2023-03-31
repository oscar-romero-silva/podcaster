import {createContext, ReactNode, useContext, useMemo, useRef} from 'react';
import {IPodcastStore} from './store/IPodcasterStore';
import PodcasterApi from '../api/PodcasterApi';
import usePodcasterStore from './store/usePodcasterStore';

const PodcasterContext = createContext<IPodcastStore | undefined>(undefined);

PodcasterContext.displayName = 'PodcasterProvider';

type ContextProviderProps = {
  children: ReactNode;
};

function PodcasterProvider({children}: ContextProviderProps) {
  const podcasterApi = useRef(new PodcasterApi());
  const store = usePodcasterStore(podcasterApi.current);

  const ctxMemo = useMemo(() => {
    return store;
  }, [store]);

  return <PodcasterContext.Provider value={ctxMemo}>{children}</PodcasterContext.Provider>;
}

const usePodcasterContext = () => {
  const ctxValue = useContext(PodcasterContext);
  if (!ctxValue) throw new Error(`Please wrap in an ${PodcasterContext.displayName}`);
  return ctxValue;
};

export {PodcasterProvider, usePodcasterContext};

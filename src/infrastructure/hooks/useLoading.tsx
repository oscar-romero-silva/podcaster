import {useRecoilState, atom} from 'recoil';

export const loadingState = atom({
  key: 'loading',
  default: false,
});

type UseLoadingProps = {
  loading: boolean;
  updateLoading: (newValue: boolean) => void;
};

function useLoading(): UseLoadingProps {
  const [loading, setLoading] = useRecoilState(loadingState);

  const updateLoading = (newValue: boolean) => {
    setLoading(newValue);
  };

  return {
    loading,
    updateLoading,
  };
}

export default useLoading;

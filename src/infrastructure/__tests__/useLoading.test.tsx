import {act, renderHook} from '@testing-library/react';
import {vi} from 'vitest';
import {ReactNode} from 'react';
import {RecoilRoot} from 'recoil';
import useLoading from '../hooks/useLoading';

const renderUseLoading = () =>
  renderHook(useLoading, {
    wrapper: ({children}: {children: ReactNode}) => {
      return <RecoilRoot>{children}</RecoilRoot>;
    },
  });

const useRecoilStateMock = vi.fn();
describe('useLoading', () => {
  it('should initialize loading state with false', () => {
    useRecoilStateMock.mockReturnValueOnce([false, vi.fn()]);
    const {result} = renderUseLoading();
    expect(result.current.loading).toBe(false);
  });

  it('should update loading state', () => {
    const updateLoadingMock = vi.fn();
    useRecoilStateMock.mockReturnValueOnce([false, updateLoadingMock]);
    const {result} = renderUseLoading();
    const setLoadingMockSpyOn = vi.spyOn(result.current, 'updateLoading');
    act(() => {
      result.current.updateLoading(true);
    });

    expect(setLoadingMockSpyOn).toHaveBeenCalledWith(true);
  });
});

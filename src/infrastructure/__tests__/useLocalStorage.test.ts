import {describe, it} from 'vitest';
import {waitFor} from '@testing-library/react';
import useLocalStorage from '../hooks/useLocalStorage';

describe('utils helpers', () => {
  const {canFetch, setToLocalStorage, getFromLocalStorage} = useLocalStorage();

  beforeEach(() => {
    localStorage.clear();
  });
  describe('setToLocalStorage', () => {
    it('Should call setToLocalStorage function and save an object into localStorage', () => {
      const dataToSave = {
        data: 'test',
        savedDate: '2023-03-30T09:00:41.428Z',
      };
      setToLocalStorage('test', dataToSave);
      const savedDate = JSON.parse(localStorage.getItem('test') as string);
      expect(savedDate).toStrictEqual(dataToSave);
    });
  });

  describe('getFromLocalStorage', () => {
    it('Should call getFromLocalStorage and get the saved value', () => {
      const dataToSave = {
        data: 'test',
        savedDate: '2023-03-30T09:00:41.428Z',
      };
      setToLocalStorage('test', dataToSave);
      const savedDate = getFromLocalStorage('test');
      expect(savedDate).toStrictEqual(dataToSave);
    });
  });

  describe('canFetch', () => {
    it('Should return if we can fetch or not', () => {
      const dataToSave = {
        data: 'test',
        savedDate: new Date(),
      };
      setToLocalStorage('test', dataToSave);

      expect(canFetch()).toBe(false);

      const date = new Date();

      const canFetchData = {
        data: 'test',
        savedDate: new Date(date.setDate(date.getDate() - 3)),
      };
      setToLocalStorage('test', canFetchData);

      waitFor(() => {
        expect(canFetch()).toBe(true);
      });
    });
  });
});

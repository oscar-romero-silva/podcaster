import {differenceInHours} from 'date-fns';

function useLocalStorage() {
  const setToLocalStorage = (name: string, values: object | Date | string) => {
    const dataToSave = typeof values === 'object' ? JSON.stringify({...values}) : values;
    localStorage.setItem(name, dataToSave);
    localStorage.setItem('savedDate', JSON.stringify(new Date().getTime()));
  };

  const getFromLocalStorage = (item: string) => {
    const inLocalStorage = localStorage.getItem(item);

    if (!inLocalStorage) {
      return null;
    }

    return JSON.parse(inLocalStorage as string);
  };

  const canFetch = () => {
    const savedDate = getFromLocalStorage('savedDate');
    const actualDate = new Date();
    return differenceInHours(actualDate, new Date(savedDate)) > 24;
  };

  return {setToLocalStorage, getFromLocalStorage, canFetch};
}

export default useLocalStorage;

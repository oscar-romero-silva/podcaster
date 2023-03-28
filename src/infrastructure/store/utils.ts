import {differenceInHours} from 'date-fns';

export function setToLocalStorage(name: string, values: object) {
  localStorage.setItem(name, JSON.stringify({...values}));
}

export function getFromLocalStorage(item: string) {
  return JSON.parse(localStorage.getItem(item) as string);
}

export function canFetch(dataToFetch: string) {
  const savedPodcasts = getFromLocalStorage(dataToFetch);
  if (savedPodcasts) {
    const actualDate = new Date();
    const savedDate = new Date(savedPodcasts.savedDate);
    return differenceInHours(actualDate, savedDate) > 24;
  }
  return true;
}

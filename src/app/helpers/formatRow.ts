import {format, intervalToDuration} from 'date-fns';

function formatRow(value: Date | number | string) {
  if (value instanceof Date) {
    return format(value, 'dd/MM/yyyy');
  }

  if (typeof value === 'number') {
    const duration = intervalToDuration({start: 0, end: value});
    const hours = duration.hours?.toString().padStart(2, '0') || '00';
    const minutes = duration.minutes?.toString().padStart(2, '0') || '00';
    const seconds = duration.seconds?.toString().padStart(2, '0') || '00';
    return `${hours}:${minutes}:${seconds}`;
  }
  return value;
}

export default formatRow;

import timezones from './timezones.json';

function processOffset(offset) {
  const iOffset = parseFloat(offset, 10);

  if (iOffset === 0) {
    return 0;
  }

  // NaN case
  if (!iOffset) {
    throw new Error(`getTimezoneNameByOffset: invalid 'offset' value was provided, expected number, got: ${offset}`);
  }

  if (iOffset >= -12 && iOffset <= 24) {
    return iOffset * 60;
  }

  if (iOffset >= -720 && iOffset <= 840) {
    return iOffset;
  }

  return (iOffset * 0.001) / 60;
}

export function getTimezoneNameByOffset(offset) {
  const ret = timezones[processOffset(offset).toString()];

  if (!ret) {
    throw new Error(`getTimezoneNameByOffset: no timezone found for 'offset' ${offset}`);
  }

  return ret;
}

export function detectTimezone() {
  return getTimezoneNameByOffset(-new Date().getTimezoneOffset());
}

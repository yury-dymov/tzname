const detectTimezone = require('../dist/bundle').detectTimezone;
const getTimezoneNameByOffset = require('../dist/bundle').getTimezoneNameByOffset;

test('getTimezoneNameByOffset: zero as number', () => {
  expect(getTimezoneNameByOffset(0)).toBe('UTC');
});

test('getTimezoneNameByOffset: zero as string', () => {
  expect(getTimezoneNameByOffset("0")).toBe('UTC');
});

test('getTimezoneNameByOffset: invalid input', () => {
  var error = '';

  try {
    getTimezoneNameByOffset("zero");
  } catch(ex) {
    error = ex.message;
  }

  expect(error).toBe("getTimezoneNameByOffset: invalid 'offset' value was provided, expected number, got: zero");
});

test('getTimezoneNameByOffset: number as hours', () => {
  expect(getTimezoneNameByOffset(5.5)).toBe("Asia/Kolkata");
});

test('getTimezoneNameByOffset: string as hours', () => {
  expect(getTimezoneNameByOffset("5.5")).toBe("Asia/Kolkata");
});

test('getTimezoneNameByOffset: number as minutes', () => {
  expect(getTimezoneNameByOffset(330)).toBe("Asia/Kolkata");
});

test('getTimezoneNameByOffset: string as minutes', () => {
  expect(getTimezoneNameByOffset("330")).toBe("Asia/Kolkata");
});

test('getTimezoneNameByOffset: number as milliseconds', () => {
  expect(getTimezoneNameByOffset(330 * 60 * 1000)).toBe("Asia/Kolkata");
});

test('getTimezoneNameByOffset: string as milliseconds', () => {
  expect(getTimezoneNameByOffset((330 * 60 * 1000).toString())).toBe("Asia/Kolkata");
});

test('getTimezoneNameByOffset: no timezone for provided offset', () => {
  var error = '';

  try {
    getTimezoneNameByOffset(23);
  } catch(ex) {
    error = ex.message;
  }

  expect(error).toBe("getTimezoneNameByOffset: no timezone found for 'offset' 23");
});

test('detectTimezone works', () => {
  expect(detectTimezone()).toBe(getTimezoneNameByOffset(-(new Date().getTimezoneOffset())));
})

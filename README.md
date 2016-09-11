# tzname
Library for detecting user's timezone or finding timezone name by provided offset.

# Installation
```
npm i --save tzname
```

# Usage

### detectTimezone()
Function detects user's timezone and returns timezone name in [TZ format](https://en.wikipedia.org/wiki/Tz_database) (i.e. 'Europe/Moscow')

### getTimezoneNameByOffset(offset)
Function takes timezone UTC offset and returns timezone name in [TZ format](https://en.wikipedia.org/wiki/Tz_database).

You can provide offset as either number or string in hours, minutes of milliseconds.

```
getTimezoneNameByOffset(3) === getTimezoneNameByOffset(180) === getTimezoneNameByOffset(10800000) === "Asia/Baghdad"
getTimezoneNameByOffset("3") === getTimezoneNameByOffset("180") === getTimezoneNameByOffset("10800000") === "Asia/Baghdad"
```

#### Common usage
```
const timezoneOffset = -(new Date().getTimezoneOffset());
const timezoneName   = getTimezoneNameByOffset(timezoneOffset);
```
*Note:* don't forget that JavaScript [Date.getTimezoneOffset()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset) returns negative offset value. I.e. for Moscow (GMT+3) it returns '-180'. To deal with that it is important to put 'minus' sign in front of the method call.

# Example

```
import { detectTimezone, getTimezoneNameByOffset } from 'tzname';

const currentTimeZone = detectTimezone();

console.log(currentTimeZone); // -> i.e. "America/Phoenix"

const timezoneName = getTimezoneNameByOffset(3);

console.log(timezoneName); // -> "Asia/Baghdad"
```

# Note
Tzname library is designed to work with libraries like [intl.FormattedDate](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat) and [react-intl](https://github.com/yahoo/react-intl). Both require timezone name instead of offset. For this use case there is no difference between "Asia/Baghdad" and "Europe/Moscow" as both have the same GMT+3 offset. However, if you would like to get more precise timezone and use GeoIP for that than this library is not a proper choice.

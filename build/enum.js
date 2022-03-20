"use strict";
// enum
// numeric enum
var Month;
(function (Month) {
    Month[Month["JAN"] = 0] = "JAN";
    Month[Month["FEB"] = 1] = "FEB";
    Month[Month["MAR"] = 2] = "MAR";
    Month[Month["APR"] = 3] = "APR";
    Month[Month["MAY"] = 4] = "MAY";
})(Month || (Month = {}));
console.log(Month.JAN);
var Day;
(function (Day) {
    Day[Day["SUN"] = 1] = "SUN";
    Day[Day["MON"] = 100] = "MON";
    Day[Day["TUE"] = 101] = "TUE";
    Day[Day["WED"] = 102] = "WED";
})(Day || (Day = {}));
console.log(Day.SUN, Day.MON, Day.TUE);
// enum string
var MonthString;
(function (MonthString) {
    MonthString["JAN"] = "January";
    MonthString["FEB"] = "February";
    MonthString["MAR"] = "March";
    MonthString["APR"] = "April";
    MonthString["MAY"] = "May";
})(MonthString || (MonthString = {}));
console.log(MonthString.JAN);

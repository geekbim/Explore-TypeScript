// enum

// numeric enum
enum Month {
    JAN,
    FEB,
    MAR,
    APR,
    MAY
}

console.log(Month.JAN)

enum Day {
    SUN = 1,
    MON = 100,
    TUE,
    WED,
}

console.log(Day.SUN, Day.MON, Day.TUE)

// enum string
enum MonthString {
    JAN = "January",
    FEB = "February",
    MAR = "March",
    APR = "April",
    MAY = "May",
}

console.log(MonthString.JAN)
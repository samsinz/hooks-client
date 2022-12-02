import { ResponsiveCalendar } from '@nivo/calendar'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.


const data = [
    {
        "value": 301,
        "day": "2015-08-02"
    },
    {
        "value": 127,
        "day": "2016-03-11"
    },
    {
        "value": 50,
        "day": "2015-05-31"
    },
    {
        "value": 390,
        "day": "2018-01-13"
    },
    {
        "value": 290,
        "day": "2017-10-15"
    },
    {
        "value": 340,
        "day": "2018-05-22"
    },
    {
        "value": 160,
        "day": "2016-11-25"
    },
    {
        "value": 189,
        "day": "2016-10-09"
    },
    {
        "value": 149,
        "day": "2015-12-23"
    },
    {
        "value": 199,
        "day": "2017-05-14"
    },
    {
        "value": 379,
        "day": "2016-11-02"
    },
    {
        "value": 42,
        "day": "2015-10-04"
    },
    {
        "value": 195,
        "day": "2016-05-22"
    },
    {
        "value": 338,
        "day": "2018-05-05"
    },
    {
        "value": 27,
        "day": "2016-03-08"
    },
    {
        "value": 395,
        "day": "2017-10-11"
    },
    {
        "value": 254,
        "day": "2016-01-14"
    },
    {
        "value": 232,
        "day": "2016-11-21"
    },
    {
        "value": 87,
        "day": "2016-02-17"
    },
    {
        "value": 98,
        "day": "2017-01-23"
    },
    {
        "value": 54,
        "day": "2016-01-20"
    },
    {
        "value": 95,
        "day": "2015-07-03"
    },
    {
        "value": 8,
        "day": "2017-07-24"
    },
    {
        "value": 105,
        "day": "2015-09-20"
    },
    {
        "value": 366,
        "day": "2016-04-07"
    },
    {
        "value": 292,
        "day": "2016-08-31"
    },
    {
        "value": 345,
        "day": "2016-04-27"
    },
    {
        "value": 14,
        "day": "2015-09-09"
    },
    {
        "value": 54,
        "day": "2015-05-24"
    },
    {
        "value": 106,
        "day": "2015-10-29"
    },
    {
        "value": 20,
        "day": "2017-01-12"
    },
    {
        "value": 10,
        "day": "2015-12-03"
    },
    {
        "value": 220,
        "day": "2016-11-01"
    },
    {
        "value": 23,
        "day": "2016-03-09"
    },
    {
        "value": 100,
        "day": "2017-10-03"
    },
    {
        "value": 271,
        "day": "2017-05-01"
    },
    {
        "value": 354,
        "day": "2015-11-05"
    },
    {
        "value": 107,
        "day": "2016-08-05"
    },
    {
        "value": 50,
        "day": "2016-10-20"
    },
    {
        "value": 314,
        "day": "2016-11-26"
    },
    {
        "value": 335,
        "day": "2015-12-12"
    },
    {
        "value": 348,
        "day": "2016-07-26"
    },
    {
        "value": 260,
        "day": "2017-09-15"
    },
    {
        "value": 84,
        "day": "2016-09-02"
    },
    {
        "value": 28,
        "day": "2015-08-25"
    },
    {
        "value": 192,
        "day": "2016-09-08"
    },
    {
        "value": 303,
        "day": "2016-08-19"
    },
    {
        "value": 223,
        "day": "2015-12-27"
    },
    {
        "value": 226,
        "day": "2017-05-19"
    },
    {
        "value": 122,
        "day": "2015-11-18"
    },
    {
        "value": 260,
        "day": "2015-07-27"
    },
    {
        "value": 292,
        "day": "2015-12-06"
    },
    {
        "value": 355,
        "day": "2015-12-15"
    },
    {
        "value": 283,
        "day": "2016-03-19"
    },
    {
        "value": 83,
        "day": "2016-01-12"
    },
    {
        "value": 74,
        "day": "2018-07-14"
    },
    {
        "value": 178,
        "day": "2015-11-10"
    },
    {
        "value": 150,
        "day": "2017-09-08"
    },
    {
        "value": 108,
        "day": "2016-01-26"
    },
    {
        "value": 112,
        "day": "2017-07-14"
    },
    {
        "value": 215,
        "day": "2015-09-16"
    },
    {
        "value": 115,
        "day": "2015-11-21"
    },
    {
        "value": 136,
        "day": "2018-04-09"
    },
    {
        "value": 10,
        "day": "2016-08-17"
    },
    {
        "value": 191,
        "day": "2015-08-01"
    },
    {
        "value": 274,
        "day": "2017-10-13"
    },
    {
        "value": 29,
        "day": "2017-02-04"
    },
    {
        "value": 265,
        "day": "2017-06-23"
    },
    {
        "value": 306,
        "day": "2015-09-05"
    },
    {
        "value": 187,
        "day": "2017-08-02"
    },
    {
        "value": 328,
        "day": "2016-02-27"
    },
    {
        "value": 288,
        "day": "2015-05-01"
    },
    {
        "value": 245,
        "day": "2015-12-14"
    },
    {
        "value": 85,
        "day": "2015-08-28"
    },
    {
        "value": 319,
        "day": "2018-05-07"
    },
    {
        "value": 319,
        "day": "2017-12-15"
    },
    {
        "value": 75,
        "day": "2018-03-19"
    },
    {
        "value": 91,
        "day": "2017-05-20"
    },
    {
        "value": 141,
        "day": "2016-01-24"
    },
    {
        "value": 334,
        "day": "2016-02-21"
    },
    {
        "value": 395,
        "day": "2015-04-04"
    },
    {
        "value": 268,
        "day": "2017-11-13"
    },
    {
        "value": 162,
        "day": "2015-07-08"
    },
    {
        "value": 52,
        "day": "2017-05-02"
    },
    {
        "value": 64,
        "day": "2015-07-07"
    },
    {
        "value": 152,
        "day": "2015-09-18"
    },
    {
        "value": 326,
        "day": "2016-04-04"
    },
    {
        "value": 100,
        "day": "2017-10-27"
    },
    {
        "value": 253,
        "day": "2015-11-12"
    },
    {
        "value": 248,
        "day": "2016-09-25"
    },
    {
        "value": 18,
        "day": "2017-04-08"
    },
    {
        "value": 204,
        "day": "2017-12-07"
    },
    {
        "value": 204,
        "day": "2016-06-24"
    },
    {
        "value": 143,
        "day": "2017-03-05"
    },
    {
        "value": 313,
        "day": "2016-07-25"
    },
    {
        "value": 388,
        "day": "2016-12-03"
    },
    {
        "value": 8,
        "day": "2016-06-27"
    },
    {
        "value": 397,
        "day": "2018-05-19"
    },
    {
        "value": 159,
        "day": "2018-05-02"
    },
    {
        "value": 153,
        "day": "2018-08-10"
    },
    {
        "value": 27,
        "day": "2015-10-22"
    },
    {
        "value": 8,
        "day": "2017-06-06"
    },
    {
        "value": 358,
        "day": "2015-08-16"
    },
    {
        "value": 78,
        "day": "2015-04-12"
    },
    {
        "value": 371,
        "day": "2017-05-25"
    },
    {
        "value": 44,
        "day": "2016-12-26"
    },
    {
        "value": 97,
        "day": "2017-07-23"
    },
    {
        "value": 138,
        "day": "2018-02-18"
    },
    {
        "value": 185,
        "day": "2016-12-23"
    },
    {
        "value": 128,
        "day": "2016-03-12"
    },
    {
        "value": 216,
        "day": "2018-06-20"
    },
    {
        "value": 150,
        "day": "2015-05-13"
    },
    {
        "value": 358,
        "day": "2017-03-03"
    },
    {
        "value": 358,
        "day": "2017-04-28"
    },
    {
        "value": 45,
        "day": "2017-06-17"
    },
    {
        "value": 161,
        "day": "2016-03-20"
    },
    {
        "value": 114,
        "day": "2017-09-16"
    },
    {
        "value": 25,
        "day": "2015-08-31"
    },
    {
        "value": 119,
        "day": "2017-12-06"
    },
    {
        "value": 131,
        "day": "2015-07-05"
    },
    {
        "value": 170,
        "day": "2017-01-26"
    },
    {
        "value": 210,
        "day": "2016-02-19"
    },
    {
        "value": 304,
        "day": "2016-10-26"
    },
    {
        "value": 219,
        "day": "2017-10-02"
    },
    {
        "value": 118,
        "day": "2016-02-26"
    },
    {
        "value": 206,
        "day": "2017-11-06"
    },
    {
        "value": 297,
        "day": "2016-09-05"
    },
    {
        "value": 222,
        "day": "2017-04-06"
    },
    {
        "value": 100,
        "day": "2016-01-19"
    },
    {
        "value": 356,
        "day": "2018-08-01"
    },
    {
        "value": 275,
        "day": "2018-05-20"
    },
    {
        "value": 315,
        "day": "2017-03-21"
    },
    {
        "value": 295,
        "day": "2015-11-04"
    },
    {
        "value": 381,
        "day": "2017-06-25"
    },
    {
        "value": 196,
        "day": "2016-04-28"
    },
    {
        "value": 213,
        "day": "2017-01-13"
    },
    {
        "value": 367,
        "day": "2017-08-05"
    },
    {
        "value": 353,
        "day": "2015-11-13"
    },
    {
        "value": 328,
        "day": "2016-01-01"
    },
    {
        "value": 40,
        "day": "2016-09-22"
    },
    {
        "value": 157,
        "day": "2016-06-04"
    },
    {
        "value": 200,
        "day": "2015-09-22"
    },
    {
        "value": 352,
        "day": "2017-02-28"
    },
    {
        "value": 4,
        "day": "2015-05-08"
    },
    {
        "value": 399,
        "day": "2018-08-03"
    },
    {
        "value": 290,
        "day": "2015-10-19"
    },
    {
        "value": 166,
        "day": "2018-07-03"
    },
    {
        "value": 177,
        "day": "2018-06-14"
    },
    {
        "value": 188,
        "day": "2016-10-03"
    },
    {
        "value": 15,
        "day": "2016-06-10"
    },
    {
        "value": 136,
        "day": "2015-06-29"
    },
    {
        "value": 345,
        "day": "2018-03-02"
    },
    {
        "value": 317,
        "day": "2017-04-30"
    },
    {
        "value": 298,
        "day": "2015-05-28"
    },
    {
        "value": 391,
        "day": "2018-04-23"
    },
    {
        "value": 214,
        "day": "2015-12-11"
    },
    {
        "value": 74,
        "day": "2015-12-22"
    },
    {
        "value": 338,
        "day": "2017-09-09"
    },
    {
        "value": 74,
        "day": "2016-07-31"
    },
    {
        "value": 346,
        "day": "2015-05-20"
    },
    {
        "value": 236,
        "day": "2015-06-30"
    },
    {
        "value": 200,
        "day": "2017-11-02"
    },
    {
        "value": 23,
        "day": "2017-12-21"
    },
    {
        "value": 225,
        "day": "2016-04-02"
    },
    {
        "value": 261,
        "day": "2016-02-07"
    },
    {
        "value": 251,
        "day": "2017-09-10"
    },
    {
        "value": 143,
        "day": "2016-08-24"
    },
    {
        "value": 15,
        "day": "2017-11-29"
    },
    {
        "value": 379,
        "day": "2016-04-16"
    },
    {
        "value": 373,
        "day": "2015-10-20"
    },
    {
        "value": 379,
        "day": "2018-04-05"
    },
    {
        "value": 374,
        "day": "2017-06-21"
    },
    {
        "value": 389,
        "day": "2016-08-03"
    },
    {
        "value": 394,
        "day": "2015-12-17"
    },
    {
        "value": 371,
        "day": "2015-07-24"
    },
    {
        "value": 255,
        "day": "2017-06-03"
    },
    {
        "value": 371,
        "day": "2016-07-19"
    },
    {
        "value": 6,
        "day": "2017-07-20"
    },
    {
        "value": 122,
        "day": "2016-07-03"
    },
    {
        "value": 232,
        "day": "2016-02-04"
    },
    {
        "value": 380,
        "day": "2016-10-10"
    },
    {
        "value": 274,
        "day": "2016-09-28"
    },
    {
        "value": 56,
        "day": "2018-03-31"
    },
    {
        "value": 255,
        "day": "2016-08-29"
    },
    {
        "value": 328,
        "day": "2016-12-07"
    },
    {
        "value": 40,
        "day": "2016-03-02"
    },
    {
        "value": 173,
        "day": "2015-11-15"
    },
    {
        "value": 105,
        "day": "2018-01-08"
    },
    {
        "value": 313,
        "day": "2015-10-28"
    },
    {
        "value": 127,
        "day": "2017-01-19"
    },
    {
        "value": 93,
        "day": "2016-03-13"
    },
    {
        "value": 228,
        "day": "2015-05-09"
    },
    {
        "value": 90,
        "day": "2016-05-14"
    },
    {
        "value": 264,
        "day": "2015-06-07"
    },
    {
        "value": 287,
        "day": "2017-07-21"
    },
    {
        "value": 238,
        "day": "2017-01-04"
    },
    {
        "value": 281,
        "day": "2017-09-29"
    },
    {
        "value": 16,
        "day": "2017-04-25"
    },
    {
        "value": 106,
        "day": "2016-02-13"
    },
    {
        "value": 130,
        "day": "2015-04-25"
    },
    {
        "value": 77,
        "day": "2018-01-25"
    },
    {
        "value": 368,
        "day": "2015-08-03"
    },
    {
        "value": 347,
        "day": "2017-06-30"
    },
    {
        "value": 379,
        "day": "2017-11-26"
    },
    {
        "value": 182,
        "day": "2018-07-22"
    },
    {
        "value": 18,
        "day": "2016-07-20"
    },
    {
        "value": 63,
        "day": "2017-10-18"
    },
    {
        "value": 55,
        "day": "2015-05-14"
    },
    {
        "value": 304,
        "day": "2015-08-19"
    },
    {
        "value": 159,
        "day": "2015-09-04"
    },
    {
        "value": 138,
        "day": "2015-04-26"
    },
    {
        "value": 141,
        "day": "2018-06-27"
    },
    {
        "value": 184,
        "day": "2017-02-10"
    },
    {
        "value": 13,
        "day": "2016-11-10"
    },
    {
        "value": 286,
        "day": "2016-02-14"
    },
    {
        "value": 113,
        "day": "2017-02-15"
    },
    {
        "value": 384,
        "day": "2015-06-15"
    },
    {
        "value": 187,
        "day": "2018-05-08"
    },
    {
        "value": 321,
        "day": "2017-01-30"
    },
    {
        "value": 345,
        "day": "2017-01-27"
    },
    {
        "value": 83,
        "day": "2015-07-28"
    },
    {
        "value": 91,
        "day": "2017-04-26"
    },
    {
        "value": 164,
        "day": "2017-06-20"
    },
    {
        "value": 174,
        "day": "2016-06-08"
    },
    {
        "value": 272,
        "day": "2015-05-07"
    },
    {
        "value": 360,
        "day": "2017-10-19"
    },
    {
        "value": 362,
        "day": "2017-11-24"
    },
    {
        "value": 308,
        "day": "2018-06-21"
    },
    {
        "value": 333,
        "day": "2017-05-04"
    },
    {
        "value": 114,
        "day": "2018-03-12"
    },
    {
        "value": 308,
        "day": "2017-07-22"
    },
    {
        "value": 31,
        "day": "2017-07-17"
    },
    {
        "value": 182,
        "day": "2017-04-13"
    },
    {
        "value": 334,
        "day": "2015-10-21"
    },
    {
        "value": 18,
        "day": "2018-03-21"
    },
    {
        "value": 356,
        "day": "2017-11-16"
    },
    {
        "value": 1,
        "day": "2017-10-12"
    },
    {
        "value": 276,
        "day": "2017-05-13"
    },
    {
        "value": 197,
        "day": "2015-07-19"
    },
    {
        "value": 379,
        "day": "2015-08-14"
    },
    {
        "value": 296,
        "day": "2018-02-03"
    },
    {
        "value": 227,
        "day": "2018-07-07"
    },
    {
        "value": 17,
        "day": "2015-07-21"
    },
    {
        "value": 40,
        "day": "2017-02-22"
    },
    {
        "value": 28,
        "day": "2017-10-23"
    },
    {
        "value": 346,
        "day": "2017-09-04"
    },
    {
        "value": 224,
        "day": "2015-11-25"
    },
    {
        "value": 104,
        "day": "2015-07-31"
    },
    {
        "value": 166,
        "day": "2017-08-18"
    },
    {
        "value": 143,
        "day": "2015-11-07"
    },
    {
        "value": 275,
        "day": "2015-12-20"
    },
    {
        "value": 300,
        "day": "2015-06-25"
    },
    {
        "value": 229,
        "day": "2018-02-24"
    },
    {
        "value": 32,
        "day": "2015-09-30"
    },
    {
        "value": 311,
        "day": "2017-02-19"
    },
    {
        "value": 341,
        "day": "2017-05-11"
    },
    {
        "value": 229,
        "day": "2018-04-28"
    },
    {
        "value": 294,
        "day": "2016-05-05"
    },
    {
        "value": 95,
        "day": "2017-08-23"
    },
    {
        "value": 62,
        "day": "2017-12-05"
    },
    {
        "value": 270,
        "day": "2016-06-29"
    },
    {
        "value": 361,
        "day": "2016-05-08"
    },
    {
        "value": 197,
        "day": "2015-05-16"
    },
    {
        "value": 167,
        "day": "2015-12-28"
    },
    {
        "value": 271,
        "day": "2017-02-20"
    },
    {
        "value": 67,
        "day": "2016-12-09"
    },
    {
        "value": 227,
        "day": "2016-12-19"
    },
    {
        "value": 384,
        "day": "2016-07-01"
    },
    {
        "value": 115,
        "day": "2015-09-26"
    },
    {
        "value": 83,
        "day": "2017-11-30"
    },
    {
        "value": 58,
        "day": "2016-10-08"
    },
    {
        "value": 202,
        "day": "2016-08-06"
    },
    {
        "value": 12,
        "day": "2017-01-29"
    },
    {
        "value": 83,
        "day": "2015-05-05"
    },
    {
        "value": 252,
        "day": "2018-03-17"
    },
    {
        "value": 3,
        "day": "2018-01-06"
    },
    {
        "value": 135,
        "day": "2016-06-23"
    },
    {
        "value": 266,
        "day": "2016-02-05"
    },
    {
        "value": 59,
        "day": "2018-05-15"
    },
    {
        "value": 143,
        "day": "2017-03-28"
    },
    {
        "value": 245,
        "day": "2018-04-29"
    },
    {
        "value": 100,
        "day": "2015-10-02"
    },
    {
        "value": 287,
        "day": "2017-09-13"
    },
    {
        "value": 228,
        "day": "2015-12-25"
    },
    {
        "value": 317,
        "day": "2015-05-30"
    },
    {
        "value": 245,
        "day": "2018-08-09"
    },
    {
        "value": 106,
        "day": "2015-12-18"
    },
    {
        "value": 130,
        "day": "2015-06-11"
    },
    {
        "value": 367,
        "day": "2015-10-01"
    },
    {
        "value": 228,
        "day": "2017-08-22"
    },
    {
        "value": 71,
        "day": "2017-01-08"
    },
    {
        "value": 222,
        "day": "2017-04-19"
    },
    {
        "value": 327,
        "day": "2017-01-07"
    },
    {
        "value": 327,
        "day": "2017-12-24"
    },
    {
        "value": 327,
        "day": "2018-03-05"
    },
    {
        "value": 367,
        "day": "2015-10-15"
    },
    {
        "value": 32,
        "day": "2016-11-16"
    },
    {
        "value": 2,
        "day": "2017-04-02"
    },
    {
        "value": 372,
        "day": "2017-03-07"
    },
    {
        "value": 226,
        "day": "2018-02-11"
    },
    {
        "value": 121,
        "day": "2015-06-12"
    },
    {
        "value": 44,
        "day": "2018-01-15"
    },
    {
        "value": 358,
        "day": "2018-03-30"
    },
    {
        "value": 105,
        "day": "2018-04-22"
    },
    {
        "value": 120,
        "day": "2017-01-24"
    },
    {
        "value": 396,
        "day": "2018-01-24"
    },
    {
        "value": 116,
        "day": "2017-03-06"
    },
    {
        "value": 370,
        "day": "2016-11-19"
    },
    {
        "value": 196,
        "day": "2015-06-13"
    },
    {
        "value": 396,
        "day": "2018-06-08"
    },
    {
        "value": 151,
        "day": "2017-06-16"
    },
    {
        "value": 181,
        "day": "2016-04-21"
    },
    {
        "value": 275,
        "day": "2016-05-13"
    },
    {
        "value": 153,
        "day": "2018-05-06"
    },
    {
        "value": 375,
        "day": "2018-02-23"
    },
    {
        "value": 83,
        "day": "2018-02-13"
    },
    {
        "value": 110,
        "day": "2018-04-01"
    },
    {
        "value": 137,
        "day": "2017-02-12"
    },
    {
        "value": 293,
        "day": "2018-07-16"
    },
    {
        "value": 110,
        "day": "2015-09-02"
    },
    {
        "value": 20,
        "day": "2016-03-07"
    },
    {
        "value": 52,
        "day": "2016-11-18"
    },
    {
        "value": 250,
        "day": "2017-01-31"
    },
    {
        "value": 226,
        "day": "2015-09-24"
    },
    {
        "value": 156,
        "day": "2016-12-22"
    },
    {
        "value": 378,
        "day": "2017-06-15"
    },
    {
        "value": 16,
        "day": "2015-04-23"
    },
    {
        "value": 136,
        "day": "2016-02-28"
    },
    {
        "value": 66,
        "day": "2017-09-25"
    },
    {
        "value": 142,
        "day": "2016-12-11"
    },
    {
        "value": 17,
        "day": "2016-12-12"
    },
    {
        "value": 129,
        "day": "2015-05-04"
    },
    {
        "value": 8,
        "day": "2016-03-05"
    },
    {
        "value": 293,
        "day": "2017-07-28"
    },
    {
        "value": 246,
        "day": "2015-08-05"
    },
    {
        "value": 11,
        "day": "2017-12-18"
    },
    {
        "value": 318,
        "day": "2016-05-09"
    },
    {
        "value": 88,
        "day": "2015-12-01"
    },
    {
        "value": 27,
        "day": "2016-04-11"
    },
    {
        "value": 346,
        "day": "2017-03-20"
    },
    {
        "value": 329,
        "day": "2016-08-28"
    },
    {
        "value": 286,
        "day": "2017-08-03"
    },
    {
        "value": 258,
        "day": "2018-02-07"
    },
    {
        "value": 390,
        "day": "2016-12-31"
    },
    {
        "value": 186,
        "day": "2017-05-27"
    },
    {
        "value": 67,
        "day": "2018-03-10"
    },
    {
        "value": 370,
        "day": "2016-09-29"
    },
    {
        "value": 237,
        "day": "2016-03-22"
    },
    {
        "value": 35,
        "day": "2017-12-13"
    },
    {
        "value": 327,
        "day": "2017-01-11"
    },
    {
        "value": 193,
        "day": "2015-08-30"
    },
    {
        "value": 234,
        "day": "2016-08-27"
    },
    {
        "value": 103,
        "day": "2017-01-03"
    },
    {
        "value": 388,
        "day": "2016-05-06"
    },
    {
        "value": 4,
        "day": "2015-04-11"
    },
    {
        "value": 251,
        "day": "2015-10-09"
    },
    {
        "value": 174,
        "day": "2015-11-06"
    },
    {
        "value": 40,
        "day": "2016-07-08"
    },
    {
        "value": 180,
        "day": "2017-01-20"
    },
    {
        "value": 96,
        "day": "2016-07-21"
    },
    {
        "value": 59,
        "day": "2015-06-04"
    },
    {
        "value": 121,
        "day": "2016-02-22"
    },
    {
        "value": 277,
        "day": "2017-06-08"
    },
    {
        "value": 166,
        "day": "2016-07-27"
    },
    {
        "value": 118,
        "day": "2015-10-14"
    },
    {
        "value": 211,
        "day": "2015-07-04"
    },
    {
        "value": 291,
        "day": "2017-06-04"
    },
    {
        "value": 199,
        "day": "2017-12-19"
    },
    {
        "value": 160,
        "day": "2016-12-24"
    },
    {
        "value": 357,
        "day": "2015-10-16"
    },
    {
        "value": 387,
        "day": "2016-04-25"
    },
    {
        "value": 208,
        "day": "2016-12-04"
    },
    {
        "value": 203,
        "day": "2017-04-14"
    },
    {
        "value": 132,
        "day": "2017-07-29"
    },
    {
        "value": 349,
        "day": "2018-07-21"
    },
    {
        "value": 128,
        "day": "2017-01-25"
    },
    {
        "value": 221,
        "day": "2016-01-23"
    },
    {
        "value": 11,
        "day": "2017-04-15"
    },
    {
        "value": 284,
        "day": "2016-09-07"
    },
    {
        "value": 320,
        "day": "2017-11-19"
    },
    {
        "value": 228,
        "day": "2015-04-01"
    },
    {
        "value": 398,
        "day": "2016-09-14"
    },
    {
        "value": 373,
        "day": "2015-07-15"
    },
    {
        "value": 100,
        "day": "2015-09-10"
    },
    {
        "value": 15,
        "day": "2017-07-05"
    },
    {
        "value": 12,
        "day": "2018-02-06"
    },
    {
        "value": 259,
        "day": "2017-05-16"
    },
    {
        "value": 105,
        "day": "2016-03-23"
    },
    {
        "value": 33,
        "day": "2018-01-11"
    },
    {
        "value": 252,
        "day": "2015-07-12"
    },
    {
        "value": 303,
        "day": "2018-05-27"
    },
    {
        "value": 13,
        "day": "2017-03-15"
    },
    {
        "value": 256,
        "day": "2015-05-29"
    },
    {
        "value": 345,
        "day": "2016-02-25"
    },
    {
        "value": 328,
        "day": "2016-01-06"
    },
    {
        "value": 76,
        "day": "2016-07-05"
    },
    {
        "value": 187,
        "day": "2016-10-27"
    },
    {
        "value": 334,
        "day": "2017-02-11"
    },
    {
        "value": 60,
        "day": "2017-05-06"
    },
    {
        "value": 378,
        "day": "2016-12-06"
    },
    {
        "value": 52,
        "day": "2015-06-24"
    },
    {
        "value": 372,
        "day": "2016-08-25"
    },
    {
        "value": 238,
        "day": "2018-06-18"
    },
    {
        "value": 112,
        "day": "2016-03-14"
    },
    {
        "value": 19,
        "day": "2016-10-04"
    },
    {
        "value": 30,
        "day": "2018-04-20"
    },
    {
        "value": 256,
        "day": "2018-07-30"
    },
    {
        "value": 147,
        "day": "2016-12-02"
    },
    {
        "value": 261,
        "day": "2017-06-14"
    },
    {
        "value": 164,
        "day": "2016-03-16"
    },
    {
        "value": 71,
        "day": "2017-06-13"
    },
    {
        "value": 115,
        "day": "2018-03-06"
    },
    {
        "value": 395,
        "day": "2018-01-30"
    },
    {
        "value": 394,
        "day": "2018-05-13"
    },
    {
        "value": 214,
        "day": "2015-06-19"
    },
    {
        "value": 61,
        "day": "2018-05-10"
    },
    {
        "value": 157,
        "day": "2015-09-23"
    },
    {
        "value": 147,
        "day": "2018-03-20"
    },
    {
        "value": 154,
        "day": "2017-04-24"
    },
    {
        "value": 248,
        "day": "2015-10-13"
    },
    {
        "value": 78,
        "day": "2017-05-05"
    },
    {
        "value": 160,
        "day": "2017-12-29"
    },
    {
        "value": 228,
        "day": "2016-10-24"
    },
    {
        "value": 59,
        "day": "2016-06-19"
    },
    {
        "value": 350,
        "day": "2016-06-18"
    },
    {
        "value": 346,
        "day": "2016-08-20"
    },
    {
        "value": 186,
        "day": "2015-09-29"
    },
    {
        "value": 263,
        "day": "2016-06-22"
    },
    {
        "value": 330,
        "day": "2018-04-18"
    },
    {
        "value": 229,
        "day": "2016-01-31"
    },
    {
        "value": 333,
        "day": "2018-02-17"
    },
    {
        "value": 324,
        "day": "2015-12-13"
    },
    {
        "value": 5,
        "day": "2018-01-07"
    },
    {
        "value": 31,
        "day": "2015-11-02"
    },
    {
        "value": 309,
        "day": "2016-04-26"
    },
    {
        "value": 82,
        "day": "2016-05-25"
    },
    {
        "value": 300,
        "day": "2017-11-23"
    },
    {
        "value": 281,
        "day": "2017-03-29"
    },
    {
        "value": 246,
        "day": "2017-10-24"
    },
    {
        "value": 332,
        "day": "2017-02-03"
    },
    {
        "value": 85,
        "day": "2018-05-01"
    },
    {
        "value": 315,
        "day": "2016-08-16"
    },
    {
        "value": 245,
        "day": "2018-07-11"
    },
    {
        "value": 290,
        "day": "2015-08-18"
    },
    {
        "value": 113,
        "day": "2018-06-29"
    },
    {
        "value": 290,
        "day": "2017-07-06"
    },
    {
        "value": 188,
        "day": "2017-02-01"
    },
    {
        "value": 10,
        "day": "2015-06-08"
    },
    {
        "value": 336,
        "day": "2016-09-23"
    },
    {
        "value": 366,
        "day": "2016-02-08"
    },
    {
        "value": 12,
        "day": "2015-06-14"
    },
    {
        "value": 242,
        "day": "2016-09-16"
    },
    {
        "value": 147,
        "day": "2015-05-23"
    },
    {
        "value": 166,
        "day": "2017-10-25"
    },
    {
        "value": 89,
        "day": "2017-01-15"
    },
    {
        "value": 360,
        "day": "2018-02-27"
    },
    {
        "value": 379,
        "day": "2016-09-26"
    },
    {
        "value": 258,
        "day": "2018-04-30"
    },
    {
        "value": 372,
        "day": "2015-11-01"
    },
    {
        "value": 142,
        "day": "2016-12-28"
    },
    {
        "value": 135,
        "day": "2018-04-26"
    },
    {
        "value": 22,
        "day": "2018-01-18"
    },
    {
        "value": 108,
        "day": "2017-09-27"
    },
    {
        "value": 114,
        "day": "2016-06-14"
    },
    {
        "value": 354,
        "day": "2016-01-08"
    },
    {
        "value": 47,
        "day": "2018-07-01"
    },
    {
        "value": 40,
        "day": "2017-05-29"
    },
    {
        "value": 59,
        "day": "2017-01-02"
    },
    {
        "value": 385,
        "day": "2015-09-08"
    },
    {
        "value": 132,
        "day": "2016-05-02"
    },
    {
        "value": 353,
        "day": "2017-10-30"
    },
    {
        "value": 356,
        "day": "2016-02-11"
    },
    {
        "value": 7,
        "day": "2017-05-23"
    },
    {
        "value": 87,
        "day": "2018-07-28"
    },
    {
        "value": 394,
        "day": "2015-10-26"
    },
    {
        "value": 37,
        "day": "2017-12-04"
    },
    {
        "value": 305,
        "day": "2018-03-25"
    },
    {
        "value": 81,
        "day": "2017-04-07"
    },
    {
        "value": 26,
        "day": "2017-12-28"
    },
    {
        "value": 353,
        "day": "2016-11-04"
    },
    {
        "value": 25,
        "day": "2017-04-12"
    },
    {
        "value": 155,
        "day": "2018-06-15"
    },
    {
        "value": 114,
        "day": "2018-05-30"
    },
    {
        "value": 229,
        "day": "2015-07-16"
    },
    {
        "value": 241,
        "day": "2017-01-22"
    },
    {
        "value": 251,
        "day": "2015-06-01"
    },
    {
        "value": 375,
        "day": "2015-12-21"
    },
    {
        "value": 124,
        "day": "2016-02-20"
    },
    {
        "value": 380,
        "day": "2016-09-06"
    },
    {
        "value": 37,
        "day": "2015-07-11"
    },
    {
        "value": 7,
        "day": "2016-10-06"
    },
    {
        "value": 19,
        "day": "2016-08-08"
    },
    {
        "value": 110,
        "day": "2015-06-17"
    },
    {
        "value": 293,
        "day": "2016-06-28"
    },
    {
        "value": 139,
        "day": "2017-01-18"
    },
    {
        "value": 130,
        "day": "2016-04-13"
    },
    {
        "value": 147,
        "day": "2017-03-27"
    },
    {
        "value": 119,
        "day": "2016-11-30"
    },
    {
        "value": 37,
        "day": "2017-10-04"
    },
    {
        "value": 176,
        "day": "2017-08-17"
    },
    {
        "value": 300,
        "day": "2016-06-07"
    },
    {
        "value": 142,
        "day": "2018-05-21"
    },
    {
        "value": 242,
        "day": "2017-11-11"
    },
    {
        "value": 300,
        "day": "2017-03-31"
    },
    {
        "value": 19,
        "day": "2016-03-30"
    },
    {
        "value": 187,
        "day": "2018-02-20"
    },
    {
        "value": 42,
        "day": "2016-08-15"
    },
    {
        "value": 171,
        "day": "2017-07-07"
    },
    {
        "value": 299,
        "day": "2015-12-24"
    },
    {
        "value": 169,
        "day": "2015-06-22"
    },
    {
        "value": 124,
        "day": "2015-08-26"
    },
    {
        "value": 48,
        "day": "2017-09-22"
    },
    {
        "value": 258,
        "day": "2016-09-17"
    },
    {
        "value": 24,
        "day": "2015-10-03"
    },
    {
        "value": 123,
        "day": "2015-10-08"
    },
    {
        "value": 15,
        "day": "2018-06-16"
    },
    {
        "value": 2,
        "day": "2016-06-09"
    },
    {
        "value": 27,
        "day": "2017-12-03"
    },
    {
        "value": 330,
        "day": "2017-12-17"
    },
    {
        "value": 11,
        "day": "2017-10-08"
    },
    {
        "value": 364,
        "day": "2018-06-22"
    },
    {
        "value": 172,
        "day": "2018-01-01"
    },
    {
        "value": 222,
        "day": "2018-05-09"
    },
    {
        "value": 368,
        "day": "2015-12-19"
    },
    {
        "value": 396,
        "day": "2018-06-04"
    },
    {
        "value": 330,
        "day": "2015-09-14"
    },
    {
        "value": 83,
        "day": "2016-01-05"
    },
    {
        "value": 225,
        "day": "2018-04-04"
    },
    {
        "value": 188,
        "day": "2015-10-18"
    },
    {
        "value": 189,
        "day": "2017-03-14"
    },
    {
        "value": 103,
        "day": "2017-05-24"
    },
    {
        "value": 4,
        "day": "2016-09-18"
    },
    {
        "value": 283,
        "day": "2016-07-28"
    },
    {
        "value": 176,
        "day": "2016-05-12"
    },
    {
        "value": 323,
        "day": "2017-02-24"
    },
    {
        "value": 265,
        "day": "2018-04-19"
    },
    {
        "value": 93,
        "day": "2017-08-16"
    },
    {
        "value": 48,
        "day": "2017-02-27"
    },
    {
        "value": 138,
        "day": "2017-06-11"
    },
    {
        "value": 379,
        "day": "2018-01-12"
    },
    {
        "value": 346,
        "day": "2015-06-18"
    },
    {
        "value": 194,
        "day": "2017-07-31"
    },
    {
        "value": 203,
        "day": "2018-03-26"
    },
    {
        "value": 352,
        "day": "2017-01-05"
    },
    {
        "value": 112,
        "day": "2015-09-15"
    },
    {
        "value": 290,
        "day": "2015-09-28"
    },
    {
        "value": 134,
        "day": "2018-03-28"
    },
    {
        "value": 249,
        "day": "2016-01-04"
    },
    {
        "value": 290,
        "day": "2018-01-14"
    },
    {
        "value": 296,
        "day": "2017-12-08"
    },
    {
        "value": 43,
        "day": "2017-05-07"
    },
    {
        "value": 184,
        "day": "2015-10-27"
    },
    {
        "value": 114,
        "day": "2016-09-24"
    },
    {
        "value": 88,
        "day": "2015-04-30"
    },
    {
        "value": 235,
        "day": "2017-02-17"
    }
]




const Activities = () => {
    return (
        <ResponsiveCalendar
            data={data}
            from="2015-03-01"
            to="2015-07-12"
            emptyColor="#11161C"
            colors={['#7E24FF']}
            minValue={-38}
            maxValue={100}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            yearLegendOffset={0}
            monthBorderWidth={0}

            monthBorderColor="#444444"
            dayBorderColor="#192229"
            legends={[
                {
                    anchor: 'bottom-right',
                    justify: false,
                    direction: 'row',
                    translateY: 36,
                    itemCount: 4,
                    itemWidth: 42,
                    itemHeight: 36,
                    itemsSpacing: 14,

                    itemDirection: 'right-to-left',

                }
            ]}
        />)
}

export default Activities;
"use client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

export const SimpleDatePicker: React.FC = () => {
  const [date, setDate] = useState("");

  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <div className="w-64">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-gray-800 mb-2"
        >
          Select a date
        </label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="block w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none hover:bg-gray-100"
        />
        {date && (
          <p className="mt-3 text-sm text-gray-600">
            Selected date: {new Date(date).toLocaleDateString()}
          </p>
        )}
      </div>
    </div>
  );
};

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const CustomCalendarPicker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  );
  const lastDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  );
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const handleDateClick = (day: number) => {
    setSelectedDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), day)
    );
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <div className="w-72 bg-gray-50 shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="flex justify-between items-center bg-white p-4 border-b border-gray-100">
          <button
            onClick={prevMonth}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>
          <span className="font-semibold text-gray-800">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={nextMonth}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 p-4">
          {daysOfWeek.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-400 mb-2"
            >
              {day}
            </div>
          ))}
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="h-9"></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isSelected =
              selectedDate?.getDate() === day &&
              selectedDate?.getMonth() === currentDate.getMonth() &&
              selectedDate?.getFullYear() === currentDate.getFullYear();
            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`h-9 w-9 flex items-center justify-center rounded-full text-sm transition-all duration-200
                ${
                  isSelected
                    ? "bg-blue-500 text-white font-semibold shadow-md"
                    : "hover:bg-gray-100 text-gray-700"
                }`}
              >
                {day}
              </button>
            );
          })}
        </div>
        {selectedDate && (
          <div className="border-t border-gray-100 bg-white">
            <p className="text-center p-3 text-sm text-gray-600">
              Selected: {selectedDate.toLocaleDateString()}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export const DropdownDatePicker: React.FC = () => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setter(e.target.value);
    };

  const selectClassName =
    "block w-full px-4 py-3 text-gray-800 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none appearance-none cursor-pointer";

  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <div className="w-72 space-y-3">
        <select
          value={month}
          onChange={handleChange(setMonth)}
          className={selectClassName}
        >
          <option value="">Month</option>
          {months.map((m, index) => (
            <option key={m} value={index + 1}>
              {m}
            </option>
          ))}
        </select>
        <select
          value={day}
          onChange={handleChange(setDay)}
          className={selectClassName}
        >
          <option value="">Day</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
        <select
          value={year}
          onChange={handleChange(setYear)}
          className={selectClassName}
        >
          <option value="">Year</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
        {day && month && year && (
          <p className="text-sm text-gray-600 mt-3">
            Selected date: {`${day}/${month}/${year}`}
          </p>
        )}
      </div>
    </div>
  );
};

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function getDaysInMonth(year: number, month: number): Date[] {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}

function isSameDay(date1: Date, date2: Date): boolean {
  return (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );
}

function isWithinInterval(date: Date, start: Date, end: Date): boolean {
  return date >= start && date <= end;
}

function formatDate(date: Date): string {
  return `${MONTHS[date.getMonth()].slice(
    0,
    3
  )} ${date.getDate()}, ${date.getFullYear()}`;
}

export const RangeDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = getDaysInMonth(
    currentMonth.getFullYear(),
    currentMonth.getMonth()
  );

  const handleDateClick = (date: Date) => {
    if (!startDate || (startDate && endDate)) {
      setStartDate(date);
      setEndDate(null);
    } else if (date > startDate) {
      setEndDate(date);
    } else {
      setEndDate(startDate);
      setStartDate(date);
    }
  };

  const isSelected = (date: Date) =>
    (startDate && isSameDay(startDate, date)) ||
    (endDate && isSameDay(endDate, date));

  const isInRange = (date: Date) =>
    startDate && endDate && isWithinInterval(date, startDate, endDate);

  const changeMonth = (increment: number) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-4rem)]">
      <div className="w-80 bg-gray-50 shadow-lg rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-white p-4 flex justify-between items-center border-b border-gray-100">
          <button
            onClick={() => changeMonth(-1)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ChevronLeftIcon className="w-5 h-5 text-gray-600" />
          </button>
          <h2 className="text-lg font-semibold text-gray-800">
            {MONTHS[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h2>
          <button
            onClick={() => changeMonth(1)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors"
          >
            <ChevronRightIcon className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <div className="grid grid-cols-7 gap-1 p-4">
          {DAYS.map((day) => (
            <div
              key={day}
              className="text-center text-sm font-medium text-gray-400 mb-2"
            >
              {day}
            </div>
          ))}
          {daysInMonth.map((date) => (
            <button
              key={date.toString()}
              onClick={() => handleDateClick(date)}
              className={`h-10 w-10 flex items-center justify-center rounded-full text-sm transition-all duration-200
              ${
                isSelected(date)
                  ? "bg-blue-500 text-white font-semibold shadow-md"
                  : ""
              }
              ${isInRange(date) ? "bg-blue-100" : ""}
              ${
                !isSelected(date) && !isInRange(date)
                  ? "hover:bg-gray-100 text-gray-700"
                  : ""
              }
            `}
            >
              {date.getDate()}
            </button>
          ))}
        </div>
        <div className="border-t border-gray-100 bg-white">
          <div className="p-4 space-y-1">
            {startDate && (
              <p className="text-sm text-gray-600">
                Start: {formatDate(startDate)}
              </p>
            )}
            {endDate && (
              <p className="text-sm text-gray-600">
                End: {formatDate(endDate)}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

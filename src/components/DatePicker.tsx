"use client";
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

export const SimpleDatePicker: React.FC = () => {
  const [date, setDate] = useState("");

  return (
    <div className="flex justify-center items-center h-[50vh] dark:bg-neutral-950">
      <div className="w-full max-w-xs">
        <label
          htmlFor="date"
          className="block text-sm font-medium text-neutral-900 dark:text-white mb-2 ml-1 tracking-tight"
        >
          Select Date
        </label>
        <div className="relative">
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="block w-full px-4 py-3.5 text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/5 dark:focus:ring-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all shadow-sm appearance-none"
            style={{ colorScheme: "light dark" }}
          />
        </div>
        {date && (
          <p className="mt-4 text-xs font-medium text-neutral-500 dark:text-neutral-400 ml-1">
            Confirmed: {new Date(date).toLocaleDateString(undefined, {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </p>
        )}
      </div>
    </div>
  );
};

const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export const CustomCalendarPicker: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const startingDayOfWeek = firstDayOfMonth.getDay();

  const prevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const handleDateClick = (day: number) => {
    setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day));
  };

  return (
    <div className="flex justify-center items-center h-[60vh] dark:bg-neutral-950">
      <div className="w-[320px] bg-white dark:bg-neutral-950 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none rounded-[2rem] p-5 border border-neutral-100 dark:border-white/5 transition-all">
        <div className="flex justify-between items-center mb-6 px-2">
          <button
            onClick={prevMonth}
            className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <ChevronLeftIcon className="w-4 h-4" />
          </button>
          <span className="font-semibold text-[15px] tracking-tight text-neutral-900 dark:text-white">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          <button
            onClick={nextMonth}
            className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
          >
            <ChevronRightIcon className="w-4 h-4" />
          </button>
        </div>
        
        <div className="grid grid-cols-7 mb-2">
          {daysOfWeek.map((day) => (
            <div key={day} className="text-center text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider py-2">
              {day}
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-7 gap-y-2 gap-x-1">
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
             <div key={`empty-${index}`} className="h-10"></div>
          ))}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const isSelected = selectedDate?.getDate() === day &&
                               selectedDate?.getMonth() === currentDate.getMonth() &&
                               selectedDate?.getFullYear() === currentDate.getFullYear();
            const isToday = new Date().getDate() === day &&
                            new Date().getMonth() === currentDate.getMonth() &&
                            new Date().getFullYear() === currentDate.getFullYear();

            return (
              <button
                key={day}
                onClick={() => handleDateClick(day)}
                className={`
                  h-10 w-full flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200
                  ${isSelected
                    ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md scale-105"
                    : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-900"
                  }
                  ${!isSelected && isToday ? "text-blue-500 dark:text-blue-400 font-bold" : ""}
                `}
              >
                {day}
              </button>
            );
          })}
        </div>
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
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const selectGroupClass = "relative flex-1";
  const selectClass = "block w-full px-4 py-3.5 text-sm font-medium text-neutral-900 dark:text-white bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-neutral-900/5 dark:focus:ring-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all shadow-sm appearance-none cursor-pointer";
  const iconClass = "absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400 pointer-events-none";

  return (
    <div className="flex justify-center items-center h-[50vh] dark:bg-neutral-950">
      <div className="w-full max-w-sm space-y-4">
        <label className="block text-sm font-medium text-neutral-900 dark:text-white ml-1 tracking-tight">
          Date of Birth
        </label>
        <div className="flex gap-3">
          <div className={selectGroupClass}>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled hidden>Month</option>
              {months.map((m, index) => (
                <option key={m} value={index + 1}>{m.slice(0, 3)}</option>
              ))}
            </select>
            <ChevronDownIcon className={iconClass} />
          </div>
          
          <div className={selectGroupClass}>
            <select
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled hidden>Day</option>
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
            <ChevronDownIcon className={iconClass} />
          </div>
          
          <div className={selectGroupClass}>
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className={selectClass}
            >
              <option value="" disabled hidden>Year</option>
              {years.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <ChevronDownIcon className={iconClass} />
          </div>
        </div>
      </div>
    </div>
  );
};

const getDaysInMonth = (year: number, month: number): Date[] => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};

const isSameDay = (date1: Date, date2: Date) => 
  date1.getFullYear() === date2.getFullYear() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getDate() === date2.getDate();

const isWithinInterval = (date: Date, start: Date, end: Date) => date >= start && date <= end;

const formatDate = (date: Date | null) => {
  if (!date) return "Select date";
  return new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).format(date);
};

export const RangeDatePicker: React.FC = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = getDaysInMonth(currentMonth.getFullYear(), currentMonth.getMonth());
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const startingDayOfWeek = firstDayOfMonth.getDay();

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

  const isSelected = (date: Date) => (startDate && isSameDay(startDate, date)) || (endDate && isSameDay(endDate, date));
  const isInRange = (date: Date) => startDate && endDate && isWithinInterval(date, startDate, endDate);

  const changeMonth = (increment: number) => {
    setCurrentMonth((prevMonth) => {
      const newMonth = new Date(prevMonth);
      newMonth.setMonth(newMonth.getMonth() + increment);
      return newMonth;
    });
  };

  return (
    <div className="flex justify-center items-center h-[70vh] dark:bg-neutral-950">
      <div className="w-[340px] bg-white dark:bg-neutral-950 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-none border border-neutral-100 dark:border-white/5 rounded-[2rem] overflow-hidden flex flex-col">
        <div className="px-5 py-4 flex items-center justify-between border-b border-neutral-100 dark:border-white/5 bg-neutral-50/50 dark:bg-neutral-900/30">
          <div className="flex flex-col">
            <span className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase mb-0.5">Check in</span>
            <span className={`text-sm font-medium ${startDate ? "text-neutral-900 dark:text-white" : "text-neutral-400"}`}>
              {formatDate(startDate)}
            </span>
          </div>
          <div className="h-8 w-px bg-neutral-200 dark:bg-neutral-800"></div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-semibold tracking-wider text-neutral-400 uppercase mb-0.5">Check out</span>
            <span className={`text-sm font-medium ${endDate ? "text-neutral-900 dark:text-white" : "text-neutral-400"}`}>
              {formatDate(endDate)}
            </span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex justify-between items-center mb-6 px-2">
            <button
              onClick={() => changeMonth(-1)}
              className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <h2 className="font-semibold text-[15px] tracking-tight text-neutral-900 dark:text-white">
              {months[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button
              onClick={() => changeMonth(1)}
              className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>
          
          <div className="grid grid-cols-7 mb-2">
            {daysOfWeek.map((day) => (
              <div key={day} className="text-center text-[11px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-wider py-2">
                {day}
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-7 gap-y-1">
            {Array.from({ length: startingDayOfWeek }).map((_, index) => (
               <div key={`empty-${index}`} className="h-10"></div>
            ))}
            {daysInMonth.map((date) => {
              const selected = isSelected(date);
              const inRange = isInRange(date);
              const isStart = startDate && isSameDay(startDate, date);
              const isEnd = endDate && isSameDay(endDate, date);
              
              return (
                <div key={date.toString()} className={`
                  relative h-10 w-full flex items-center justify-center
                  ${inRange && !isStart && !isEnd ? "bg-neutral-100 dark:bg-neutral-800/60" : ""}
                  ${inRange && isStart && !isEnd ? "bg-gradient-to-r from-transparent to-neutral-100 dark:to-neutral-800/60" : ""}
                  ${inRange && isEnd && !isStart ? "bg-gradient-to-l from-transparent to-neutral-100 dark:to-neutral-800/60" : ""}
                `}>
                  <button
                    onClick={() => handleDateClick(date)}
                    className={`
                      relative z-10 h-10 w-10 flex items-center justify-center rounded-full text-sm font-medium transition-all duration-200
                      ${selected
                        ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-md scale-100"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-800"
                      }
                      ${!selected && inRange ? "text-neutral-900 dark:text-white" : ""}
                    `}
                  >
                    {date.getDate()}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

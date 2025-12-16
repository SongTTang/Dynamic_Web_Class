export function getMonthGrid(year, month) {
  const firstDay = new Date(year, month, 1);
  const firstDayIndex = firstDay.getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const grid = [];

  // prev month
  for (let i = 0; i < firstDayIndex; i++) {
    grid.push({
      day: "",
      date: null,
      currentMonth: false,
    });
  }

  // current month
  for (let d = 1; d <= daysInMonth; d++) {
    grid.push({
      day: d,
      date: `${year}-${month + 1}-${d}`,
      currentMonth: true,
    });
  }

  // next month
  const totalCells = grid.length <= 35 ? 35 : 42;

  while (grid.length < totalCells) {
    grid.push({
      day: "",
      date: null,
      currentMonth: false,
    });
  }

  return grid;
}

export const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
]

export const years = Array.from({ length: 40 }, (_, i) => 2005 + i)

export const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export function formatDate(year, month, day) {
  return `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

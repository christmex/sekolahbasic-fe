export function formatEventDate(dateString: string) {
  // 1. Take only the first 10 characters (YYYY-MM-DD) 
  // to ignore the time and timezone "Z" completely
  const cleanDate = dateString.substring(0, 10);
  
  const [year, month, day] = cleanDate.split("-").map(Number);
  
  // 2. Create date in local time
  const eventDate = new Date(year, month - 1, day);

  return {
    day: day.toString().padStart(2, "0"),
    month: eventDate.toLocaleString("en-US", { month: "short" }),
    fullDate: eventDate.toLocaleString("en-US", { 
      month: "short", 
      day: "numeric", 
      year: "numeric" 
    }),
  };
}
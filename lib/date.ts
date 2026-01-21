export function formatEventDate(date: string) {
    const eventDate = new Date(date);
  
    return {
      day: eventDate.getDate().toString().padStart(2, "0"),
      month: eventDate.toLocaleString("en-US", { month: "short" }),
    };
  }
  
  export function formatEventTime(event: {
    starts_at: string;
    ends_at: string;
  }) {
    const start = new Date(event.starts_at);
    const end = new Date(event.ends_at);
  
    if (
      start.toDateString() !== end.toDateString()
    ) {
      return "All Day";
    }
  
    return `${start.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    })}`;
  }
  
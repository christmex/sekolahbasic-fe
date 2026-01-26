import { Event } from "@/types/event";
import { formatEventDate } from "@/lib/date";
import { Calendar } from "lucide-react";

type Props = {
  event: Event;
};

export function UpcomingEventItem({ event }: Props) {
  // Use the helper to get our formatted parts
  const { day, month, fullDate } = formatEventDate(event.start_date);

  return (
    <a
      href="#"
      className="flex gap-4 p-3 bg-white border border-gray-100 rounded-lg hover:border-gray-300 transition-colors group"
    >
      {/* Date Icon / Badge */}
      <div className="flex flex-col w-12 shrink-0 rounded overflow-hidden text-center border border-gray-100">
        <div className="bg-[#FFC627] text-gray-900 text-[10px] py-0.5 font-medium uppercase">
          {month}
        </div>
        <div className="bg-white text-gray-900 font-bold text-xl py-1 flex items-center justify-center h-full">
          {day}
        </div>
      </div>

      <div className="py-0.5">
        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#9e1b66] transition-colors line-clamp-1">
          {event.name}
        </h4>

        {/* Info Row: Showing Date and Location */}
        <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
          <Calendar className="w-3 h-3 text-gray-400" />
          <span>{fullDate}</span>
          <span className="text-gray-300">-</span>
          <span className="truncate">{event.location}</span>
        </div>
      </div>
    </a>
  );
}
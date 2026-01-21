import { Event } from "@/types/event";
import { formatEventDate, formatEventTime } from "@/lib/date";
import { Clock } from "lucide-react";

type Props = {
  event: Event;
};

export function UpcomingEventItem({ event }: Props) {
  const { day, month } = formatEventDate(event.starts_at);

  return (
    <a
      href="#"
      className="flex gap-4 p-3 bg-white border border-gray-100 rounded-lg hover:border-gray-300 transition-colors group"
    >
      <div className="flex flex-col w-12 shrink-0 rounded overflow-hidden text-center border border-gray-100">
        <div className="bg-[#FFC627] text-gray-900 text-[10px] py-0.5 font-medium uppercase">
          {month}
        </div>
        <div className="bg-white text-gray-900 font-bold text-xl py-1 flex items-center justify-center h-full">
          {day}
        </div>
      </div>

      <div className="py-0.5">
        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#9e1b66] transition-colors">
          {event.name}
        </h4>

        <div className="flex items-center gap-1.5 mt-1 text-xs text-gray-500">
          <Clock className="w-3 h-3" />
          {formatEventTime(event)} – {event.location}
        </div>
      </div>
    </a>
  );
}

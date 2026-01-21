import { Event } from "@/types/event";
import { UpcomingEventItem } from "./UpcomingEventItem";

type Props = {
  events: Event[];
};

export function UpcomingEvents({ events }: Props) {
  return (
    <section>
      <h2 className="text-lg font-semibold tracking-tight text-gray-900 mb-6">
        Upcoming Calendar
      </h2>

      <div className="space-y-3">
        {events.map((event) => (
          <UpcomingEventItem key={event.id} event={event} />
        ))}
      </div>

      <button className="w-full mt-4 py-2 text-xs font-medium text-gray-500 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors">
        View Full Calendar
      </button>
    </section>
  );
}

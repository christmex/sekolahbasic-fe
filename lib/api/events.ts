export async function getUpcomingEvents() {
    const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/school-events?filter=upcoming&limit=3`,
      {
        next: { revalidate: 300 },
      }
    );
  
    if (!res.ok) {
      throw new Error("Failed to fetch events");
    }
  
    const json = await res.json();
    return json.data;
  }
  
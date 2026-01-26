export async function getGalleries() {
  const res = await fetch(
      `${process.env.API_BASE_URL}/api/v1/galleries?page[size]=3`,
      // {
      //   next: { revalidate: 300 },
      // }
    );

  if (!res.ok) {
      throw new Error("Failed to fetch events");
  }

  const json = await res.json();
  return json.data;
}

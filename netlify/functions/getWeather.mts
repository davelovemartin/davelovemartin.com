import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  const location = new URL(req.url).searchParams.get("location");
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${location}&aqi=no`,
      {
        method: "GET",
        headers: { Accept: "application/json", "Accept-Encoding": "identity" },
      }
    );

    if (!response.ok) {
      throw new Error(`API request failed with status: ${response.status}`);
    }

    const weatherData = await response.json();

    return new Response(JSON.stringify(weatherData), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};

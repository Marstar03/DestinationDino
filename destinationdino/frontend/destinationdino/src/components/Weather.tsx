import { fetchWeatherApi } from "openmeteo";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";

export interface WeatherProps {
    destination: string;
}
  
const Weather: React.FC<WeatherProps> = ({destination}) => {

    const weatherCodeHashMap = new Map<number, [string, string]>([
        [0, ["Clear sky", "clear.png"]],
        [1, ["Mainly clear", "partCloud.png"]],
        [2, ["Partly cloudy", "partCloud.png"]],
        [3, ["Overcast", "cloud.png"]],
        [45, ["Fog", "fog.png"]],
        [48, ["Depositing rime fog", "fog.png"]],
        [51, ["Light drizzle", "drizzle.png"]],
        [53, ["Moderate drizzle", "drizzle.png"]],
        [55, ["Dense drizzle", "drizzle.png"]],
        [56, ["Light freezing drizzle", "drizzle.png"]],
        [57, ["Dense freezing drizzle", "drizzle.png"]],
        [61, ["Slight rain", "rain.png"]],
        [63, ["Moderate rain", "rain.png"]],
        [65, ["Heavy rain", "rain.png"]],
        [66, ["Light freezing rain", "rain.png"]],
        [67, ["Heavy freezing rain", "rain.png"]],
        [71, ["Slight snow fall", "snow.png"]],
        [73, ["Moderate snow fall", "snow.png"]],
        [75, ["Heavy snow fall", "snow.png"]],
        [77, ["Snow grains", "snow.png"]],
        [80, ["Slight rain showers", "rain.png"]],
        [81, ["Moderate rain showers", "rain.png"]],
        [82, ["Violent rain showers", "rain.png"]],
        [85, ["Slight snow showers", "snow.png"]],
        [86, ["Heavy snow showers", "snow.png"]],
        [95, ["Thunderstorm", "thunder.png"]],
        [96, ["Thunderstorm with slight hail", "thunder.png"]],
        [99, ["Thunderstorm with heavy hail", "thunder.png"]]
    ]);

    let latitude = 0;
    let longitude = 0;
    // const testDestination = "Trondheim";

    const [weatherCode, setWeatherCode] = useState<number>(0);
    const [temp, setTemp] = useState<number>(0);
    const [wind, setWind] = useState<number>(0);

    useEffect(() => {
        fetchData();
    }, []); 

    async function fetchData() {
        try {

            const latlongUrl = `https://geocoding-api.open-meteo.com/v1/search?name=${destination}&count=1&language=en&format=json`;
            // const latlongResponse = await geocode(latlongUrl, "Trondheim");
            // console.log(latlongResponse);

            await fetch(latlongUrl)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch geocoding data');
                    }
                    return response.json();
                })
                .then(data => {
                    // Handle the geocoding data
                    console.log('Geocoding result:', data);
                    if (data.results.length > 0) {
                        // Access the first result
                        const result = data.results[0];

                        // Extract latitude and longitude
                        latitude = result.latitude.toFixed(2);
                        longitude = result.longitude.toFixed(2);
                        console.log('Latitude:', latitude);
                        console.log('Longitude:', longitude);

                    } else {
                        console.log('No results found for the location:', location);
                    }
                })
                .catch(error => {
                    // Handle errors
                    console.error('Error geocoding location:', error);
                });

            const params = {
                "latitude": latitude,
                "longitude": longitude,
                "current": ["temperature_2m", "weather_code", "wind_speed_10m"],
                "wind_speed_unit": "ms",
	            "forecast_days": 1
            };
            const url = "https://api.open-meteo.com/v1/forecast";
            const responses = await fetchWeatherApi(url, params);
            
            // Helper function to form time ranges
            // const range = (start: number, stop: number, step: number) =>
            //     Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);
            
            // Process first location. Add a for-loop for multiple locations or weather models
            const response = responses[0];
            
            // Attributes for timezone and location
            const utcOffsetSeconds = response.utcOffsetSeconds();
            // const timezone = response.timezone();
            // const timezoneAbbreviation = response.timezoneAbbreviation();
            // const latitude = response.latitude();
            // const longitude = response.longitude();
            
            const current = response.current()!;
            
            // Note: The order of weather variables in the URL query and the indices below need to match!
            const weatherData = {
                current: {
                    time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                    temperature2m: current.variables(0)!.value(),
                    weatherCode: current.variables(1)!.value(),
                    windSpeed10m: current.variables(2)!.value(),
                },
            
            };

            console.log(weatherData.current.temperature2m);
            console.log(weatherData.current.windSpeed10m);
            console.log(weatherData.current.weatherCode);

            setWeatherCode(weatherData.current.weatherCode);
            setTemp(weatherData.current.temperature2m);
            setWind(weatherData.current.windSpeed10m);

        } catch (error) {
        console.error("Error fetching data:", error);
        }
    }

    const currentWeatherInfo = weatherCodeHashMap.get(weatherCode) || ["Unknown", "unknown.png"];
    const currentWeather = currentWeatherInfo[0];
    const weatherIconUrl = "/assets/images/" + currentWeatherInfo[1];
    console.log("Weather URL:");
    console.log(weatherIconUrl);
    return (
        <Box
            className="weatherBox"
            my={4}
            p={2}
        >
            <div className="weatherIconBox">
                <div>
                    <img src={weatherIconUrl} alt={currentWeather.toString()} />
                </div>
                <div>
                    <h1>{temp?.toFixed(1)}°C</h1>
                </div>
            </div>
            <div className="weatherInfoBox">
                <div className="windDisplay">
                    <img src="/assets/images/wind.png" alt=""/>
                    <h3>{wind?.toFixed(2)}m/s</h3>
                </div>
                <h3>{currentWeather}</h3>
            </div>
        </Box>
    );
}

export default Weather; 
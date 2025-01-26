"use client";
import {Button, Card, CardContent, Typography, CircularProgress, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import {weatherGet} from "@/api/weatherapi";


const WeatherWidget = ({initialWeather}) => {
	const [weather, setWeather] = useState(null);
	const [error, setError] = useState(null);

	const handleWeatherFetch = async () => {
		const weatherResponse = await weatherGet();
		setWeather(weatherResponse);
	};

	useEffect(() => {
		setWeather(initialWeather);
	}, [initialWeather]);

	return (
		<>
			<Button variant="contained" onClick={handleWeatherFetch}>Get Weather</Button>
			<Grid container>
				<Grid>
					{error && <div style={{color: 'red'}}>{error}</div>}
					{weather ? weather.bulk.map(({query}) => {
							return (
								<Card key={query.q} variant="outlined" sx={{maxWidth: '100%', marginTop: 2}}>
									<CardContent>
										<Typography variant="h5" component="div">
											Current Weather
										</Typography>
										<Typography variant="body2" color="text.secondary">
											{query.location.name}, {query.location.country}
										</Typography>
										<Typography variant="h6">
											{query.current.temp_c} °C
										</Typography>
										<Typography variant="body2">
											{query.current.condition.text}
										</Typography>
										<img
											src={query.current.condition.icon}
											alt={query.current.condition.text}
											style={{width: '50px', height: '50px'}}
										/>

									</CardContent>
								</Card>)
						})
						: (
							<CircularProgress style={{marginTop: 20}}/>
						)}
				</Grid>
			</Grid>
		</>
	);
}

export default WeatherWidget;
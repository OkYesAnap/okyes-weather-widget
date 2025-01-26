import axios from "axios";

export const weatherGet = async () => {
	try {
		const response = await axios.post('http://api.weatherapi.com/v1/current.json', {
				"locations": [
					{
						"q": "53,-0.12",
						"custom_id": "my-id-1"
					},
					{
						"q": "London",
						"custom_id": "any-internal-id"
					},
					{
						"q": "90201",
						"custom_id": "us-zipcode-id-765"
					}
				]
			},
			{
				headers: {
					'Content-Type': 'application/json'
				},
				params: {
					key: '2a5d81e866374888a4b180757252301',
					q: 'bulk',
					lang: 'uk'
				}
			});

		return (response.data);
	} catch (error) {
		const errMsg = `Error fetching weather data: ${error}`;
		console.error(errMsg);
		return errMsg;
	}
}
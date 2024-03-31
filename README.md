# Weather-Service

# Information:
Author: Diego Vazquez
Date: 03/29/2024
email: dvazqueb11@gmail.com

# Project Description: 
Write an http server that uses the Open Weather API that exposes an endpoint that takes in lat/long
coordinates. This endpoint should return what the weather condition is outside in that area (snow, rain,
etc), whether it’s hot, cold, or moderate outside (use your own discretion on what temperature equates to
each type), and whether there are any weather alerts going on in that area, with what is going on if there
is currently an active alert. The API can be found here: https://openweathermap.org/api. The one-call api
returns all of the data while the other apis are piece-mealed sections. You may also find the
https://openweathermap.org/faq useful.


# Documentation

# Weather Service API

The Weather Service API is a Node.js and Express application that interfaces with the OpenWeather API to provide weather information based on latitude and longitude coordinates. This project demonstrates RESTful API design, external API integration, error handling, and unit/integration testing in Node.js.

## Features

- Fetch current weather conditions including temperature, general conditions (clouds, rain, etc.), and any weather alerts.
- Categorize temperature as cold, moderate, or hot.
- Robust error handling for API and network errors.
- Comprehensive test suite with unit and integration tests.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (version 14 or later recommended)
- npm (comes with Node.js)

### Installing

1. **Clone the repository:**
   
```sh
git clone https://github.com/<your-username>/weather-service.git
cd weather-service
```

2. **Install Dependencies:**

```
npm install
```
3. **Set up environment variables:**
   
Create a .env file in the root directory of the project. You will need to obtain an API key from OpenWeather and add it to this file:
```
OPENWEATHER_API_KEY=your_api_key_here
```

## Running the Application
To start the server, run:

```
npm start
```
The server will start on http://localhost:3000. You can access the weather API at http://localhost:3000/api/weather.

## Using the API

Get Weather Information

URL: /api/weather
Method: GET
URL Params:
Required: lat=[float], lon=[float]
Example Request:

```
curl "http://localhost:3000/api/weather?lat=40.712776&lon=-74.005974"
```

## Running the Tests

This project contains both unit and integration tests.

To run the tests:
```
npm test
```

## Built With

Node.js - The JavaScript runtime
Express - The web framework
Axios - HTTP client
Jest - Testing framework


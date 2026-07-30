"use client";
import { useState } from "react";

import SearchBar from "@/components/SearchBar";
import Header from "../components/Header";
import WeatherCard from "@/components/WeatherCard";




export default function Home() {

  const [weather, setWeather] = useState<any>(null);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");




  function getWeather(city: string) {
    setLoading(true);
    console.log(process.env.NEXT_PUBLIC_WEATHER_API_KEY);
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}&units=metric&lang=ar`)
      .then((res) => res.json())
      .then((data) =>{ 
        if (data.cod !== 200){
          setError("المدينة غير موجودة");
          setWeather(null);
          setLoading(false);
          return;
        }
        setWeather(data);
        setError("");
        setLoading(false);
        
      })
      .catch ((error) =>{
      
        console.log(error);
        setError("حدث خطأ ما برجاء المحاولة في وقت لاحق");
        setLoading(false);
      });
  }
  return (
    <main>
      <Header />

      <div>
      <SearchBar 
      getWeather={getWeather}
      />
      </div>
      <div className="flex justify-center mt-5">
      <h1>Welcome to Weather App👋</h1>
      </div>

      {error && <p>{error}</p>}
      {loading ?(
        <div className="spinner">

        </div>
      ):(

      <WeatherCard weather={weather}/>
        )}
    </main>
  );
}

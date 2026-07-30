"use client";

import { useState } from "react";
import styles from "./SearchBar.module.css";
type SearchBarProps = {
    getWeather: (city: string) => void
};

export default function SearchBar({ getWeather }: SearchBarProps) {
  const [city, setCity] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    getWeather(city);
  }

  return (
    <form className={styles.SearchBar} onSubmit={handleSubmit}>
      <input className={styles.input}
        type="text"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button type="submit">
        Search
      </button>
    </form>
  );
}
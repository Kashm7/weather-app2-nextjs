import styles from "./WeatherCard.module.css";

type Props = {
  weather: any;
};

export default function WeatherCard({ weather }:Props) {
    const sunrise = new Date(weather?.sys?.sunrise * 1000);
    const sunset = new Date(weather?.sys?.sunset * 1000);
    const icon = weather?.weather?.[0]?.icon;
    

    return (
        <div className={styles.WeatherCard}>

    <h2 className={styles.city}>
        📍 {weather?.name}
    </h2>

    <h1 className={styles.temp}>
        {Math.round(weather?.main?.temp)}°
    </h1>
    

    <p className={styles.description}>
        {weather?.weather?.[0]?.description}
    </p>

    <p className={styles.feels}>
        🤗 Feels like {Math.round(weather?.main?.feels_like)}°
    </p>

    <div className={styles.line}></div>

    <div className={styles.infoGrid}>

        <div>
            💧
            <span>{weather?.main?.humidity}%</span>
        </div>

        <div>
            🌬
            <span>{weather?.wind?.speed} m/s</span>
        </div>

        <div>
            📈
            <span>{weather?.main?.pressure} hPa</span>
        </div>

        <div>
            🌍
            <span>{weather?.sys?.country}</span>
        </div>

        <div>
            🌅
            <span>{sunrise.toLocaleTimeString("ar-EG")}</span>
        </div>

        <div>
            🌇
            <span>{sunset.toLocaleTimeString("ar-EG")}</span>
        </div>

    </div>

</div>
        
    );
    
}

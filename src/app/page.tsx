import styles from "./page.module.css";
import WeatherWidget from "@/components/WeatherWidget";
import {weatherGet} from "@/api/weatherapi";

export default async function Home() {
    const initialWeather = await weatherGet();
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <WeatherWidget {...{initialWeather}}/>
      </main>
    </div>
  );
}

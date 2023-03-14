<template>
    <div class="weather__wrap">
        <div class="weather__main">
            <form 
                class="weather__main-search"
                @submit.prevent="searchFn"
            >
                <MyInput 
                v-model:value="city"
                placeholder="Search for city"
                />
            </form>
            <span class="weather__main-city">{{ weather.city_name }}</span>
            <img 
                class="weather__main-image"
                :src="`https://www.weatherbit.io/static/img/icons/${weather.weather.icon}.png`" 
                :alt="weather.weather.icon"
            >
            <span class="weather__text">{{ weather.weather.description }}</span>
            <div class="weather__items-row">
                <span class="weather__text">{{ degreesCalc }}</span>
                <span class="weather__text--bold">°{{ temperatureUnit }}</span>
            </div>
            <div class="weather__items-col">
                <span>Last observation time:</span>
                <span class="weather__text">{{ weather.ob_time }}</span>
            </div>
        </div>
        <div class="weather__info">
            <div class="weather__info-btn-wrap">
                <button
                    v-for="unit in temperatureUnits"
                    :key="unit"
                    :class="unit === temperatureUnit ? 'weather__info-temp-btn--active' : 'weather__info-temp-btn'"
                    @click="setTempUnit(unit)"
                >
                    °{{ unit }}
                </button>
            </div>
            <div class="weather__info-cards-wrap">
                <span class="weather__text--bold">
                    Today's Highlights
                </span>
                <div class="weather__info-cards-list">
                    <WeatherCard cardLabel="Sunrise time" :cardValue="weather.sunrise"/>
                    <WeatherCard cardLabel="Sunset time" :cardValue="weather.sunset"/>
                    <WeatherCard cardLabel="Pressure" :cardValue="weather.pres" cardUnit="mb"/>
                    <WeatherCard cardLabel="Sea level pressure" :cardValue="weather.slp" cardUnit="mb"/>
                    <WeatherCard cardLabel="Relative humidity" :cardValue="weather.rh" cardUnit="%"/>
                    <WeatherCard cardLabel="Wind speed" :cardValue="weather.wind_spd" cardUnit="m/s"/>
                    <WeatherCard cardLabel="Wind direction" :cardValue="weather.wind_cdir_full"/>
                    <WeatherCard cardLabel="Cloud coverage" :cardValue="weather.clouds" cardUnit="%"/>
                    <WeatherCard cardLabel="Visibility" :cardValue="weather.vis" cardUnit="km"/>
                    <WeatherCard cardLabel="Snowfall" :cardValue="weather.snow" cardUnit="mm/hr"/>
                    <WeatherCard cardLabel="Air Quality Index" :cardValue="weather.aqi"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import axios from 'axios';
import MyInput from '@/components/UI/MyInput.vue';
import WeatherCard from '@/components/WeatherCard.vue';

type TWeatherParams = {
    code: number;
    description: string;
    icon: string;
}

type TWeather = {
    app_temp: number;
        aqi: number;
        city_name: string;
        clouds: number;
        country_code: string;
        datetime: string;
        dewpt: number;
        dhi: number;
        dni: number;
        elev_angle: number;
        ghi: number;
        gust: number;
        h_angle: number;
        lat: number;
        lon: number;
        ob_time: string;
        pod: string;
        precip: number;
        pres: number;
        rh: number;
        slp: number;
        snow: number;
        solar_rad: number;
        sources: string[];
        state_code: string;
        station: string;
        sunrise: string;
        sunset: string;
        temp: number;
        timezone: string;
        ts: number;
        uv: number;
        vis: number;
        weather: TWeatherParams;
        wind_cdir: string;
        wind_cdir_full: string;
        wind_dir: number;
        wind_spd: number;
}

type TWeatherRes = {
    count: number;
    data: TWeather[];
}

export default {
    created () {
        this.getWeatherByCity('jelgava');
    },
    data () {
        return {
            weather: {} as TWeather,
            isLoading: false,
            city: '',
            temperatureUnit: 'C',
            temperatureUnits: ['C', 'F']
        };
    },
    components: {
        MyInput, WeatherCard
    },
    methods: {
        getWeatherByCity (city: string) {
            this.isLoading = true;
            axios
                .get<TWeatherRes>(`https://api.weatherbit.io/v2.0/current?city=${city}&key=c6870018731e4a4ca2b13b0950d4eb7e`)
                .then(({ data }) =>  {
                    this.weather = data.data[0];
                    this.isLoading = false;
                })
                .catch((err) => console.log(err));
        },
        searchFn () {
            this.getWeatherByCity(this.city);
            this.city = '';
        },
        setTempUnit (unit: string) {
            this.temperatureUnit = unit.toUpperCase();
        }
    },
    computed: {
        degreesCalc () {
            if(this.temperatureUnit === 'F'){
                return +((this.weather.dewpt * 1.8) + 32).toFixed(1);
            }
            return this.weather.dewpt;
        }
    }
};

</script>

<style scoped lang="scss"> 
  @import './WeatherView.scss';
</style>
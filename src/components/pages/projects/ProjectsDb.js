import MovieSwiperImg from '../../../assets/images/MovieSwiper/movieappdemo.png'
import NewsAppDemo from '../../../assets/images/MovieSwiper/newsappdemo.png'
import WeatherDemo from '../../../assets/images/MovieSwiper/weatherdemo.png'
import GreenGuideDemo from '../../../assets/images/MovieSwiper/greenguidedemo.png'




const MovieSwiperApp = {
    title: 'Movie Swiper App',
    img: MovieSwiperImg,
    description: 'A sleek Tinder-style movie discovery app that allows users to swipe through movie suggestions. Fetches data from "The Movie Database" Api to allow users to see movie details, such as: ratings, trailers, pictures, and similar movies. In working on this project I familiarized myself with using Redux Toolkit to handle the application\'s state management. Moving forward I want to integrate this project with Firebase to allow for user interaction to see their friends\' "Want to Watch" list, and send movie reccomendations to each other.',
    /* ' A sleek Tinder-style movie discovery app that allows users to swipe through movie suggestions. Provides users with details about the movie such as ratings, trailer, and even similar titles. Users can save movies they are interested to a list to watch later.' */
    link: 'https://github.com/SilverBits1001/MovieSwiper',

}

const WeatherApp = {
    title: 'Weather App',
    img: WeatherDemo,
    description: 'Drawing inspiration from Apples\'s weather app, I aimed to create my own simple and minimal weather app from scratch. Using the "OpenWeather" API, the app gives users accurate weather data, such as hourly forecast, weekly forecast, air quality and more, based on their location while also allowing users to search for the weather of specific cities. The app makes use of a back-end Heroku server to handle API requests, serving the data back to the front end. This project gave me a great opportuninty to reinforce my knowledge on core concepts of objects and data maninulation.',
    /* 'A minimal weather app that gives users accurate weather data, such as hourly forecast, weekly forecast, air quality and more, based on their location while also allowing users to search for the weather of specific cities.' */
    link: 'https://github.com/SilverBits1001/Weather-App'

}

const NewsApp = {
    title: 'News App',
    img: NewsAppDemo,
    description: 'An iOs inspired news app that gives users top current news articles. Users can also search for specific articles, allowing them to bookmark them to read later, and send to contacts. Utilizing the React Native Reanimated library to handle animations, I was able to familarize myself with key concepts of animations in React Native while creating a clean and responsive user experience. ',
    link: 'https://github.com/SilverBits1001/NewsApp'

}

const GreenGuide = {
    title: 'The Green Guide ',
    img: GreenGuideDemo,
    description: 'A sample blog website that uses Bootstrap and jQuery to showcase a responsive website on multiple viewports.  ',
    link: 'https://thegreenguide.netlify.app/'

}

export { MovieSwiperApp, WeatherApp, NewsApp, GreenGuide }
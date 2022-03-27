import { ref } from 'vue'
import Movie from '../types/movie'

const getFavoriteMovies = () => {

    const favoriteMovies = ref<Movie[]>([])
    const favError = ref(null)

    const loadFavs = () => {
        try {
            let data = localStorage.getItem('favoriteMovies') || ""
            let jsonData = JSON.parse(data)

            favoriteMovies.value = jsonData
        }
        catch (err: any) {
            favoriteMovies.value = [];
            favError.value = err.message
        }
    }

    return { favoriteMovies, favError, loadFavs }
}

export default getFavoriteMovies
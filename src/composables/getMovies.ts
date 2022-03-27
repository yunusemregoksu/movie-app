import { ref } from 'vue'
import Movie from '../types/movie'

const getMovies = () => {

  const movies = ref<Movie[]>([])
  const error = ref(null)

  const load = async (title: string, page: number) => {
    try {
      let data = await fetch('https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}')

      if (!data.ok) {
        throw Error('no available data')
      }

      movies.value = await data.json()
    }
    catch (err: any) {
      error.value = err.message
    }
  }

  return { movies, error, load }
}

export default getMovies
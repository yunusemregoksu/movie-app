import { ref } from 'vue'
import Movie from '../types/movie'

const getMovies = () => {

  const movies = ref<Movie[]>([])
  const pageCount = ref(1)
  const error = ref(null)

  const load = async (title: string | string[], page: number) => {
    try {
      let data = await fetch(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}`)

      if (!data.ok) {
        throw Error('no available data')
      }

      let jsonData = await data.json()

      movies.value = jsonData.data
      pageCount.value = jsonData.total_pages
    }
    catch (err: any) {
      error.value = err.message
    }
  }

  return { movies, pageCount, error, load }
}

export default getMovies
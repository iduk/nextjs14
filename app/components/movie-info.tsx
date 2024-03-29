import { API_URL } from '../(home)/page';

async function getMovie(id: string) {
  console.log(`Fetching Movies: ${Date.now()}`)
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}: {id: string}){
  const movies = await getMovie(id)
  return <h6>{JSON.stringify(movies)}</h6>
}

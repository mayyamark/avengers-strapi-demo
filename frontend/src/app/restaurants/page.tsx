import { getRestaurants } from "@/requests/restaurants";
import Link from "next/link";

const RestaurantsPage = async () => {
  const restaurants = await getRestaurants();

  return (
    <div>
      <h1>Check out these amazing restaurants</h1>
      {restaurants.data.map(({ 
        id, 
        attributes: { Name } 
      }) => <div key={id}><Link href={`/restaurants/${id}`} >{Name}</Link></div>)}
      </div>
  );
}

export default RestaurantsPage;
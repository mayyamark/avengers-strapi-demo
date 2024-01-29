import { getRestaurantById } from "@/requests/restaurants";
import Link from "next/link";

interface RestaurantPageProps {
  params: {
    id: string;
  }
}

const RestaurantPage = async ({ params: { id } }: RestaurantPageProps) => {
  const restaurant = await getRestaurantById(id);

  return (
    <div>
      <Link href='/restaurants'>Back to all restaurants</Link>
      <h1>{restaurant.data.attributes.Name}</h1>
      <h3>{restaurant.data.attributes.Description}</h3>
      <hr />
      <ul>
        {restaurant.data.attributes.categories.data.length > 0 && <p>Categories:</p>}
        {restaurant.data.attributes.categories.data.map((category) => (
          <li key={category.id}>
            - {category.attributes.Name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RestaurantPage;
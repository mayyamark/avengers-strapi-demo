import { RestaurantResponse, RestaurantsResponse } from "@/types/restaurants";

export const getRestaurants = async(): Promise<RestaurantsResponse> => {
  const res = await fetch('http://localhost:1337/api/restaurants');
  if (!res.ok) {
    throw new Error("Failed to fetch restaurants");
  }

  return await res.json();
}

export const getRestaurantById = async(id: string): Promise<RestaurantResponse> => {
  const res = await fetch(`http://localhost:1337/api/restaurants/${id}?populate=*`);
  if (!res.ok) {
    throw new Error("Failed to fetch restaurant by id");
  }

  return await res.json();
}

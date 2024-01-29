import { Locales } from "@/constants/enums";
import { Category } from "./categories";
import { Pagination } from "./common";

export interface RestaurantBase {
  id: number;
  attributes: {
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: keyof typeof Locales;
    Name: string;
    Slogan: string | null,
    localizations: {
      data: unknown[]
    }
  };
}

export interface Restaurant {
  id: number;
  attributes: {
    Description: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: keyof typeof Locales;
    Name: string;
    Slogan: string | null,
    categories: {
      data: Category[]
    },
  localizations: {
      data: unknown[]
    }
  }
}

export interface RestaurantsResponse {
  data: RestaurantBase[];
  meta: {
    pagination: Pagination;
  } 
}

export interface RestaurantResponse {
  data: Restaurant;
  meta: {} 
}
import { useState, useEffect } from "react";
import axios from "axios";

const apiKey = import.meta.env.VITE_API_URL

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get(`${apiKey}/api/v1/category/view-categories`);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return categories;
}
import { useState, useEffect } from "react";

import Category from "../models/Category";
import categoryApi from "../services/CategoryService";

const useCategory = ()=>{
    const [categories, setCategories] = useState<Category[]>([]);
  const fetCategories = async () => {
    const { data: categories } = await categoryApi.getCategories();
    setCategories(categories);
  };

  useEffect(() => {
    fetCategories();
  }, []);


  return {categories}

}

export default useCategory;
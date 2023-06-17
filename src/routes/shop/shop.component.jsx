import { useEffect } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import "./shop.styles.scss";
import { useSelector } from "react-redux";
import {
  selectCategoriesMap,
  selectCategoriesIsLoading,
} from "../../store/categories/category.selector";
import ProductCard from "../../components/product-card/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { fetchCategriesAsync } from "../../store/categories/category.action";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  const categoriesMap = useSelector(selectCategoriesMap);
  const { category } = useParams();

  const isLoading = useSelector(selectCategoriesIsLoading);

  useEffect(() => {
    dispatch(fetchCategriesAsync());
  }, []);

  return (
    <Fragment>
      {category && (
        <Fragment key={category}>
          <h2>{category}</h2>
          {isLoading ? (
            <Spinner />
          ) : (
            <div className="products-container">
              {categoriesMap &&
                categoriesMap[category]?.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Shop;

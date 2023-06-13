import { useEffect } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import "./shop.styles.scss";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from '../../store/categories/category.selector'
import ProductCard from "../../components/product-card/product-card.component";
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategoriesMap } from '../../store/categories/category.action';
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  const categoriesMap = useSelector(selectCategoriesMap)
  const { category } = useParams();

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories');

    
      dispatch(setCategoriesMap(categoryMap));
      
    }
    getCategoriesMap();
  }, [])


  return (
    <Fragment>
      {category && (
        <Fragment key={category}>
          <h2>{category}</h2>
          <div className="products-container">
            {categoriesMap[category]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Shop;

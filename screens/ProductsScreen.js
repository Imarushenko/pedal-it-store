import { PRODUCTS } from "../data/Dummy-Data";
import styles from "../assets/Styles";

export default function ProductsScreen({ route, navigation }) {
  const productId = reout.params.productId;
  const currProduct = PRODUCTS.find((item) => item.id === productId);
  
}

import CommonListing from '@/components/CommonListing';
import { productByCategory } from '@/services/product';

export default async function preandpostworkoutsAllProducts() {
  const getAllProducts = await productByCategory('preandpostworkouts');

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}

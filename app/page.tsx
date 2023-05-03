
import Products from "./Componenets/Products"


export const metadata = {
  title: 'Products',
};

const getProducts = async () => {
  const data = fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
  return data
}


export default async function Home() {
  const products = await getProducts()
  return (
    <>
      <Products products={products} />
    </>
  )
}

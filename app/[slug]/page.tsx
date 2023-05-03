import Product from "../Componenets/Product"


type product = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export const metadata = {
    title: 'Products',
};

const getProduct = async (id: string) => {
    const data = fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
    return data
}


export default async function Page({ params }: any) {
    const product: product = await getProduct(params.slug)
    return (
        <>
            <title>{product.title}</title>
            <Product product={product} />
        </>
    )
}
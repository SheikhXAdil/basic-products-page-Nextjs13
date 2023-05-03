import Product from "../Componenets/Product"

const getProduct = async (id: string) => {
    const data = fetch(`https://fakestoreapi.com/products/${id}`)
        .then(res => res.json())
    return data
}


export default async function Page({ params }: any) {
    const product = await getProduct(params.slug)
    return (
        <>
            <Product product={product} />
        </>
    )
}
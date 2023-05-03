import Image from 'next/image'
import Link from 'next/link'


type product = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

const Products = ({ products }: { products: product[] }) => {
    return (
        <div className='py-16'>
            <div className='container m-auto'>
                <h1 className='text-center text-5xl font-bold underline'>Our Products!</h1>

                <div className='mt-20 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    {products.map(product => (
                        <Link
                            key={product.id}
                            href={`/${(product.id).toString()}`}
                            className='rounded-xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex flex-col justify-between items-center'
                        >
                            <div className='w-64 h-60 flex justify-center items-center overflow-hidden'>
                                <Image
                                    src={product.image}
                                    width={150}
                                    height={150}
                                    alt={product.title}
                                    className='mx-auto object-cover object-center transition-opacity group-hover:opacity-75'
                                />
                            </div>
                            <h3 className='text-center mt-4 text-md text-stone-700'>{product.title}</h3>
                            <p className='mt-1 text-lg font-medium text-stone-900'>
                                ${product.price}
                            </p>
                            <p className='text-blue-500 text-lg underline text-center'>View Product</p>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products
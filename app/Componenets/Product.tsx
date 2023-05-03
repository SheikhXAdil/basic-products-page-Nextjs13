'use client'

import Image from 'next/image'

type product = {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string
}

export default function Product({ product }: { product: product }) {

    return (
        <section className='py-24'>
            <div className='container mx-auto'>
                <div className='mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0'>
                    <h1 className='text-3xl font-bold tracking-tight text-center text-stone-900'>
                        {product.title}
                    </h1>
                    <div className='mx-auto mt-20 flex flex-col justify-center items-center w-3/4 lg:flex-row lg:justify-around '>
                        <div className='flex justify-center items-center w-1/2 overflow-hidden'>
                            <Image
                                src={product.image}
                                width={300}
                                height={300}
                                alt={product.title}
                                className='mx-auto object-cover object-center transition-opacity group-hover:opacity-75'
                            />
                        </div>
                        <div className='flex flex-col justify-start w-1/2'>
                            <div className='mt-6'>
                                <h3 className='font-bold text-2xl'>Description:</h3>

                                <div className='space-y-6 text-xs text-stone-700 sm:text-base' />
                                {product.description}
                            </div>
                            <div className='mt-10'>
                                <p className='text-3xl font-extrabold tracking-tight text-stone-900'>
                                    ${product.price}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

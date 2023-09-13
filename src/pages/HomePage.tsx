import { useEffect, useState } from 'react';

import ProductsCard from '../components/essentials/ProductCard';
import { getProducts } from '../lib/getProducts';


export default function HomePage() {
    const [products, setProduts] = useState<Products[]>([])
    

    useEffect(() => {
        (async function getProductsData() {
            const data = await getProducts();
            setProduts(data)
        })()
    }, [])


    return (
        <section>
            <div className='grid grid-cols-3 gap-7'>
                {products.map((data: Products) => (
                    <ProductsCard
                        key={data.title}
                        prop={data}
                    />
                ))}
            </div>
        </section>
    )
}

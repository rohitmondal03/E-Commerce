import { useEffect, useState } from 'react';
import { useMediaQuery } from "usehooks-ts"

import ProductsCard from '../components/essentials/ProductCard';
import { getProducts } from '../lib/getProducts';


export default function HomePage() {
    const [products, setProduts] = useState<Products[]>([])

    const widthLessThan1000px= useMediaQuery(`(max-width: 1000px)`)
    

    useEffect(() => {
        (async function getProductsData() {
            const data = await getProducts();
            setProduts(data)
        })()
    }, [])


    return (
        <section> 
            <div className={`grid ${widthLessThan1000px ? "grid-cols-1 md:grid-cols-2" : "grid-cols-3"} gap-7 p-5`}>
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

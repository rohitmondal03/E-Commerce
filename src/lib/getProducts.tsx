export async function getProducts() {
    let productData: Products[] = []

    await fetch('https://fakestoreapi.com/products')
        .then(resp => resp.json())
        .then(data => productData = data)
        .catch((error) => console.log("Error is", error))

    return productData;
}
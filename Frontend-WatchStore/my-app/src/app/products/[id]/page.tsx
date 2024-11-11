import Product from "./product";

async function fetchProduct(id:string) {
    try{
        const result = await fetch (`https://fakestoreapi.com/products/${id}`);
        // console.log(`${id}`)
        if(!result.ok) throw new Error ("Failed to fetch product");
        const product = await result.json();
        return product;
    } catch (error) {
        console.error (error);
        return null;
    }
    
}
export default async function Page ({params}:{params :{id:string}}) {
    const {id} = params;
    const product = await fetchProduct (id as string);

    return(
<div className="max-w-3xl mx-auto flex flex-col items-center p-6">
    {product ? (
        <Product product={product} />
    ) : (
        <p className="text-gray-500 text-lg">Product not found</p>
    )}
</div>

    );
    
}
import {Product} from "@/types/product"
import {useRouter} from "next/navigation"
import { IconNoImage } from "@/assets/icons";

interface ProductCardProps {
    product: Product;
}

const ProductCard : React.FC<ProductCardProps> = ({product}) => {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/products/${product.id}`);
    };

    return(
        <div onClick={handleClick}  className="max-w-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out cursor-pointer bg-white">
        <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
        />

        <div className="px-6 py-4">
            <h2 className="font-semibold text-lg mb-2 text-gray-800">{product.title}</h2>
            <p className="text-gray-600 text-sm">{product.description}</p>
        </div>
        <div className="px-6 pb-4">
            <span className="text-gray-900 font-bold text-xl">${product.price}</span>
            </div>
            <div className="w-full h-full  bg-gray-200 flex items-center justify-center">
            {" "}
            <IconNoImage className="text-gray-700" />
          </div>

        </div>
    )


}

export default ProductCard;
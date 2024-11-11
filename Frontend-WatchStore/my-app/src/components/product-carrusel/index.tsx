"use client";
import { useRouter } from 'next/router';
import type { Product } from '@/types/product';

type CarrouselProductCardProps = {
  product: Product;
};

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

export default function CarrouselProductCard({ product }: CarrouselProductCardProps) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/products/${product.id}`);
  };

  return (
    <div onClick={handleClick}>

        <img 
        src={product.image}
        alt={product.title}
        className="w-48 h-48 object-cover" 
        />
        <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 text-base">{truncateText(product.description, 60)}</p>
        </div>

        <div className="px-6 pt-4 pb-2">
        <span className="text-gray-900 font-bold text-lg">${product.price}</span>
        </div>

    </div>
  );
}

import { memo, useState } from 'react';
import { AddProductToWishlistProps } from './AddProductToWishlist';
import dynamic from 'next/dynamic';
// import { AddProductToWishlist } from './AddProductToWishlist';

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import('./AddProductToWishlist').then(
      mod => mod.AddProductToWishlist
    );
    // a parte do then soh precisa quando AddProductToWishlist nao eh export default
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    priceFormatted: string;
    title: string;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);

  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishlist(true)}>
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishList(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
    // comparado usando Object.is porque no js ao comparar objetos assim:
    // obj1 === obj2, ele compara a referencia na memoria, e nao seus valores
  }
);

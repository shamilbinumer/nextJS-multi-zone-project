import Link from 'next/link';

const products = [
  { id: 1, name: 'Product 1', price: '$10' },
  { id: 2, name: 'Product 2', price: '$20' },
];

export default function ShopHome() {
  return (
    <div>
      <h1>Shop Home</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/shop/${product.id}`}>
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// shop-app > app > product > [product_id] > page.js
export default function ProductPage({ params }) {
  const { product_id } = params; // Capture the product ID from the URL

  return (
    <div>
      <h1>Product Details for ID: {product_id}</h1>
      <p>This is the page for product with ID {product_id}.</p>
    </div>
  );
}

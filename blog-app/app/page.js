// blog-app > app > page.js
import Link from 'next/link';

export default function BlogHome() {
  return (
    <div>
      <h1>Blog Home</h1>
      <ul>
        <li>
          <Link href="/shop/product/001">
            Go to Product 001 in Shop
          </Link>
        </li>
        <li>
          <a href="/shop/product/002">
            Go to Product 002 in Shop
          </a>
        </li>
      </ul>
    </div>
  );
}

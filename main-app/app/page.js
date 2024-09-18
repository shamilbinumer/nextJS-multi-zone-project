import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Main App</h1>
      <nav>
        <ul>
          <li>
          <a href="/blog">Go to Blog</a>
          </li>
          <li>
          <a href="/shop">Go to Shop</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

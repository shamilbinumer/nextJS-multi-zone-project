export default function BlogPost({ params }) {
    const { slug } = params; // Capture the dynamic route slug
  
    return (
      <div>
        <h1>Blog Post: {slug}</h1>
      </div>
    );
  }
  
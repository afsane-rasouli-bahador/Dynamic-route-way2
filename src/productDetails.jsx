import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetails() {
  Number.prototype.format = function () {
    return this.toLocaleString("en-US", { style: "currency", currency: "USD" });
  };
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!response) throw new Error("network error ...");
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p>error: {error}</p>;
  if (!product) return <p>Product not found ..</p>;
  return (
    <div>

        <div key={product.id}>
          <h2>{product.title}</h2>
          <h4>{product.category}</h4>
          <img src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <div>
            <span>{product.rating.rate}</span>
            <span>{product.rating.count}</span>
            <span>{product.price.format()}</span>
          </div>
        </div>

    </div>
  );
}

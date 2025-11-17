// src/pages/Products.jsx
import { Link } from "react-router-dom";
export default function Products() {
    return (
        <div>
            <h1 className="text-2xl font-semibold">Products</h1>
            <p>List of products...</p>
            <Link to="/products/new" className="text-indigo-600 underline">Add new product</Link>
        </div>
    );
}

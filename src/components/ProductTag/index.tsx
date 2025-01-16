"use client";

import { useState } from "react";

import { Product } from "@/lib/types";

interface ProductTagProps {
  product: Product;
}

export default function ProductTag({ product }: ProductTagProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="absolute bg-white bg-opacity-80 rounded-lg p-2 cursor-pointer transition-all duration-300 hover:bg-opacity-100"
      style={{ left: `${product.position.x}%`, top: `${product.position.y}%` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {isExpanded ? (
        <div className="flex flex-col items-center">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-16 h-16 object-cover rounded-md"
          />
          <p className="text-sm font-bold mt-1">{product.name}</p>
          <p className="text-xs">${product.price.toFixed(2)}</p>
          <button className="mt-2 bg-blue-500 text-white text-xs py-1 px-2 rounded">
            View Product
          </button>
        </div>
      ) : (
        <div className="w-4 h-4 bg-blue-500 rounded-full" />
      )}
    </div>
  );
}

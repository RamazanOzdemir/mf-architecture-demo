import { fetchProducts } from "@/api";
import { useQuery } from "@tanstack/react-query";
import ProductCard from "@/components/product";
import SkeletonProduct from "@/components/skeleton-product";

export default function Products() {
  const { isLoading, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return (
      <section className="grid grid-cols-1 gap-4 px-4 lg:px-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <SkeletonProduct key={`skeleton-product-${index}`} />
        ))}
      </section>
    );
  }

  return (
    <section className="grid grid-cols-1 gap-4 px-4 lg:px-6 md:grid-cols-2 xl:grid-cols-3">
      {data?.map((product, index) => (
        <ProductCard key={`product-${index}`} product={product} />
      ))}
    </section>
  );
}

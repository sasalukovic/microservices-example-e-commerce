import ProductInteraction from "@/app/components/ProductInteraction";
import { ProductType } from "@/types";
import Image from "next/image";

const product: ProductType = {
  id: 1,
  name: "Adidas CoreFit T-Shirt",
  shortDescription:
    "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  price: 39.9,
  sizes: ["s", "m", "l", "xl", "xxl"],
  colors: ["gray", "purple", "green"],
  images: {
    gray: "/products/1g.png",
    purple: "/products/1p.png",
    green: "/products/1gr.png",
  },
};

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const productId = params.id;
  // Fetch product data based on the productId if needed
  return {
    title: `${product.name}`,
    description: `Details and purchase options for product ${product.name}.`,
  };
};

const ProductPage = async ({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ color: string; size: string }>;
}) => {
  const { color, size } = await searchParams;

  const selectedSize = size || (product.sizes[0] as string);
  const selectedColor = color || (product.colors[0] as string);

  return (
    <div className="flex flex-col gap-4 lg:flex-row md:gap-12 mt-12">
      <div className="w-full lg:w-5/12 relative aspect-[2/3]">
        <Image
          src={product.images[selectedColor]}
          alt={product.name}
          fill
          className="object-contain rounded-md"
        />
      </div>
      <div className="w-full lg:w-7/12 flex flex-col gap-4">
        <h1 className="font-semibold text-2xl">{product.name}</h1>
        <p className="text-gray-500">{product.shortDescription}</p>
        <h2 className="text-2xl font-semibold">${product.price.toFixed(2)}</h2>
        <ProductInteraction
          product={product}
          selectedSize={selectedSize}
          selectedColor={selectedColor}
        />
        <div className="flex items-center gap-2 mt-4">
          <Image
            src="/klarna.png"
            alt="klarna"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/cards.png"
            alt="cards"
            width={50}
            height={25}
            className="rounded-md"
          />
          <Image
            src="/stripe.png"
            alt="stripe"
            width={50}
            height={25}
            className="rounded-md"
          />
        </div>
        <p>
          By clicking Pay Now, you agree to our{" "}
          <span className="underline hover:text-black">Terms & Conditions</span>
          and <span className="underline hover:text-black">Privacy Policy</span>
          . You authorize us to charge your payment method for this purchase.
          All sales are subject to our return and{" "}
          <span className="underline hover:text-black">Refund Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default ProductPage;

import * as GlobalContext from "@/GlobalContext";
import Link from "next/link";
import Image from "next/image";
import placeholder from "../../public/images/placeholder.png";

// List of instruction groups
type ProductCardProps = {
  product: GlobalContext.Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { _id, title, image, price, sales } = product;

  return (
    <div className="bg-white rounded border border-black pt-3 [&>section]:px-3">
      <section className="flex gap-x-4 pb-2 relative">
        <Image
          src={image ? image : placeholder}
          alt={title}
          className="w-20 h-20"
        />
        <div className="flex flex-col gap-y-2 overflow-auto">
          <h3 className="clamp-2">{title}</h3>
          <Link
            href={`ah1989.gumroad.com/${_id}`}
            className="text-sm underline relative z-10"
          >
            ah1989.gumroad.com/{_id}
          </Link>
        </div>
        <a
          href={`/products/edit/${_id}`}
          className="absolute -top-3 left-0 w-full z-0 h-[calc(100%+0.75rem)]"
        ></a>
      </section>
      <section className="flex text-center border-t border-black [&>div]:py-2 [&>div]:flex-1">
        <div className="border-r border-black">
          <p className="font-bold text-sm">Sales</p>
          <p className="underline">{sales}</p>
        </div>
        <div>
          <p className="font-bold text-sm">Revenue</p>
          <p>${(sales * price).toLocaleString()}</p>
        </div>
      </section>
      <section className="flex text-center border-t border-black [&>div]:py-2 [&>div]:flex-1">
        <div className="border-r border-black">
          <p className="font-bold text-sm">Price</p>
          <p>${price}</p>
        </div>
        <div>
          <p className="font-bold text-sm">Status</p>
          <p>Published</p>
        </div>
      </section>
      <section className="flex text-center border-t border-black text-sm [&>div]:py-2 [&>div]:flex-1 [&>div]:underline">
        <div className="border-r border-black">Duplicate</div>
        <div className="border-r border-black">Archive</div>
        <div className="text-red-500">Delete</div>
      </section>
    </div>
  );
};

export default ProductCard;

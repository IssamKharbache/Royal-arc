'use client';
import Image from "next/image";

const stores = [
    {
      image: "/shopify/shopify3.jpg",
      quote: "Royac showed us to get started, what to do, and how to do it.",
      name: "Jason Scer",
    },
    {
      image: "/shopify/shopify1.jpg",
      quote:
        "We had no idea how to get started, but Royac showed us the way. And we were able to create something amazing.",
      name: "John Prency",
    },
  
    {
      image: "/shopify/shopify2.png",
      quote:
        "The team at Royac  is amazing. They helped us create a stunning store that we are proud of.",
      name: "Miguel Martinez",
    },
  ];
const ShopifyStores = () => {
  return (
    <section
    id="shopifyStores"
    className="mt-48 md:py-10  bg-[#f6f5f4]  mx-auto
  rounded-3xl

"
  >
    <div className="p-4   mx-auto relative z-10  w-full ">
      <div  className="text-4xl pb-5 md:text-7xl px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-red-300 to bg-sky-800 bg-opacity-80 font-semibold">
        Shopify Stores <br />
      </div>

      <p className="mt-4 text-lg font-normal  text-neutral-800 max-w-lg text-center mx-auto">
        We create stunning Shopify stores that are designed beautifly and ready to make money.
      </p>
      <div className="md:flex items-center justify-center  px-10 ">
        {stores.map((store, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mt-10 md:w-2/3 mx-auto"
          >
            <div className="flex flex-col items-center justify-center ">
              <Image
                src={store.image}
                alt="shopify store"
                width={400}
                height={400}
                className="rounded-lg mx-auto"
              />
              <p className="text-neutral-800 font-bold text-lg mt-4 text-center ">
                &quot;{store.quote}&quot;
              </p>
              <p className="text-neutral-800 font-bold text-lg mt-4">
                {" "}
                - {store.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default ShopifyStores
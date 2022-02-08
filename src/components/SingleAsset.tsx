import { FC } from "react";

export const SingleAsset:FC<{
  imageLink: string,
  collection: string,
  assetName: string,
  assetCreator: string,
  price: string
}> = ({imageLink, collection, assetName, assetCreator, price}) => {
  return (
    <div className="rounded-[12px] border-[1px] overflow-hidden hover:shadow-lg mt-1 hover:mb-1 hover:mt-0 transition-all">
      <a href="#" className="flex flex-col w-full h-full">
        <img src={imageLink} alt={assetName} />
        <div className="flex justify-between p-3">
          <div className="flex flex-col">
            <span>{collection}</span>
            <span>{assetName}</span>
          </div>
          <div className="flex flex-col text-right">
            <span>Price</span>
            <span>ETH {price}</span>
          </div>
        </div>
        <div className="flex justify-between p-3 bg-neutral-100">
          <span>Buy now</span>
          <span>Favourite</span>
        </div>
      </a>
    </div>
  );
};

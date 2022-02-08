import { SingleAsset } from "../components/SingleAsset";
import { FilterBox } from "../components/filters/FilterBox";
import { assetDataType } from "../assets/types"
import { requestCollectibles } from "../utils";
import { useEffect, useState } from "react";

export const Assets = () => {
  const [collectibles, setCollectibles] = useState<any>()
  const assetList = [
    {
      imageLink: "https://picsum.photos/seed/metal/400/400",
      collection: "Lunar888",
      assetName: "Metal seed",
      assetCreator: "mrMetal",
      price: "100",
    },
    {
      imageLink: "https://picsum.photos/seed/tree/400/400",
      collection: "Lunar888",
      assetName: "Tree seed",
      assetCreator: "mrsTree",
      price: "200",
    },
    {
      imageLink: "https://picsum.photos/seed/rock/400/400",
      collection: "Lunar888",
      assetName: "Rock seed",
      assetCreator: "mrRock",
      price: "150",
    },
    {
      imageLink: "https://picsum.photos/seed/water/400/400",
      collection: "Lunar888",
      assetName: "Water seed",
      assetCreator: "mrWater",
      price: "1100",
    },
    {
      imageLink: "https://picsum.photos/seed/fire/400/400",
      collection: "Lunar888",
      assetName: "Fire seed",
      assetCreator: "mrsFire",
      price: "90",
    },
    {
      imageLink: "https://picsum.photos/seed/leaf/400/400",
      collection: "Lunar888",
      assetName: "Leaf seed",
      assetCreator: "mrsLeaf",
      price: "100",
    },
    {
      imageLink: "https://picsum.photos/seed/sea/400/400",
      collection: "Lunar888",
      assetName: "Sea seed",
      assetCreator: "mrSea",
      price: "200",
    },
    {
      imageLink: "https://picsum.photos/seed/magma/400/400",
      collection: "Lunar888",
      assetName: "Magma seed",
      assetCreator: "mrsMagma",
      price: "150",
    },
    {
      imageLink: "https://picsum.photos/seed/lava/400/400",
      collection: "Lunar888",
      assetName: "Lava seed",
      assetCreator: "mrLava",
      price: "1100",
    },
    {
      imageLink: "https://picsum.photos/seed/earth/400/400",
      collection: "Lunar888",
      assetName: "Earth seed",
      assetCreator: "mrsEarth",
      price: "90",
    },
  ]

  const assetCount = assetList.length


  useEffect(() => {
    const getAssets = async () => {
      const collectiblesResponse = await requestCollectibles("collectibles/filter", {limit:100})

      setCollectibles(collectiblesResponse)
      console.log(collectiblesResponse)
    }
    getAssets()
  },[])

  return (
    <div className="flex flex-nowrap gap-10">
      <div className="basis-[500px] border-r-2">
        <div className="h-16 flex items-center border-b-2 pl-10">
          Filter
        </div>
        <div>
          <div className="h-16 flex items-center border-b-2 pl-10">
            Status
          </div>
          <div className="bg-neutral-100 border-b-2 px-10 py-10 grid grid-cols-2 gap-4">
            <button className="rounded-lg bg-white py-2 px-4 text-left border-[1px]">Buy now</button>
            <button className="rounded-lg bg-white py-2 px-4 text-left border-[1px]">Buy now</button>
            <button className="rounded-lg bg-white py-2 px-4 text-left border-[1px]">Buy now</button>
            <button className="rounded-lg bg-white py-2 px-4 text-left border-[1px]">Buy now</button>
          </div>
        </div>
        <div>
          <div className="h-16 flex items-center border-b-2 pl-10">
            Status
          </div>
          <div className="bg-neutral-100 border-b-2 px-10 py-10 grid grid-cols-2 gap-4">
            <button className="rounded-lg bg-white py-2 px-4 text-left border-[1px]">Buy now</button>
            <button className="rounded-lg bg-white py-2 px-4 text-left border-[1px]">Buy now</button>
            <button className="rounded-lg bg-white py-2 px-4 text-left border-[1px]">Buy now</button>
            <button className="rounded-lg bg-white py-2 px-4 text-left border-[1px]">Buy now</button>
          </div>
        </div>
        <FilterBox />
      </div>
      <div className="basis-full pr-10">
        <div className="h-20 flex items-center justify-between">
          {assetCount} items
        </div>
        <div className="grid grid-cols-5 gap-x-4 gap-y-6 pb-8">
          {/*collectibles.map((collectible:assetDataType) => {
            return <SingleAsset imageLink={collectible.url} collection={collectible.collectionId} assetName={collectible.props.name} assetCreator={collectible.creator} price={collectible.cost} />
          })*/}        
        </div>
      </div>
    </div>
  );
};
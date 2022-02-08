import { Asset } from "../components/Asset";
import { FilterBox } from "../components/filters/FilterBox";

export const Assets = () => {
  return (
    <div className="flex flex-nowrap">
      <div className="basis-80">
        test
        <FilterBox />
      </div>
      <div className="basis-full">
        <div>
          2.000.000 items
        </div>
        <Asset />
      </div>
    </div>
  );
};
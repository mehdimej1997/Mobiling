import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import { Button, Input } from "../common";

export function SearchInput() {
  return (
    <div className="relative w-3/4">
      <Input placeholder="Search" />
      <Button
        className="absolute h-full right-0 p-3 rounded-l-none"
        icon={<SearchIcon className="h-4 w-4" />}
      />
    </div>
  );
}

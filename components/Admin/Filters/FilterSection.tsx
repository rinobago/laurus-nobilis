import DateFilter from "./DateFilter";
import FilterButton from "./FilterButton";
import SearchBar from "./SearchBar";

export default function FilterSection() {
    return (
        <div className="flex max-w-138.75 w-full h-9.25 gap-12 justify-center items-center">
            <SearchBar />
            <FilterButton />
            <DateFilter />
        </div>
    );
}

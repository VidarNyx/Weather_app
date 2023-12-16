import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const Search = ({onSearchChange}) => {

    const [searchState, setSearch] = useState(null);

    const handleOnChange = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }

    return (
        <AsyncPaginate 
            placeholder="search for city"
            debounceTimeout={600}
            value={searchState}
            onChange={handleOnChange}
        />
    )
}

export default Search;
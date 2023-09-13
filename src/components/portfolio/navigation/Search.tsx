import { faArrowDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 
function Search() {
  return (
    <div className="items-center rounded-md border px-2 py-1 mx-4">
      <div className="flex flex-row items-center">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          className="ml-2 focus:outline-none"
          placeholder="Search"
        />
        <div className="flex flex-row items-center rounded-md bg-gray-100 p-1">
          <p className="px-2 text-gray-600">Courses</p>
          <FontAwesomeIcon className="text-gray-500" icon={faArrowDown} />
        </div>
      </div>
    </div>
  );
}

export default Search;

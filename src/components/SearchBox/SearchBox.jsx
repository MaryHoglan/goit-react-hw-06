import { useSelector, useDispatch } from "react-redux";
import { selectNameFilter, changeFilter } from "../../redux/filtersSlice";
import style from "./SearchBox.module.css";

export default function SearchBox() {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={style.search}>
      <label className={style.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        className={style.input}
        id="search"
        type="text"
        value={filter}
        onChange={handleChange}
      />
    </div>
  );
}

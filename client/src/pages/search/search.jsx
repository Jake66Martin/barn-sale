import './search.css'

export default function Search() {
  return (
    <div className='search-height d-flex justify-content-center'>
      <div className='bar d-flex align-items-center'>
      <form className="d-flex f-width">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-danger" type="submit">
          Search
        </button>
      </form>
      </div>
      <div className='items-height'>

      </div>
    </div>
  );
}

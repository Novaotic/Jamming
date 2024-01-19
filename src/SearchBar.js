import './App.css';


//Component for search bar
export default function SearchBar() {


    return (
        <div>
            <form>
                <label for='search'>Search</label>
                <input id='search' type='text' />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}
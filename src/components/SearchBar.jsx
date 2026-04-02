function SearchBar(){
    return (
        <>
            <form className="flex flex-col sm:flex-row justify-center items-center m-5 sm:mx-10 p-2 rounded-4xl gap-5 lg:mx-[10%] xl:mx-[15%] 2xl:mx-[20%] sm:shadow sm:bg-light">
                <label className="flex shadow sm:shadow-none p-3 w-full rounded-4xl gap-2 sm:gap:5 bg-light">
                    <svg viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 fill-dark/40">
                        <path fillRule="evenodd" clipRule="evenodd" d="M11.25 2.75C6.14154 2.75 2 6.89029 2 11.998C2 17.1056 6.14154 21.2459 11.25 21.2459C13.5335 21.2459 15.6238 20.4187 17.2373 19.0475L20.7182 22.5287C21.011 22.8216 21.4859 22.8217 21.7788 22.5288C22.0717 22.2359 22.0718 21.761 21.7789 21.4681L18.2983 17.9872C19.6714 16.3736 20.5 14.2826 20.5 11.998C20.5 6.89029 16.3585 2.75 11.25 2.75ZM3.5 11.998C3.5 7.71905 6.96962 4.25 11.25 4.25C15.5304 4.25 19 7.71905 19 11.998C19 16.2769 15.5304 19.7459 11.25 19.7459C6.96962 19.7459 3.5 16.2769 3.5 11.998Z"/>
                    </svg>
                    <input type="text" placeholder="Search by title, author or ISBN..." className="w-full outline-none "/>
                </label>
                <button className="w-full bg-principal p-3 rounded-4xl text-background font-bold sm:w-50 cursor-pointer hover:bg-principal/85">Search <span className="sm:hidden">Library</span></button>
            </form>
            <nav className="hidden sm:flex justify-center gap-5 ">
                <button className="text-dark/40 font-bold bg-light py-1 px-2 rounded-2xl shadow cursor-pointer hover:text-principal/75">Fiction</button>
                <button className="text-dark/40 font-bold bg-light py-1 px-2 rounded-2xl shadow cursor-pointer hover:text-principal/75">History</button>
                <button className="text-dark/40 font-bold bg-light py-1 px-2 rounded-2xl shadow cursor-pointer hover:text-principal/75">Science</button>
                <button className="text-dark/40 font-bold bg-light py-1 px-2 rounded-2xl shadow cursor-pointer hover:text-principal/75">Biography</button>
            </nav>
        </>
    )
}

export default SearchBar
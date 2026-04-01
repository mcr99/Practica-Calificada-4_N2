import { Link } from "react-router-dom"

function Header () {
    return(
        <header className="flex justify-between p-5 shadow">
            <Link className="flex justify-center items-center gap-3">
                <img src="/book.png" alt="book icon" className="w-11 hidden sm:block"/>
                <p className="text-principal font-bold text-lg" >BookFinder</p>
                <img src="/stack-of-books.png" alt="stack of books icon" className="w-10 h-10"/>
            </Link>
            <div className="flex justify-between gap-10">
                <nav className="hidden md:flex justify-evenly gap-5">
                    <button className="text-dark/70 cursor-pointer font-semibold hover:text-principal hover:border-b">Explore</button>
                    <button className="text-dark/70 cursor-pointer font-semibold hover:text-principal hover:border-b">Categories</button>
                    <button className="text-dark/70 cursor-pointer font-semibold hover:text-principal hover:border-b">Best Sellers</button>
                </nav>
                <Link className="flex justify-center items-center bg-principal/30 px-2 rounded-4xl sm:gap-2 hover:bg-principal/40 ">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-principal w-6 hidden sm:block">
                        <path d="M12.6722 2.04308C12.5459 1.78707 12.2851 1.625 11.9996 1.625C11.7142 1.625 11.4534 1.78707 11.3271 2.04308L8.67288 7.4211L2.73788 8.28351C2.45536 8.32456 2.22065 8.52244 2.13243 8.79395C2.04421 9.06546 2.11779 9.36351 2.32222 9.56278L6.61682 13.749L5.603 19.66C5.55475 19.9414 5.67041 20.2257 5.90137 20.3936C6.13233 20.5614 6.43853 20.5835 6.69122 20.4506L11.9996 17.6598L17.3081 20.4506C17.5608 20.5835 17.867 20.5614 18.0979 20.3936C18.3289 20.2257 18.4445 19.9414 18.3963 19.66L17.3825 13.749L21.6771 9.56278C21.8815 9.36351 21.9551 9.06546 21.8669 8.79395C21.7786 8.52244 21.5439 8.32456 21.2614 8.28351L15.3264 7.4211L12.6722 2.04308Z"/>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 fill-principal sm:hidden">
                        <path d="M11.8227 4.77222C9.5756 2.52515 5.93237 2.52515 3.6853 4.77222C1.43823 7.01929 1.43823 10.6625 3.6853 12.9096L10.409 19.6334C11.2877 20.5121 12.7123 20.5121 13.591 19.6334L20.3147 12.9097C22.5618 10.6626 22.5618 7.01939 20.3147 4.77232C18.0676 2.52525 14.4244 2.52525 12.1773 4.77232L12 4.94959L11.8227 4.77222Z"/>
                    </svg>
                    <p className="hidden sm:block text-principal font-bold ">Favorites</p>
                        <p className="text-principal sm:text-background font-bold text-lg bg-none sm:bg-principal px-2 rounded-full">3</p>
                </Link>
            </div>
        </header>
    )
}

export default Header
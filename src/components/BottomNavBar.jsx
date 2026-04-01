import { Link } from "react-router-dom"

function BottomNavBar () {
    return(
        <nav className="flex justify-evenly items-center text-dark/50 border-t py-5 border-dark/15 md:hidden">
            <Link className="flex flex-col justify-center items-center hover:text-principal group">
                <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-dark/50 w-7 h-7 group-hover:fill-principal">
                    <path d="M13.85 3.70391C13.05 3.10391 11.95 3.10391 11.15 3.70391L4.65 8.57891C4.08344 9.00383 3.75 9.6707 3.75 10.3789V18.5003C3.75 19.743 4.75736 20.7503 6 20.7503H10.25C10.6642 20.7503 11 20.4145 11 20.0003V17.0003C11 16.1719 11.6716 15.5003 12.5 15.5003C13.3284 15.5003 14 16.1719 14 17.0003V20.0003C14 20.4145 14.3358 20.7503 14.75 20.7503H19C20.2426 20.7503 21.25 19.743 21.25 18.5003V10.3789C21.25 9.6707 20.9166 9.00383 20.35 8.57891L13.85 3.70391Z"/>
                </svg>
                <p className="text-sm font-semibold">Home</p>
            </Link>
            <Link className="flex flex-col justify-center items-center hover:text-principal group">
                <svg viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-dark/50 w-7 h-7 group-hover:fill-principal">
                    <path d="M21.5127 5.77444C22.1665 3.97839 20.4248 2.23663 18.6287 2.89049L4.63167 7.98618C2.69138 8.69256 2.64771 11.4209 4.56441 12.189L9.72779 14.2582C9.91801 14.3344 10.0687 14.4851 10.145 14.6754L12.2142 19.8387C12.9823 21.7554 15.7106 21.7118 16.417 19.7715L21.5127 5.77444Z"/>
                </svg>
                <p className="text-sm font-semibold">Discover</p>
            </Link>
            <Link className="flex flex-col justify-center items-center hover:text-principal group">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-dark/50 w-7 h-7 group-hover:fill-principal">
                    <path d="M11.8227 4.77222C9.5756 2.52515 5.93237 2.52515 3.6853 4.77222C1.43823 7.01929 1.43823 10.6625 3.6853 12.9096L10.409 19.6334C11.2877 20.5121 12.7123 20.5121 13.591 19.6334L20.3147 12.9097C22.5618 10.6626 22.5618 7.01939 20.3147 4.77232C18.0676 2.52525 14.4244 2.52525 12.1773 4.77232L12 4.94959L11.8227 4.77222Z"/>
                </svg>
                <p className="text-sm font-semibold">Favorites</p>
            </Link>
            <Link className="flex flex-col justify-center items-center hover:text-principal group">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="fill-dark/50 w-7 h-7 group-hover:fill-principal">
                    <path d="M12.0672 2C9.6678 2 7.72266 3.94514 7.72266 6.34459C7.72266 8.74404 9.6678 10.6892 12.0672 10.6892C14.4667 10.6892 16.4118 8.74404 16.4118 6.34459C16.4118 3.94514 14.4667 2 12.0672 2Z"/>
                    <path d="M20.25 19.453C20.2421 19.8615 19.9087 20.1895 19.5001 20.1895H4.50013C4.09157 20.1895 3.75818 19.8624 3.75027 19.454L3.75023 19.452L3.75019 19.4493L3.7501 19.4423L3.75 19.4211C3.74999 19.404 3.75015 19.3807 3.75072 19.3516C3.75187 19.2937 3.75468 19.2127 3.76117 19.1119C3.77413 18.9107 3.80189 18.6292 3.86099 18.2937C3.97867 17.6258 4.22374 16.7262 4.73808 15.8194C5.79641 13.9537 7.92408 12.1895 12.0001 12.1895C16.0762 12.1895 18.2038 13.9537 19.2622 15.8194C19.7765 16.7262 20.0216 17.6258 20.1393 18.2937C20.1984 18.6292 20.2261 18.9107 20.2391 19.1119C20.2456 19.2127 20.2484 19.2937 20.2495 19.3516C20.2501 19.3807 20.2503 19.404 20.2503 19.4211L20.2502 19.4423L20.2501 19.4493L20.25 19.452L20.25 19.453Z"/>
                </svg>
                <p className="text-sm font-semibold">Profile</p>
            </Link>
        </nav>
    )
}

export default BottomNavBar
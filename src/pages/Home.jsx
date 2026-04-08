import ErrorWindow from "../components/ErrorWindow"
import LoadingSpinner from "../components/LoadingSpinner"
import MyFavorites from "../components/MyFavorites"
import SearchBar from "../components/SearchBar"
import useFetch from "../hooks/useFetch"



function Home (){
    const {data, error, loading} = useFetch(`https://openlibrary.org/search.json?q=history&limit=4`)
    if(loading){
        return(
            <LoadingSpinner/>
        )
    }
    if(error){
        return(
            <ErrorWindow errorM={error}/>
        )
    }

    return(
        <>
        <SearchBar/>
        <main className="p-5 sm:p-10 xl:mx-[5%] 2xl:mx-[10%]">
            <div className="flex justify-between items-center sm:py-10">
                <h2 className="font-bold text-lg">Recommended for you</h2>
                <p className="text-principal font-semibold text-sm sm:hidden">View all</p>
                <label className="hidden sm:flex gap-2">
                    <p className="text-dark/70">order by:</p>
                        <select className="text-principal font-bold">
                            <option>Relevance</option>
                        </select>
                </label>
            </div>
            <section className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-10">
                {data.docs?.map((book) => (
                <article className=" rounded-2xl shadow-md overflow-hidden relative flex flex-col">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-9 absolute top-2.5 right-2.5 bg-light rounded-full p-1.5 fill-dark/30">
                        <path d="M11.8227 4.77222C9.5756 2.52515 5.93237 2.52515 3.6853 4.77222C1.43823 7.01929 1.43823 10.6625 3.6853 12.9096L10.409 19.6334C11.2877 20.5121 12.7123 20.5121 13.591 19.6334L20.3147 12.9097C22.5618 10.6626 22.5618 7.01939 20.3147 4.77232C18.0676 2.52525 14.4244 2.52525 12.1773 4.77232L12 4.94959L11.8227 4.77222Z"/>
                    </svg>
                    <img src="https://covers.openlibrary.org/b/id/15147971-L.jpg" alt="img" />
                    <h3 className="font-bold mx-5 mt-3">{book.title}</h3>
                    <p className="text-sm mx-5 text-dark/60 font-semibold">{book.author_name}</p>
                    <div className="flex justify-between items-center px-5 py-2">
                        <p className="text-xs text-dark/60 font-bold">{book.first_publish_year}</p>
                        <p className="text-yellow-600 font-bold">{/* rate, but it doesn't have it */}</p>
                    </div>
                </article>
                ))}
            </section>
            <MyFavorites/>
        </main>
        </>
    )
}

export default Home
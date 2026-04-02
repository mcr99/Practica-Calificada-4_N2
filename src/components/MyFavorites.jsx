function MyFavorites () {
    return(
        <aside className="h-60 my-15 overflow-hidden sm:bg-principal/10 sm:p-5 rounded-2xl">
            <header className="flex justify-between items-center py-5">
                <p className="font-bold">⭐ My Favorites</p>
                <button className="text-xs font-semibold">CLICK TO VIEW</button>
            </header>
            <section className="flex gap-3">
                <article className=" w-20 flex flex-col gap-1 ">
                    <img src="https://covers.openlibrary.org/b/id/15147971-L.jpg" alt="img"  className="rounded-2xl hover:ring-2 ring-principal"/>
                    <p className="text-xs font-bold sm:hidden">The Silent Patient</p>
                </article>
                <div className="w-20 border border-dashed border-principal flex justify-center items-center rounded-2xl">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg " className="fill-principal w-8">
                        <path d="M12.0002 4.875C12.6216 4.875 13.1252 5.37868 13.1252 6V10.8752H18.0007C18.622 10.8752 19.1257 11.3789 19.1257 12.0002C19.1257 12.6216 18.622 13.1252 18.0007 13.1252H13.1252V18.0007C13.1252 18.622 12.6216 19.1257 12.0002 19.1257C11.3789 19.1257 10.8752 18.622 10.8752 18.0007V13.1252H6C5.37868 13.1252 4.875 12.6216 4.875 12.0002C4.875 11.3789 5.37868 10.8752 6 10.8752H10.8752V6C10.8752 5.37868 11.3789 4.875 12.0002 4.875Z" />
                    </svg>
                </div>
            </section>
        </aside>
    )
}

export default MyFavorites
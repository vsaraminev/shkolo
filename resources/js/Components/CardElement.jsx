function CardElement({ key, id = null, url = null, color = 'black' }) {
    const imageClick = (e, url) => {
        console.log('hereer')
        e.preventDefault();
        window.location.href = url;
    }
    let linkUrl = id ? route("card.edit", id) : route("card.create");
    let uniqueKey = url ? url : key;
    return (
        <Link href={linkUrl} key={uniqueKey} className="border border-black p-4 mx-1 w-32 h-24 flex items-center justify-center hover:bg-gray-200 transition-colors">
            <svg onClick={e => imageClick(e, url)} xmlns=" http://www.w3.org/2000/svg" className={"h-10 w-10 text-" + color + "-500"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
        </Link>
    );
}

export default CardElement;
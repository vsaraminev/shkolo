import CardElement from "@/Components/CardElement";
import { Link } from "@inertiajs/react";

const MAX_CARDS_COUNT = 9;

function Index({ cards, success }) {

    const imageClick = (e, card) => {
        e.preventDefault();
        window.location.href = card.url;
    }

    // setTimeout(function () {
    //     document.getElementById("successMessage").remove()
    // }, 3000);

    return (
        <>
            {/* {success && <div id="successMessage" className="bg-emerald-500 py-2 px-4 mb-3 mx-auto w-fit text-white rounded">{success}</div>} */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-11/12 max-w-lg">
                {cards.map(card => {
                    return (
                        <Link href={route("card.edit", card.id)} key={card.id} className="border border-black p-4 mx-1 w-32 h-24 flex items-center justify-center hover:bg-gray-200 transition-colors">
                            <svg onClick={e => imageClick(e, card)} xmlns=" http://www.w3.org/2000/svg" className={"h-10 w-10 bg-" + card.color} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="12" y1="8" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="16" y2="12"></line>
                            </svg>
                        </Link>
                    )
                })}
                {
                    Array.apply(0, Array(MAX_CARDS_COUNT - Object.keys(cards).length)).map(function (x, i) {
                        return (
                            <Link href={route("card.create")} key={i} className="border border-black p-4 mx-1 w-32 h-24 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <svg xmlns=" http://www.w3.org/2000/svg" className="h-10 w-10 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="12" y1="8" x2="12" y2="16"></line>
                                    <line x1="8" y1="12" x2="16" y2="12"></line>
                                </svg>
                            </Link>
                        )
                    })
                }
            </div >
        </>
    );
}

export default Index;
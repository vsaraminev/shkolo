import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, router, useForm } from "@inertiajs/react";

function Edit({ card }) {
    const { data, setData, put, errors, reset } = useForm({
        title: card["title"] || "",
        url: card["url"] || "",
        color: card["color"] || "",
        _method: "PUT",
    });
    const colorChanged = (value) => {
        document.getElementById('color').style.color = value;
        setData("color", value)
    }

    const deleteCard = (card) => {
        if (!window.confirm("Are you sure you want to delete the record?")) {
            return;
        }
        router.delete(route("card.destroy", card.id));
    }

    const onSubmit = (e) => {
        e.preventDefault();
        put(route("card.update", card.id));
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="w-full max-w-xs mx-auto space-y-4">
                <div className="flex items-center">
                    <InputLabel className="text-gray-700 text-sm font-bold w-1/3" htmlFor="title" value="Title: " />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline italic"
                        id="title"
                        type="text"
                        defaultValue={data["title"]}
                        onChange={(e) => setData("title", e.target.value)}
                    />
                    <InputError message={errors.title} />
                </div>
                <div className="flex items-center">
                    <InputLabel className="text-gray-700 text-sm font-bold w-1/3" htmlFor="url" value="Link: " />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline italic"
                        id="link"
                        type="url"
                        defaultValue={data["url"]}
                        onChange={(e) => setData("url", e.target.value)}
                    />
                    <InputError message={errors.url} />
                </div>
                <div className="flex items-center">
                    <InputLabel className="text-gray-700 text-sm font-bold w-1/3" htmlFor="color" value="Color: " />
                    <div className="relative w-full">
                        <select
                            className={"shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline italic text-" + card.color + "-500"}
                            id="color"
                            onChange={e => colorChanged(e.target.value)}
                            defaultValue={data['color']}
                        >
                            <option disabled={card['color'] ? true : false} value="">Select Status</option>
                            <option value="red">Red</option>
                            <option value="blue" >Blue</option>
                            <option value="green">Green</option>
                            <option value="yellow">Yellow</option>
                            <option value="pink">Pink</option>
                            <option value="purple">Purple</option>
                            <option value="orange">Orange</option>
                            <option value="gray">Gray</option>
                            <option value="cyan">Cyan</option>
                        </select>
                    </div>
                </div>
                <div className="flex justify-end gap-2 p-2 hover:opacity-100 transition-opacity">
                    <Link href={route('card.index')} className=" px-2 py-1 rounded-md bg-brown-800 text-black border border-gray-900 text-base hover:bg-brown-600 transition-all">Cancel</Link>
                    <button className="font-medium text-blue-600 rounded-md border border-blue-600 dark:text-blue-500 hover:underline px-2 mx-1">Save</button>
                    <button type="button" className="font-medium text-red-600 rounded-md border border-red-600 dark:text-red-500 hover:underline px-2 mx-1" onClick={e => deleteCard(card)}>Delete</button>
                </div>
            </div >
        </form>
    );
}

export default Edit;
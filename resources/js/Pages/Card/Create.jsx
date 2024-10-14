import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import { Link, useForm } from "@inertiajs/react";

function Create() {
    const colorChanged = (value) => {
        document.getElementById('color').style.color = value;
        setData("color", value);
    }
    const { data, setData, post, errors, reset } = useForm({
        title: "",
        url: "",
        color: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("card.store"));
    };
    return (
        <form action="post" onSubmit={onSubmit}>
            <div className="w-full max-w-xs mx-auto space-y-4">
                <div className="flex items-center">
                    <InputLabel className="text-gray-700 text-sm font-bold w-1/4" htmlFor="title" value="Title: " />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="title"
                        type="text"
                        onChange={(e) => setData("title", e.target.value)}
                    />
                </div>
                <InputError className="mx-auto" message={errors.title} />
                <div className="flex items-center">
                    <InputLabel className="text-gray-700 text-sm font-bold w-1/4" htmlFor="url" value="Link: " />
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="link"
                        type="text"
                        onChange={(e) => setData("url", e.target.value)}
                    />
                </div>
                <InputError className="mx-auto" message={errors.url} />
                <div className="flex items-center">
                    <InputLabel className="text-gray-700 text-sm font-bold w-1/4" htmlFor="color" value="Color: " />
                    <div className="relative w-full">
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="color"
                            onChange={e => colorChanged(e.target.value)}

                        >
                            <option value="">Select Status</option>
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
                <InputError className="mx-auto" message={errors.color} />
                <div className="flex justify-end gap-2 p-2 hover:opacity-100 transition-opacity">
                    <Link href={route('card.index')} className=" px-2 py-1 rounded-md bg-brown-800 text-black border border-gray-900 text-base hover:underline transition-all">Cancel</Link>
                    <button className="font-medium text-blue-600 rounded-md border border-blue-600 dark:text-blue-500 hover:underline px-2 mx-1">Save</button>
                </div>
            </div >
        </form>
    )
}

export default Create;
<?php

namespace App\Http\Controllers;

use App\Models\Card;
use Illuminate\Http\Request;

class CardController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return inertia("Card/Index", [
            "cards" => Card::all(),
            // 'success' => session('success')
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Card/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            "title" => ["required", "min:3"],
            "url" => ["required", "url"],
            "color" => ["required", "in:red,blue,green,yellow,pink,purple,orange,gray,cyan"]
        ]);
        Card::create($data);
        return to_route("card.index");
        // ->with('success', 'Hyperlink was added.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id) {}

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return inertia("Card/Edit", [
            'card' => Card::find($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $card =  Card::find($id);
        $data = $request->validate([
            "title" => ["required", "min:3"],
            "url" => ["required", "url"],
            "color" => ["required", "in:red,blue,green,yellow,pink,purple,orange,gray,cyan"]
        ]);
        $card->update($data);
        return to_route("card.index");
        // ->with('success', 'Hyperlink was updated.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $card = Card::find($id);
        $card->delete();
        return to_route("card.index");
        // ->with('success', 'Hyperlink was deleted.');
    }
}

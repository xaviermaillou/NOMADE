<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Message;
use Auth;

class MessengerController extends Controller
{
    public function send(Request $request) {
        $newMessage = new Message();

        $newMessage->message = $request['message'];
        $newMessage->author = Auth::user()->id;
        $newMessage->recipient = $request['recipient'];
        $newMessage->save();

        return redirect('/');
    }
}
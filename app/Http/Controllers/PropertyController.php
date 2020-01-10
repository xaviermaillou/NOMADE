<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Property;
use App\Favorite;
use App\Photo;
use App\PropComment;
use Auth;

class PropertyController extends Controller
{
    public function add(Request $request) {
        $newProperty = new Property();

        $pictures = $request['pictures'];
        $main_picture = array_shift($pictures);

        $main_path = $main_picture->store('public');
        $main_fileName = basename($main_path);
        
        $newProperty->title = $request['title'];
        $newProperty->location = $request['location'];
        $newProperty->main_picture = $main_fileName;
        $newProperty->area = $request['area'];
        $newProperty->beds = $request['beds'];
        $newProperty->price = $request['price'];
        $newProperty->owner = Auth::user()->id;

        $newProperty->save();

        foreach($pictures as $picture) {
            $newPicture = new Photo();

            $path = $picture->store('public');
            $fileName = basename($path);

            $newPicture->img = $fileName;
            $newPicture->property_id = $newProperty->id;
            $newPicture->save();
        }

        return redirect('/');
    }

    public function edit(Request $request) {
        $property_id = $request['id'];

        $editedProperty = Property::where("id", "=", $property_id)->first();
        $editedProperty->title = $request['title'];
        $editedProperty->location = $request['location'];
        $editedProperty->area = $request['area'];
        $editedProperty->beds = $request['beds'];
        $editedProperty->price = $request['price'];

        $editedProperty->save();

        return redirect('/');
    }

    public function favorites(Request $request) {

        $newFavorite = new Favorite();
        $newFavorite->property_id = $request['id'];
        $newFavorite->user_id = Auth::user()->id;
        $newFavorite->favorite = 1;
        $newFavorite->save();
        
        return redirect('/');
    }

    public function removeFavorites(Request $request) {

        $eliminated_favorite = Favorite::where('property_id', $request['id'])->where('user_id', Auth::user()->id)->first();
        $eliminated_favorite->delete();

        return redirect('/');
    }

    public function bookings(Request $request) {

        $newBooking = new Favorite();

        $newBooking->booked = 1;
        $newBooking->date_in = strtotime($request['dateIn'])+86400;
        $newBooking->date_out = strtotime($request['dateOut'])+86400;
        $newBooking->property_id = $request['id'];
        $newBooking->user_id = Auth::user()->id;
        $newBooking->price = $request['price'];
        $newBooking->save();

        return redirect('/');
    }

    public function bookingEdit(Request $request) {
        $booking_id = $request["bookingId"];
        
        $editedBooking = Favorite::where("id", "=", $booking_id)->first();
        $editedBooking->date_in = strtotime($request['dateIn'])+86400;
        $editedBooking->date_out = strtotime($request['dateOut'])+86400;
        $editedBooking->price = $request['price'];
        $editedBooking->save();

        return redirect('/');
    }

    public function bookingRemove(Request $request) {
        $booking_id = $request["bookingId"];
        
        $editedBooking = Favorite::where("id", "=", $booking_id)->first();
        $editedBooking->delete();

        return redirect('/');
    }
    
    public function sendReview(Request $request) {
        $booking_id = $request["booking_id"];

        $newReview = new PropComment();

        $newReview->message = $request['message'];
        $newReview->property_id = $request['property_id'];
        $newReview->author = Auth::user()->id;
        $newReview->save();

        $reviewedProperty = Favorite::where("id", "=", $booking_id)->first();
        $reviewedProperty->reviewed = 1;
        $reviewedProperty->save();

        return redirect('/');
    }
}

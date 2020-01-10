<?php
use App\Message;

$userID = 0;

if(Auth::check()) {
    $userID = Auth::user()->id;
}

$myMessages = Message::where('recipient', '=', $userID)->orWhere('author', '=', $userID)->orderBy('created_at', 'DESC')->get()->toArray();
?>

<script>
    var myMessages = <?php echo json_encode($myMessages) ?>;

    myMessages.forEach(function(message) {
        if(message.checked == 0) {
            unreadMessages++;
        }
        users.forEach(function(user) {
            if((user.id == message.author || user.id == message.recipient) && jQuery.inArray(user, usersContact) < 0 && user.id != userID) {
                usersContact.push(user);
            }
        });
    });

    usersContact.forEach(function(user) {
        $('.generalMessenger').prepend('<article id="author'+user.id+'" class="regularMessenger"><h5 class="aceptar">'+user.name+'</h5><p class="messagesContainer"></p></article>');
        myMessages.forEach(function(message) {
            if(message.author == user.id) {
                $('#author'+user.id+' .messagesContainer').append('<p class="messageBubble">'+message.message+'</p>');
            } else if (message.recipient == user.id) {
                $('#author'+user.id+' .messagesContainer').append('<p class="myMessageBubble">'+message.message+'</p>');
            }
        });
        $('#author'+user.id).append('<form class="regularMessengerForm" action="/sendMessage" method="POST"><input type="hidden" id="regularRecipient" name="recipient" value="'+user.id+'"><textarea name="message" id="regularMessage"></textarea><input type="submit" class="aceptar" value="'+envoyer+'"></form>');
    });
</script>
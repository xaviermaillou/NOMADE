<?php
use App\Message;

$userID = 0;

if(Auth::check()) {
    $userID = Auth::user()->id;
}

$newMessages = Message::where('recipient', '=', $userID)->orWhere('author', '=', $userID)->orderBy('created_at', 'DESC')->get()->toArray();
?>

<script>
    var newMessages = <?php echo json_encode($newMessages) ?>;
    var activeInterlocutor = $('.messagesContainer').parent().attr('id').replace(/\D/g,'');

    newMessages.forEach(function(message) {
        if(message.author == activeInterlocutor) {
            $('#author'+activeInterlocutor+' .messagesContainer').append('<p class="messageBubble">'+message.message+'</p>');
        } else if (message.recipient == activeInterlocutor) {
            $('#author'+activeInterlocutor+' .messagesContainer').append('<p class="myMessageBubble">'+message.message+'</p>');
        }
    });
</script>
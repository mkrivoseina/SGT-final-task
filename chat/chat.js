
$('#send-message').submit(function(event) {
    event.preventDefault();
    const username = $('#username-input').val();
    const message = $('#message-input').val();
    
        const d = new Date();
        const day = d.getDate();
        const month = d.getMonth() + 1;
        const year = d.getFullYear();
        const hour = d.getHours();
        const mins = d.getMinutes();
        const newTextBox = `
    <li>
        <div class="card text-secondary my-1"> 
            <div class="card-header fs-6 ">
                <span id="name" class="name">@${username}</span>
                    <span id="date" class="date">${day}.${month}.${year} ${hour}:${mins}</span>
                </div>
            <div class="card-body m-0 fs-7">
                <div class="">
                    <p>${message}</p>
                </div>
            </div>
        </div>
    </li>`;


        $('#chat-window').prepend(newTextBox);

        $('#username-input').val('');
        $('#message-input').val('');
    
});




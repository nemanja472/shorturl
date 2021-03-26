$(document).ready(() => {
    // set listener on the input box
    $('#input').on("change", (evt) => {
        let text = $('#input').val();
        // set up GET request
        $.get('/shorturl', {text: text})
            .done((data) => {
                console.log(data);
                $('#results').prepend('<li>' + data['result'] + '</li>');
                $('#input').val(''); // reset the input box
            })
            .fail((xhr) => {
                alert('Problem when contacting server');
                console.log(xhr);
            })
    })
} )
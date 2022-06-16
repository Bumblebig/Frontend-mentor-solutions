document.querySelector('.bt2').addEventListener('click', function(){
    var input = document.querySelector('#email').value;

    if (input) {
        document.querySelector('#valid').style.display = 'none';
    } else {
        document.querySelector('#valid').style.display = 'block';
    }
})
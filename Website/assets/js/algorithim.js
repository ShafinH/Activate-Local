

document.getElementById('recommendations').addEventListener('submit', showRec);

function showRec(e) {

    e.preventDefault();

    setTimeout(function () {
        document.querySelector('.recommend').style.display = 'block';
    }, 1000);
    setTimeout(function () {
        document.querySelector('.recommend1').style.display = 'block';
    }, 500);


    document.getElementById('recommendations').reset()


}



















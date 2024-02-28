function change() {
    var switchToggle = document.querySelector('.switch input');
    var grid1 = document.getElementById('grid1');
    var grid2 = document.getElementById('grid2');

    if (switchToggle.checked) {
        grid1.classList.remove('hidden');
        grid2.classList.add('hidden');
    } else {
 
        grid1.classList.add('hidden');
        grid2.classList.remove('hidden');
    }
}

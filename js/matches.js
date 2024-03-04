let s2 = document.getElementsByClassName('s2')[0];
let s3 = document.getElementsByClassName('s3')[0];
let s4 = document.getElementsByClassName('s4')[0];
let s5 = document.getElementsByClassName('s5')[0];
let s6 = document.getElementsByClassName('s6')[0];

let branch = document.getElementById('select');

branch.addEventListener('change', function () {
    let selectedValue = this.value;

    if (selectedValue == '2') {
        s2.classList.remove('hidden');

        s3.classList.add('hidden');
        s4.classList.add('hidden');
        s5.classList.add('hidden');
        s6.classList.add('hidden');
    } else if (selectedValue == '3') {
        s3.classList.remove('hidden');

        s2.classList.add('hidden');
        s4.classList.add('hidden');
        s5.classList.add('hidden');
        s6.classList.add('hidden');
    } else if (selectedValue == '4') {
        s4.classList.remove('hidden');

        s2.classList.add('hidden');
        s3.classList.add('hidden');
        s5.classList.add('hidden');
        s6.classList.add('hidden');
    } else if (selectedValue == '5') {
        s5.classList.remove('hidden');

        s2.classList.add('hidden');
        s3.classList.add('hidden');
        s4.classList.add('hidden');
        s6.classList.add('hidden');
    } else if (selectedValue == '6') {
        s6.classList.remove('hidden');

        s2.classList.add('hidden');
        s3.classList.add('hidden');
        s4.classList.add('hidden');
        s5.classList.add('hidden');
    } else {
        s2.classList.remove('hidden');
        s3.classList.remove('hidden');
        s4.classList.remove('hidden');
        s5.classList.remove('hidden');
        s6.classList.remove('hidden');
    }
});

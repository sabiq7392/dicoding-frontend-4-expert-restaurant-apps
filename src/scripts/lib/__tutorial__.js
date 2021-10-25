// !! Mame Make Your Code More Readble and Easy to Maintenance !!
// !! Author Sabiq Muhammad Antebing Mame !! 

// How To Install Mame in Your Project
import { $ } from './Mame.js';
'use strict';

// HOW TO USE IT

// =============== Use Basic ===============
const resetButtons = $('#resetButton');

// =============== Use ClassList ===============
// Always use array in $([]) and addClass([])

// ==== Add Class ====
$(resetButtons).addClass(['bg-yellow'])
$(resetButtons).addClass(['bg-yellow', 'w-100', 'h-100'])

// ==== Contain Class ====
$(resetButtons).containClass(['bg-yellow'])
$(resetButtons).containClass(['bg-yellow', 'w-100', 'h-100'])

// ==== Remove Class ====
$(resetButtons).removeClass(['bg-yellow'])
$(resetButtons).removeClass(['bg-yellow', 'w-100', 'h-100'])

// ==== Toggle Class ====
$(resetButtons).toggleClass(['bg-yellow'])

// For toggle is still experimentall
$(resetButtons).toggleClass(['bg-yellow', 'w-100', 'h-100'])

// ==== Advance Use ====
$(resetButtons)
    .addClass(['bg-yellow'])
    .removeClass(['active', 'border'])
    .containClass(['bg-yellow'])
    .toggleClass(['w-100'])


// =============== Use EventListener ===============
// Always use array, U CAN'T ADD MORE THAN ONE VALUE

// ==== Click ====
$(resetButtons).onClick(() => { 
    // ..... Your Code
});

const button = $query('#button');

$(button).onClick(clicked);

// Not Recommended
$($query('#button')).onClick(clicked);
// ===

function clicked() {
  this.innerText = 'clicked';
}
// ==== Hover ====
$(resetButtons).hover()
    .on(() => {
        // ..... Your Code
    })
    .off(() => {
        // ..... Your Code
    });

// ==== Focus ====
$(resetButtons).focus()
    .on(() => {
        // ..... Your Code
    })
    .off(() => {
        // ..... Your Code
    });

// ==== Animation ====
$(resetButtons).animation()
    .start(() => {
        // ..... Your Code
    })
    .end(() => {
        // ..... Your Code
    });

// ==== KeyUp ====
$(resetButtons).onKeyUp(() => { 
    // ..... Your Code
});

// ==== onSubmit ====
$(resetButtons).onSubmit(() => { 
    // ..... Your Code
});

// ==== Media Screeen ====
const button = $query('#button');

$(window).media('max-width: 767px', () => {
  $(button).onClick(() => {
    console.log('hai phone');
  });
});

// NO LIB
document.querySelector('resetButtons').classList.add('bg-yellow')
document.querySelector('resetButtons').classList.remove('active', 'border')
document.querySelector('resetButtons').classList.contains('bg-yellow')
document.querySelector('resetButtons').classList.toggle('w-100')


// WITH LIB
$([resetButtons])
  .addClass(['bg-yellow'])
  .removeClass(['active', 'border'])
  .containClass(['bg-yellow'])
  .toggleClass(['w-100'])


// NO LIB
const buttonResetSearch = document.querySelector('#buttonResetSearch')
const input = document.querySelector('#input')

buttonResetSearch.classList.add('d-block')
buttonResetSearch.classList.remove('d-none')
buttonResetSearch.addEventListener('click', () => {
    input.value = '';
    buttonResetSearch.classList.add('d-none');
    buttonResetSearch.classList.remove('d-block')
});

// WITH LIB`
const buttonResetSearch = $('#buttonResetSearch')
const input = $('#input')

$([buttonResetSearch])
    .addClass(['d-block'])
    .removeClass(['d-none'])
    .onClick(() => {
        input.value = '';
        $([buttonResetSearch])
            .addClass(['d-none'])
            .removeClass(['d-block'])
    });
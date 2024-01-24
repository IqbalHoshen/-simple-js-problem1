function alignText(whatTypeOfAlign) {
    if (IdVariable.classList.contains("text-left")) {

        IdVariable.classList.remove("text-left");
    }
    else if (IdVariable.classList.contains("text-center")) {

        IdVariable.classList.remove("text-center");
    }
    else if (IdVariable.classList.contains("text-right")) {

        IdVariable.classList.remove("text-right");
    }
    else if (IdVariable.classList.contains("text-justify")) {

        IdVariable.classList.remove("text-justify");
    }

    IdVariable.classList.add(whatTypeOfAlign);

}

const IdVariable = document.getElementById('Text_input');

// document.getElementById('Text-bold').addEventListener('click', function () {
//     IdVariable.classList.add("font-bold");
// })

document.getElementById('Text-bold').addEventListener('click', function () {

    IdVariable.classList.toggle("font-bold");

});

document.getElementById('Text-italic').addEventListener('click', function () {

    IdVariable.classList.toggle("font-italic");

})

document.getElementById('Text-underline').addEventListener('click', function () {

    IdVariable.classList.toggle("underline");

})

document.getElementById('left_shift').addEventListener('click', function () {

    alignText("text-left");
});

document.getElementById('center_shift').addEventListener('click', function () {

    alignText("text-center");
});

document.getElementById('right_shift').addEventListener('click', function () {

    alignText("text-right");
});
document.getElementById('justify_shift').addEventListener('click', function () {

    alignText("text-justify");

});

const quantity = document.getElementById('quantity');

quantity.addEventListener('input', function () {

    IdVariable.style.fontSize = quantity.value + 'px';

});

const favcolor = document.getElementById('favcolor');

favcolor.addEventListener('input', function () {

    IdVariable.style.color = favcolor.value;

});




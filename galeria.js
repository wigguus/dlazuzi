let actualImage = 1;

function plusImage() {
    if (actualImage > 0 && actualImage < 7) {
        actualImage += 1;
        window.location.href = '#list-gallery-item' + actualImage.toString();
    }

}

function minusImage() {
    if (actualImage > 1 && actualImage < 8) {
        actualImage -= 1;
        window.location.href = '#list-gallery-item' + actualImage.toString();
    }

}
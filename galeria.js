let actualImage = 1;
let blockScrolling = false;

function plusImage() {
    if (!blockScrolling) {
        if (actualImage > 0 && actualImage < 7) {
            actualImage += 1;
            window.location.href = '#list-gallery-item' + actualImage.toString();
        }
        blockScrolling = true;

        setTimeout(() => {
            blockScrolling = false;
        }, 500);
    }
    

}

function minusImage() {
    if (!blockScrolling) {
        if (actualImage > 1 && actualImage < 8) {
            actualImage -= 1;
            window.location.href = '#list-gallery-item' + actualImage.toString();
        }
        blockScrolling = true;

        setTimeout(() => {
            blockScrolling = false;
        }, 500);
    }

}

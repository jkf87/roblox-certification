
function updateName() {
    var name = document.getElementById('input-name').value;
    document.getElementById('name').innerText = name;
}

function saveAsImage() {
    var certificateElement = document.querySelector("#certificate").cloneNode(true);
    var nameElement = certificateElement.querySelector("#name");

    // Adjust the position of the #name element
    nameElement.style.top = "calc(38% - " + (nameElement.offsetHeight / 2) + "px)";
    nameElement.style.left = "calc(50% - " + (nameElement.offsetWidth / 2) + "px)";
    nameElement.style.transform = "";

    // Append the cloned element to the body
    document.body.appendChild(certificateElement);

    var originalWidth = certificateElement.offsetWidth;
    var originalHeight = certificateElement.offsetHeight;
    var targetWidth = 1248;
    var scale = targetWidth / originalWidth;
    var targetHeight = originalHeight * scale;

    certificateElement.style.width = targetWidth + "px";
    certificateElement.style.height = targetHeight + "px";

    html2canvas(certificateElement, { 
        scale: 1,
        windowWidth: targetWidth,
        windowHeight: targetHeight
    }).then(canvas => {
        let link = document.createElement('a');
        link.download = 'certificate.png';
        link.href = canvas.toDataURL();
        link.click();

        // Remove the cloned element
        document.body.removeChild(certificateElement);
    });
}

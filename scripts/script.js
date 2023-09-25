function getName(str) {
    let i;
    if (str.lastIndexOf('\\')) {
        i = str.lastIndexOf('\\') + 1;
    } else {
        i = str.lastIndexOf('/') + 1;
    }
    const filename = str.slice(i);
    const uploaded = document.getElementById("form-input-send-file-text");
    uploaded.innerHTML = filename;
}
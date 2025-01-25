document.addEventListener('DOMContentLoaded', function() {
    const downloadSelectedButton = document.getElementById('download-selected');
    const downloadAllButton = document.getElementById('download-all');

    downloadSelectedButton.addEventListener('click', function() {
        const selectedImages = document.querySelectorAll('.image-checkbox:checked');
        downloadImages(selectedImages);
    });

    downloadAllButton.addEventListener('click', function() {
        const allImages = document.querySelectorAll('.image-checkbox');
        downloadImages(allImages);
    });

    function downloadImages(images) {
        images.forEach(function(image) {
            const imageUrl = image.nextSibling.getAttribute('src');
            const imageName = imageUrl.substring(imageUrl.lastIndexOf('/') + 1);
            download(imageUrl, imageName);
        });
    }

    function download(url, name) {
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = url;
        link.download = name;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
});
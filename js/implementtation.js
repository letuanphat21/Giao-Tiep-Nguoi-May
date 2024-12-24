function toggleContent(id) {
    var contentRow = document.getElementById('content-' + id);
    // Toggle the visibility of the content
    if (contentRow.style.display === 'none' || contentRow.style.display === '') {
        contentRow.style.display = 'table-row';
        contentRow.classList.add('expanded'); // Add 'expanded' class to increase height
    } else {
        contentRow.style.display = 'none';
        contentRow.classList.remove('expanded'); // Remove 'expanded' class when hiding
    }
}
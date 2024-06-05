document.addEventListener("DOMContentLoaded", function() {
    const deleteButtons = document.querySelectorAll('.delete-btn');
    const deleteModal = document.getElementById('delete-modal');
    const closeModal = document.querySelector('.modal .close');
    const confirmDeleteButton = document.getElementById('confirm-delete');
    const cancelDeleteButton = document.getElementById('cancel-delete');
    let postToDelete = null;

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            postToDelete = this.closest('.post-card');
            deleteModal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', function() {
        deleteModal.style.display = 'none';
    });

    cancelDeleteButton.addEventListener('click', function() {
        deleteModal.style.display = 'none';
    });

    confirmDeleteButton.addEventListener('click', function() {
        if (postToDelete) {
            postToDelete.remove();
            deleteModal.style.display = 'none';
        }
    });

    window.addEventListener('click', function(event) {
        if (event.target == deleteModal) {
            deleteModal.style.display = 'none';
        }
    });

    // The ellipses button

    const moreButtons = document.querySelectorAll('.more-btn');
    moreButtons.forEach(button => {
        button.addEventListener('click', function() {
            
            window.location.href= '/html/post.html'; // Open in new tab

            
        });
    });
});

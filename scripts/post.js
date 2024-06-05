document.addEventListener('DOMContentLoaded', () => {
    const editButton = document.getElementById('edit-btn');
    const likeButton = document.getElementById('like-btn');
    const commentButton = document.getElementById('comment-btn');
    const commentInput = document.getElementById('comment-input');
    const commentsList = document.getElementById('comments-list');
    const postTitle = document.querySelector('.post-title');
    const postText = document.querySelector('.post-text');
    const likeCountText = document.getElementById('like-count');
    let likeCount = 0;
    let isEditing = false;

    editButton.addEventListener('click', () => {
        if (isEditing) {
            // Save changes
            postTitle.setAttribute('contenteditable', 'false');
            postText.setAttribute('contenteditable', 'false');
            postTitle.style.border = 'none';
            postText.style.border = 'none';
            editButton.innerHTML = '<i class="fas fa-edit"></i> Edit';
        } else {
            // Enable editing
            postTitle.setAttribute('contenteditable', 'true');
            postText.setAttribute('contenteditable', 'true');
            postTitle.style.border = '2px solid pink';
            postText.style.border = '2px solid pink';
            postTitle.focus();
            editButton.innerHTML = '<i class="fas fa-save"></i> Save';
        }
        isEditing = !isEditing;
    });

    likeButton.addEventListener('click', () => {
        likeCount++;
        if (likeCount === 1) {
            likeCountText.textContent = '1 person likes this!';
        } else {
            likeCountText.textContent = `${likeCount} people like this!`;
        }
        likeButton.innerHTML = '<i class="fas fa-thumbs-up"></i> Liked!';
    });

    commentButton.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText !== '') {
            const commentDiv = document.createElement('div');
            commentDiv.className = 'comment';
            commentDiv.textContent = commentText;
            commentsList.prepend(commentDiv);
            commentInput.value = '';
        }
    });
});

// Function to handle the accordion behavior
function setupAccordion() {
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.addEventListener('click', function() {
            // This will toggle the display of the next sibling element (content)
            let content = this.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
                // Close other open accordion items
                closeOthers(this);
            }
        });
    });
}

// Function to close all other accordion contents except the current one
function closeOthers(current) {
    document.querySelectorAll('.accordion-item').forEach(item => {
        if (item !== current) {
            item.nextElementSibling.style.display = 'none';
        }
    });
}

// Load more parts functionality, demonstrating adding more content dynamically
function loadMoreParts() {
    // Example: appending new content to the main element
    const main = document.querySelector('main');
    const newContent = document.createElement('div');
    newContent.innerHTML = `
        <div class="product">
            <img src="assets/NewParts.avif" alt="New Car Part">
            <h3>New Car Part</h3>
            <p>Check out our latest addition to the car parts lineup, ensuring top performance and reliability.</p>
        </div>
    `;
    main.appendChild(newContent);
}

// Initialize accordion functionality and event listeners
document.addEventListener('DOMContentLoaded', function() {
    setupAccordion();
    document.getElementById('loadMore').addEventListener('click', loadMoreParts);
    sanityCheck();  // Perform the sanity check when the script loads
});

// Sanity check function to ensure the script is loaded and functional
function sanityCheck() {
    console.log('!Sanity check: all good!');
}



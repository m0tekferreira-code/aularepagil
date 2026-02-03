document.getElementById('project-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate loading/processing if desired, but for now instant feedback
    const form = document.getElementById('project-form');
    const successMessage = document.getElementById('success-message');
    
    // Get values (unused in this fake submit, but good practice)
    const name = document.getElementById('name').value;
    const url = document.getElementById('url').value;
    
    console.log(`Fake submission: ${name} submitted ${url}`);

    // Hide form and show success message
    form.style.display = 'none';
    successMessage.style.display = 'block';
});

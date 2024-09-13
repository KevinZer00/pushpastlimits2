document.getElementById('contactForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    try {
        const response = await fetch('https://web3forms.com/submit', {
            method: 'POST',
            body: formData
        });
        if (response.ok) {
            window.location.href = 'thank-you.html';
        } else {
            alert('Failed to send message.');
        }
    } catch (error) {
        console.error('Error:', error);
    }
});
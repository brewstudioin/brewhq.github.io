// function to send beta signup to slack channel
async function sendToSlack() {
    const email = document.getElementById('emailInput').value;
    
    // Validate email
    if (!email || !email.includes('@')) {
        alert('Please enter a valid email address');
        return;
    }

    // Send to Slack through the registered webhook url
    const webhookUrl = 'https://hook.eu1.make.com/gosxltu18ivikoeunwxjs5gaotjywigi';
    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                text: `New waitlist signup: ${email}`
            })
        });

        if (response.ok) {
            alert('Thank you for joining the waitlist!');
            document.getElementById('emailInput').value = '';
        } else {
            throw new Error('Failed to send message');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, something went wrong. Please try again later.');
    }
} 
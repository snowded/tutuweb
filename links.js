document.addEventListener('DOMContentLoaded', () => {
    const inviteLink = 'https://discord.com/oauth2/authorize?client_id=1250413871391309908&permissions=10587093855999&scope=bot%20applications.commands';
    const supportServerLink = 'https://discord.gg/luciddream';


    const inviteElement = document.querySelector('#invite-link');
    const supportElement = document.querySelector('#support-link');
    const inviteButton = document.querySelector('#invite-button');


    if (inviteElement) {
        inviteElement.href = inviteLink;
    }
    if (supportElement) {
        supportElement.href = supportServerLink;
    }
    if (inviteButton) {
        inviteButton.href = inviteLink;
    }
});

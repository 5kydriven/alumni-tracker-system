<template>
    <Button @click='addData' label="click" />
</template>

<script setup>
const addData = async () => {
    try {
        const response = await fetch('http://localhost:8000/deleteUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                uid: 'VKIY8Qzj1MOthdL9JW8nbqJW0k12'
            }),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('User deleted successfully:', data);
    } catch (error) {
        console.error('Error creating user:', error.message);
    }

}
</script>
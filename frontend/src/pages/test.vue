<template>
    <Button @click='addData' label="click" />
</template>

<script setup>
const addData = async () => {
    try {
        const response = await fetch('http://localhost:8080/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: 'test@gmail.com',
                password: '123456'
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
<template>
<li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul>
        <li><strong>Phone:</strong>{{ friend.phone }}</li>
        <li><strong>Email:</strong>{{ friend.email }}</li>
    </ul>
</li>
    
</template>

<script>
export default {
     data() {
            return {
                detailsAreVisible: false,
                friend: {
                     
                    id: 'me',
                    name: 'Prashant Tiwari',
                    phone: '32165442',
                    email: 'prashant.tiwari@essentia.dev'
                
                },
            };
     },
     methods: {
         toggleDetails() {
             this.detailsAreVisible = !this.detailsAreVisible;
         }
     }
};
</script>

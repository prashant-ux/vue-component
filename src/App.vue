 <template>
  <section>
  <h2>My friends</h2>
  <ul>
     <friend-contact></friend-contact>
      </ul>
  </section>
 </template>

 <script>
 export default  {
     data() {
         return {
            friends: [
                {
                    id: 'me',
                    name: 'Prashant Tiwari',
                    phone: '32165442',
                    email: 'prashant.tiwari@essentia.dev'
                },
                {
                    id: 'manuel',
                    name: 'Manuel lorenz',
                    phone: '54623164',
                    email: 'manuel.lorenz@gmail.com'
                }
            ] 
         };
     }
 };
 </script>
 
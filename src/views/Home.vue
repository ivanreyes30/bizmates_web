<template>
  <div>
    <div class="banner h-screen overflow-auto">
      <div class="relative top-20 p-20">
        <div class="md:grid md:grid-cols-2">
          <div class="md:flex md:flex-col md:justify-center">
            <h1 class="font-bold text-5xl">Discover the world's top <br/> designer & creatives</h1>
            <br/>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </h5>
            <br/>
            <Button placeholder="Click Me!" type="button" button="1" disabled="false"/>
          </div>
          <div>
            <img src="../assets/travel_vector.png" class="mx-auto">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
  name: 'Home',
  components: {
    Button
  }
}

</script>

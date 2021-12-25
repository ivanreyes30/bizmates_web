<template>
  <div>
    <Error v-if="code != ''" :code="code" :message="message"/>
    <Loading v-if="loading"/>
    <div class="h-screen overflow-auto" :class="loading">
      <div class="absolute top-20 w-full p-10">
        <div class="grid lg:grid-cols-2 grid-rows-2">
          <div>
            <h1 class="text-3xl text-gray-500 font-bold text-center lg:text-left">
              VENUES LOCATION
            </h1>
            <div class="flex items-center mt-5 space-x-2 lg:justify-start justify-center">
              <i class="fas fa-map-marker text-xl"></i>
              
            </div>
          </div>
        </div>
        <div class="border-2 border-gray-200 w-full bg-white rounded card">
          <div class="flex">
            <div class="m-3">
              <img class="h-64 w-64 p-1" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
              <div class="w-64 p-1 flex flex-wrap justify-center items-start">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
                <img class="w-12 border-white border-2 h-12" src="https://fastly.4sqi.net/img/general/original/-u9hO1TPU7eJJTCu5BUJNjJ47QWjUBna3A5vRaI3rUU.jpg">
              </div>
            </div>
            <div class="m-3">
              <h1 class="text-2xl font-semibold">La Carmela de Boracay Hotel</h1>
            </div>
          </div>
        </div> 
        <!-- <ListBox 
          v-for="(list, idx) in data.list" 
          :key="idx"
          :clouds="list.clouds"
          :date="list.date"
          :day="list.day"
          :dt_txt="list.dt_txt"
          :feels_like="list.feels_like"
          :grnd_level="list.grnd_level"
          :humidity="list.humidity"
          :pressure="list.pressure"
          :sea_level="list.sea_level"
          :temp="list.temp"
          :temp_kf="list.temp_kf"
          :temp_max="list.temp_max"
          :temp_min="list.temp_min"
          :weather="list.weather"
          :wind="list.wind"
        /> -->
      </div>
    </div>
  </div>
</template>

<script>
import Error from '../components/Error.vue'
import Loading from '../components/Loading.vue'
// import ListBox from '../components/ListBox.vue'
// import Select from '../components/Select.vue'


export default {
  name: 'VenuesInfo',
  data: () => ({
    code: '',
    message: '',
    loading: false,
    display: false,
    data: [],
  }),
  components: {
    Error,
    Loading,
  },
  methods: {
    getInfo() {
      this.loading = true;
      this.$api().post('places/show', {
        near: this.$route.query.near,
        categories: this.$route.query.categories,
        ll: this.$route.query.ll,
      })
      .then((result) => {
        this.loading = false;
        console.log(result)
        // this.data = result.data.data;
        // this.city = result.data.data.city.name;
      })
      .catch((error) => {
        this.loading = false;
        this.message = error.response.data.message;
        this.code = error.response.status;
      })
    },
  },
  created() {
    this.getInfo();
  }
}

</script>

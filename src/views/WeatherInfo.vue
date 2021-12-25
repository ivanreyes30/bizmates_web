<template>
  <div>
    <Error v-if="code != ''" :code="code" :message="message"/>
    <Loading v-if="loading"/>
    <div class="h-screen overflow-auto" :class="loading">
      <div class="absolute top-20 w-full p-10">
        <div class="grid lg:grid-cols-2 grid-rows-2">
          <div>
            <h1 class="text-3xl text-gray-500 font-bold text-center lg:text-left">
              WEATHER FORECAST
            </h1>
            <div class="flex items-center mt-5 space-x-2 lg:justify-start justify-center">
              <i class="fas fa-map-marker text-xl"></i>
              <h3 class="text-xl font-semibold">{{data == [] ? "" : city}}</h3>
            </div>
          </div>
          <div class="flex lg:justify-end justify-center">
            <div>
              <label class="font-semibold text-sm">Units of Measurement</label>
              <Select :options="options_units" :select="1" @onChange="onChange($event)" name="unit" id="unit" add_class="w-96"/>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap space-x-5 justify-center items-center">
          <ListBox 
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
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Error from '../components/Error.vue'
import Loading from '../components/Loading.vue'
import ListBox from '../components/ListBox.vue'
import Select from '../components/Select.vue'


export default {
  name: 'Weather',
  data: () => ({
    code: '',
    message: '',
    loading: false,
    display: false,
    data: [],
    city: '',
    options_units: [
      {
        name: 'Celsius',
        value: 'metric',
        selected: true
      },
      {
        name: 'Fahrenheit',
        value: 'imperial',
        selected: true
      },
      {
        name: 'Kelvin',
        value: 'kelvin',
        selected: true
      }
    ],
    unit: 'metric'
  }),
  components: {
    Error,
    Loading,
    ListBox,
    Select
  },
  methods: {
    getInfo() {
      this.loading = true;
      this.$api().post('forecast/show', {
        city_name: this.$route.query.city_name,
        country_code: this.$route.query.country_code,
        state_code: this.$route.query.state_code,
        unit: this.unit
      })
      .then((result) => {
        this.loading = false;
        console.log(result)
        this.data = result.data.data;
        this.city = result.data.data.city.name;
      })
      .catch((error) => {
        this.loading = false;
        this.message = error.response.data.message;
        this.code = error.response.status;
      })
    },
    onChange({target}) {
      this[target.name] = target.value;
      this.getInfo();
    }
  },
  created() {
    this.getInfo();
  }
}

</script>

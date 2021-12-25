<template>
  <div>
    <div class="banner h-screen overflow-auto">
      <div class="relative top-20 p-20">
        <div class="flex flex-col justify-center items-center">
          <div class="lg:w-1/2">
            <h1 class="text-5xl font-bold mb-5">Check Venue Places</h1>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </h5>
            <br/>
            <ValidationObserver ref="observer" v-slot="{ handleSubmit, invalid }">
              <form @submit.prevent="handleSubmit(submit)">
                <div class="grid grid-rows-2 md:grid-cols-2 gap-5">
                  <ValidationProvider rules="required|max:20" v-slot="{ errors, validate }">
                    <Input 
                      id="location" 
                      name="location" 
                      placeholder="Location" 
                      input="1" 
                      @onChangeInputs="onChangeInputs($event, validate)"
                      :errors="errors"
                    />
                  </ValidationProvider>
                  <ValidationProvider rules="required|max:20" v-slot="{ errors }">
                    <v-select 
                      label="label" 
                      :options="category_taxonomy" 
                      v-model="category"
                      @input="onChangeSelect"
                      placeholder="Select Category"
                    ></v-select>
                    <p class="text-red-600" v-if="errors.length > 0">{{errors[0]}}</p>
                  </ValidationProvider>
                  <Button v-if="invalid" type="submit" placeholder="SUBMIT" button="3"/>
                  <Button v-if="!invalid" type="submit" placeholder="SUBMIT" button="2"/>
                </div>
              </form>
            </ValidationObserver>
            <!-- <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit }">
              <form @submit.prevent="handleSubmit(submit)">
                <div class="mt-10 md:grid md:grid-cols-3 md:gap-3">
                  <ValidationProvider rules="required|max:20" v-slot="{ errors, validate }">
                    <Input 
                      id="city_name" 
                      name="city_name" 
                      placeholder="City Name" 
                      input="1" 
                      add_class="mb-3 flex-none"
                      @onChangeInputs="onChangeInputs($event, validate)"
                      :errors="errors"
                    />
                  </ValidationProvider>
                  <ValidationProvider rules="required|max:20" v-slot="{ errors, validate }">
                    <Input 
                      id="state_code" 
                      name="state_code" 
                      placeholder="State Code" 
                      input="1" 
                      add_class="mb-3 flex-none"
                      @onChangeInputs="onChangeInputs($event, validate)"
                      :errors="errors"
                    />
                  </ValidationProvider>
                  <ValidationProvider rules="required|max:20" v-slot="{ errors, validate }">
                    <Input 
                      id="country_code" 
                      name="country_code" 
                      placeholder="Country Code" 
                      input="1" add_class="mb-3 flex-none"
                      @onChangeInputs="onChangeInputs($event, validate)"
                      :errors="errors"
                    />
                  </ValidationProvider>
                </div>
                <div class="mt-10">
                  <Button v-if="invalid" type="submit" placeholder="SUBMIT" button="3"/>
                  <Button v-if="!invalid" type="submit" placeholder="SUBMIT" button="2"/>
                </div>
              </form>
            </ValidationObserver> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'

export default {
  name: 'Venues',
  data: () => ({
    coords: '',
    state_code: '',
    country_code: '',
    category: '',
    category_taxonomy: []
  }),
  components: {
    Input,
    Button
  },
  methods: {
    submit() {
      this.$router.push({path:'/weather/info', query: {
        city_name: this.city_name,
        state_code: this.state_code,
        country_code: this.country_code
      }})
    },
    onChangeInputs({target}, validate) {
      this[target.name] = target.value;
      validate(target.value)
    },
    onChangeSelect(value) {
      this.category = value.id;
    },
    getCategoryTaxonomy() {
      this.$api().get('places/category_taxonomy')
      .then((result) => {
        this.category_taxonomy = result.data.data;
      })
      .catch((error) => {
        this.loading = false;
        this.message = error.response.data.message;
        this.code = error.response.status;
      })
    }
  },
  created() {
    navigator.geolocation.getCurrentPosition((result) => {
      this.coords = result.coords.latitude + ',' + result.coords.longitude;
    })
    this.getCategoryTaxonomy();
  }
}

</script>

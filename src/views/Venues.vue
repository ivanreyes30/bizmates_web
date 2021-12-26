<template>
  <div>
    <div class="banner h-screen overflow-auto">
      <Alert v-if="alert_show" :type="alert_type" :msg="alert_msg" :title="alert_title"/>
      <div class="flex items-center h-screen justify-center p-10">
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
                  <ValidationProvider rules="required|max:100" v-slot="{ errors, validate }">
                    <Input 
                      id="location" 
                      name="location" 
                      placeholder="Location" 
                      input="1" 
                      @onChangeInputs="onChangeInputs($event, validate)"
                      :errors="errors"
                    />
                  </ValidationProvider>
                  <ValidationProvider rules="required|max:100" v-slot="{ errors }">
                    <v-select 
                      label="label" 
                      :options="category_taxonomy" 
                      v-model="categories"
                      @input="onChangeSelect"
                      placeholder="Select Category"
                    ></v-select>
                    <p class="text-red-600" v-if="errors.length > 0">{{errors[0]}}</p>
                  </ValidationProvider>
                  <Button v-if="invalid" type="submit" placeholder="SUBMIT" button="3" :loading="loading_btn"/>
                  <Button v-if="!invalid" type="submit" placeholder="SUBMIT" button="2" :loading="loading_btn"/>
                </div>
              </form>
            </ValidationObserver>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import Alert from '../components/Alert.vue'
import { mapActions } from "vuex";

export default {
  name: 'Venues',
  data: () => ({
    coords: '',
    location: '',
    categories: '',
    category_taxonomy: [],
    categories_id: '',
    alert_type: 'error',
    alert_show: false,
    alert_msg: '',
    alert_title: '',
    loading_btn: false
  }),
  components: {
    Input,
    Button,
    Alert
  },
  methods: {
    submit() {
      this.loading_btn = true;
      const query = {
        categories: this.categories_id,
        near: this.location,
        ll: this.coords
      };
      this.getVenuesInfo(query).then((result) => {
        if(result.data.data.results.length > 0) {
          this.$router.push({path:'/venues/info', query });
        }
        else {
          this.alert_type = 'success';
          this.alert_show = true;
          this.alert_msg = 'No Data Found.';
          this.alert_title = 'Success!';
          this.loading_btn = false;
          setTimeout(() => this.alert_show = false, 3000);
        }
      })
      .catch((error) => {
        this.alert_show = true;
        this.loading_btn = false;
        this.alert_title = 'Warning!';
        this.alert_msg = error.response.data.message;
        setTimeout(() => this.alert_show = false, 3000);
      })
    },
    onChangeInputs({target}, validate) {
      this[target.name] = target.value;
      validate(target.value);
    },
    onChangeSelect(value) {
      this.categories = value.label;
      this.categories_id = value.id;
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
    },
    ...mapActions([
      'getVenuesInfo'
    ]),
  },
  created() {
    navigator.geolocation.getCurrentPosition((result) => {
      this.coords = result.coords.latitude + ',' + result.coords.longitude;
    })
    this.getCategoryTaxonomy();
  }
}

</script>

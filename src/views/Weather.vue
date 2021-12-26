<template>
  <div>
    <div class="banner h-screen overflow-auto">
      <Alert v-if="alert_show" :type="alert_type" :msg="alert_msg" :title="alert_title"/>
      <div class="flex items-center h-screen justify-center p-10">
        <div class="flex flex-col justify-center items-center">
          <div class="lg:w-1/2">
            <h1 class="text-5xl font-bold mb-5">Check Weather Location</h1>
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </h5>
            <ValidationObserver ref="observer" v-slot="{ invalid, handleSubmit }">
              <form @submit.prevent="handleSubmit(submit)">
                <div class="mt-10 md:grid md:grid-cols-3 md:gap-3">
                  <ValidationProvider rules="required|max:100" v-slot="{ errors, validate }">
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
                  <ValidationProvider rules="required|max:100" v-slot="{ errors, validate }">
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
                  <ValidationProvider rules="required|max:100" v-slot="{ errors, validate }">
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
  name: 'Weather',
  data: () => ({
    city_name: '',
    state_code: '',
    country_code: '',
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
        city_name: this.city_name,
        state_code: this.state_code,
        country_code: this.country_code
      };
      this.getWeatherInfo(query).then((result) => {
        if(result.data.data.list.length > 0) {
          this.$router.push({path:'/weather/info', query })
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
      validate(target.value)
    },
    ...mapActions([
      'getWeatherInfo'
    ]),
  }
}

</script>

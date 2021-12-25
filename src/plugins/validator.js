import Vue from 'vue'
import { ValidationProvider, ValidationObserver } from 'vee-validate';
import { extend } from 'vee-validate';
import { required, max, min } from 'vee-validate/dist/rules';

extend('required', {
    ...required,
    message: 'This field is required',
})

extend('max', {
    ...max,
    message: 'This field may not be greater than {length} characters',
})

extend('min', {
    ...min,
    message: 'This field may not be less than {length} characters',
})


Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
<template>
  <div>
    <Error v-if="code != ''" :code="code" :message="message"/>
    <Loading v-if="loading"/>
    <div class="h-screen overflow-auto">
      <div class="absolute top-20 w-full p-10">
        <div class="grid lg:grid-cols-2 grid-rows-2">
          <div>
            <h1 class="text-3xl text-gray-500 font-bold text-center lg:text-left">
              VENUES LOCATION
            </h1>
            <div class="flex items-center mt-5 space-x-2 lg:justify-start justify-center">
              <i class="fas fa-map-marker text-xl"></i>
              <span class="font-semibold text-lg">{{this.$route.query.near.toUpperCase()}}</span>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap justify-center">
          <Card 
            v-for="(list, idx) in data.results" 
            :key="'card'+idx"
            :address="(list.location.address !== undefined ? list.location.address + ', ' : '') +list.location.locality+', '+list.location.region+', '+list.location.postcode+', '+list.location.country"
            :categories="list.categories"
            :name="list.name"
            :images="list.images"
            @onClickImg="onClickImg($event)"
            @onCloseModal="onCloseModal()"
          />
        </div>
      </div>
    </div>
    <transition name="fade">
      <Modal v-if="show_modal" title="Image Preview" @onCloseModal="onCloseModal()">
        <template v-slot:image_preview>
          <img :src="src_preview"/>
        </template>
      </Modal>
    </transition>
  </div>
</template>

<script>
import Error from '../components/Error.vue'
import Loading from '../components/Loading.vue'
import Card from '../components/Card.vue'
import Modal from '../components/Modal.vue'
import { mapActions } from "vuex";

export default {
  name: 'VenuesInfo',
  data: () => ({
    code: '',
    message: '',
    loading: false,
    display: false,
    data: [],
    src_preview: '',
    show_modal: false
  }),
  components: {
    Error,
    Loading,
    Card,
    Modal
  },
  methods: {
    ...mapActions([
      'getVenuesInfo'
    ]),
    getInfo() {
      this.loading = true;
      const query = {
        near: this.$route.query.near,
        categories: this.$route.query.categories,
        ll: this.$route.query.ll,
      };
      this.getVenuesInfo(query).then((result) => {
        this.loading = false;
        this.data = result.data.data;
      })
      .catch((error) => {
        this.loading = false;
        this.message = error.response.data.message;
        this.code = error.response.status;
      })
    },
    onClickImg(value) {
      this.src_preview = value;
      this.show_modal = true;
    },
    onCloseModal() {
      this.show_modal = false;
    }
  },
  created() {
    this.getInfo();
  }
}

</script>

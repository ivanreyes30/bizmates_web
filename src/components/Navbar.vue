<template>
  <nav class="bg-white shadow-lg fixed top-0 left-0 right-0 z-10">
		<div class="px-10">
			<div class="">
				<div class="flex justify-between">
					<!-- Website Logo -->
					<div>
						<router-link to="/" exact-path class="flex items-center py-4 px-2">
							<img src="../assets/logo_travel.png" alt="Logo" class="h-8 w-8 mr-2" />
							<span class="font-semibold text-gray-500 text-lg"
								>Travelers</span
							>
						</router-link>
					</div>
					<!-- Primary Navbar items -->
					<div class="hidden md:flex items-center text-right space-x-1">
            <!-- py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold -->
            <router-link 
              v-for="(link, idx) in links" 
              :key="'web-'+idx" 
              class="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300 cursor-pointer"
              :to="link.url"
            >
              {{link.name}}
            </router-link>
					</div>
          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button class="outline-none mobile-menu-button" @click="hide">
              <svg
                class="w-6 h-6 text-gray-500"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
				</div>
			</div>
      <!-- Mobile menu -->
      <div :class="hidden" class="mobile-menu z-50">
        <ul class="">
          <li v-for="(link, idx) in links" :key="'mobile-'+idx">
            <router-link 
              :to="link.url"
              class="block text-sm px-2 py-4 hover:text-green-500 transition duration-300 cursor-pointer"
            >
              {{link.name}}
            </router-link>
          </li>
        </ul>
      </div>
		</div>
	</nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    hidden: 'hidden',
    links: [
      {
        id: 1,
        name: 'Weather Forecast',
        url: '/weather'
      },
      {
        id: 2,
        name: 'Venues',
        url: '/venues'
      }
    ]
  }),
  methods: {
    hide() {
      if(this.hidden == "") {
        this.hidden = "hidden";
      }
      else {
        this.hidden = "";
      }
    },
    myEventHandler() {
      const size = window.innerWidth;
      if(size > 765) {
        this.hidden = "hidden";
      }
    }
  },
  created() {
  window.addEventListener("resize", this.myEventHandler);
  },
  destroyed() {
    window.removeEventListener("resize", this.myEventHandler);
  }
}
</script>

<style>

</style>
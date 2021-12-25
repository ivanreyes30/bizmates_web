<template>
	<div class="border-2 border-gray-200 bg-white w-full lg:w-2/5 rounded card shadow-2xl m-5">
		<div class="flex">
			<div class="m-3">
				<img 
					v-if="images.length > 0" 
					class="h-64 w-64 p-1 cursor-pointer" 
					:src="images[0]"
					@click="$emit('onClickImg', images[0])"
				/>
				<div class="w-64 p-1 flex flex-wrap justify-center items-start">
					<template v-if="images.length > 0">
						<img 
							v-for="(image, idx) in images"
							:key="'image-'+idx"
							class="w-12 border-white border-2 h-12 cursor-pointer" 
							:src="image"
							@click="$emit('onClickImg', image)"
						/>
					</template>
				</div>
			</div>
			<div class="m-3">
				<h1 class="text-2xl font-semibold">{{name}}</h1>
				<div class="">
					<span class="text-blue-500">
						<i class="fas fa-map-marker text-md text-blue-400 mt-1"></i>
						{{address}} - 
						<a href="" class="text-blue-500">View on Map </a> 
					</span>
				</div>
				<div class="mt-2 text-justify">
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum mi a malesuada consequat. Sed interdum sem non tellus rhoncus, et rutrum nulla venenatis. Phasellus cursus a velit vel iaculis. Sed lorem ligula, varius in tempor nec, gravida vitae tortor. Donec a ante porttitor, pulvinar mi vel, blandit purus.
					</span>
				</div>
				<div class="mt-5">
					<h5 class="mb-2 text-xl font-semibold">Categories</h5>
					<ul class="flex flex-wrap space-x-2">
						<li v-for="(category, idx) in categories" :key="'category-'+idx" class="flex space-x-2 mb-2">
							<img :src="category.icon.prefix+'60'+category.icon.suffix" class="bg-black rounded-full h-8 w-8">
							<span>{{category.name}}</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div> 
</template>

<script>
export default {
  name: 'Card',
	props: [
		'address',
		'categories',
		'images',
		'name'
	]
}

</script>

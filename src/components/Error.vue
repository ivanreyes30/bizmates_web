<template>
  <div class="bg-red-500 h-screen z-1 fixed top-16 left-0 right-0">
		<div class="flex flex-col justify-center items-center h-screen">
			<div class="lg:w-1/2 text-center">
				<h1 class="text-6xl font-bold mb-5 text-white">
					{{code}}
				</h1>
				<h5 class="mb-5 text-white">
					{{message}}
				</h5>
			</div>
		</div>
	</div> 
</template>

<script>

export default {
  name: 'Error',
  props: ['code', 'message']
}

</script>

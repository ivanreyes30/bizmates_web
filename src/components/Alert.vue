
<template>
	<div>
		<transition name="fade">
			<div 
				class="bg-red-500 text-white border-l-4 border-red-500 text-white p-4 absolute top-20 right-4 z-1 w-96" 
				role="alert"
				v-if="type == 'error'"
			>
				<p class="font-bold text-xl">{{title}}</p>
				<p>{{msg}}</p>
			</div>
			<div 
				class="bg-green-500 text-white border-l-4 border-green-500 text-white p-4 absolute top-20 right-4 z-1 w-96" 
				role="alert"
				v-if="type == 'success'"
			>
				<p class="font-bold text-xl">{{title}}</p>
				<p>{{msg}}</p>
			</div>
		</transition>
	</div>
</template>

<script>

export default {
  name: 'Alert',
	props: ['type', 'title', 'msg']
}

</script>

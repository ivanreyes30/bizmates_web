<template>
  <div class="h-screen overflow-auto">
		<div class="w-full p-10 text-center h-screen flex justify-center items-center">
			<div>
				<h1 class="text-9xl font-bold">404</h1>
				<br/>
				<h2 class="text-3xl font-bold">Opps! Page Not Found</h2>
				<h5 class="text-2xl mt-3">Sorry, the page you're looking for doesn't exist. <br />If you think something is broken, report  a problem </h5>
			</div>
		</div>
	</div>
</template>

<script>

export default {
  name: 'PageNotFound',
  data: () => ({
    code: '',
    message: '',
    loading: false,
    display: false,
    data: [],
    src_preview: '',
    show_modal: false
  }),
}

</script>

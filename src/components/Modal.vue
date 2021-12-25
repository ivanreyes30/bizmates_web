<template>
  <div>
    <div @click="$emit('onCloseModal')" class="flex justify-center h-screen items-center rgba-black antialiased overflow-auto fixed top-0 left-0 right-0 transition-all ease-out duration-700">
      <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl absolute top-32">
        <div
          class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg"
        >
          <p class="font-semibold text-gray-800">{{title}}</p>
          <div class="cursor-pointer" @click="$emit('onCloseModal')">
						<svg
							class="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M6 18L18 6M6 6l12 12"
							></path>
						</svg>
					</div>
        </div>
        <div class="flex flex-col px-6 py-5 bg-gray-50">
          <slot name="image_preview"></slot>
        </div>
        <div
          class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg"
        >
          <!-- <p class="font-semibold text-gray-600">Cancel</p>
          <button class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
            Save
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Modal',
  props: ['title']
}

</script>

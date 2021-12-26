<template>
  <div>
    <button 
        v-if="button == 1 && !loading"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-32"
        :class="add_class"
        :id="id"
        :type="type"
    >
        {{placeholder}}
    </button>
    <button 
        v-if="button == 2 && !loading"
        class="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-4 rounded w-32"
        :class="add_class"
        :id="id"
        :type="type"
    >
        {{placeholder}}
    </button>
    <button 
        v-if="button == 3 && !loading"
        class="bg-green-500 text-white font-bold py-3 px-4 rounded opacity-50 cursor-not-allowed w-32"
        :class="add_class"
        :id="id"
        :type="type"
    >
        {{placeholder}}
    </button>
    <div 
      v-if="loading"
      style="border-top-color:transparent"
      class="w-16 h-16 border-4 border-blue-400 border-dotted rounded-full animate-spin"
    ></div>
  </div>
</template>

<script>

export default {
  name: 'Button',
  props: ['button', 'placeholder', 'type', 'id', 'add_class', 'loading']
}

</script>

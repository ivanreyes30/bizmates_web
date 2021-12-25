<template>
  <div>
    <button 
        v-if="button == 1"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded w-32"
        :class="add_class"
        :id="id"
        :type="type"
    >
        {{placeholder}}
    </button>
    <button 
        v-if="button == 2"
        class="bg-green-500 hover:bg-green-400 text-white font-bold py-3 px-4 rounded w-32"
        :class="add_class"
        :id="id"
        :type="type"
    >
        {{placeholder}}
    </button>
    <button 
        v-if="button == 3"
        class="bg-green-500 text-white font-bold py-3 px-4 rounded opacity-50 cursor-not-allowed w-32"
        :class="add_class"
        :id="id"
        :type="type"
    >
        {{placeholder}}
    </button>
  </div>
</template>

<script>

export default {
  name: 'Button',
  props: ['button', 'placeholder', 'type', 'id', 'add_class']
}

</script>

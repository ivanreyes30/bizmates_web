<template>
  <div>
    <input
			v-if="input == 1"
			class="shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
			type="text" 
			:id="id" 
			:placeholder="placeholder"
			:name="name"
			:class="add_class"
			v-model="input_value"
			@input="$emit('onChangeInputs', $event)"
    />
		<p class="text-red-600" v-if="errors !== undefined">{{errors[0]}}</p>
  </div>
</template>

<script>

export default {
  name: 'Input',
  data: () => ({
    input_value: ''
  }),
  props: ['input', 'placeholder', 'name', 'id', 'add_class', 'errors']
}

</script>

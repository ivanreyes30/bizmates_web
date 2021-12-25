<template>
  <div>
    <select v-if="select == 1" class="form-select appearance-none
      block
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      cursor-pointer
      focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example"
      v-model="select_value"
      @change="$emit('onChange', $event)"
      :name="name"
      :id="id"
      :class="add_class"
    >
      <option 
        v-for="(option, idx) in options" 
        :key="idx" 
        :value="option.value" 
        :selected="option.selected"
      >
        {{option.name}}
      </option>
    </select>
  </div>
</template>

<script>

export default {
  name: 'Select',
  data: () => ({
    select_value: 'metric'
  }),
  props: ['options', 'select', 'name', 'id', 'add_class']
}

</script>

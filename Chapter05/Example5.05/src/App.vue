<template>
  <div id="app">
    <fieldset>
      <label for="textinput">
        Text Input
      </label>
      <CustomInput
        type="text"
        name="textinput"
        id="textinput"
      />
    </fieldset>
    <fieldset>
      <label for="dateinput">
        Date Input
      </label>
      <CustomInput
        type="date"
        name="dateinput"
        id="dateinput"
      />
    </fieldset>
    <br />
    <br />
    <br />
    <label>Short Text: {{ shortText }}</label>
    <TextInput v-model="shortText" type="short" />
    <label>Long Text: {{ longText }}</label>
    <TextInput v-model="longText" type="long" />
  </div>
</template>
<script>
import CustomInput from './components/CustomInput.vue'
import TextInput from './components/TextInput.vue'

export default {
  components: {
    CustomInput,
    TextInput
  },
  data() {
    return {
      shortText: '',
      longText: ''
    }
  }
}
</script>

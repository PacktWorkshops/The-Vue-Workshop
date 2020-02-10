<template>
  <div id="app">
    <StringTemplate />
    <br />
    <br />
    <br />
    <RenderFunction />
    <br />
    <br />
    <br />
    <JSXRender />
  </div>
</template>
<script>
import StringTemplate from './components/StringTemplate.js'
import RenderFunction from './components/RenderFunction.js'
import JSXRender from './components/JSXRender.js'


export default {
  components: {
    StringTemplate,
    RenderFunction,
    JSXRender
  }
}
</script>

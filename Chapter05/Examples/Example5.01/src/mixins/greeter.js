export default {
  methods: {
    greet(name) {
      return `${this.greeting} ${name}`
    } 
  },
  data() {
    return {
      greeting: 'Hello'
    }
  }
}

/* eslint-disable no-console */
import Vue from 'vue'

const eventBus = new Vue()

console.log('Registering subscriber to "fieldChanged"')
eventBus.$on('fieldChanged', (event) => {
  console.log(`Received event: ${JSON.stringify(event)}`);
})

console.log('Triggering "fieldChanged" for "name"')
eventBus.$emit('fieldChanged', {
  name: 'name',
  value: 'John Doe'
})

console.log('Triggering "fieldChanged" for "occupation"')
eventBus.$emit('fieldChanged', {
  name: 'occupation',
  value: 'Developer'
})

const subscriber = (event) => {
  console.log(`Subscriber 2 received event: ${JSON.stringify(event)}`)
}
console.log('Registering subscriber 2')
eventBus.$on('fieldChanged', subscriber)

console.log('Triggering "fieldChanged" for "company"')
eventBus.$emit('fieldChanged', {
  name: 'company',
  value: 'Developer'
})

console.log('Unregistering subscriber 2')
eventBus.$off('fieldChanged', subscriber)

console.log('Triggering "fieldChanged" for "occupation"')
eventBus.$emit('fieldChanged', {
  name: 'occupation',
  value: 'Senior Developer'
})

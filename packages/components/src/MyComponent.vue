<template>
  <h1>This is your component!222</h1>
  <div>
    <p data-test-message>{{ message }} !!</p>
  </div>
  <button @click="emit('messageChange', 'ddd')">dfsafasd</button>
</template>

<style lang="postcss"></style>

<script lang="ts">
export default {
	name: 'MyComponent',
}
</script>
<script setup lang="ts">
  const { 
    message = 'no message'
  } = defineProps<{
    message?: string
  }>()
  const emit = defineEmits<{
    (e: 'messageChange', message: string): void
  }>()
</script>

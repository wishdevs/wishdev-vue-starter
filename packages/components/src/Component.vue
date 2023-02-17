<!--

import { defineComponent } from 'vue'
export default defineComponent({
name: 'MyComponent',
props: {
message: { type: String, required: true },
},
emits: ['messageChanged'],
setup() {},
})
-->
<script lang="ts">
export default {
	name: 'MyComponent',
}
</script>
<script setup lang="ts">
const { message } = defineProps<{
	message: string
}>()
const emit = defineEmits<{
	(e: 'messageChange', message: string): void
}>()
</script>
<template>
	<h1>This is your component!222</h1>
	<div>
		<p data-test-message>{{ message }} !!</p>
	</div>
	<button @click="emit('messageChange', 'ddd')">dfsafasd</button>
</template>
<style lang="postcss"></style>

<template>
	<div data-cy="User">
		username: {{ username }}
	</div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'

interface Props {
	username:string
}

defineProps<Props>()



</script>

<style scoped>

</style>
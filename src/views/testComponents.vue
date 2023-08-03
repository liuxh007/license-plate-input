<script setup>
import LicensePlateInput from '../package/license-plate-input/index.vue'
function confirm(v) {
    console.log(v)
}
</script>

<template>
    <LicensePlateInput @confirm="confirm"></LicensePlateInput>
</template>

<script setup>
import LicensePlateInput from '../package/license-plate-input/index.vue'
function confirm(v) {
    console.log(v)
}
</script>

<template>
    <LicensePlateInput
        @confirm="confirm"
        page-name="车牌录入"
    ></LicensePlateInput>
</template>

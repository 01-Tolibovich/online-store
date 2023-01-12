<template>
    <div class="v-catalog-item">
        <img :src="`${product_data.image}`" alt="">
        <p>{{ product_data.name }}</p>
        <p>Price: {{ product_data.price }} C</p>
        <button
        >Add to cart</button>
    </div>
</template>

<script>
export default {
    name: "v-catalog",
    props: {
        product_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    data() {
        return {

        }
    },
    methods: {
        
    }
}
</script>

<style lang="scss">

</style>

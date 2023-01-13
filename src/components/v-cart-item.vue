<template>
    <div class="v-cart-item">
        <img :src="`${cart_item_data.image}`" alt="">
        <p>{{ cart_item_data.name }}</p>
        <p>{{ cart_item_data.price }}</p>
        <p>{{ cart_item_data.article }}</p>
        <div class="quantity"></div>
        <button @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
export default {
    name: 'v-cart-item',
    data() {
        return{}
    },
    props: {
        cart_item_data: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        deleteFromCart() {
            this.$emit('deleteFromCart')
        }
    }
}
</script>

<style lang="scss">
.v-cart-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    grid-gap: 2em;
    margin: 2em 0;
    justify-items: center;
    align-items: center;
    background-color: #454545;
    img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        object-position: center;
    }

    button {
        background-color: #c90000;
        width: 100%;
        height: 100%;
    }
}
</style>
<template>
    <div class="v-catalog">
        <h1>Catalog</h1>
        <div class="v-catalog-items">
            <vCatalogItem 
                v-for="product in PRODUCTS"
                :key="product.article"
                v-bind:product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
import vCatalogItem from './v-catalog-item.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
    name: "v-catalog",
    components: { vCatalogItem },
    data() {
        return {
        }
    },
    methods: {
        ...mapActions([
            'GET_PRODUCTS_FROM_API',
            'ADD_TO_CART'
        ]),
        addToCart(data) {
            this.ADD_TO_CART(data)
        }
    },
    mounted() {
        this.GET_PRODUCTS_FROM_API()
        .then((response) => {
            if(response.data) {
                console.log('Data arrived!')
            }
        })
    },
    computed: {
        ...mapGetters([
            'PRODUCTS'
        ])
    }
}
</script>

<style lang="scss">
.v-catalog {
    width: 100%;

    .v-catalog-items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 2em;

        .v-catalog-item {
            background-color: #454545;
            padding: 1em;
            border-radius: 1em;
            box-shadow: 0px 0px 8px 1px #00ffb173;
            border: 2px solid #ffffff40;

            img {
                width: 100%;
                height: 300px;
                object-fit: cover;
                object-position: center;
                border-radius: 1em;
            }
        }
    }
}
</style>
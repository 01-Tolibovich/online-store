<template>
    <div class="v-maim-wrapper">
        <router-view></router-view>
        <!-- <vCatalog />
            <vCart 
                v-if="CART.length"
                :cart_data="CART"
            /> -->
    </div>
</template>

<script>
// import vCatalog from './v-catalog.vue';
// import vCart from './v-cart.vue';
import { mapGetters } from 'vuex';
export default {
// components: { vCatalog, vCart },
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    computed: {
        ...mapGetters([
            'CART'
        ])
    }
}
</script>

<style lang="scss">
.v-maim-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;

    .v-cart {
        width: 100%;
    }
}
</style>
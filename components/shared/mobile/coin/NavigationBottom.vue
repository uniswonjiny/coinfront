<template lang="html">
    <div class="ps-navigation--footer">
        <div class="ps-nav__item ">
            <nuxt-link to="/coin/uniMining" class="font-weight-bold">Home</nuxt-link>
        </div>
        <div class="ps-nav__item">
            <nuxt-link to="/coin/uniPoint" class="font-weight-bold">
                Uni Point
            </nuxt-link>
        </div>
        <div class="ps-nav__item">
            <nuxt-link to="/coin/btcPoint" class="font-weight-bold">BTC Point</nuxt-link>
        </div>
        <div class="ps-nav__item">
            <nuxt-link to="/setting" class="font-weight-bold">설정</nuxt-link>
        </div>

    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'NavigationBottom',
    computed: {
        ...mapState({
            currentDrawerContent: state => state.app.currentDrawerContent,
            cartItems: state => state.cart.cartItems,
            wishlistItems: state => state.wishlist.items
        }),
        productCartQuantity() {
            let quantity = 0;
            this.cartItems.forEach(element => {
                quantity += element.quantity;
            });
            return quantity;
        }
    },
    data() {
        return {
            drawer: true
        };
    },
    methods: {
        handleOpenDrawer(drawer) {
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        },
        handleCloseDrawer() {
            this.$store.commit('app/setCurrentDrawerContent', null);
            this.$store.commit('app/setAppDrawer', false);
        }
    }
};
</script>

<style lang="scss" scoped>
    .ps-nav__item {
        font-size: 17px;
    }

</style>

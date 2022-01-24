<template>
    <header :class="['ps-header ps-header--1', { 'ps-header--sticky': sticky }]">
        <notification />
        <div class="ps-header__top">
            <div class="container">
                <div class="ps-header__text">고객센터 <strong>02 - 1600 - 0174</strong></div>
            </div>
        </div>
        <div class="ps-header__middle">
            <div class="container">
                <div class="ps-logo">
                    <nuxt-link to="/"> 
                        <img src="/img/unicoin.png" alt>
                        <img class="sticky-logo" src="/img/unicoin.png" alt>
                    </nuxt-link>
                </div>
                <a class="ps-menu--sticky" href="#" @click.prevent="handleOpenMenu()"><i class="fa fa-bars"></i></a>
                <div class="ps-header__right">
                    <ul class="ps-header__icons">
                        <li class="ps-header__user">
                            <a href="#" class="active  ps-header__item"><i class="icon-user"></i></a> 
                            <login-modal />
                        </li>
                        <li class="">
                            <nuxt-link to="/shop/wishlist" class="ps-header__item"><i class="fa fa-bell-o"></i>
                            <span class="badge">5</span></nuxt-link>
                        </li>
                    </ul>
                    <language-currency />
                    <form-search />
                </div>
            </div>
        </div>
        <div :class="['ps-navigation', { 'active': showNavigation }]">
            <div class="container">
                <div class="ps-navigation__left">
                    <nav class="ps-main-menu">
                    </nav>
                </div>
                <div class="ps-navigation__right">고객센터: <strong>02 - 1600 - 0174</strong></div>
            </div>
        </div>
    </header>
</template>

<script>
import Notification from '~/components/shared/headers/modules/Notification';
import { coinMenu } from '~/static/data/menu.json';
import { getProductById } from '~/repositories/ProductRepository';
import LoginModal from '~/components/shared/headers/modules/LoginModal';
import { mapState } from 'vuex';

export default {
    components: { Notification, LoginModal },
    data() {
        return {
            mainMenu: coinMenu,
            product: null,
            sticky: false,
            showNavigation: false
        }
    },
    computed: {
        ...mapState({
            cartItems: state => state.cart.cartItems,
            wishlistItems: state => state.wishlist.items,
            appDrawer: state => state.app.appDrawer
        }),
        productCartQuantity() {
            let quantity = 0;
            this.cartItems.forEach(element => {
                quantity += element.quantity;
            });
            return quantity;
        }
    },
    created() {
        window.addEventListener('scroll', this.handleScroll);
        this.handleScroll();
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    async mounted() {
        this.product = await getProductById(5);
    },
    methods: {
        handleScroll() {
            let scroll = window.scrollY;
            if (scroll > 200) {
                this.sticky = true;
            } else {
                this.sticky = false;
            }
        },
        handleOpenDrawer(drawer) {
            this.$store.commit('app/setCurrentDrawerContent', drawer);
            this.$store.commit('app/setAppDrawer', !this.appDrawer);
        },
        handleOpenMenu() {
            this.showNavigation = !this.showNavigation;
        }
    }
}
</script>

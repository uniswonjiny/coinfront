<template>
  <client-only>
    <v-app>
      <v-main class="ps-page">
        <header-coin/>
        <header-mobile-coin/>
        <nuxt></nuxt>
        <footer-vcoin/>
      </v-main>
      <navigation-bottom/>
      <scroll-top/>
      <notify-dialog/>
      <loading/>
    </v-app>
  </client-only>
</template>

<script>
import NavigationBottom from '~/components/shared/mobile/coin/NavigationBottom';
import ScrollTop from '~/components/shared/ScrollTop';
import NotifyDialog from '~/components/elements/commons/NotifyDialog';
import FooterVcoin from '~/components/shared/footers/FooterVcoin';
import HeaderCoin from '~/components/shared/headers/HeaderCoin';
import HeaderMobileCoin from '~/components/shared/mobile/headers/HeaderCoin';
import Loading from '~/components/shared/Loading';

export default {
  middleware: 'authentication',
  components: {
    NavigationBottom,
    ScrollTop,
    NotifyDialog,
    FooterVcoin,
    HeaderCoin,
    HeaderMobileCoin,
    Loading
  },
  created() {
    this.$store.commit('app/setLoading', true);
    this.$store.commit('cart/setDialogAddCart', false);
    this.$store.commit('cart/setDialogQuickview', false);
    this.$store.commit('cart/setDialogAddCart2', false);
    this.$store.commit('app/setCurrentDrawerContent', null);
    this.$store.commit('app/setAppDrawer', false);
    this.$store.commit('cart/setDialogAddCart', false);
  }
};
</script>

<style lang="scss" scoped></style>

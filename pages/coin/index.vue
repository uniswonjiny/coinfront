<template>
  <div class="ps-categogy">
    <div class="container">
      <breadcrumb :dataList="breadcrumb"/>
      <h1 class="ps-categogy__name">메인페이지<sup>(01)</sup></h1>
      <div class="ps-categogy__content">
        <div class="row row-reverse">
          <h1>코인메인페이지</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import {mapState} from 'vuex';

export default {
  layout: 'coin',
  components: {
    Breadcrumb
  },
  data() {
    return {
      breadcrumb: [
        {
          url: '/',
          text: 'COIN'
        }
      ]
    };
  },
  computed: {
    ...mapState({
      loading: state => state.app.loading
    })
  },
  mounted() {
    this.$router.push('/coin/uniMining')
  },
};
</script>

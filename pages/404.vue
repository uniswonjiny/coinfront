<template lang="html">
    <client-only>
        <v-app>
            <v-main class="ps-page">
                <div class="ps-page--notfound">
                    <div class="container">
                        <div class="ps-page__content">
                            <div class="row">
                                <div class="col-12 col-md-6 col-lg-5">
                                    <img
                                        src="/img/cartoon-doctor.jpg"
                                        alt="cartoon-doctor"
                                    />
                                </div>
                                <div class="col-12 col-md-6 col-lg-7">
                                    <h1 class="ps-page__name">404</h1>
                                    <h5>
                                        서비스가 지원되지 않습니다.
                                    </h5>
                                    <p>
                                        주소를 확인하세요
                                    </p>
                                    <div>
                                        <nuxt-link
                                            class="ps-btn ps-btn--primary"
                                            to="/"
                                        >메인페이지로 이동
                                        </nuxt-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </v-main>
        </v-app>
    </client-only>
</template>
<script>
export default {
    layout: 'empty',
    head() {
        return this.pageNotFound
    },
    data() {
        return {
            pageNotFound: '404 Not Found',
        };
    }
};
</script>

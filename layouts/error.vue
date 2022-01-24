<template lang="html">
    <client-only>
        <v-app>
            <div class="container my-auto">
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
                                            요청한 페이지를 찾을 수 없습니다
                                        </h5>
                                        <p>
                                            정확한 페이지주소를 확인해주세요
                                        </p>
                                        <div>
                                            <nuxt-link
                                                class="ps-btn ps-btn--primary"
                                                to="/"
                                            >
                                                Back to homepage
                                            </nuxt-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-main>
            </div>
        </v-app>
    </client-only>
</template>
<script>

export default {
    layout: 'empty'
};
</script>

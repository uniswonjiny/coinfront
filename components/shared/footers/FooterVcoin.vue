<template>
    <footer class="ps-footer ps-footer--13 ps-footer--14">
        <div class="container">
            <div class="ps-footer__middle">
                <div class="row">
                    <div class="col-12 col-md-9">
                        <div class="row">
                            <div class="col-12 col-sm-6 col-md-5">
                                <footer-address/>
                            </div>
                            <div class="col-12 col-sm-6 col-md-7">
                                <footer-contact/>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-3">
                        <div class="row">
                            <div class="col-12">
                                <div class="ps-footer--block">
                                    <h5 class="ps-block__title">{{ unicoreStore.title }}</h5>
                                    
                                    <ul class="ps-block__list">
                                        <li
                                            class="has-mega-menu"
                                        >
                                            <nuxt-link
                                                to="#"
                                                class="nav-link"
                                            >
                                            유니코아
                                            </nuxt-link>
                                        </li>
                                        <li
                                            class="has-mega-menu"
                                        >
                                            <nuxt-link
                                                to="#"
                                                class="nav-link"
                                            >
                                            비즈페이
                                            </nuxt-link>
                                        </li>
                                        <li
                                            class="has-mega-menu"
                                        >
                                            <nuxt-link
                                                to="#"
                                                class="nav-link"
                                            >
                                            와따
                                            </nuxt-link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer-bottom/>
        </div>
    </footer>
</template>

<script>
import FooterBottom from '~/components/shared/footers/modules/coin/FooterBottom';
import FooterContact from '~/components/shared/footers/modules/coin/FooterContact';
import FooterAddress from '~/components/shared/footers/modules/coin/FooterAddress';
import { unicoreStore } from '~/static/data/footer.json';


export default {
    components: { FooterBottom, FooterContact, FooterAddress },
    data() {
        return {
            unicoreStore
        }
    }
}
</script>

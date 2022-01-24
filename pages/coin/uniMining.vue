<template>
    <div class="container">
        <breadcrumb :dataList="breadcrumb" />
        <div class=" ps-product--detail">
            <div class="ps-product__title"> <a href.stop="#">UNI Mining</a></div>
            <div class="ps-page__content">
                <div class="row ">
                    <div class="col-12 col-md-6 ">
                        <div class="row">
                            <div class="col-3">
                                <h6>{{ coinInfo.title }}</h6>
                            </div>
                            <div class="col-9 text-right">
                                <sub>{{coinInfo.captions}}</sub>
                            </div>
                        </div>
                        <table-oriented :dataList="coinInfo.data" class="my-0" />
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="row">
                            <div class="col-3">
                                <h6>{{ sumInfo.title }}</h6>
                            </div>
                            <div class="col-9 text-right">
                                <sub class="text-muted">{{sumInfo.captions}}</sub>
                            </div>
                        </div>
                        <table-oriented :dataList="sumInfo.data" class="my-0" />
                    </div>
                </div>
            </div>
        </div>
        <v-divider/>
    </div>
</template>

<script>
import Breadcrumb from '~/components/elements/commons/Breadcrumb';
import TableOriented from '~/components/elements/commons/TableOriented';
import { mapState } from 'vuex';

export default {
    layout: 'coin',
    components: {
        Breadcrumb,
        TableOriented,
    },
    data() {
        return {
            breadcrumb: [
                {
                    url: '/',
                    text: 'Home'
                },
                {
                    url: '/coin/uniMining',
                    text: 'UNI mining'
                }
            ],
            coinInfo : {
                title: '누적수익',
                captions : '현재시세 1.0BTC = 85,000,000',
                data: [
                    {
                        title: '채굴수익(BTC/원)',
                        text: '0.12345678 bit (1,555,000 원)',
                    },{
                        title: '추천수익(BTC/원)',
                        text: '0.000258 bit (1,555,000 원)',
                    },{
                        title: '추천수익플러스(BTC/원)',
                        text: '0.000258 bit (1,555,000 원)',
                    },{
                        title: '총계\n(BTC/원)',
                        text: '0.000258 bit (1,555,000 원)',
                    },{
                        title: '수익률 (누적수익+투자금액)',
                        text: '10%',
                    }
                ]
            },
            sumInfo : {
                title: '구매금액',
                    captions : '최초수익발생일: 2021년12월12일 / 30일경과',
                    data: [
                        {
                            title: '총구매수량\n(UNI point)',
                            text: '10,000'
                        },
                        {
                            title: '누적 투자액\n(원)',
                            text: '3,000,000'
                        }
                    ]
            }
        };
    },
    computed: {
        ...mapState({
            loading: state => state.app.loading
        })
    },
    mounted() {
    },
    methods: {
    }
};
</script>

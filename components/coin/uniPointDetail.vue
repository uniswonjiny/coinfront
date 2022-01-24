<template>
  <div>
    
        <v-dialog v-model="cashDialog">
            <v-card>
                <v-card-title>
                    현금영수증~~~~
                    <v-spacer/>
                    <v-btn @click="cashDialog=false">닫기</v-btn>
                </v-card-title>
            </v-card>
        </v-dialog>
  
  <v-dialog v-model="dialog"  max-width="600">
            <v-card flat class="mb-0 pb-0">
                <v-app-bar flat dense dark color="#103178">
                    No: 202112230001
                    <v-spacer/>
                    <v-btn
                        color="white"
                        icon
                        @click="dialog=false"
                        >
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-app-bar>
                <v-card-text>
                        <v-row class="mt-1">
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래유형
                            </v-col>
                            <v-col cols="7" class="text-right">Uni Point {{info ? info.type1 : ''}}</v-col>
                  
                       
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                요청일시
                            </v-col>
                            <v-col cols="7" class="text-right">2020.01.01. 23:11:01</v-col>
                        
                      
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                처리일시
                            </v-col>
                            <v-col cols="7" class="text-right">2020.01.02. 23:11:01</v-col>
              
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래수량
                            </v-col>
                            <v-col cols="7" class="text-right">2,000 UNIP</v-col>
                        </v-row>
                        <v-divider/>
                        <v-row>
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래단가
                            </v-col>
                            <v-col cols="7" class="text-right">5,200,000 원</v-col>
               
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래금액
                            </v-col>
                            <v-col cols="7" class="text-right">500,200,000 원</v-col>
                
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                부가세
                            </v-col>
                            <v-col cols="7" class="text-right">200,000 원</v-col>
                    
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                최종금액
                            </v-col>
                            <v-col cols="7" class="text-right">750,000,000 원</v-col>
                        </v-row>
                    <v-divider/>
                        <v-row>
                            <v-col cols="5" class="my-auto">
                                <v-icon>mdi-square-small</v-icon>
                                거래방법
                            </v-col>
                            <v-col cols="7" class="text-right ">
                                <div>은행입금</div>
                                           <div>하나은행 - 유니코아</div>
                                           <div>111-0011-4577-21</div>
                            </v-col>
                   
                            <v-col cols="5">
                                <v-icon>mdi-square-small</v-icon>
                                거래증빙
                            </v-col>
                            <v-col cols="7" class="text-right">소득공제 
                                <v-btn text color="primary" @click="cashDialog=true">[출력]</v-btn>
                            </v-col>
                        </v-row>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
export default {
  props: {
      dialog: Boolean,
      info: Object
  },
  data() {
    return {
      cashDialog: false
    }
  },
  methods: {
    closeEvent(){
      $emit('closeEvent', 'false')
    }
  }
}
</script>

<style>

</style>
<template>
    <div>
      计数器: <button @click="minus">-</button>
      <br/>
      {{$store.state.count}}
      <br/>
      计数器: <button @click="add">+</button>
      {{$store.getters.val}}
    </div>
</template>
<script>
  import * as Types from "../store/mutation-types";
    export default {
        data() {
          return {msg:"hahahahaha"}
        },
        methods: {
          add(){
            this.$store.commit(Types.INCREMENT,2)
          },
          minus(){
            this.$store.commit(Types.DECREMENT,3)
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped>

</style>

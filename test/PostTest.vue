<template>
  <div>
    <button @click="postTest">连接本地测试</button>
    <button @click="yxPostTest">连接易销测试</button>
  </div>
</template>

<script>
export default {
  name: 'PostTest',
  methods: {
    postTest () {
      const vm = this
      vm.$http.post('/redisSession').then(res => {
      }).catch(res => {
      })
    },
    yxPostTest () {
      // document.cookie = '_FSESSIONID=nZp0Vvo010HBICB9'
      const vm = this
      // vm.$http({
      //   method: 'post',
      //   url: '/client/tsClient_h.jsp?cmd=getTsClientList',
      //   // data: JSON.stringify({sid: -1}),
      //   params: { sid: -1 },
      //   headers: {
      //     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      //   }
      // }).then(res => {
      // })
      vm.$yxPost('/client/tsClient_h.jsp?cmd=getTsClientList', { sid: -1 }).then(res => {
      })
      // vm.$http.post('/client/tsClient_h.jsp?cmd=getTsClientList&sid=-1').then(res => {
      // }).catch(res => {
      // })
    }
  }
}
</script>

<style scoped>

</style>

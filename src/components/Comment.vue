<template>
  <div class="comentCon">
    <!--<h1 @click="showRoter()">{{ msg }}</h1>-->
    <!--<ul><li v-for="item in info">{{item.name}}</li></ul>-->
    <div v-for="item in info">
      <div class="content">
        <!--<div class="hp">{{item.user}}</div>
        <div class="coment">{{item.countent}}</div>-->
        <div class="headerImg"><img width="80" height="100" src="../assets/tj1.jpg" alt=""></div>
        <div class="comentInfo">{{item.countent}}</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    created() {
      this.$http.get('http://localhost:1010/apiRouter/coments').then((data) => {
        console.log(data.data);
        this.info = data.data.data;
      });
    },
    data() {
      return {
        msg: '评论列表',
        info: []
      }
    },
    methods: {
      showRoter() {
        console.log(this)
        this.$router.push('/goods');
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .content {
    display: flex;
    overflow: hidden;
    height: 100px;
    border-bottom:1px solid gray;
  }

  .content .hp {
    display: inline-block;
    width: 20%
  }

  .content .coment {
    display: inline-block;
    width: 80%
  }
  .comentCon {
    position:absolute;
    overflow:auto;
    top:50px;
    bottom:0;
    width:100%;
    /*background: url(../assets/tj4.jpg) no-repeat;
    -webkit-background-size: 100% 100%;
    background-size: 100% 100%;*/
  }

  .headerImg {
    display:inline-block;
    height:100%;
    width:80px;
  }
  .comentInfo {
    display:inline-block;
    flex:1;
    height:100%;
    width:100%;
  }
</style>

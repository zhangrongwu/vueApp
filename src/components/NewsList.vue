<template>
  <div class="newsList">
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-load="allLoaded" ref="loadmore">
      <ul>
        <li v-for="(value, index) in list" class="news-list">
          <img  v-lazy=value.image class="news-list-image">
          <p class="news-list-title">{{value.title}}}</p>
          <p class="news-list-subTitle">{{value.subTitle}}</p>
          <p class="news-list-date">{{value.date}}</p>
        </li>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
  export default {
    name: "NewsList",
    data() {
      return {
        list: [
          {
            'image': 'https://img.jinse.com/983832_image1.png',
            'title': '美证监会推迟批复Driexion Investments提交的比特币ETF申请 决议将在9月21日公布',
            'subTitle': '今年一月，Driexion Investments提交了5个比特币交易所交易基金申请，其中一个基金是直接与比特币价格相匹配的，其余四个基金则是基于比特币的价格波动。',
            'url': 'http://www.baidu.com',
            'date': '2018-07-25'
          },
          {
            'image': 'https://img.jinse.com/983913_image1.png',
            'title': '蒋宇捷：我的区块链投资认知',
            'subTitle': '蒋宇捷说：“我认为区块链行业的投资可以分为区块链和数字资产两大领域,基础设施、核心和应用三层。',
            'url': 'http://www.baidu.com',
            'date': '2018-07-25'
          },
          {
            'image': 'https://img.jinse.com/984063_image1.png',
            'title': '红海中的交易所如何生存 bibox和火币合作 互上对方平台币',
            'subTitle': '在这个交易所生存艰难时期，战略至关重要，合作共赢或许要比相互竞争更有优势。7月24日，火币与Bibox放出大招。据双方平台公告显示，双方达成合作关系，互上对方平台币。',
            'url': 'http://www.baidu.com',
            'date': '2018-07-25'
          },
          {
            'image': 'https://img.jinse.com/963870_image1.png',
            'title': '金色盘面 | 7月25日 早评 BTC攻城拔寨 主流币种紧随其后',
            'subTitle': 'BTC的大涨激活了整个市场，昨天EOS、ADA等主流币种纷纷展开补涨行情，市场交投活跃，短线BTC进入3浪末期，震荡加剧，建议关注低位、基本面扎实的热门币',
            'url': 'http://www.baidu.com',
            'date': '2018-07-25'
          },
          {
            'image': 'https://img.jinse.com/963870_image1.png',
            'title': '金色盘面 | 7月25日 早评 BTC攻城拔寨 主流币种紧随其后',
            'subTitle': 'BTC的大涨激活了整个市场，昨天EOS、ADA等主流币种纷纷展开补涨行情，市场交投活跃，短线BTC进入3浪末期，震荡加剧，建议关注低位、基本面扎实的热门币',
            'url': 'http://www.baidu.com',
            'date': '2018-07-25'
          },
          {
            'image': 'https://img.jinse.com/963870_image1.png',
            'title': '金色盘面 | 7月25日 早评 BTC攻城拔寨 主流币种紧随其后',
            'subTitle': 'BTC的大涨激活了整个市场，昨天EOS、ADA等主流币种纷纷展开补涨行情，市场交投活跃，短线BTC进入3浪末期，震荡加剧，建议关注低位、基本面扎实的热门币',
            'url': 'http://www.baidu.com',
            'date': '2018-07-25'
          },
          {
            'image': 'https://img.jinse.com/963870_image1.png',
            'title': '金色盘面 | 7月25日 早评 BTC攻城拔寨 主流币种紧随其后',
            'subTitle': 'BTC的大涨激活了整个市场，昨天EOS、ADA等主流币种纷纷展开补涨行情，市场交投活跃，短线BTC进入3浪末期，震荡加剧，建议关注低位、基本面扎实的热门币',
            'url': 'http://www.baidu.com',
            'date': '2018-07-25'
          },
          {
            'image': 'https://img.jinse.com/963870_image1.png',
            'title': '金色盘面 | 7月25日 早评 BTC攻城拔寨 主流币种紧随其后',
            'subTitle': 'BTC的大涨激活了整个市场，昨天EOS、ADA等主流币种纷纷展开补涨行情，市场交投活跃，短线BTC进入3浪末期，震荡加剧，建议关注低位、基本面扎实的热门币',
            'url': 'http://www.baidu.com',
            'date': '2018-07-25'
          }
        ]
      }
    },
    methods: {
      loadTop: function (id) {
        console.log('下拉刷新')
        this.$broadcast('onTopLoaded', id);
      },
      loadBottom: function () {
        console.log('上拉加载')
        this.allLoaded = true;// 若数据已全部获取完毕
        this.$broadcast('onBottomLoaded', id);
      },
      allLoaded: function () {
        console.log('加载全部')
      }
    }
  }
</script>

<style scoped>
  .newsList {
    width: 100%;
    height: 500px;
    background-color: white;
  }

  .news-list-image {
    margin-top: 10px;
    width: 180px;
    height: 140px;
  }

  .news-list {
    text-align: left;
    color: blue;
    height: 160px;
    /*vertical-align: center;*/
  }

  .news-list-title {
    margin-left: 200px;
    margin-right: 20px;
    color: #333333;
  }

  .news-list-subTitle {
    margin-left: 200px;
    margin-right: 20px;
    color: #707274;
  }

  .news-list-date {
    margin-left: 200px;
    margin-right: 20px;
    color: #707274;
  }
</style>

export default {
  tabBarItemSelected: '事业',
  newsBarSelected: '1',
  setnewsBarSelected (newsBar) {
    this.newsBarSelected = newsBar
  },
  settabBarItemSelected (item) {
      console.log('重写')
      this.tabBarItemSelected = item
  }
}

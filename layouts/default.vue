<template comments>
  <div class="bg-[#fcfcfc] font-mono dark:bg-[#1b1c1e]">
    <AppHeader/>
    <slot/>
    <AppFooter/>
  </div>
  <!--[if IE]>
    <script type="text/javascript">window.location.href = 'https://browsehappy.com'</script>
  <![endif]-->
</template>

<style type="text/css">
:root * {
  scroll-margin-top: 5rem;
}
/*
Scrollbar rules based on YouTube's
*/
:root *::-webkit-scrollbar {
  width: 16px;
  background-color: transparent;
}
:root *::-webkit-scrollbar-thumb {
  display: flex;
  height: 56px;
  border-radius: 8px;
  border: 4px solid transparent;
  background-clip: content-box;
  background-color: #ababab;
}
</style>

<!--
                            _ooOoo_
                           o8888888o
                           88" . "88
                           (| -_- |)
                            O\ = /O
                        ____/`---'\____
                        .   ' \\| |// `.
                       / \\||| : |||// \
                     / _||||| -:- |||||- \
                       | | \\\ - /// | |
                     | \_| ''\---/'' | |
                      \ .-\__ `-` ___/-. /
                   ___`. .' /--.--\ `. . __
                ."" '< `.___\_<|>_/___.' >'"".
               | | : `- \`.;`\ _ /`;.`/ - ` : | |
                 \ \ `-. \_ __\ /__ _/ .-` / /
         ======`-.____`-.___\_____/___.-`____.-'======
                            `=---='    

         .............................................
                 佛祖保佑             永無 BUG
-->

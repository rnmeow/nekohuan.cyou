<template>
  <div class="bg-[#fcfcfc] font-mono dark:bg-[#1b1c1e]">
    <AppHeader/>
    <slot/>
    <AppFooter/>
  </div>
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

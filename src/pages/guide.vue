<template>
  <view class="flex flex-col items-center justify-center w-full h-full">
    <view class="w-full h-[50vh] aspect-auto">
      <image src="/static/guide.png" mode="scaleToFill" />
    </view>
    <view class="flex flex-col items-center justify-center w-full gap-4">
      <view class="flex flex-col items-center justify-center gap-2">
        <view class="text-2xl font-bold tracking-widest">
          医疗安全保障
        </view>
        <view class="flex gap-2">
          <view>名医入驻</view>
          <view>安全放心</view>
        </view>
      </view>
      <view @click="goPath('/packages/pages/tab-bar/index')"
        class="mb-6 w-[150px] rounded-3xl h-[40px] bg-blue-400 text-white flex items-center text-center text-lg justify-center">
        进入工作台
      </view>
    </view>
  </view>
</template>
<script setup lang="ts">
// import TnButton from '@tuniao/tnui-vue3-uniapp/components/button/src/button.vue'
import { PageEnum } from '/@/enums/pageEnum'
function goPath(path: string) {
  uni.setStorageSync('is-no-first', true);
  uni.navigateTo({
    url: path,
  });
}

onLoad(() => {
  try {
    const value = uni.getStorageSync('is-no-first');
    if (value) {
      goPath(PageEnum.BASE_HOME)
    }
  } catch (e) {
    // error
  }


})
</script>
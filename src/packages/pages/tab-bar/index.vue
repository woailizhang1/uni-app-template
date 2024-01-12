<template>
    <view>
        <Home v-if="currentTabbar === 0"></Home>
        <Serve v-if="currentTabbar === 1"></Serve>
        <My v-if="currentTabbar === 2"></My>
        <tn-tabbar v-model="currentTabbar" fixed switch-animation :frosted="true">
            <tn-tabbar-item v-for="(item, index) in tabbarData" :key="index" :icon="item.icon"
                :active-icon="item.activeIcon" :text="item.name" />
        </tn-tabbar>
    </view>
</template>
<script setup lang="ts">
import Home from "./home/index.vue"

import My from "./my/index.vue"
import Serve from "./serve/index.vue"
const currentTabbar = ref(0)
const tabbarData = [
    {
        name: '首页',
        icon: 'home',
        activeIcon: 'home-fill',
    },
    {
        name: '服务',
        icon: 'service',
        activeIcon: 'service-fill',
    },
    {
        name: '我的',
        icon: 'my',
        activeIcon: 'my-fill',
    },

]
const getTitle = computed(() => {
    const item = tabbarData[currentTabbar.value]
    return item && item.name
})
watch(() => currentTabbar.value, () => {
    uni.pageScrollTo({
        scrollTop: 0,
    });
})

</script>
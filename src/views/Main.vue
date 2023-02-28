<template>
    <div>
        <!-- <h1>Main.vue</h1> -->

        <!-- <RouterView></RouterView> -->

        <el-container>
            <el-aside width="auto">
                <common-aside />
            </el-aside>
            <el-container>
                <el-header>
                    <CommonHeader />
                </el-header>
                <!-- Tag -->
                <CommonTag />
                <!-- <el-main>Main</el-main> -->
                <el-main>
                    <!-- 路由出口 -->
                    <!-- 路由匹配到的组件在此渲染 -->
                    <RouterView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
// import { RouterView } from 'vue-router';
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTag from '@/components/CommonTag.vue';

export default {
    data() {
        return {};
    },
    components: {
        // RouterView,
        CommonAside,
        CommonHeader,
        CommonTag
    }
}
</script>

<style scoped>
.el-header {
    padding: 0;
}
</style>
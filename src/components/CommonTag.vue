<template>
    <div class="tabs">
        <el-tag v-for="(item, index) in tags" :key="item.path" :closable="item.name !== 'home'"
            :effect="$route.name === item.name ? 'dark' : 'plain'" @click="changeMenu(item)"
            @close="handleClose(item, index)" size="small">
            {{ item.label }}
        </el-tag>
    </div>
</template>


<script>
import { mapState, mapMutations } from 'vuex'

export default {
    name: 'CommomTag',
    data() {
        return {

        }
    },
    computed: {
        ...mapState({
            tags: state => state.tab.tabsList
        })
    },
    methods: {
        ...mapMutations(['closeTag']),
        //  点击tag跳转
        changeMenu(item) {
            // console.log(item)
            this.$router.push({
                name: item.name
            })
        },
        // 点击tag删除
        handleClose(item, index) {
            // 调用store中mutation
            this.closeTag(item)
            const length = this.tags.length

            // 删除后的跳转
            if (item.name !== this.$route.name) {
                // 删除非本页
                return
            }
            if (index === length) {
                // 删除的是最后一项
                this.$router.push({
                    name: this.tags[index - 1].name
                })
            } else {
                // 删除的是其他
                this.$router.push({
                    name: this.tags[index].name
                })
            }

        }
    }
    // mounted() {
    //     console.log(this.$route, this.tags)
    // }
}
</script>

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>
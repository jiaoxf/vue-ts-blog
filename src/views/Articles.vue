<template>
    <div class="home">
        <ArticleBlock />
    </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator';
import ArticleBlock from '@/components/ArticleBlock.vue';

@Component({
    components: {
        ArticleBlock,
    },
})
export default class ArticleBox extends Vue {

}
</script>
<style lang="sass" scoped>

</style>

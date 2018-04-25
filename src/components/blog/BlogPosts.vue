<template>
  <div class="blog-posts">
    <Loader v-if="!hasBlogPosts" :text="'Loading posts...'" />

    <div class="posts" v-if="hasBlogPosts">
      <div class="summary">
        {{ $texts.numberOfPosts }}: {{ numberOfPosts }}
      </div>

      <BlogPost
        v-for="post in blogPosts"
        :key="post.id"
        :post="post"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Loader from '@/components/Loader'
import BlogPost from '@/components/blog/BlogPost'

export default {
  components: {
    Loader,
    BlogPost
  },
  computed: {
    ...mapGetters('blog', ['blogPosts', 'hasBlogPosts', 'numberOfPosts'])
  },
  mounted() {
    if (!this.hasBlogPosts) {
      this.$store.dispatch('blog/getBlogPosts').catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-posts {
  max-width: 800px;
  margin: 0 auto;
}
</style>

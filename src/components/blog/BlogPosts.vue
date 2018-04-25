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
  data() {
    return {
      showLoader: false
    }
  },
  computed: {
    ...mapGetters('blog', ['blogPosts', 'hasBlogPosts', 'numberOfPosts'])
  },
  mounted() {
    this.showLoader = true
    this.$store
      .dispatch('blog/getBlogPosts')
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        this.showLoader = false
      })
  }
}
</script>

<style lang="scss" scoped>
.blog-posts {
  max-width: 800px;
  margin: 0 auto;
}
</style>

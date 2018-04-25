<template>
  <div class="blog-comments">
    <Loader v-if="showLoader" :text="'Loading comments...'" />

    <div class="comments" v-if="hasComments">
      <h3>Comments</h3>
      <div class="comment" v-for="comment in comments" :key="comment.id">
        <div class="body">{{ comment.body }}</div>
        <strong>{{ comment.email }}</strong>
      </div>
    </div>

    <div class="no-comments" v-if="!hasComments && !showLoader">
      {{ $texts.noComments }}
    </div>
  </div>
</template>

<script>
import Loader from '@/components/Loader'

export default {
  components: {
    Loader
  },
  props: {
    id: { type: Number, required: true }
  },
  data() {
    return {
      showLoader: false,
      commentsLoaded: false,
      comments: []
    }
  },
  computed: {
    hasComments() {
      return this.commentsLoaded && this.comments.length > 0
    }
  },
  mounted() {
    this.showLoader = true
    this.$store
      .dispatch('blog/getComments', this.id)
      .then(res => {
        this.comments = res
        this.commentsLoaded = true
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        this.showLoader = false
      })
  }
}
</script>

<style lang="scss" scoped>
.blog-comments {
}
.comment {
  background: rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.08);
  padding: 10px;
  max-width: 500px;
  margin: 0 auto 15px;

  .body {
    margin-bottom: 10px;
  }
}
</style>

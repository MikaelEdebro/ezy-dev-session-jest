<template>
  <div class="blog-post" :class="{ expanded: showBody }">
    <h3 class="title" @click="toggleBody">{{ post.title }}</h3>
    <div class="body" v-if="showBody">
      {{ post.body }}

      <BlogComments
        v-if="$settings.enableComments"
        :id="post.id"
      />
    </div>
  </div>
</template>

<script>
import BlogComments from '@/components/blog/BlogComments'

export default {
  components: {
    BlogComments
  },
  props: {
    post: { type: Object, required: true }
  },
  data() {
    return {
      showBody: false
    }
  },
  methods: {
    toggleBody() {
      this.showBody = !this.showBody
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-post {
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}
.title {
  cursor: pointer;
}
.body {
  margin-bottom: 10px;
}
</style>

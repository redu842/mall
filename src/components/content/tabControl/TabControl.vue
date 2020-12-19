<template>
  <div class="tabcontrol">
    <div
      v-for="(item, index) in titles"
      :key="index"
      class="tabcontrol-item"
      :class="{ active: index === currentIndex }"
      @click="listclick(index)"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    listclick(index) {
      this.currentIndex = index;
      this.$emit("listclick", index);
    },
  },
};
</script>

<style>
.tabcontrol {
  display: flex;
  text-align: center;
  font-size: 15px;
  background-color: #fff;
}
.tabcontrol-item {
  flex: 1;
  height: 40px;
  line-height: 40px;
}
.tabcontrol-item span {
  padding: 0 5px 5px 5px;
}
.active {
  color: var(--color-high-text);
}
.active span {
  border-bottom: 3px solid var(--color-high-text);
}
</style>
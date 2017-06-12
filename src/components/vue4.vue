<template lang="html">
  <div id="vue4">
    <ol>
      <li v-for="todo in todos">
        {{ todo.text }}
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'vue4',
  data() {
    return {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' },
      ],
    };
  },
  created: () => {
     // eslint-disable-next-line
    console.log('console');  // eslint-disable-next-line
  },
  methods: {
    log: () => {
       // eslint-disable-next-line
      console.log('console');  // eslint-disable-next-line
    },
  },
};
</script>

<style lang="css">
</style>

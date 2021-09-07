<template>
  <div class="board">
    <div class="flex flex-row items-start">
      <BoardColumn
        v-for="(column, $columnIndex) of board.columns"
        :key="$columnIndex"
        :column="column"
        :columnIndex="$columnIndex"
        :board="board"
      />

      <v-card min-width="350px" color="grey lighten-2 mx-2">
        <v-text-field
          type="text"
          placeholder="+ Enter another column"
          single-line
          v-model="newColumnName"
          @keyup.enter="createColumn"
          class="mx-4"
        ></v-text-field>
      </v-card>
    </div>

    <div class="task-bg" v-if="isTaskOpen" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BoardColumn from '@/components/BoardColumn'

export default {
  components: { BoardColumn },
  data() {
    return {
      newColumnName: ''
    }
  },
  computed: {
    ...mapState(['board']),
    isTaskOpen() {
      return this.$route.name === 'task'
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'board' })
    },
    createColumn() {
      this.$store.commit('CREATE_COLUMN', {
        name: this.newColumnName
      })

      this.newColumnName = ''
    },
    updateColumnProperty(e, key) {
      this.$store.commit('UPDATE_COLUMN', {
        task: this.column,
        key,
        value: e.target.value
      })
    }
  }
}
</script>

<style lang="css">
.board {
  @apply p-4 bg-blue-light h-full overflow-auto;
}

.task-bg {
  @apply pin absolute;
  background: rgba(0, 0, 0, 0.5);
}
</style>

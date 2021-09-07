<template>
  <v-row align="center" class="mx-0"
    ><v-spacer></v-spacer
    ><v-col cols="12" sm="5" md="5" xl="4"
      ><v-card elevation="2" outlined>
        <v-card-title>
          <v-text-field
            label="Task name"
            type="text"
            :value="task.name"
            @change="updateTaskProperty($event, 'name')"
            @keyup.enter="updateTaskProperty($event, 'name')"
          >
          </v-text-field>
        </v-card-title>
        <v-card-text>
          <v-text-field
            label="Description"
            :value="task.description"
            @change="updateTaskProperty($event, 'description')"
            @keyup.enter="updateTaskProperty($event, 'description')"
          ></v-text-field>
        </v-card-text>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue" text v-on:click="close">
            Close
          </v-btn>
        </v-card-actions>
      </v-card> </v-col
    ><v-spacer></v-spacer
  ></v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getTask']),
    task() {
      return this.getTask(this.$route.params.id)
    }
  },
  methods: {
    updateTaskProperty(e, key) {
      this.$store.commit('UPDATE_TASK', {
        task: this.task,
        key,
        value: e.target.value
      })
    },
    close() {
      this.$router.push({ name: 'board' })
    }
  }
}
</script>

<style></style>

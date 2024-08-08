<template>
  <content-card :title="!isEditing ? 'Workqueue': 'Edit workqueue'">
    <template v-slot:header-right>
      <button @click="isEditing = true" class="btn btn-primary btn-sm" v-if="!isEditing"><i class="bi bi-pencil"></i></button>
    </template>
    <div class="card-body">
      <div class="row" v-if="!isEditing">
        <div class="col-6">
          <dl class="row">
            <dt class="col-5">Name:</dt>
            <dd class="col-7">{{ editedWorkqueue.name }}</dd>
            <dt class="col-5">Description:</dt>
            <dd class="col-7">{{ editedWorkqueue.description }}</dd>
          </dl>
        </div>
        <div class="col-6">
          <dl class="row">
            <dt class="col-5">Enabled:</dt>
            <dd class="col-7">{{ editedWorkqueue.enabled ? 'Yes' : 'No' }}</dd>
            <dt class="col-5">Last changed:</dt>
            <dd class="col-7">{{ $formatDateTime(editedWorkqueue.updated_at) }}</dd>
          </dl>
        </div>
      </div>
      <form @submit.prevent="saveWorkqueue" v-else>
        <div class="row mb-3">
          <label class="col-sm-2" for="name">Name:</label>
          <div class="col">
            <input type="text" class="form-control" v-model="editedWorkqueue.name" id="name" required />
          </div>
        </div>
        <div class="row mb-3">
          <label for="description" class="col-sm-2">Description:</label>
          <div class="col">
            <textarea type="text" class="form-control" v-model="editedWorkqueue.description"
              id="description"></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-sm-2">&nbsp;</div>
          <div class="col">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" v-model="editedWorkqueue.enabled" id="enabled" />
              <label class="form-check-label" for="enabled"> Enabled</label>
            </div>
          </div>
        </div>
        <div class="text-end">
          <button type="submit" class="btn btn-primary">Save</button>
          <button @click="cancelEdit" class="btn">Cancel</button>
        </div>
      </form>
    </div>
  </content-card>
</template>

<script>
import ContentCard from '@/components/ContentCard.vue'

export default {
  name: 'WorkqueueForm',
  components: {
    ContentCard
  },
  props: {
    workqueue: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      editedWorkqueue: { ...this.workqueue },
      isEditing: false
    }
  },
  methods: {
    saveWorkqueue() {
      this.$emit('save', this.editedWorkqueue)
      this.isEditing = false
    },
    cancelEdit() {
      this.editedWorkqueue = { ...this.workqueue }
      this.isEditing = false
    }
  },
  watch: {
    workqueue: {
      handler() {
        this.editedWorkqueue = { ...this.workqueue }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
/* Your component styles go here */
</style>
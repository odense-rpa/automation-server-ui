<template>
  <div>
    <div class="row mb-3">
      <div class="col-sm-12">
        <workqueue-form :workqueue="workqueue" @save="saveWorkqueue" v-if="workqueue" />
      </div>
    </div>
    <workitems-table :workqueue-id="workqueue.id" :size="50" v-if="workqueue" />
  </div>
</template>

<script>
import { useAlertStore } from '../stores/alertStore'
import { workqueuesAPI } from '@/services/automationserver.js'
import ContentCard from '@/components/ContentCard.vue'
import WorkqueueForm from '@/components/WorkqueueForm.vue'
import WorkitemsTable from '@/components/WorkitemsTable.vue'

const alertStore = useAlertStore()

export default {
  name: 'WorkqueueView',
  data: () => ({
    workqueue: null
  }),
  components: {
    ContentCard,
    WorkqueueForm,
    WorkitemsTable
  },
  async created() {
    //Load workqueue from id
    try {
      this.workqueue = await workqueuesAPI.getWorkqueue(this.$route.params.id)
    } catch (error) {
      alertStore.addAlert({ type: 'danger', message: error })
    }
  },
  methods: {
    async saveWorkqueue(workqueue) {
      try {
        await workqueuesAPI.updateWorkqueue(this.workqueue.id, workqueue)
        alertStore.addAlert({
          type: 'success',
          message: "'" + this.workqueue.name + "' was saved"
        })
      } catch (error) {
        alertStore.addAlert({ type: 'danger', message: error })
      }
      // Redirect to the overview
      this.$router.push({ name: 'workqueues' })
    }
  }
}
</script>

<style scoped>
/* Your component styles here */
</style>

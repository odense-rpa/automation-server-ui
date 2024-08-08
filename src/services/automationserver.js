import axios from 'axios'

const BASE_URL = import.meta.env.ATS_API_BASE_URL || '/api' // Default to '/api' if not set

// Set default headers for Axios
axios.defaults.headers.common['Authorization'] = `Bearer yourBearerToken` // Replace 'yourBearerToken' with your actual token

// Processes API
const processesAPI = {
  getProcesses: async (include_deleted = false) => {
    try {
      const response = await axios.get(`${BASE_URL}/processes/`, { params: { include_deleted } })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching processes: ${error}`)
    }
  },
  createProcess: async (processData) => {
    try {
      const response = await axios.post(`${BASE_URL}/processes/`, processData)
      return response.data
    } catch (error) {
      throw new Error(`Error creating process: ${error}`)
    }
  },
  getProcess: async (process_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/processes/${process_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error reading process: ${error}`)
    }
  },
  updateProcess: async (process_id, processData) => {
    try {
      const response = await axios.put(`${BASE_URL}/processes/${process_id}`, processData)
      return response.data
    } catch (error) {
      throw new Error(`Error updating process: ${error}`)
    }
  },
  deleteProcess: async (process_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/processes/${process_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error deleting process: ${error}`)
    }
  },
  getTriggers: async (process_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/processes/${process_id}/trigger`)
      return response.data
    } catch (error) {
      throw new Error(`Error fetching triggers: ${error}`)
    }
  },
  createTrigger: async (process_id, triggerData) => {
    try {
      const response = await axios.post(`${BASE_URL}/processes/${process_id}/trigger`, triggerData)
      return response.data
    } catch (error) {
      throw new Error(`Error creating trigger: ${error}`)
    }
  }
}

// Workqueues API
const workqueuesAPI = {
  getWorkqueues: async (include_deleted = false) => {
    try {
      const response = await axios.get(`${BASE_URL}/workqueues/`, { params: { include_deleted } })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching workqueues: ${error}`)
    }
  },
  getWorkqueuesWithInformation: async (include_deleted = false) => {
    try {
      const response = await axios.get(`${BASE_URL}/workqueues/information`, { params: { include_deleted } })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching workqueues: ${error}`)
    }
  },
  createWorkqueue: async (workqueueData) => {
    try {
      const response = await axios.post(`${BASE_URL}/workqueues/`, workqueueData)
      return response.data
    } catch (error) {
      throw new Error(`Error creating workqueue: ${error}`)
    }
  },
  getWorkqueue: async (queue_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/workqueues/${queue_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error reading workqueue: ${error}`)
    }
  },
  updateWorkqueue: async (queue_id, workqueueData) => {
    try {
      const response = await axios.put(`${BASE_URL}/workqueues/${queue_id}`, workqueueData)
      return response.data
    } catch (error) {
      throw new Error(`Error updating workqueue: ${error}`)
    }
  },
  deleteWorkqueue: async (queue_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/workqueues/${queue_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error deleting workqueue: ${error}`)
    }
  },
  addWorkitem: async (queue_id, workitemData) => {
    try {
      const response = await axios.post(`${BASE_URL}/workqueues/${queue_id}/add`, workitemData)
      return response.data
    } catch (error) {
      throw new Error(`Error adding workitem: ${error}`)
    }
  },
  getNextWorkitem: async (queue_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/workqueues/${queue_id}/next_item`)
      return response.data
    } catch (error) {
      throw new Error(`Error fetching next workitem: ${error}`)
    }
  },
  getWorkItems: async (workqueue_id, page = 1, size = 20, search = '') => {
    try {
      const response = await axios.get(`${BASE_URL}/workqueues/${workqueue_id}/items`, {
        params: { page: page, size: size, search: search }
      })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching sessions: ${error}`)
    }
  },

}

// Credentials API
const credentialsAPI = {
  getCredentials: async (include_deleted = false) => {
    try {
      const response = await axios.get(`${BASE_URL}/credentials/`, { params: { include_deleted } })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching credentials: ${error}`)
    }
  },
  createCredential: async (credentialData) => {
    try {
      const response = await axios.post(`${BASE_URL}/credentials/`, credentialData)
      return response.data
    } catch (error) {
      throw new Error(`Error creating credential: ${error}`)
    }
  },
  readCredential: async (credential_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/credentials/${credential_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error reading credential: ${error}`)
    }
  },
  updateCredential: async (credential_id, credentialData) => {
    try {
      const response = await axios.put(`${BASE_URL}/credentials/${credential_id}`, credentialData)
      return response.data
    } catch (error) {
      throw new Error(`Error updating credential: ${error}`)
    }
  },
  deleteCredential: async (credential_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/credentials/${credential_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error deleting credential: ${error}`)
    }
  }
}

const resourcesAPI = {
  getResources: async (include_expired = false) => {
    try {
      const response = await axios.get(`${BASE_URL}/resources/`, { params: { include_expired } })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching resources: ${error}`)
    }
  },
  createResource: async (resourceData) => {
    try {
      const response = await axios.post(`${BASE_URL}/resources/`, resourceData)
      return response.data
    } catch (error) {
      throw new Error(`Error creating resource: ${error}`)
    }
  },
  getResource: async (resource_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/resources/${resource_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error reading resource: ${error}`)
    }
  },
  updateResource: async (resource_id, resourceData) => {
    try {
      const response = await axios.put(`${BASE_URL}/resources/${resource_id}`, resourceData)
      return response.data
    } catch (error) {
      throw new Error(`Error updating resource: ${error}`)
    }
  }
}

const sessionsAPI = {
  getSessions: async (include_deleted = false, page = 1, size = 20, search = '') => {
    try {
      const response = await axios.get(`${BASE_URL}/sessions/`, {
        params: { page: page, size: size, search: search, include_deleted: include_deleted }
      })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching sessions: ${error}`)
    }
  },
  getSession: async (session_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/sessions/${session_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error reading session: ${error}`)
    }
  },
  createSession: async (process_id) => {
    try {
      const response = await axios.post(`${BASE_URL}/sessions/`, { process_id: process_id })
      return response.data
    } catch (error) {
      throw new Error(`Error creating session: ${error}`)
    }
  },
  updateStatus: async (session_id, status) => {
    try {
      const response = await axios.put(`${BASE_URL}/sessions/${session_id}/status`, { status })
      return response.data
    } catch (error) {
      throw new Error(`Error updating session status: ${error}`)
    }
  },
  getByResourceId: async (resource_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/sessions/by_resource_id/${resource_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error fetching sessions by resource: ${error}`)
    }
  },
  getNewSessions: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/sessions/new`)
      return response.data
    } catch (error) {
      throw new Error(`Error fetching new sessions: ${error}`)
    }
  }
}

const triggersAPI = {
  getTriggers: async (include_deleted = false) => {
    try {
      const response = await axios.get(`${BASE_URL}/triggers/`, { params: { include_deleted } })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching triggers: ${error}`)
    }
  },
  /*  getTrigger: async (trigger_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/triggers/${trigger_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error reading trigger: ${error}`)
    }
  },*/
  updateTrigger: async (trigger_id, triggerData) => {
    try {
      const response = await axios.put(`${BASE_URL}/triggers/${trigger_id}`, triggerData)
      return response.data
    } catch (error) {
      throw new Error(`Error updating trigger: ${error}`)
    }
  },
  deleteTrigger: async (trigger_id) => {
    try {
      const response = await axios.delete(`${BASE_URL}/triggers/${trigger_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error deleting trigger: ${error}`)
    }
  }
}

const sessionLogsAPI = {
  getSessionLogs: async (session_id, page = 1, size = 20, search = '') => {
    try {
      const response = await axios.get(`${BASE_URL}/sessionlogs/${session_id}`, {
        params: { page: page, size: size, search: search }
      })
      return response.data
    } catch (error) {
      throw new Error(`Error fetching sessions: ${error}`)
    }
  },
  getByWorkItemId: async (workitem_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/sessionlogs/by_workitem/${workitem_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error fetching session logs by workitem: ${error}`)
    }
  }
}

const workitemsApi = {
  getWorkItem: async (workitem_id) => {
    try {
      const response = await axios.get(`${BASE_URL}/workitems/${workitem_id}`)
      return response.data
    } catch (error) {
      throw new Error(`Error reading workitem: ${error}`)
    }
  },
  updateWorkItem: async (workitem_id, workitemData) => {
    try {
      const response = await axios.put(`${BASE_URL}/workitems/${workitem_id}`, workitemData)
      return response.data
    } catch (error) {
      throw new Error(`Error updating workitem: ${error}`)
    }
  },
  updateWorkItemStatus: async (workitem_id, status) => {
    try {
      const response = await axios.put(`${BASE_URL}/workitems/${workitem_id}/status`, { status })
      return response.data
    } catch (error) {
      throw new Error(`Error updating workitem status: ${error}`)
    }
  }

}

// Export APIs for use in Vue components or elsewhere
export {
  processesAPI,
  workqueuesAPI,
  credentialsAPI,
  resourcesAPI,
  sessionsAPI,
  sessionLogsAPI,
  triggersAPI,
  workitemsApi
}

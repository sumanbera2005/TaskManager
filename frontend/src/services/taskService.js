import { apiService } from "./api";
class TaskService {
    async getTasks(){
        return await apiService.get('/tasks');
    }
    async createTasks(taskData){
        return await apiService.post('/tasks',taskData);
    }
    async updateTasks(taskId,taskData){
        return await apiService.put(`/tasks/${taskId}`,taskData);
    }
    async deleteTasks(taskId){
        return await apiService.delete(`/tasks/${taskId}`);
    }
    async toggleTaskComplete(taskId){
        return await apiService.put(`/tasks/${taskId}/toggle`);
    }
}

export const taskService = new TaskService();
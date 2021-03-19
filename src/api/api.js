import axios from "axios";
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: { "API-KEY": "b66d0574-82ff-4403-a5c5-ec463145e9a6" },
});
export const usersAPI = {
  getUsers(currentPage, pageSize) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => response.data);
  },
  unfollow(userId) {
    return instance.delete(`unfollow/${userId}`);
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
};
export const authAPI = {
  me() {
    return instance.get("auth/me");
  },

  login(email, password, rememberMe = false) {
    return instance.post("auth/login", { email, password, rememberMe });
  },
  logout() {
    return instance.delete("auth/login");
  },
};
export const profileAPI = {
  getUserProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    debugger;
    return instance.get(`profile/status/` + userId);
  },
  updateStatus(status) {
    debugger;
    return instance.put(`profile/status/`, { status: status });
  },
};
export const musicAPI = {
  getMusic() {
    return instance.get("music");
  },
};
export const friendsAPI = {
  getFriends() {
    return instance.get("friends");
  },
};

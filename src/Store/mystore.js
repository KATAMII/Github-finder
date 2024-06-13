
import {create} from 'zustand';

const useGithubStore = create((set) => ({
  userData: {},
  repos: [],
  followers: [],
  following: [],
  fetchUserData: async (username) => {
    try {
      const userResponse = await fetch(`https://api.github.com/users/${username}`);
      const userData = await userResponse.json();

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos`);
      const repos = await reposResponse.json();

      const followersResponse = await fetch(`https://api.github.com/users/${username}/followers`);
      const followers = await followersResponse.json();

      const followingResponse = await fetch(`https://api.github.com/users/${username}/following`);
      const following = await followingResponse.json();

      set({ userData, repos, followers, following });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
  clearUserData: () => set({ userData: {}, repos: [], followers: [], following: [] }),
}));

export default useGithubStore;

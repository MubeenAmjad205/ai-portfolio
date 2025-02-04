import axios from "axios";

export const scrapeGitHubProfile = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}/repos`,
      { headers: { "User-Agent": "Portfolio-RAG" } }
    );
    
    return response.data.map(repo => ({
      name: repo.name,
      description: repo.description,
      tech: repo.topics.join(", "),
      url: repo.html_url
    }));
  } catch (error) {
    console.error("GitHub Error:", error.message);
    return [];
  }
};
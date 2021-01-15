import axios from "axios";

async function Medium() {
	try {
		const mediumRssFeed = "https://medium.com/feed/@laraib-13562";
		const rssToJsonApi = "https://api.rss2json.com/v1/api.json";
		const data = { params: { rss_url: mediumRssFeed } };
		return await axios.get(rssToJsonApi, data);
	} catch (error) {
		console.error(error);
	}
}
export default Medium
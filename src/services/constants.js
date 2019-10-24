const youtubeApiKey = 'AIzaSyCnciQ6U-JQBopSfNw5QidyhlUyV9k49AM'

export const playlistRequest = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails, id, snippet, status &playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&key=${youtubeApiKey}`
export const playlistRequestNextPage = `${playlistRequest}&pageToken=@pageToken`
export const URL = 'https://my-json-server.typicode.com/niltonbsgi/my-user-db/sw_data_base?email=@email&password=@password';

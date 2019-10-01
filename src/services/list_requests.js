const youtube_api_key = ''

export const playlist_request = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails, id, snippet, status &playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&key=${youtube_api_key}`
export const playlist_request_next_page = `https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails, id, snippet, status &playlistId=PL6t93nUFQQ1ZiXMfhPyhjb0PX3LgEVMcF&key=${youtube_api_key}&pageToken=@pageToken`

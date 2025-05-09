const Resume = () => {
    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId="PLAYID"&key="KEY"')
        .then(res => res.json())
        .then(data => {
            console.log(data.items[1]);
        })
}

export default Resume;

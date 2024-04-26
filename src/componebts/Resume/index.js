const Resume = () => {
    fetch('https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=UUS2m4WDXYmfGGC9C4hayKug&key=AIzaSyAPEWO483cncsRKPXSfXD9Ye3kgs3XL3lI')
        .then(res => res.json())
        .then(data => {
            console.log(data.items[1]);
        })
}

export default Resume;
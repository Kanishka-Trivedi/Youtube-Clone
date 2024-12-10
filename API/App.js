const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5007;

app.get('/youtube', (req, res)=>{
    const data1 = [
        { id: 1, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla 1.5Mviews  2 days ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
         },
    
        { id: 2, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true", t1: 'Infinix Note 12: AMOLED G88 SoC!',  t2: 'ATC Android ToTo Company 4.2Mviews 2days ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true"},
    
        { id: 3, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true", t1: 'My first UX Design case study-This got me my first job.', t2: 'Saptarshi Prakash 4.8Kviews  1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true"},
    
        { id: 4, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true", t1: 'UX Design-What is it?(From Aj and Smart', t2: 'Aj and Smart 150kviews 2years ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true"},
    
        { id: 5, img_url1: "https://i.ytimg.com/vi/wkUVzjEeNq8/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYOyBeKHIwDw==&rs=AOn4CLCzY0EqnTrhCdl344_xwsAZA3T49g", t1: 'Just Like Fire Mix', t2: '7Clouds Music 1.7M 3years ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true"},
    
        { id: 6, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true", t1: 'My Mix', t2: 'Lopamundra Mitra, Anupam Roy and more'},
    
        { id: 7, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true", t1: 'Vietnam | Visa Free', t2: 'Nadir On The Go  1.7Mviews 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true"},
    
        { id: 8, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true", t1: '14 Advanced Tips to Design FASTER in Figma', t2: 'Mizko  53Kviews 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"},
    
        { id: 9, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true", t1: 'Pulled2U-Cynful (Lyric Video)', t2: 'Cynful  1.1K views 1day ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true"},
    
        { id: 10, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true", t1: 'Reed Wonder, Aurora Olivas-The Machine', t2: 'Taj Tracks  2.3M views 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"},
    
        { id: 11, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true", t1: 'Lindsey Stirling-Carol Of Bells', t2: 'infelix Ben  4.6M views 1year ago', t2: 'infelix Ben  4.6M views 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true"},
    
        { id: 12, img_url1: "https://i.ytimg.com/vi/Igg7AxN5QPc/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYACzgWKAgwIABABGGUgRyhhMA8=&rs=AOn4CLCtRDDxnKY4VKTqTVFys_jgZjtQTg", t1: 'Lindsey Stirling-Carol Of Bells', t2: 'infelix Ben  4.6M views 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"}
      ]

      res.json(data1);
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

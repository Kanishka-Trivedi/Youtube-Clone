// import './App.css'
// import {useState, useEffect} from "react";
// function App() {

//   const [video, setVideo] = useState([]);
//   useEffect(()=>{
//     fetch('https://youtube-clone1-obne.onrender.com/youtube')
//       .then((response) => response.json())
//       .then((data) => setVideo(data));
//   }, []);
//   // const data1 = [
//   //   { id: 1, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-8.png?raw=true", t1: 'Bulbuli | Coke Studio Bangla | Season One | Ritu Raj X Nandita', t2: 'Coke Studio Banglla 1.5Mviews  2 days ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"
//   //    },

//   //   { id: 2, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-9.png?raw=true", t1: 'Infinix Note 12: AMOLED G88 SoC!',  t2: 'ATC Android ToTo Company 4.2Mviews 2days ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(2).png?raw=true"},

//   //   { id: 3, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-10.png?raw=true", t1: 'My first UX Design case study-This got me my first job.', t2: 'Saptarshi Prakash 4.8Kviews  1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(3).png?raw=true"},

//   //   { id: 4, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-4.png?raw=true", t1: 'UX Design-What is it?(From Aj and Smart', t2: 'Aj and Smart 150kviews 2years ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true"},

//   //   { id: 5, img_url1: "https://i.ytimg.com/vi/wkUVzjEeNq8/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4JgALQBYoCDAgAEAEYOyBeKHIwDw==&rs=AOn4CLCzY0EqnTrhCdl344_xwsAZA3T49g", t1: 'Just Like Fire Mix', t2: '7Clouds Music 1.7M 3years ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true"},

//   //   { id: 6, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-11.png?raw=true", t1: 'My Mix', t2: 'Lopamundra Mitra, Anupam Roy and more'},

//   //   { id: 7, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-6.png?raw=true", t1: 'Vietnam | Visa Free', t2: 'Nadir On The Go  1.7Mviews 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true"},

//   //   { id: 8, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-7.png?raw=true", t1: '14 Advanced Tips to Design FASTER in Figma', t2: 'Mizko  53Kviews 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"},

//   //   { id: 9, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail.png?raw=true", t1: 'Pulled2U-Cynful (Lyric Video)', t2: 'Cynful  1.1K views 1day ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(5).png?raw=true"},

//   //   { id: 10, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-1.png?raw=true", t1: 'Reed Wonder, Aurora Olivas-The Machine', t2: 'Taj Tracks  2.3M views 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(6).png?raw=true"},

//   //   { id: 11, img_url1: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Thumbnail-2.png?raw=true", t1: 'Lindsey Stirling-Carol Of Bells', t2: 'infelix Ben  4.6M views 1year ago', t2: 'infelix Ben  4.6M views 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true"},

//   //   { id: 12, img_url1: "https://i.ytimg.com/vi/Igg7AxN5QPc/hq720.jpg?sqp=-oaymwFBCNAFEJQDSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYACzgWKAgwIABABGGUgRyhhMA8=&rs=AOn4CLCtRDDxnKY4VKTqTVFys_jgZjtQTg", t1: 'Lindsey Stirling-Carol Of Bells', t2: 'infelix Ben  4.6M views 1year ago', img_url2: "https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(1).png?raw=true"}
//   // ]
//   return (
//     <>
//       <div className="main">

//         <div className="left">
//           <div className="top">
//             <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" className='hi' />
//             <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" className='he' />
//           </div>

//           <div className="first">
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="" /> Home</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt="" /> Explores</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt="" /> Shorts</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt="" /> Subscriptions</p>
//           </div>

//           <hr className='hw' />

//           <div className="second">
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt="" /> Library</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt="" /> History</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt="" /> Your Videos</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt="" /> Watch Later</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt="" /> Liked Videos</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt="" /> Show More</p>
//           </div>

//           <hr className='hw' />

//           <div className="third">
//             <h4>SUBSCRIPTIONS</h4>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt="" /> Nadir On The Go</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" /> Coke Studio Mumbai</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt="" /> MKHBD</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" /> Figma</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" alt="" /> ATC Android ToTo C...</p>
//             <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt="" /> Alux.com</p>
//           </div>
//         </div>

//         <div className="right">
//           <div className="section1">
//             <div className="mid1">
//               <div className="search">
//                 <p>Search</p>
//                 <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
//               </div>
//               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
//             </div>

//             <div className="last">
//               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" />
//               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" />
//               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" />
//               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true" alt="" />
//             </div>

//           </div>

//           <hr />

//           <div className="section2">
//             <p className='she'>All</p>
//             <p>Coke Studio</p>
//             <p>UX</p>
//             <p>Stray Kids</p>
//             <p>Books</p>
//             <p>Fitness</p>
//             <p>Sabrina Carpenter</p>
//             <p>Songs</p>
//             <p>Tour</p>
//             <p>Tech</p>
//           </div>

//           <hr />

//           <div className="section3">

//             {video.map((i, id) => (
//               <div className="box2">
//                 <img src={i.img_url1} alt="" />

//                 <div className="con1">
//                   <img src= {i.img_url2} alt="" />

//                   <div className="con2">
//                     <h5>{i.t1}</h5>
//                     <p>{i.t2}</p>
//                   </div>

//                 </div>

//               </div>

//             ))}

//           </div>


//         </div>
//       </div>
//     </>
//   )
// }

// export default App





// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
//   const [videos, setVideos] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedVideoId, setSelectedVideoId] = useState(null); // For selected video
//   const API_KEY = ''; // Add your API key here
//    // const API_KEY = 'AIzaSyAlpKYNNJKssnqtrTs6JZ-F6A88Vi4-2hw';

//   // Fetch videos whenever the searchQuery changes
//   useEffect(() => {
//     if (!searchQuery) return;

//     const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&q=${searchQuery}&key=${API_KEY}`;

//     fetch(API_URL)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const fetchedVideos = data.items.map((item) => ({
//           id: item.id.videoId,
//           title: item.snippet.title,
//           channelTitle: item.snippet.channelTitle,
//           thumbnail: item.snippet.thumbnails.medium.url,
//         }));
//         setVideos(fetchedVideos);
//       })
//       .catch((error) => console.error('Error fetching data:', error));
//   }, [searchQuery]);

//   // Handle search form submission
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const input = document.getElementById('search-input').value;
//     setSearchQuery(input);
//   };

//   // Handle category click
//   const handleCategoryClick = (category) => {
//     setSearchQuery(category); // Update the search query
//     document.getElementById('search-input').value = category; // Update the input field
//   };

//   // Handle video click to show popup
//   const handleVideoClick = (videoId) => {
//     setSelectedVideoId(videoId);
//   };

//   return (
//     <div className="main">
//       {/* Sidebar */}
//       <div className="left">
//         <div className="top">
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
//             alt=""
//             className="hi"
//           />
//           <img
//             src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
//             alt=""
//             className="he"
//           />
//         </div>

//         <div className="first">
//           <p style={{ fontWeight: 600 }}>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true"
//               alt=""
//             />{' '}
//             Home
//           </p>
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true"
//               alt=""
//             />{' '}
//             Explores
//           </p>
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true"
//               alt=""
//             />{' '}
//             Shorts
//           </p>
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true"
//               alt=""
//             />{' '}
//             Subscriptions
//           </p>
//         </div>

//         <hr className="hw" />

//         <div className="second">
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true"
//               alt=""
//             />{' '}
//             Library
//           </p>
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true"
//               alt=""
//             />{' '}
//             History
//           </p>
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true"
//               alt=""
//             />{' '}
//             Your Videos
//           </p>
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true"
//               alt=""
//             />{' '}
//             Watch Later
//           </p>
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true"
//               alt=""
//             />{' '}
//             Liked Videos
//           </p>
//           <p>
//             <img
//               src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true"
//               alt=""
//             />{' '}
//             Show More
//           </p>
//         </div>
//         <hr className='hw' />

//          <div className="third">
//            <h4>SUBSCRIPTIONS</h4>
//            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt="" /> Nadir On The Go</p>
//            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" /> Coke Studio Mumbai</p>
//            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt="" /> MKHBD</p>
//            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" /> Figma</p>
//            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt="" /> Alux.com</p>
//            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" alt="" /> ATC Android ToTo C...</p>
//          </div>
//       </div>

//       {/* Main Content */}
//       <div className="right">
//         <div className="section1">
//           <div className="mid1">
//             <form onSubmit={handleSearch}>
//               <input
//                 type="text"
//                 id="search-input"
//                 placeholder="Search"
//                 className="search-box"
//               />
//               <button type="submit">
//                 <img
//                   src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
//                   alt="Search"
//                 />
//               </button>
//             </form>
//           </div>
//         </div>

//         <hr />

//         {/* Video Categories */}
//         <div className="section2">
//           {[
//             'All',
//             'Coke Studio',
//             'UX',
//             'Stray Kids',
//             'Books',
//             'Fitness',
//             'Sabrina Carpenter',
//             'Songs',
//             'Tour',
//             'Tech',
//           ].map((category) => (
//             <p
//               key={category}
//               className="category"
//               onClick={() => handleCategoryClick(category)}
//               style={{ cursor: 'pointer' }}
//             >
//               {category}
//             </p>
//           ))}
//         </div>

//         <hr />

//         {/* Video List */}
//         <div className="section3">
//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="box2"
//               onClick={() => handleVideoClick(video.id)} // Set selected video
//               style={{ cursor: 'pointer' }}
//             >
//               <img src={video.thumbnail} alt={video.title} />
//               <div className="con1">
//                 <div className="con2">
//                   <h5>{video.title}</h5>
//                   <p>{video.channelTitle}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Popup Overlay */}
//         {selectedVideoId && (
//           <div className="video-popup">
//             <div className="video-popup-content">
//               <button className="close-button" onClick={() => setSelectedVideoId(null)}>
//                 ✖
//               </button>
//               <iframe
//                 src={`https://www.youtube.com/embed/${selectedVideoId}`}
//                 title="YouTube Video Player"
//                 style={{
//                   width: '80vw',
//                   height: '450px',
//                   border: 'none',
//                 }}
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




import './App.css';
import { useState, useEffect } from 'react';

function App() {
  const [videos, setVideos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [activeSection, setActiveSection] = useState('Home');
  const [counter, setCounter] = useState(8);
  const API_KEY = ''; // Add your API key here

  useEffect(() => {
    if (!searchQuery) return;

    const API_URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=${counter}&q=${searchQuery}&key=${API_KEY}`;
    fetch(API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const fetchedVideos = data.items.map((item) => ({
          id: item.id.videoId,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          thumbnail: item.snippet.thumbnails.medium.url,
        }));
        setVideos(fetchedVideos);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, [searchQuery, counter]);

  const handleSidebarClick = (section) => {
    setActiveSection(section);
    if (section === 'Home') {
      setSearchQuery('trending');
    } else {
      setSearchQuery(section);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const input = document.getElementById('search-input').value;
    setSearchQuery(input);
    setActiveSection('Search Results');
  };

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
    <div className="main">
      {/* Sidebar */}
      <div className="left">
        <div className="top">
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true"
            alt=""
            className="hi"
          />
          <img
            src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true"
            alt=""
            className="he"
          />
        </div>

        <div className="first">
          {['Home', 'Explore', 'Shorts', 'Subscriptions'].map((section) => (
            <p
              key={section}
              onClick={() => handleSidebarClick(section)}
              style={{
                fontWeight: activeSection === section ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
            >
              <img
                src={`https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/${section.toLowerCase()}.png?raw=true`}
                alt=""
              />{' '}
              {section}
            </p>
          ))}
        </div>

        <hr className="hw" />

        <div className="second">
          {['Library', 'History', 'Your Videos', 'Watch Later', 'Liked Videos'].map((section) => (
            <p
              key={section}
              onClick={() => handleSidebarClick(section)}
              style={{
                fontWeight: activeSection === section ? 'bold' : 'normal',
                cursor: 'pointer',
              }}
            >
              <img
                src={`https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/${section.replace(
                  ' ',
                  '_'
                ).toLowerCase()}.png?raw=true`}
                alt=""
              />{' '}
              {section}
            </p>
          ))}
        </div>

        <hr className="hw" />

        <div className="third">
          <h4>SUBSCRIPTIONS</h4>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt="" /> Nadir On The Go</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" /> Coke Studio Mumbai</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt="" /> MKHBD</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" /> Figma</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt="" /> Alux.com</p>
          <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" alt="" /> ATC Android ToTo C...</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="right">
        <div className="section1">
          <div className="mid1">
            <form onSubmit={handleSearch}>
              <input
                type="text"
                id="search-input"
                placeholder="Search"
                className="search-box"
              />
              <button type="submit">
                <img
                  src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true"
                  alt="Search"
                />
              </button>
            </form>
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/mic.png?raw=true" alt="" />
          </div>

          <div className="last">
               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/create.png?raw=true" alt="" />
               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/more.png?raw=true" alt="" />
               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/bell.png?raw=true" alt="" />
               <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%204%20(4).png?raw=true" alt="" />
             </div>
        </div>

        <hr />

        <div className="section2">
           {[
             'All',
             'Coke Studio',
             'UX',
             'Stray Kids',
             'Books',
             'Fitness',
             'Sabrina Carpenter',
             'Songs',
             'Tour',
             'Tech',
           ].map((category) => (
             <p
               key={category}
               className="category"
               onClick={() => handleCategoryClick(category)}
               style={{ cursor: 'pointer' }}
             >
               {category}
             </p>
           ))}
         </div>

         <hr />

        <h2>{activeSection}</h2>

        <div className="section3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="box2"
              onClick={() => handleVideoClick(video.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={video.thumbnail} alt={video.title} />
              <div className="con1">
                <div className="con2">
                  <h5>{video.title}</h5>
                  <p>{video.channelTitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedVideoId && (
          <div className="video-popup">
            <div className="video-popup-content">
              <button className="close-button" onClick={() => setSelectedVideoId(null)}>
                ✖
              </button>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideoId}`}
                title="YouTube Video Player"
                style={{
                  width: '80vw',
                  height: '450px',
                  border: 'none',
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}

        <div className="btn1">
          <button onClick={() => {
            setCounter(12);
          }}>12</button>

          <button onClick={() => {
            setCounter(16);
          }}>16</button>

          <button onClick={() => {
            setCounter(20);
          }}>20</button>

          <button onClick={() => {
            setCounter(24);
          }}>24</button>

          <button onClick={() => {
            setCounter(28);
          }}>28</button>
        </div>
      </div>
    </div>
  );
}

export default App;

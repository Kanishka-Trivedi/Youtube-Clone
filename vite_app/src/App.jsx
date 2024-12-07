import './App.css'

function App() {
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
  return (
    <>
      <div className="main">

        <div className="left">
          <div className="top">
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/hambarger.png?raw=true" alt="" className='hi' />
            <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Youtube%20logo.png?raw=true" alt="" className='he' />
          </div>

          <div className="first">
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/home.png?raw=true" alt="" /> Home</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/explore.png?raw=true" alt="" /> Explores</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/shorts.png?raw=true" alt="" /> Shorts</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/subscription.png?raw=true" alt="" /> Subscriptions</p>
          </div>

          <hr className='hw' />

          <div className="second">
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/library.png?raw=true" alt="" /> Library</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/history.png?raw=true" alt="" /> History</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/your_video.png?raw=true" alt="" /> Your Videos</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/watch_later.png?raw=true" alt="" /> Watch Later</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/liked.png?raw=true" alt="" /> Liked Videos</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/down_arrow.png?raw=true" alt="" /> Show More</p>
          </div>

          <hr className='hw' />

          <div className="third">
            <h4>SUBSCRIPTIONS</h4>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201.png?raw=true" alt="" /> Nadir On The Go</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(1).png?raw=true" alt="" /> Coke Studio Mumbai</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(2).png?raw=true" alt="" /> MKHBD</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(3).png?raw=true" alt="" /> Figma</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(4).png?raw=true" alt="" /> ATC Android ToTo C...</p>
            <p><img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/Ellipse%201%20(5).png?raw=true" alt="" /> Alux.com</p>
          </div>
        </div>

        <div className="right">
          <div className="section1">
            <div className="mid1">
              <div className="search">
                <p>Search</p>
                <img src="https://github.com/PatelNeelMahesh/frontend_tasks/blob/main/02.youtube-clone/assets/search.png?raw=true" alt="" />
              </div>
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
            <p className='she'>All</p>
            <p>Coke Studio</p>
            <p>UX</p>
            <p>Stray Kids</p>
            <p>Books</p>
            <p>Fitness</p>
            <p>Sabrina Carpenter</p>
            <p>Songs</p>
            <p>Tour</p>
            <p>Tech</p>
          </div>

          <hr />

          <div className="section3">
           
            {data1.map((i, id) => (
              <div className="box2">
                <img src={i.img_url1} alt="" />

                <div className="con1">
                  <img src= {i.img_url2} alt="" />

                  <div className="con2">
                    <h5>{i.t1}</h5>
                    <p>{i.t2}</p>
                  </div>

                </div>

              </div>

            ))}
            
          </div>


        </div>
      </div>
    </>
  )
}

export default App
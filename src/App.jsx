import React, {useState} from 'react'; //加上 {useState}
import './App.css';
import { inspirationData } from './data'; // 引入刚才写的假数据

function App() {
    //1. 创建一个叫searchTerm的变量，用来记用户打了什么字
    // setSearchTerm是用来修改这个字的‘手把’
    const [searchTerm, setSearchTerm] = useState("");
    
    // 2.逻辑过滤；只留下标题包含用户输入文字的卡片
    const filteredData = inspirationData.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
);

  return (
    <div className="app-container">
      <header>
        <h1>My Inspiration Gallery</h1>
        <p>Curated design inspiration for my next project</p>
        {/* 第三步： 把搜索框画出来 */}

        <div className="search-box">
            <input
              type="text"
              placeholder="Search inspiration..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} // 关键：打字时更新数据
            />  
        </div>
      </header>

      <div className="gallery-grid">
        {/* 这里是 React 的魔法：把数组里的每个对象映射成 HTML (一开始）*/}
        {/* 注意：这里要把inspirationData 换成过滤的 filteredData */}

        {/*inspirationData.map((item) => (*/}

        {filteredData.map((item) => (
          <div key={item.id} className="gallery-card">
            <div className="image-wrapper">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="card-info">
              <span>{item.category}</span>
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

       {/* 如果搜索不到东西，给个提示 */}
       {filteredData.length === 0 && <p className="no-results">Oops ! No inspiration found.</p>}
    

    </div>
  );
}
   


export default App;
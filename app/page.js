'use client';
export default function Home() {
  return (
    <>
      <header className="p-8 bg-gray-50 flex flex-col items-center justify-center border-b border-gray-200">
        <h1 className="text-4xl font-bold text-center text-green-600">HI 我叫Sherri</h1>
        <h2 className="text-2xl text-center mt-2">我是一個前端工程師</h2>
      <div className="mt-4">
        <a
          href="/about"
          className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          關於本站
        </a>
      </div>
      </header>
      <section className="p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">作品專區</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/images/photo1.jpg" 
              alt="Project 1" 
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-green-600">智慧家居控制系統</h3>
              <p className="text-gray-600">
                運用React開發的智慧家居控制介面，整合IoT設備管理，提供直觀的使用者體驗與即時監控功能。
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/images/photo2.jpg" 
              alt="Project 2"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-green-600">電子商務平台</h3>
              <p className="text-gray-600">
                基於Next.js打造的現代電商網站，具備響應式設計、購物車功能與支付整合，提供流暢的購物體驗。
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img 
              src="/images/photo3.jpg" 
              alt="Project 3"
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2 text-green-600">天氣預報應用</h3>
              <p className="text-gray-600">
                結合氣象API的即時天氣資訊應用，提供精準預報、互動式地圖與客製化通知功能。
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="p-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">關於我</h2>
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-48 h-48 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src="/images/profile.jpg"
                  alt="Sherri's profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-lg text-gray-700 mb-4">
                  嗨！我是Sherri，一位充滿熱情的前端工程師，擁有3年的實務開發經驗。我專注於創建直觀且具有吸引力的使用者介面，善於運用現代前端技術架構來實現優秀的網頁體驗。
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  我精通React、Next.js和TypeScript，並且對UI/UX設計有深入的理解。在工作中，我特別注重程式碼品質和效能優化，同時也熱衷於學習新技術。
                </p>
                <div className="flex gap-4">
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">React</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">Next.js</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">TypeScript</span>
                  <span className="px-3 py-1 bg-green-100 text-green-600 rounded-full">TailwindCSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">聯絡資訊</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <span>(02) 2345-6789</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <span>contact@sherritech.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span>台北市信義區松仁路100號 20樓</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">公司資訊</h3>
              <p className="text-gray-300">
                晨曦科技有限公司<br />
                統一編號：12345678<br />
                營業時間：週一至週五 9:00-18:00
              </p>
            </div>

            <div className="md:col-span-2">
              <h3 className="text-xl font-semibold mb-4">關於我們</h3>
              <p className="text-gray-300">
                晨曦科技致力於提供最優質的網頁開發服務，我們的團隊擁有豐富的經驗，能為客戶打造符合需求的完美解決方案。
              </p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2024 晨曦科技有限公司. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

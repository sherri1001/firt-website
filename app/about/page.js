'use client';
export default function About() {
  return (
    <>
      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">關於本站</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <p className="text-lg text-gray-700 mb-4">
            這是我的個人作品集網站，展示了我作為前端工程師的專業技能和項目經驗。網站使用 Next.js 和 TailwindCSS 建構，
            採用現代化的響應式設計，確保在各種設備上都能提供最佳的瀏覽體驗。
          </p>
          
          <p className="text-lg text-gray-700 mb-4">
            在這裡，您可以了解我的技術專長、查看我完成的專案作品，以及獲取我的聯絡方式。我致力於用最新的網頁技術，
            創造直觀且具有吸引力的使用者介面。
          </p>
        </div>

        <div className="text-center">
          <a 
            href="/" 
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            返回首頁
          </a>
        </div>
      </div>
    </>
  );
}

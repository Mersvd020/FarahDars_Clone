import Cup from "../../assets/pic/landing/cup.svg"

const Leaderboard = () => {
  const leaderboardData = [
    { rank: 1, name: 'میلاد ظاهری، سیده', score: '۲۰,۲۵۳', icon: '⭐' },
    { rank: 2, name: 'مهدی شفیعی', score: '۱۴,۳۶۳', icon: '⭐' },
    { rank: 3, name: 'مجید ترابی', score: '۸,۱۳۹', icon: '🥉' },
    { rank: 4, name: 'سجاد سرمدی', score: '۶,۶۵۱', icon: '' },
    { rank: 5, name: 'مجتبی تویدی', score: '۶,۳۰۳', icon: '' }
  ];

  const getRowColor = (rank:number):string => {
    if (rank === 1) return 'bg-amber-100';
    if (rank === 2) return 'bg-gray-100';
    if (rank === 3) return 'bg-orange-100';
    return 'bg-white';
  };

  return (
    <div  className="w-full bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 rounded-3xl p-8 md:p-12 relative overflow-hidden min-h-[400px]">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
        
        <div className="w-full md:w-1/2 text-white text-right space-y-6">
        
          <div className="flex justify-start mb-6">
            <div className="w-32 h-32 flex items-center justify-center">
              <img  src={Cup} className="w-full h-full " />
            </div>
          </div>

      
          <h2 className="text-[18px] font-bold leading-relaxed">           
           دانشجوی فعال فرادرس باش و امتیاز کسب کن
          </h2>

          
          <p className="text-[20px] leading-relaxed opacity-90">
           یادگیری در فرادرس فقط یک مسیر شخصی نیست؛ در این بخش، رتبه‌بندی لحظه‌ای فعال‌ترین فرادرسی‌‌ها نمایش داده می‌شود
          </p>

          
          <button className="mt-6 bg-white text-blue-800 px-8 py-3 rounded-xl  text-[15px] hover:bg-blue-50">
            اطلاعات بیشتر
          </button>
        </div>

        <div className="w-full md:w-[500px] bg-white rounded-2xl shadow-2xl p-6">
          <div className="space-y-3">
            {leaderboardData.map((item) => (
              <div
                key={item.rank}
                className={`${getRowColor(item.rank)} rounded-xl p-4 flex items-center justify-between transition-all hover:scale-[1.02] cursor-pointer`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-lg font-bold text-gray-700 w-6">{item.rank}</span>
                  <span className="text-base font-medium text-gray-800">{item.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  {item.icon && <span className="text-xl">{item.icon}</span>}
                  <span className="text-sm text-gray-600">امتیاز</span>
                  <span className="text-base font-bold text-gray-800">{item.score}</span>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>
    </div>
  );
};

export default Leaderboard;



const NewsCard = (props ={}) => {
    const {news} = props || {}
    return (
      <div className="card bg-base-100 shadow-xl p-4 border border-gray-200">
        <div className="flex items-center gap-4">
          <img
            src={news.author.img}
            alt={news.author.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">{news.author.name}</h2>
            <p className="text-sm text-gray-500">{news.author.published_date}</p>
          </div>
        </div>
        <h3 className="text-xl font-bold mt-3">{news.title}</h3>
        <img
          src={news.image_url}
          alt={news.title}
          className="w-full h-48 object-cover rounded-lg mt-3"
        />
        <p className="text-gray-600 mt-3">
          {news.details.length > 100 ? news.details.slice(0, 100) + "..." : news.details}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-1">
            <span className="text-yellow-500 text-lg">⭐</span>
            <span className="font-semibold">{news.rating.number}</span>
          </div>
          <span className="text-gray-500 text-sm">👁️ {news.total_view}</span>
        </div>
        <button className="btn btn-primary w-full mt-4">Read More</button>
      </div>
    );
  };
  
  export default NewsCard;
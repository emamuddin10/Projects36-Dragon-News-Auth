import { useLoaderData } from "react-router-dom";
import NewsCard from "../components/NewsCard";


const CategoryNews = () => {
    const {data: allNews} = useLoaderData()
    console.log(allNews)
    return (
        <div>
            <h1 className="font-bold">Dragon News Home</h1>
            <h1 className="font-semibold">{allNews.length} Category News Here</h1>
            <div>
                
                {
                    allNews.map(news => <NewsCard news={news} key={news._id}> </NewsCard>)
                }
            </div>

        </div>
    );
};

export default CategoryNews;
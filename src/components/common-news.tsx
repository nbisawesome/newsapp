import NewsCardList from "./NewsCardList";

const CommonNews = () => {
      return (
        <>
        <NewsCardList   newsSection="Latest" />
        <NewsCardList category = 'entertainment' newsSection="Entertainment" />
        <NewsCardList category = 'technology' newsSection="Tech" />
        <NewsCardList category = 'general' newsSection="General" />
        <NewsCardList category = 'health' newsSection="Health" />
        <NewsCardList category = 'science' newsSection="Science" />
        <NewsCardList category = 'sports' newsSection="Sports" />
        </>
    );
};
export default CommonNews;
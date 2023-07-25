![Shaquille O'Neal dunking on a great white shark](https://e1.pxfuel.com/desktop-wallpaper/374/223/desktop-wallpaper-cool-shark-great-white-shark-shark-fish-tiger-shark-lamnidae.jpg)

# NewsApi.org react demo
### React News app using NewsApi.org

This news app is an open-source news aggregation app that fetches data from the NewsApi.org API. This app aims to deliver the latest news articles to users with filtering options based on topics, languages, and countries.

**npm packages and why we used them**

**Bootstrap Icons:** An icon library from Bootstrap, providing a wide range of icons to enhance the UI of your React app.

**React Router DOM:** A library for navigation and routing in React apps, with components like BrowserRouter, Route, Link, and Switch to manage different views and navigation flow.

**React-Loader-Spinner:** A component library offering loading spinners and animations for indicating background processes, such as data fetching.

**Axios:** A popular JavaScript library for making HTTP requests in React apps, facilitating API interactions and data retrieval using a clean and straightforward syntax.

**This site was built using [NewsApi](https://newsapi.org/).**

:no_smoking:	:no_smoking:	:no_smoking:

 >"Life is Roblox" -  Dj Khaled 


## dynamic api call
```
useEffect(() => {
    const fetchNews = async () => {
        setLoading(true);
        try {
            const response = await axios.get(
                `https://newsapi.org/v2/top-headlines?country=${country}&language=${language}&category=${topic}&q=${searchTerm}&apiKey=${apiKey}`
            );

            // Update the articles and add the 'onSelect' property
            const articles = response.data.articles.map((article) => {
                return {
                    ...article,
                    onSelect: () => handleArticleSelect(article) // Passing the whole article object here
                };
            });

            setNews(articles);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };
    fetchNews();
}, [country, language, topic, searchTerm, apiKey]);
```
## context 
```
export const ArticleContext = createContext();

export const ArticleContextProvider = ({ children }) =>{
    const [selectedArticle, setSelectedArticle] = useState(null)

    return(
        <ArticleContext.Provider value={{selectedArticle, setSelectedArticle}}>
            {children}
        </ArticleContext.Provider>
    )
}
```

import './main.scss';
import { formatDate } from '../../helpers/moment';
import { useDispatch, useSelector } from 'react-redux';
import { news_1, news_2, news_3, news_4, news_5 } from '../../helpers/images';

function NewsItem() {
  const allNews = [
    {
      id: 1,
      date: '09-09-2022',
      image: news_1,
      title: 'Multiple European Countries to Limit Number of Russian Travelers',
      details:
        'According to The Associated Press, Estonia, Latvia, Lithuania and Poland have reached an agreement to implement a common regional approach with the “political will and firm intention to introduce national temporary measures for Russian citizens holding European Union visas.',
    },

    {
      id: 2,
      date: '09-09-2022',
      image: news_2,
      title: '20 Astro-Tourism Experiences Perfect for Fall',
      details:
        "There's no experience quite like looking up at a night sky full of brilliant stars. Whether you're hunting for a meteor shower or the Northern Lights, these destinations offer some of the best experiences for stargazing in the entire world, with many classified as International Dark Sky Parks, Communities, Reserves, Sanctuaries and more. ",
    },

    {
      id: 3,
      date: '08-09-2022',
      image: news_3,
      title: '3 Technological Trends in Tourism',
      details:
        'Over the last few decades, various economic sectors have undergone significant transformations worldwide. They have been supported by the multiple technological developments that have emerged and have managed to change how people around the world seek, acquire and enjoy their products and services.',
    },

    {
      id: 4,
      date: '07-09-2022',
      image: news_4,
      title: 'Air Travel Demand Remains Strong After Summer, Execs Affirm',
      details:
        "During Cowen's annual transportation conference Wednesday, executives of a couple of major U.S. airlines addressed the question of post-summer air travel demand, saying that, despite autumn’s approach, flight sales simply aren’t slowing down this year.",
    },

    {
      id: 5,
      date: '06-09-2022',
      image: news_5,
      title:
        "Lawmakers Seek Investigation Into Airlines' Use of Pandemic Funds",
      details:
        "Two House Democrats are calling for an investigation into airlines' use of federal pandemic funds meant for employee retention, asking if these funds were instead used for buyouts or early-retirement offers.",
    },
  ];

  const dispatch = useDispatch();

  dispatch({
    type: 'GET_NEWS',
    payload: allNews,
  });

  const news = useSelector((state) => state.news.news);

  return (
    <section className="news">
      <div className="container">
        <h3 className="news-title">Daily travel news</h3>
        <div className="news-list">
          {news?.map((item, i) => {
            return (
              <div key={i} className="news-list__item">
                <div className="news-list__img">
                  <img className="news-list__img--photo" src={item.image} />
                </div>
                <div className="news-list__info">
                  <p className="news-list__item--date">
                    {formatDate(item.date)}
                  </p>
                  <h5 className="title-h5">{item.title}</h5>
                  <p className="news-list__info--txt">{item.details}</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="btn">read more</button>
      </div>
    </section>
  );
}

export default NewsItem;

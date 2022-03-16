import MainPageSlider from './Content/MainPageSlider';
import MainPagePopular from './Content/MainPagePopular';

const MainPage = () => {

    return (
        <main className="content index">
            <MainPageSlider />
            <MainPagePopular />
        </main>
    )
}

export default MainPage;
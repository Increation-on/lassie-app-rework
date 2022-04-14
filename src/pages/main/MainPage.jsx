import MainPageSlider from './Content/MainPageSlider';
import MainPagePopular from './Content/MainPagePopular';
import SlickSlider from './Content/SlickSlider';
import AnotherSlider from './Content/AnotherSlider';

const MainPage = () => {

    return (
        <main className="content index">
            {/* <MainPageSlider /> */}
            <SlickSlider/>
            {/* <AnotherSlider/> */}
            <MainPagePopular />
        </main>
    )
}

export default MainPage;
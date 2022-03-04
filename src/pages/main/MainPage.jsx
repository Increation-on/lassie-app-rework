import styles from './styles/Main.module.css';
import MainPageSlider from './Content/MainPageSlider';
import MainPagePopular from './Content/MainPagePopular';

const MainPage = () => {

    return (
        <main className={`${styles.content} ${styles.index}`}>
            <MainPageSlider />
            <MainPagePopular />
        </main>
    )
}

export default MainPage;
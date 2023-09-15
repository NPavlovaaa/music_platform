import MainLayout from "../layouts/MainLayout";
import styles from "./MainPage.module.scss";

const Index = () => {

    return (
        <>
            <MainLayout>
                <div className={styles.main_block}>
                    <h1>Добро пожаловать!</h1>
                    <h3>Здесь собраны лучшие треки!</h3>
                </div>
            </MainLayout>
        </>
    )
}
export default Index
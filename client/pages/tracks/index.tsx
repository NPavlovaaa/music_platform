import MainLayout from "../../layouts/MainLayout";
import styles from "./Tracks.module.scss";
import {useRouter} from "next/router";
import {Box, Card, Grid, Button} from "@mui/material";
import {CloudUpload} from "@mui/icons-material";
import TrackList from "../../components/TrackList/TrackList";
import {ITrack} from "../../types/track";

const Index = () => {
    const router = useRouter();

    const tracks: ITrack[] = [
        {_id: 1, artist: 'Kreed', name: 'Track 1', text: 'SOme text', listens: 0, comments: [], picture: 'image/f8c2c121-d1ad-4c74-9c6e-a490a3ae7349.jpg', audio: 'audio/a20220a3-940c-4ead-91cd-256cb553fa64.mp3'},
        {_id: 2, artist: 'Kreed', name: 'Track 2', text: 'SOme text', listens: 0, comments: [], picture: 'image/f8c2c121-d1ad-4c74-9c6e-a490a3ae7349.jpg', audio: 'audio/a20220a3-940c-4ead-91cd-256cb553fa64.mp3'},
        {_id: 3, artist: 'Kreed', name: 'Track 3', text: 'SOme text', listens: 0, comments: [], picture: 'image/f8c2c121-d1ad-4c74-9c6e-a490a3ae7349.jpg', audio: 'audio/a20220a3-940c-4ead-91cd-256cb553fa64.mp3'},
    ]

    return (
        <>
            <MainLayout title={"Список треков - музыкальная площадка"}>
                <Grid container justifyContent='center'>
                    <Card className={styles.card}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between' alignItems='center'>
                                <h1>Список треков</h1>
                                <Button className={styles.button}
                                        variant="contained"
                                        startIcon={<CloudUpload />}
                                        onClick={() => router.push('/tracks/create')}
                                >
                                    Загрузить
                                </Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks}/>
                    </Card>
                </Grid>
            </MainLayout>
        </>
    )
}
export default Index
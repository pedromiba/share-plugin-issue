import { Share } from '@capacitor/share';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Home: React.FC = () => {
    const snapAndSharePhoto = async (): Promise<void> => {
        try {
            const photo: Photo = await Camera.getPhoto({
                quality: 80,
                source: CameraSource.Camera,
                resultType: CameraResultType.Uri,
            });

            if (photo.path) {
                await Share.share({
                    title: 'Example title',
                    text: 'example description',
                    url: 'https://www.google.com/',
                    dialogTitle: 'Example title',
                    files: [photo.path]
                });
            }
        } catch (error) { }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Example</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Example</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton onClick={() => snapAndSharePhoto()}>Snap and share photo</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Home;


import { useEffect } from 'react';
import S from '../styles/splash.style';
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MenuUrl } from '../../../shared/enums/MenuUrl.enum';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';

const Splash = () => {
    const { reset } = useNavigation<NavigationProp<ParamListBase>>();

    useEffect(() => {
        const findUser = async () => {
            const returnUserToken = await getAuthorizationToken();
            return returnUserToken;
        }

        const verifyLogin = async () => {
            // const returnUser = await request({
            //     url: URL_USER,
            //     method: MethodEnum.GET,
            //     saveGlobal: setUser
            // });

            const [returnUserToken] = await Promise.all([
                findUser(),
                new Promise<void>((r) => setTimeout(r, 3000))
            ])

            if(returnUserToken) {
                reset({
                    index: 0,
                    routes: [{ name: MenuUrl.HOME }]
                });
            } else {
                reset({
                    index: 0,
                    routes: [{ name: MenuUrl.LOGIN }]
                });
            }
        };

        verifyLogin();
    }, []);

    return (
        <S.ContainerSplash>
            <S.ImageLogo source={require('../../../assets/images/logo.jpg')} />
        </S.ContainerSplash>
    )
}

export default Splash;
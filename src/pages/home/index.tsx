import React from "react";
import config from '../../config/config'
import Card from '../../components/Card'
import Main from '../../components/Main'
import View from '../../components/View';
import Text from '../../components/Text';
import Input from "../../components/Input";

const Home: React.FC = () => {
    return (
        <Main
            backgroundImage=""
        >
            <Card>
                <Input />
                <View>
                    <Text>
                        {config.APP_NAME} Ensolarado
                    </Text>
                </View>
                <View>
                    <Text>
                        Amanhã
                    </Text>
                </View>
                <View>
                    <Text>
                        Depois de Amanhã
                    </Text>
                </View>
            </Card>
        </Main>
    )

}

export default Home;
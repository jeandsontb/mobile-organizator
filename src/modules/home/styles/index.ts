import styled from "styled-components/native";

export default {
    ContainerHomeHeader: styled.View`
        width: 100%;
        height: 60px;
        flex-direction: row;
        justify-content: flex-end;
        gap: 10px;
        padding-right: 10px;
        padding-top: 10px;
    `,
    BoxButtonLogout: styled.View`
        width: 50px;
        height: 50px;
    `,
    BoxButtonCreate: styled.View`
        width: 110px;
        height: 50px;
    `,
    BoxListContacts: styled.View`
        flex: 1;
        width: 100%;
        height: 100%;
        padding: 10px;
    `,
    BoxRegistersContacts: styled.View`
    flex: 1;
    width: 100%;
    height: 100%;
    padding: 10px;
    align-items: center;
    justify-content: center;
`

}
import styled from "styled-components/native";
import { theme } from "../../../shared/theme/theme";

export default {
    ContainerSplash: styled.View`
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.neutralTheme.white};
    `,
    ImageLogo: styled.Image`
        width: 200px;
        height: 200px;
        margin-bottom: 24px;
    `
}
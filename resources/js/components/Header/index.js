import React from "react";
import {HeaderWrapper} from "./styles";

const Header = React.memo(({children}) => {
//TODO переключение разделов по роутам
    return(
        <div>
            <HeaderWrapper>
                HOME
            </HeaderWrapper>
            {children}
        </div>

    )
})

export default Header

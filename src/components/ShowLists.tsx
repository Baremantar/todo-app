import React from "react";
import Box from '@mui/material/Box';


export default function ShowLists({ list, setList, handleDispatchTodos}: any) {

    return (
        <Box>
            {list ? list.map((item: any) => {
                return (
                    <div className={item.name} onClick={(event) => handleDispatchTodos(event)}> {item.name} </div>
                )
            }): <></>}

        </Box>
    );
}
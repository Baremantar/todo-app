import React from "react";
import Box from '@mui/material/Box';


export default function ShowLists({ list, setList, handleDispatchTodos}: any) {

    return (
        <Box>
            {list ? list.map((item: any) => {
                return (
                    <span className={item.name} onClick={(event) => handleDispatchTodos(event)} key={list.length}> {item.name} </span>
                )
            }): <></>}

        </Box>
    );
}
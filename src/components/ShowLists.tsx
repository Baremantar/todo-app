import Box from '@mui/material/Box';


export default function ShowLists({ list, handleDispatchTodos}: any) {
    return (
        <Box>
            {list ? list.map((item: any) => {             
                    return (
                        <span className={item.name} onClick={(event) => handleDispatchTodos(event)} key={item.key}> {item.name} </span>
                        )
                    }
                ): <></>}
        </Box>
    );
}
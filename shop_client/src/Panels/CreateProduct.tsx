import { Button, Stack, TextField } from "@mui/material"
import { ChangeEvent, useCallback, useState } from "react";
import { createProduct } from "../requests/createProduct";
import { getShops } from "../requests/getShops";
import { useShopsContext } from "../context";

export const CreateProduct = () => {
    const [name, setName] = useState("");

    const onChangeName = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setName(e.target.value);
    },[setName])

    const {setShops} = useShopsContext();

    const onCreate = useCallback(()=>{
        createProduct(name);
        setName("");
        getShops().then((res)=>{
            setShops(res);
        })
    },[name, setName]);

    return(
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            <TextField fullWidth label="Название" variant="outlined" value={name} onChange={onChangeName} />
            <Button variant="contained" onClick={onCreate} disabled={!name.length} >Создать товар</Button>
        </Stack>
    )
}
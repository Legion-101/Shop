import { Button, Stack, TextField } from "@mui/material"
import { ChangeEvent, useCallback, useState } from "react";
import { createShop } from "../requests/createShop";
import { useShopsContext } from "../context";
import { getShops } from "../requests/getShops";

export const CreateShop = () => {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const {setShops} = useShopsContext();

    const onChangeName = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setName(e.target.value);
    },[setName])

    const onChangeAddress = useCallback((e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>)=>{
        setAddress(e.target.value);
    },[setName])

    const onCreate = useCallback(()=>{
        createShop(name, address);
        setName("");
        setAddress("");
        getShops().then((res)=>{
            setShops(res);
        })
    },[name, address, setName, setAddress]);

    return(
        <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={2}
        >
            <TextField key="shop-name" fullWidth label="Название" variant="outlined" value={name} onChange={onChangeName} />
            <TextField key="shop-address" fullWidth label="Адрес" variant="outlined" value={address} onChange={onChangeAddress} />
            <Button variant="contained" onClick={onCreate} disabled={!name.length || !address.length} >Создать магазин</Button>
        </Stack>
    )
}
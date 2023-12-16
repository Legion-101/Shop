import { Box, Modal, Typography } from "@mui/material"
import { IShop } from "../types";

export const styleModal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export const ModalGettingShop = ({open, shop, handleClose, summ}: {open: boolean, shop: IShop|null|undefined, handleClose:()=>void, summ?: number}) => {
    
    return(
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={styleModal}>
          <Typography id="modal-modal-title" variant="h5" component="h2" sx={{mb:2}}>
            Результат запроса:
          </Typography>
          {
            shop ?
            <>
                <Typography sx={{ fontSize: 14 }}>
                    ID: {shop.ID}
                </Typography>
                <Typography variant="h6" component="div">
                    "{shop.Name}"
                </Typography>
                <Typography variant="body2">
                    Адрес: {shop.Address}
                </Typography>
                {
                  summ ?
                  <Typography variant="body1">
                    Стоимость: {summ} р.
                  </Typography>
                  : undefined
                }
            </>
            : <Typography>Магазин не найден</Typography>
          }
        </Box>
      </Modal>
    )
}
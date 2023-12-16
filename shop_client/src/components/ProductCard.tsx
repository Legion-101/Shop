import { Box, Card, CardContent, Typography } from "@mui/material"

export const ProductCard = ({name, count}: {name: string, count?: number}) => {
    return(
        <Box sx={{ width: "100%" }}>
        <Card variant="outlined">
            <CardContent>
                <Typography variant="body2">
                {name}: {count} шт.
                </Typography>
            </CardContent>
        </Card>
    </Box>
    )
}
import { Box, Stack, Typography } from '@pankod/refine-mui'
import { useNavigate } from '@pankod/refine-react-router-v6'
import { CustomButton } from 'components'

import { Add } from '@mui/icons-material'

const AllProperties = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography fontSize={25} fontWeight={700} color="#11142d">
          All Properties
        </Typography>
        <CustomButton
          title="Add Property"
          handleClick={() => navigate('/properties/create')}
          backgroundColor="#475be8"
          color="#fcfcfc"
          icon={<Add />}
        />
      </Stack>
    </Box>
  )
}

export default AllProperties

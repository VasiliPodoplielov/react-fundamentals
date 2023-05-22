import styled from '@emotion/styled';
import { Box, Paper } from '@mui/material';

export const ItemWrapper = styled(Paper)(() => ({
	backgroundColor: '#fff',
	padding: '8px',
}));

export const StyledBox = styled(Box)(() => ({
	textOverflow: 'ellipsis',
	whiteSpace: 'nowrap',
	overflow: 'hidden',
}));

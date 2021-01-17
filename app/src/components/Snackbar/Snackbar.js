import React from 'react';
import { SnackbarContainer, Message } from './styles'; 

export default function Snackbar({ message, status, active }) {
    return (
        <SnackbarContainer active={active} status={status}>
            <Message>{message}</Message>
        </SnackbarContainer>
    )
} 
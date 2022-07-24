/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
    Content,
    InputContainer,
    SearchSelect,
    SelectContainer,
} from './styled';
import { getUsers, filterUser } from '../../store/reducers/users/userSlice';
import useDebounce from '../../utils/useDebounceHook';

const options = [
    { value: 'all', label: 'All' },
    { value: 1, label: 'ID 1' },
    { value: 2, label: 'ID 2' },
    { value: 3, label: 'ID 3' },
    { value: 4, label: 'ID 4' },
    { value: 5, label: 'ID 5' },
    { value: 6, label: 'ID 6' },
];

function UserTableData() {
    const dispatch = useDispatch();
    const { data, filterUserList } = useSelector((state) => state);
    const [userID, setUserID] = useState(options[0]);
    const [currentItems, setCurrentItems] = useState();
    const [searchUserName, setSearchUserName] = useState('');
    const [searchUpdate, setSearchUpdate] = useState(false);
    const debouncedSearchTerm = useDebounce(searchUserName, 500);

    useEffect(() => {
        if (data.length < 1) {
            dispatch(getUsers());
        }
    }, [dispatch]);

    useEffect(() => {
        if (filterUserList) {
             const res = filterUserList;
             setCurrentItems(res);
        }
    }, [filterUserList]);

    useEffect(() => {
        if (debouncedSearchTerm || searchUpdate) {
            if (debouncedSearchTerm === '') {
                dispatch(filterUser(userID.value === 'all' ? { } : {  id: userID.value }));
            }
            else {
                dispatch(filterUser(userID.value === 'all' ? { search: debouncedSearchTerm }
                    : {  id: userID.value, search: debouncedSearchTerm }));
            }
        }
    }, [debouncedSearchTerm]);

    const userListByRole = (event) => {
        setUserID(event);
        if (searchUserName === '') {
            dispatch(filterUser(event.value === 'all' ? {} : { id: event.value }));
        }
        else {
            dispatch(filterUser(event.value === 'all' ? { search: searchUserName }
                : {  id: event.value, search: searchUserName }));
        }
    }
    const handleSearchByName = (event) => {
        const inputVal = event.target.value;
        !inputVal && setSearchUpdate(true);
        setSearchUserName(inputVal);
    };


    return (
        <Content>
            <SearchSelect>
                <SelectContainer>
                    <Select
                        options={options}
                        className={'select'}
                        onChange={userListByRole}
                        value={userID}
                    />
                </SelectContainer>
                <SelectContainer>
                    <InputContainer
                        placeholder='Search By UserName...'
                        value={searchUserName}
                        onChange={handleSearchByName}
                       />
                </SelectContainer>
            </SearchSelect>
            <Paper>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">User Name</TableCell>
                            <TableCell align="left">email</TableCell>
                            <TableCell align="left">Phone</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {currentItems && currentItems.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left">{row.id}</TableCell>
                                <TableCell align="left">{row.name}</TableCell>
                                <TableCell align="left">{row.username}</TableCell>
                                <TableCell align="left">{row.email}</TableCell>
                                <TableCell align="left">{row.phone}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Content >
    )
}

export default UserTableData

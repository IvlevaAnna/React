import React, {useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import {dataSelector, errorSelector, statusSelector} from "../../store/holidays/selectors";
import {getHoliday} from "../../store/holidays/actions";
import {Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";
import {Loader, Segment, Dimmer} from "semantic-ui-react";

export const Holidays = () => {
    const [isLoading, setIsLoading] = useState(true)
    const dispatch = useDispatch()
    const data = useSelector(dataSelector)
    const status = useSelector(statusSelector)
    const isError = useSelector(errorSelector)

    const getData = async () => {
        dispatch(getHoliday());
    };

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        setIsLoading(status === 1)
    }, [status])

    return (
        <div>
            {isError && <>
                <Button onClick={getData}>Refresh</Button>
                <h3>Error</h3>
            </>}
            {
                isLoading ? (
                        <Segment>
                            <Dimmer active inverted>
                                <Loader inverted>Loading</Loader>
                            </Dimmer>
                        </Segment>
                ) : (
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">Date</TableCell>
                                    <TableCell align="right">Local name</TableCell>
                                    <TableCell align="right">Name</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow
                                        key={item.name}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {item.date}
                                        </TableCell>
                                        <TableCell align="right">{item.localName}</TableCell>
                                        <TableCell align="right">{item.name}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )
            }
        </div>
    )
}
